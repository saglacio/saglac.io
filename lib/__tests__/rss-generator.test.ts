import { describe, it, expect, vi } from 'vitest'
import { generateRSSFeed } from '../rss-generator'
import type { Event, Location, Author } from '../types'

// Mock data
const mockEvents: Event[] = [
  {
    slug: 'test-event-1',
    title: 'Premier événement test',
    date: '2024-12-01',
    location: 'test-location',
    description: 'Description du premier événement',
    event_url: 'https://facebook.com/events/123',
    talks: [
      {
        title: 'Présentation test',
        description: 'Une présentation de test',
        authors: [
          {
            id: 'testauthor',
            name: 'Test Author',
            twitter: 'testauthor',
          },
        ],
      },
    ],
  },
  {
    slug: 'test-event-2',
    title: 'Deuxième événement test',
    date: '2024-11-15',
    location: 'test-location',
  },
]

const mockLocations = new Map<string, Location>([
  [
    'test-location',
    {
      id: 'test-location',
      name: 'Test Venue',
      address: '123 Test St',
      url: 'https://testvenue.com',
    },
  ],
])

const mockAuthors = new Map<string, Author>([
  [
    'testauthor',
    {
      id: 'testauthor',
      name: 'Test Author',
      twitter: 'testauthor',
    },
  ],
])

describe('generateRSSFeed', () => {
  it('should generate valid RSS XML', () => {
    const xml = generateRSSFeed({
      siteUrl: 'https://saglac.io',
      events: mockEvents,
      locations: mockLocations,
      authors: mockAuthors,
    })

    expect(xml).toContain('<?xml version="1.0" encoding="UTF-8"?>')
    expect(xml).toContain('<rss')
    expect(xml).toContain('</rss>')
  })

  it('should include feed metadata', () => {
    const xml = generateRSSFeed({
      siteUrl: 'https://saglac.io',
      events: mockEvents,
      locations: mockLocations,
      authors: mockAuthors,
    })

    expect(xml).toContain('SagLac IO - Événements')
    expect(xml).toContain('Rencontres technologiques du Saguenay—Lac-St-Jean')
    expect(xml).toContain('<link>https://saglac.io</link>')
    expect(xml).toContain('fr')
    expect(xml).toContain('Copyright © 2013-')
  })

  it('should include event items in feed', () => {
    const xml = generateRSSFeed({
      siteUrl: 'https://saglac.io',
      events: mockEvents,
      locations: mockLocations,
      authors: mockAuthors,
    })

    expect(xml).toContain('Premier événement test')
    expect(xml).toContain('Deuxième événement test')
    expect(xml).toContain('Description du premier événement')
  })

  it('should include location in event description', () => {
    const xml = generateRSSFeed({
      siteUrl: 'https://saglac.io',
      events: mockEvents,
      locations: mockLocations,
      authors: mockAuthors,
    })

    expect(xml).toContain('Lieu: Test Venue')
  })

  it('should include talks and authors in event description', () => {
    const xml = generateRSSFeed({
      siteUrl: 'https://saglac.io',
      events: mockEvents,
      locations: mockLocations,
      authors: mockAuthors,
    })

    expect(xml).toContain('Présentations:')
    expect(xml).toContain('Présentation test par Test Author')
  })

  it('should include event URL in feed items', () => {
    const xml = generateRSSFeed({
      siteUrl: 'https://saglac.io',
      events: mockEvents,
      locations: mockLocations,
      authors: mockAuthors,
    })

    expect(xml).toContain('https://facebook.com/events/123')
  })

  it('should use archive URL when event_url is missing', () => {
    const eventsWithoutUrl = mockEvents.map((e) => ({ ...e, event_url: undefined }))
    const xml = generateRSSFeed({
      siteUrl: 'https://saglac.io',
      events: eventsWithoutUrl,
      locations: mockLocations,
      authors: mockAuthors,
    })

    expect(xml).toContain('https://saglac.io/archives#test-event-1')
  })

  it('should handle events without talks', () => {
    const xml = generateRSSFeed({
      siteUrl: 'https://saglac.io',
      events: [mockEvents[1]],
      locations: mockLocations,
      authors: mockAuthors,
    })

    expect(xml).toContain('Deuxième événement test')
    expect(xml).not.toContain('Présentations:')
  })

  it('should include GUID for each event', () => {
    const xml = generateRSSFeed({
      siteUrl: 'https://saglac.io',
      events: mockEvents,
      locations: mockLocations,
      authors: mockAuthors,
    })

    expect(xml).toContain('<guid isPermaLink="false">test-event-1</guid>')
    expect(xml).toContain('<guid isPermaLink="false">test-event-2</guid>')
  })

  it('should include publication dates', () => {
    const xml = generateRSSFeed({
      siteUrl: 'https://saglac.io',
      events: mockEvents,
      locations: mockLocations,
      authors: mockAuthors,
    })

    expect(xml).toContain('<pubDate>')
    expect(xml).toContain('2024')
  })

  it('should handle empty events array', () => {
    const xml = generateRSSFeed({
      siteUrl: 'https://saglac.io',
      events: [],
      locations: mockLocations,
      authors: mockAuthors,
    })

    expect(xml).toContain('<?xml version="1.0" encoding="UTF-8"?>')
    expect(xml).toContain('SagLac IO - Événements')
    expect(xml).not.toContain('Premier événement test')
  })

  it('should handle missing location data gracefully', () => {
    const eventsWithUnknownLocation = [
      {
        ...mockEvents[0],
        location: 'unknown-location',
      },
    ]

    const xml = generateRSSFeed({
      siteUrl: 'https://saglac.io',
      events: eventsWithUnknownLocation,
      locations: new Map(),
      authors: mockAuthors,
    })

    expect(xml).toContain('Lieu: unknown-location')
  })

  it('should generate consistent XML structure', () => {
    const xml = generateRSSFeed({
      siteUrl: 'https://saglac.io',
      events: mockEvents,
      locations: mockLocations,
      authors: mockAuthors,
    })

    // Verify XML structure
    expect(xml).toMatch(/<\?xml version="1.0" encoding="UTF-8"\?>/)
    expect(xml).toMatch(/<rss[^>]*>/)
    expect(xml).toMatch(/<channel>/)
    expect(xml).toMatch(/<\/channel>/)
    expect(xml).toMatch(/<\/rss>/)
  })
})

