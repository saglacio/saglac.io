/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ArchivesList } from '../archives-list'
import type { ResolvedEvent } from '@/lib/types'

// Mock scrollIntoView
beforeEach(() => {
  // Mock scrollIntoView
  window.HTMLElement.prototype.scrollIntoView = vi.fn()
})

const mockEvents: ResolvedEvent[] = [
  {
    slug: 'event-1',
    title: 'Test Event 1',
    date: '2024-01-15T18:00:00.000Z',
    location: {
      id: 'test-location',
      name: 'Test Location',
      address: '123 Test St',
    },
    talks: [
      {
        title: 'Test Talk with Single Slide',
        description: 'A test talk',
        authors: [{ id: 'author1', name: 'John Doe' }],
        slides: 'https://example.com/slides1.pdf',
      },
      {
        title: 'Test Talk with Multiple Slides',
        authors: [{ id: 'author2', name: 'Jane Smith' }],
        slides: ['https://example.com/slides2-1.pdf', 'https://example.com/slides2-2.pdf'],
      },
    ],
  },
  {
    slug: 'event-2',
    title: 'Test Event 2',
    date: '2024-01-10T18:00:00.000Z',
    location: {
      id: 'test-location-2',
      name: 'Another Location',
      address: '456 Test Ave',
    },
    talks: [
      {
        title: 'Talk without slides',
        authors: [{ id: 'author3', name: 'Bob Johnson' }],
      },
    ],
  },
]

// Create 15 mock events for pagination testing
const manyMockEvents: ResolvedEvent[] = Array.from({ length: 15 }, (_, i) => ({
  slug: `event-${i}`,
  title: i === 0 ? 'First Event UNIQUE' : `Event ${i + 1}`, // Make first event unique
  date: `2024-01-${String(i + 1).padStart(2, '0')}T18:00:00.000Z`,
  location: {
    id: `location-${i}`,
    name: `Location ${i + 1}`,
    address: `${i + 1} Test St`,
  },
  talks: [
    {
      title: `Talk ${i + 1}`,
      authors: [{ id: `author-${i}`, name: `Author ${i + 1}` }],
    },
  ],
}))

describe('ArchivesList', () => {
  describe('Single Slide Display', () => {
    it('should display a single slide link', () => {
      render(<ArchivesList events={mockEvents} />)

      const slideLinks = screen.getAllByText(/Slides/)
      const firstSlideLink = slideLinks[0].closest('a')
      expect(firstSlideLink).toBeTruthy()
      expect(firstSlideLink?.getAttribute('href')).toBe('https://example.com/slides1.pdf')
      expect(firstSlideLink?.getAttribute('target')).toBe('_blank')
      expect(firstSlideLink?.getAttribute('rel')).toBe('noopener noreferrer')
    })
  })

  describe('Multiple Slides Display', () => {
    it('should display multiple slide links with numbers', () => {
      render(<ArchivesList events={mockEvents} />)

      const slide1 = screen.getByText('Slides 1').closest('a')
      const slide2 = screen.getByText('Slides 2').closest('a')

      expect(slide1).toBeTruthy()
      expect(slide2).toBeTruthy()
      expect(slide1?.getAttribute('href')).toBe('https://example.com/slides2-1.pdf')
      expect(slide2?.getAttribute('href')).toBe('https://example.com/slides2-2.pdf')
    })
  })

  describe('No Slides Display', () => {
    it('should not display slide links when talk has no slides', () => {
      render(<ArchivesList events={[mockEvents[1]]} />)

      const talkTitle = screen.getByText('Talk without slides')
      expect(talkTitle).toBeTruthy()

      // Should not find any slides links
      const slideLinks = screen.queryByText(/Slides/)
      expect(slideLinks).toBeNull()
    })
  })

  describe('Pagination', () => {
    it('should display pagination controls when more than 10 events', () => {
      render(<ArchivesList events={manyMockEvents} />)

      expect(screen.getAllByText('Précédent')).toHaveLength(2) // Top and bottom
      expect(screen.getAllByText('Suivant')).toHaveLength(2)
    })

    it('should not display pagination when 10 or fewer events', () => {
      render(<ArchivesList events={mockEvents} />)

      expect(screen.queryByText('Précédent')).toBeNull()
      expect(screen.queryByText('Suivant')).toBeNull()
    })

    it('should show correct page numbers', () => {
      render(<ArchivesList events={manyMockEvents} />)

      // Should show page 1, 2 (total 2 pages with 15 events, 10 per page)
      expect(screen.getAllByText('1')).toHaveLength(2) // Top and bottom pagination
      expect(screen.getAllByText('2')).toHaveLength(2)
    })

    it('should navigate to next page on click', async () => {
      render(<ArchivesList events={manyMockEvents} />)

      const nextButtons = screen.getAllByText('Suivant')
      fireEvent.click(nextButtons[0])

      await waitFor(() => {
        // Should show events 11-15 on page 2
        expect(screen.getByText('Event 11')).toBeTruthy()
        expect(screen.queryByText('First Event UNIQUE')).toBeNull()
      })
    })

    it('should scroll to top when changing pages', async () => {
      const scrollIntoView = vi.fn()
      window.HTMLElement.prototype.scrollIntoView = scrollIntoView

      render(<ArchivesList events={manyMockEvents} />)

      const nextButtons = screen.getAllByText('Suivant')
      fireEvent.click(nextButtons[0])

      await waitFor(() => {
        expect(scrollIntoView).toHaveBeenCalledWith({
          behavior: 'smooth',
          block: 'start',
        })
      })
    })

    it('should disable Previous button on first page', () => {
      render(<ArchivesList events={manyMockEvents} />)

      const prevButtons = screen.getAllByText('Précédent')
      prevButtons.forEach((button) => {
        expect(button.hasAttribute('disabled')).toBe(true)
      })
    })

    it('should disable Next button on last page', async () => {
      render(<ArchivesList events={manyMockEvents} />)

      // Navigate to page 2 (last page)
      const nextButtons = screen.getAllByText('Suivant')
      fireEvent.click(nextButtons[0])

      await waitFor(() => {
        const updatedNextButtons = screen.getAllByText('Suivant')
        updatedNextButtons.forEach((button) => {
          expect(button.hasAttribute('disabled')).toBe(true)
        })
      })
    })
  })

  describe('Search Functionality', () => {
    it('should filter events by title', async () => {
      render(<ArchivesList events={mockEvents} />)

      const searchInput = screen.getByPlaceholderText(/Rechercher/)
      fireEvent.change(searchInput, { target: { value: 'Event 1' } })

      await waitFor(() => {
        expect(screen.getByText('Test Event 1')).toBeTruthy()
        expect(screen.queryByText('Test Event 2')).toBeNull()
      })
    })

    it('should filter events by location', async () => {
      render(<ArchivesList events={mockEvents} />)

      const searchInput = screen.getByPlaceholderText(/Rechercher/)
      fireEvent.change(searchInput, { target: { value: 'Another' } })

      await waitFor(() => {
        expect(screen.getByText('Test Event 2')).toBeTruthy()
        expect(screen.queryByText('Test Event 1')).toBeNull()
      })
    })

    it('should filter events by author name', async () => {
      render(<ArchivesList events={mockEvents} />)

      const searchInput = screen.getByPlaceholderText(/Rechercher/)
      fireEvent.change(searchInput, { target: { value: 'Jane' } })

      await waitFor(() => {
        expect(screen.getByText('Test Event 1')).toBeTruthy()
        expect(screen.queryByText('Test Event 2')).toBeNull()
      })
    })

    it('should reset to page 1 when searching', async () => {
      render(<ArchivesList events={manyMockEvents} />)

      // Go to page 2
      const nextButtons = screen.getAllByText('Suivant')
      fireEvent.click(nextButtons[0])

      await waitFor(() => {
        expect(screen.getByText('Event 11')).toBeTruthy()
      })

      // Now search for something unique
      const searchInput = screen.getByPlaceholderText(/Rechercher/)
      fireEvent.change(searchInput, { target: { value: 'UNIQUE' } }) // Unique keyword

      await waitFor(() => {
        // Should show first event (back on page 1 of results)
        expect(screen.getByText('First Event UNIQUE')).toBeTruthy()
        expect(screen.queryByText('Event 11')).toBeNull()
      })
    })

    it('should show no results message when no matches', async () => {
      render(<ArchivesList events={mockEvents} />)

      const searchInput = screen.getByPlaceholderText(/Rechercher/)
      fireEvent.change(searchInput, { target: { value: 'NonExistentEvent' } })

      await waitFor(() => {
        expect(screen.getByText(/Aucun événement trouvé/)).toBeTruthy()
      })
    })
  })

  describe('Results Counter', () => {
    it('should show total count when not searching', () => {
      render(<ArchivesList events={mockEvents} />)

      expect(screen.getByText('2 événements au total')).toBeTruthy()
    })

    it('should show filtered count when searching', async () => {
      render(<ArchivesList events={mockEvents} />)

      const searchInput = screen.getByPlaceholderText(/Rechercher/)
      fireEvent.change(searchInput, { target: { value: 'Event 1' } })

      await waitFor(() => {
        expect(screen.getByText(/1 résultat sur 2 événements/)).toBeTruthy()
      })
    })
  })

  describe('Event Display', () => {
    it('should display event title and date', () => {
      render(<ArchivesList events={mockEvents} />)

      expect(screen.getByText('Test Event 1')).toBeTruthy()
      expect(screen.getByText(/15 janvier 2024/)).toBeTruthy()
    })

    it('should display location information', () => {
      render(<ArchivesList events={mockEvents} />)

      expect(screen.getByText('Test Location')).toBeTruthy()
    })

    it('should display talk titles', () => {
      render(<ArchivesList events={mockEvents} />)

      expect(screen.getByText('Test Talk with Single Slide')).toBeTruthy()
      expect(screen.getByText('Test Talk with Multiple Slides')).toBeTruthy()
    })

    it('should display author avatars and names', () => {
      render(<ArchivesList events={mockEvents} />)

      expect(screen.getByText('John Doe')).toBeTruthy()
      expect(screen.getByText('Jane Smith')).toBeTruthy()
    })
  })
})

