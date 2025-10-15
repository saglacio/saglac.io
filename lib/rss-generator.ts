import RSS from 'rss'
import type { ResolvedEvent } from './types'

export interface RSSGeneratorOptions {
  siteUrl: string
  events: ResolvedEvent[]
}

/**
 * Generates RSS XML feed from events data
 * @param options - Configuration and data for RSS generation
 * @returns RSS XML string
 */
export function generateRSSFeed(options: RSSGeneratorOptions): string {
  const { siteUrl, events } = options

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
      location ? `\n\nLieu: ${location.name}` : '',
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

