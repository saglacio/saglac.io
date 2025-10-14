import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import RSS from 'rss'
import yaml from 'js-yaml'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_DIR = path.join(__dirname, '../data')
const OUT_DIR = path.join(__dirname, '../out')

// Load events
function loadEvents() {
  const eventsDir = path.join(DATA_DIR, 'io-events')
  const files = fs.readdirSync(eventsDir).filter((f) => f.endsWith('.yml'))

  const events = []

  for (const file of files) {
    const content = fs.readFileSync(path.join(eventsDir, file), 'utf-8')
    const event = yaml.load(content)
    event.slug = path.basename(file, '.yml')
    events.push(event)
  }

  return events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Load locations
function loadLocations() {
  const locationsDir = path.join(DATA_DIR, 'locations')
  const files = fs.readdirSync(locationsDir).filter((f) => f.endsWith('.yml'))

  const locations = new Map()

  for (const file of files) {
    const content = fs.readFileSync(path.join(locationsDir, file), 'utf-8')
    const location = yaml.load(content)
    const id = path.basename(file, '.yml')
    location.id = id
    locations.set(id, location)
  }

  return locations
}

// Load authors
function loadAuthors() {
  const authorsDir = path.join(DATA_DIR, 'authors')
  const files = fs.readdirSync(authorsDir).filter((f) => f.endsWith('.yml'))

  const authors = new Map()

  for (const file of files) {
    const content = fs.readFileSync(path.join(authorsDir, file), 'utf-8')
    const author = yaml.load(content)
    authors.set(author.id, author)
  }

  return authors
}

// Generate RSS feed
function generateRSS() {
  const siteUrl = 'https://saglac.io'
  const events = loadEvents()
  const locations = loadLocations()
  const authors = loadAuthors()

  const feed = new RSS({
    title: 'SagLac IO - Événements',
    description: 'Rencontres technologiques du Saguenay—Lac-St-Jean',
    feed_url: `${siteUrl}/rss.xml`,
    site_url: siteUrl,
    image_url: `${siteUrl}/logos/logo-512.png`,
    language: 'fr',
    copyright: `Copyright © 2013-${new Date().getFullYear()}. SagLacIO`,
  })

  for (const event of events) {
    const location = locations.get(event.location) || { name: event.location }
    const talks = event.talks || []

    const description = [
      event.description || '',
      location ? `\n\nLieu: ${location.name}` : '',
      talks.length > 0
        ? `\n\nPrésentations:\n${talks
            .map((t) => {
              const authorNames = (t.authors || [])
                .map((authorId) => authors.get(authorId)?.name || authorId)
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

  fs.writeFileSync(path.join(OUT_DIR, 'rss.xml'), feed.xml())
  console.log('✓ Generated rss.xml')
}

// Generate sitemap
function generateSitemap() {
  const siteUrl = 'https://saglac.io'

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${siteUrl}/faq</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${siteUrl}/archives</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${siteUrl}/about</loc>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${siteUrl}/contact</loc>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`

  fs.writeFileSync(path.join(OUT_DIR, 'sitemap.xml'), sitemap)
  console.log('✓ Generated sitemap.xml')
}

// Run
generateRSS()
generateSitemap()


