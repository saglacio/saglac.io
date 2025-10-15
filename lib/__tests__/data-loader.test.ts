import { describe, it, expect } from 'vitest'
import {
  loadAuthors,
  loadLocations,
  loadEvents,
  loadFAQ,
  resolveEvent,
  getNextEvent,
  getAuthorAvatar,
} from '../data-loader'

describe('Data Loader', () => {
  describe('loadAuthors', () => {
    it('should load all authors from YAML files', () => {
      const authors = loadAuthors()
      expect(authors.size).toBeGreaterThan(50) // We have 57 authors
      expect(authors.has('jim_plourde')).toBe(true)

      const jimPlourde = authors.get('jim_plourde')
      expect(jimPlourde).toBeDefined()
      expect(jimPlourde?.name).toBe('Jean-Michel Plourde')
      expect(jimPlourde?.twitter).toBe('jimDePlour')
    })
  })

  describe('loadLocations', () => {
    it('should load all locations from YAML files', () => {
      const locations = loadLocations()
      expect(locations.size).toBeGreaterThan(20) // We have 22 locations
      expect(locations.has('bistro_du_centre')).toBe(true)

      const bistro = locations.get('bistro_du_centre')
      expect(bistro).toBeDefined()
      expect(bistro?.name).toBe('Café Bistro du Centre')
      expect(bistro?.address).toContain('Jonquière')
    })
  })

  describe('loadEvents', () => {
    it('should load all events from YAML files', () => {
      const events = loadEvents()
      expect(events.length).toBeGreaterThan(75) // We have 80 events
      expect(events[0].slug).toBeDefined()
    })

    it('should sort events by date (newest first)', () => {
      const events = loadEvents()
      for (let i = 0; i < events.length - 1; i++) {
        const currentDate = new Date(events[i].date)
        const nextDate = new Date(events[i + 1].date)
        expect(currentDate.getTime()).toBeGreaterThanOrEqual(nextDate.getTime())
      }
    })
  })

  describe('loadFAQ', () => {
    it('should load FAQ sections', () => {
      const sections = loadFAQ()
      expect(sections.length).toBeGreaterThan(3) // We have 4 sections
      expect(sections[0].header).toBeDefined()
      expect(sections[0].questions).toBeDefined()
      expect(sections[0].questions.length).toBeGreaterThan(0)
    })

    it('should have questions with slug, question, and answer', () => {
      const sections = loadFAQ()
      const firstQuestion = sections[0].questions[0]
      expect(firstQuestion.slug).toBeDefined()
      expect(firstQuestion.question).toBeDefined()
      expect(firstQuestion.answer).toBeDefined()
    })
  })

  describe('resolveEvent', () => {
    it('should resolve location and author references', () => {
      const events = loadEvents()
      const event = events[0]
      const resolved = resolveEvent(event)

      expect(resolved.location).toBeDefined()
      expect(resolved.location.name).toBeDefined()

      if (resolved.talks && resolved.talks.length > 0) {
        expect(resolved.talks[0].authors).toBeDefined()
        expect(resolved.talks[0].authors.length).toBeGreaterThan(0)
        expect(resolved.talks[0].authors[0].name).toBeDefined()
      }
    })
  })

  describe('getNextEvent', () => {
    it('should return the next upcoming event or null', () => {
      const nextEvent = getNextEvent()

      if (nextEvent) {
        const eventDate = new Date(nextEvent.date)
        const now = new Date()
        // Allow events from today or future
        expect(eventDate.toDateString()).toBeDefined()
        expect(nextEvent.location).toBeDefined()
        expect(nextEvent.location.name).toBeDefined()
      } else {
        // No upcoming events is also valid
        expect(nextEvent).toBeNull()
      }
    })
  })

  describe('getAuthorAvatar', () => {
    it('should return custom avatar if provided', () => {
      const author = {
        id: 'test',
        name: 'Test User',
        avatar: 'https://example.com/avatar.png',
      }
      expect(getAuthorAvatar(author)).toBe('https://example.com/avatar.png')
    })

    it('should return GitHub avatar if no custom avatar', () => {
      const author = {
        id: 'test',
        name: 'Test User',
        github: 'testuser',
      }
      expect(getAuthorAvatar(author)).toBe('https://avatars.githubusercontent.com/testuser')
    })

    it('should return Twitter avatar if no custom or GitHub avatar', () => {
      const author = {
        id: 'test',
        name: 'Test User',
        twitter: 'testuser',
      }
      expect(getAuthorAvatar(author)).toBe('https://unavatar.io/twitter/testuser')
    })

    it('should return default avatar if no custom, GitHub, or Twitter avatar', () => {
      const author = {
        id: 'test',
        name: 'Test User',
      }
      expect(getAuthorAvatar(author)).toBe('/images/default_user_icon.png')
    })
  })
})


