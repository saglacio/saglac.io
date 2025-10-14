import { describe, it, expect } from 'vitest'

describe('Slides Display Logic', () => {
  describe('Single slide handling', () => {
    it('should convert single slide string to array', () => {
      const slides = 'https://example.com/slides.pdf'
      const result = Array.isArray(slides) ? slides : [slides]

      expect(result).toEqual(['https://example.com/slides.pdf'])
      expect(result.length).toBe(1)
    })
  })

  describe('Multiple slides handling', () => {
    it('should keep array of slides as is', () => {
      const slides = [
        'https://example.com/slides1.pdf',
        'https://example.com/slides2.pdf'
      ]
      const result = Array.isArray(slides) ? slides : [slides]

      expect(result).toEqual(slides)
      expect(result.length).toBe(2)
    })
  })

  describe('No slides handling', () => {
    it('should return empty array for undefined', () => {
      const slides = undefined
      const result = slides ? (Array.isArray(slides) ? slides : [slides]) : []

      expect(result).toEqual([])
      expect(result.length).toBe(0)
    })

    it('should return empty array for null', () => {
      const slides = null
      const result = slides ? (Array.isArray(slides) ? slides : [slides]) : []

      expect(result).toEqual([])
      expect(result.length).toBe(0)
    })
  })

  describe('Slide numbering', () => {
    it('should not add number for single slide', () => {
      const slides = ['https://example.com/slides.pdf']
      const label = slides.length > 1 ? '1' : ''

      expect(label).toBe('')
    })

    it('should add numbers for multiple slides', () => {
      const slides = [
        'https://example.com/slides1.pdf',
        'https://example.com/slides2.pdf',
        'https://example.com/slides3.pdf'
      ]

      const labels = slides.map((_, idx) =>
        slides.length > 1 ? `${idx + 1}` : ''
      )

      expect(labels).toEqual(['1', '2', '3'])
    })
  })
})


