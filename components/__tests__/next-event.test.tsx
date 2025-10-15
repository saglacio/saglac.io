/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NextEvent } from '../next-event'
import type { ResolvedEvent } from '@/lib/types'

// Mock the data-loader module
const mockGetNextEvent = vi.fn()
const mockGetAuthorAvatar = vi.fn((author) => {
  if (author.avatar) return author.avatar
  if (author.github) return `https://avatars.githubusercontent.com/${author.github}`
  if (author.twitter) return `https://unavatar.io/twitter/${author.twitter}`
  return '/images/default_user_icon.png'
})

vi.mock('@/lib/data-loader', () => ({
  getNextEvent: () => mockGetNextEvent(),
  getAuthorAvatar: (author: any) => mockGetAuthorAvatar(author),
}))

const mockEvent: ResolvedEvent = {
  slug: 'test-event',
  title: 'Test Event avec des Présentateurs',
  description: 'Un événement de test',
  date: '2025-12-25T19:00:00.000Z',
  event_url: 'https://example.com/event',
  location: {
    id: 'test-location',
    name: 'Test Venue',
    address: '123 Test St, Chicoutimi',
    map: 'https://maps.google.com/test',
  },
  talks: [
    {
      title: 'Test Talk',
      description: 'A test presentation',
      authors: [
        {
          id: 'john_doe',
          name: 'John Doe',
          twitter: 'johndoe',
          github: 'johndoe',
          linkedin: 'johndoe',
          website: 'https://johndoe.com',
        },
        {
          id: 'jane_smith',
          name: 'Jane Smith',
          github: 'janesmith',
        },
      ],
    },
  ],
}

describe('NextEvent Component', () => {
  describe('When there is no next event', () => {
    it('should display no events message', () => {
      mockGetNextEvent.mockReturnValue(null)
      render(<NextEvent />)

      expect(screen.getByText(/Aucun événement à venir/)).toBeTruthy()
      expect(screen.getByText(/Rejoindre le groupe Facebook/)).toBeTruthy()
      expect(screen.getByText(/Voir les événements passés/)).toBeTruthy()
    })
  })

  describe('When there is a next event', () => {
    beforeEach(() => {
      mockGetNextEvent.mockReturnValue(mockEvent)
    })

    it('should display event title', () => {
      render(<NextEvent />)
      expect(screen.getByText('Test Event avec des Présentateurs')).toBeTruthy()
    })

    it('should display event location', () => {
      render(<NextEvent />)
      expect(screen.getByText('Test Venue')).toBeTruthy()
      expect(screen.getByText(/123 Test St, Chicoutimi/)).toBeTruthy()
    })

    it('should display talks and speakers', () => {
      render(<NextEvent />)
      expect(screen.getByText('Test Talk')).toBeTruthy()
      expect(screen.getByText('John Doe')).toBeTruthy()
      expect(screen.getByText('Jane Smith')).toBeTruthy()
    })

    it('should display author social links', () => {
      render(<NextEvent />)

      // Check for Twitter link
      const twitterLinks = screen.getAllByTitle(/sur Twitter/)
      expect(twitterLinks.length).toBeGreaterThan(0)
      const johnTwitter = twitterLinks.find(
        (link) => link.getAttribute('href') === 'https://twitter.com/johndoe'
      )
      expect(johnTwitter).toBeTruthy()

      // Check for GitHub links
      const githubLinks = screen.getAllByTitle(/sur GitHub/)
      expect(githubLinks.length).toBeGreaterThan(0)

      // Check for LinkedIn link
      const linkedinLinks = screen.getAllByTitle(/sur LinkedIn/)
      expect(linkedinLinks.length).toBeGreaterThan(0)
      const johnLinkedIn = linkedinLinks.find(
        (link) => link.getAttribute('href') === 'https://linkedin.com/in/johndoe'
      )
      expect(johnLinkedIn).toBeTruthy()

      // Check for website link
      const websiteLinks = screen.getAllByTitle(/Site web de/)
      expect(websiteLinks.length).toBeGreaterThan(0)
      const johnWebsite = websiteLinks.find(
        (link) => link.getAttribute('href') === 'https://johndoe.com'
      )
      expect(johnWebsite).toBeTruthy()
    })

    it('should have correct link attributes for security', () => {
      render(<NextEvent />)

      const socialLinks = screen.getAllByRole('link').filter((link) => {
        const href = link.getAttribute('href')
        return (
          href?.includes('twitter.com') ||
          href?.includes('github.com') ||
          href?.includes('linkedin.com') ||
          href?.includes('johndoe.com')
        )
      })

      socialLinks.forEach((link) => {
        expect(link.getAttribute('target')).toBe('_blank')
        expect(link.getAttribute('rel')).toBe('noopener noreferrer')
      })
    })

    it('should display map when location has map URL', () => {
      render(<NextEvent />)
      const iframe = screen.getByTitle('Event Location Map')
      expect(iframe).toBeTruthy()
      expect(iframe.getAttribute('src')).toBe('https://maps.google.com/test')
    })

    it('should display participate button when event_url exists', () => {
      render(<NextEvent />)
      const participateButton = screen.getByText(/Participer/).closest('a')
      expect(participateButton).toBeTruthy()
      expect(participateButton?.getAttribute('href')).toBe('https://example.com/event')
    })

    it('should not display speakers with only some social links', () => {
      // Jane Smith only has GitHub, so twitter/linkedin/website should not appear for her
      render(<NextEvent />)

      const janeAuthorEl = screen.getByText('Jane Smith').closest('div')
      expect(janeAuthorEl).toBeTruthy()

      // Jane should have GitHub but not twitter/linkedin/website
      const allTwitterLinks = screen.getAllByTitle(/sur Twitter/)
      const janeTwitter = allTwitterLinks.find((link) =>
        link.parentElement?.textContent?.includes('Jane Smith')
      )
      expect(janeTwitter).toBeFalsy()
    })
  })
})

