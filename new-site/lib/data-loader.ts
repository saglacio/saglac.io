import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import type { Event, Location, Author, FAQSection, ResolvedEvent } from './types'

const DATA_DIR = path.join(process.cwd(), '..', 'data')

// Cache for data loading (build time only)
let authorsCache: Map<string, Author> | null = null
let locationsCache: Map<string, Location> | null = null

/**
 * Load all authors from YAML files
 */
export function loadAuthors(): Map<string, Author> {
  if (authorsCache) return authorsCache

  const authorsDir = path.join(DATA_DIR, 'authors')
  const files = fs.readdirSync(authorsDir).filter((f) => f.endsWith('.yml'))

  const authors = new Map<string, Author>()

  for (const file of files) {
    const content = fs.readFileSync(path.join(authorsDir, file), 'utf-8')
    const author = yaml.load(content) as Author
    authors.set(author.id, author)
  }

  authorsCache = authors
  return authors
}

/**
 * Load all locations from individual YAML files
 */
export function loadLocations(): Map<string, Location> {
  if (locationsCache) return locationsCache

  const locationsDir = path.join(DATA_DIR, 'locations')
  const files = fs.readdirSync(locationsDir).filter((f) => f.endsWith('.yml'))

  const locations = new Map<string, Location>()

  for (const file of files) {
    const content = fs.readFileSync(path.join(locationsDir, file), 'utf-8')
    const location = yaml.load(content) as Location
    const id = path.basename(file, '.yml')
    location.id = id
    locations.set(id, location)
  }

  locationsCache = locations
  return locations
}

/**
 * Load all events from YAML files
 */
export function loadEvents(): Event[] {
  const eventsDir = path.join(DATA_DIR, 'io-events')
  const files = fs.readdirSync(eventsDir).filter((f) => f.endsWith('.yml'))

  const events: Event[] = []

  for (const file of files) {
    const content = fs.readFileSync(path.join(eventsDir, file), 'utf-8')
    const event = yaml.load(content) as Event
    event.slug = path.basename(file, '.yml')
    events.push(event)
  }

  // Sort by date (newest first)
  return events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

/**
 * Load FAQ data
 */
export function loadFAQ(): FAQSection[] {
  const faqPath = path.join(DATA_DIR, 'faq.yml')
  const content = fs.readFileSync(faqPath, 'utf-8')
  return yaml.load(content) as FAQSection[]
}

/**
 * Resolve an event with full author and location data
 */
export function resolveEvent(event: Event): ResolvedEvent {
  const authors = loadAuthors()
  const locations = loadLocations()

  return {
    ...event,
    location:
      locations.get(event.location) ||
      ({
        id: event.location,
        name: event.location,
        address: '',
      } as Location),
    talks: event.talks?.map((talk) => ({
      ...talk,
      authors: talk.authors.map(
        (authorId) =>
          authors.get(authorId) ||
          ({
            id: authorId,
            name: authorId,
          } as Author)
      ),
    })),
  }
}

/**
 * Get the next upcoming event
 */
export function getNextEvent(): ResolvedEvent | null {
  const events = loadEvents()
  const now = new Date()

  const upcomingEvents = events.filter((e) => new Date(e.date) >= now)

  if (upcomingEvents.length === 0) return null

  // Return the closest upcoming event (last in filtered array since sorted DESC)
  const nextEvent = upcomingEvents[upcomingEvents.length - 1]
  return resolveEvent(nextEvent)
}

/**
 * Get author avatar URL
 */
export function getAuthorAvatar(author: Author): string {
  if (author.avatar) return author.avatar
  if (author.github) return `https://avatars.githubusercontent.com/${author.github}`
  if (author.twitter) return `https://unavatar.io/twitter/${author.twitter}`
  return '/images/default_user_icon.png'
}


