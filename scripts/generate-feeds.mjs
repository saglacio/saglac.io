#!/usr/bin/env node
/**
 * Generate RSS feed and sitemap for static Next.js export
 * 
 * This script is run after `next build` to generate the RSS feed and sitemap
 * because Next.js metadata API (sitemap.ts) doesn't work with static export in this version.
 * 
 * Uses the built Next.js server bundle for data loading to avoid TypeScript issues.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import yaml from 'js-yaml'
import RSS from 'rss'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PROJECT_ROOT = path.join(__dirname, '..')
const DATA_DIR = path.join(PROJECT_ROOT, 'data')
const OUT_DIR = path.join(PROJECT_ROOT, 'out')

// Ensure output directory exists
if (!fs.existsSync(OUT_DIR)) {
  console.error('❌ Output directory not found. Run `next build` first.')
  process.exit(1)
}

// Load events
function loadEvents() {
  const eventsDir = path.join(DATA_DIR, 'io-events')
  const files = fs.readdirSync(eventsDir).filter((f) => f.endsWith('.yml'))

  const events = []

  for (const file of files) {
    const content = fs.readFileSync(path.join(eventsDir, file), 'utf-8')
    const event = yaml.load(content)
    event.slug = path.basename(file, '.yml')
    
    // Resolve location
    if (event.location && typeof event.location === 'string') {
      const locationFile = path.join(DATA_DIR, 'locations', `${event.location}.yml`)
      if (fs.existsSync(locationFile)) {
        event.location = yaml.load(fs.readFileSync(locationFile, 'utf-8'))
        event.location.id = event.location
      }
    }
    
    // Resolve authors for talks
    if (event.talks && Array.isArray(event.talks)) {
      for (const talk of event.talks) {
        if (talk.authors && Array.isArray(talk.authors)) {
          talk.authors = talk.authors.map((authorId) => {
            const authorFile = path.join(DATA_DIR, 'authors', `${authorId}.yml`)
            if (fs.existsSync(authorFile)) {
              const author = yaml.load(fs.readFileSync(authorFile, 'utf-8'))
              return author
            }
            return { id: authorId, name: authorId }
          })
        }
      }
    }
    
    events.push(event)
  }

  return events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Generate RSS feed
function generateRSS(events) {
  const siteUrl = 'https://saglac.io'

  const feed = new RSS({
    title: 'SagLac IO - Événements',
    description: 'Rencontres technologiques du Saguenay—Lac-St-Jean',
    feed_url: `${siteUrl}/rss.xml`,
    site_url: siteUrl,
    image_url: `${siteUrl}/images/logos/SaglacIO_Logo_Meetups_Inverted.png`,
    language: 'fr',
    copyright: `Copyright © 2013-${new Date().getFullYear()}. SagLacIO`,
    pubDate: new Date(),
  })

  for (const event of events) {
    const location = event.location
    const talks = event.talks || []

    const description = [
      event.description || '',
      location && location.name ? `\n\nLieu: ${location.name}` : '',
      talks.length > 0
        ? `\n\nPrésentations:\n${talks
            .map((t) => {
              const authorNames = (t.authors || [])
                .map((author) => author.name)
                .join(', ')
              return `- ${t.title} par ${authorNames}`
            })
            .join('\n')}`
        : '',
    ].join('')

    feed.item({
      title: event.title,
      description,
      url: event.event_url || `${siteUrl}/archives#${event.slug}`,
      date: new Date(event.date),
      guid: event.slug,
    })
  }

  return feed.xml()
}

// Generate sitemap
function generateSitemap(events) {
  const siteUrl = 'https://saglac.io'

  const staticPages = [
    { url: `${siteUrl}/`, priority: 1.0, changefreq: 'weekly' },
    { url: `${siteUrl}/about`, priority: 0.8, changefreq: 'monthly' },
    { url: `${siteUrl}/archives`, priority: 0.9, changefreq: 'weekly' },
    { url: `${siteUrl}/faq`, priority: 0.7, changefreq: 'monthly' },
    { url: `${siteUrl}/contact`, priority: 0.6, changefreq: 'monthly' },
    { url: `${siteUrl}/qrcode`, priority: 0.3, changefreq: 'yearly' },
  ]

  const urlEntries = staticPages.map(page => 
    `  <url>
    <loc>${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`
  ).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`
}

// Main execution
console.log('📡 Loading events...')
const events = loadEvents()
console.log(`✓ Loaded ${events.length} events`)

// Generate RSS feed
console.log('📰 Generating RSS feed...')
const rssXml = generateRSS(events)
const rssPath = path.join(OUT_DIR, 'rss.xml')
fs.writeFileSync(rssPath, rssXml, 'utf-8')
console.log(`✓ Generated ${rssPath}`)

// Generate sitemap
console.log('🗺️  Generating sitemap...')
const sitemapXml = generateSitemap(events)
const sitemapPath = path.join(OUT_DIR, 'sitemap.xml')
fs.writeFileSync(sitemapPath, sitemapXml, 'utf-8')
console.log(`✓ Generated ${sitemapPath}`)

console.log('✅ Feed generation complete!')
