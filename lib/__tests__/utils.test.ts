import { describe, it, expect } from 'vitest'
import { cn } from '../utils'

describe('Utils', () => {
  describe('cn (className utility)', () => {
    it('should merge class names', () => {
      const result = cn('px-4', 'py-2')
      expect(result).toBe('px-4 py-2')
    })

    it('should handle conditional classes', () => {
      const isActive = true
      const result = cn('base-class', isActive && 'active-class')
      expect(result).toBe('base-class active-class')
    })

    it('should filter out false conditions', () => {
      const isActive = false
      const result = cn('base-class', isActive && 'active-class')
      expect(result).toBe('base-class')
    })

    it('should merge conflicting Tailwind classes', () => {
      // tailwind-merge should keep the last class when there's a conflict
      const result = cn('px-2', 'px-4')
      expect(result).toBe('px-4')
    })

    it('should handle arrays of classes', () => {
      const result = cn(['px-4', 'py-2'])
      expect(result).toBe('px-4 py-2')
    })

    it('should handle undefined and null', () => {
      const result = cn('px-4', undefined, 'py-2', null)
      expect(result).toBe('px-4 py-2')
    })

    it('should handle empty input', () => {
      const result = cn()
      expect(result).toBe('')
    })

    it('should handle complex conditional logic', () => {
      function getVariant(): 'primary' | 'secondary' {
        return 'primary'
      }
      function getSize(): 'large' | 'small' {
        return 'large'
      }
      const variant = getVariant()
      const size = getSize()
      const result = cn(
        'button',
        variant === 'primary' && 'bg-primary',
        variant === 'secondary' && 'bg-secondary',
        size === 'large' && 'text-lg',
        size === 'small' && 'text-sm'
      )
      expect(result).toContain('button')
      expect(result).toContain('bg-primary')
      expect(result).toContain('text-lg')
      expect(result).not.toContain('bg-secondary')
      expect(result).not.toContain('text-sm')
    })

    it('should handle object notation', () => {
      const result = cn({
        'px-4': true,
        'py-2': true,
        'bg-red': false,
      })
      expect(result).toContain('px-4')
      expect(result).toContain('py-2')
      expect(result).not.toContain('bg-red')
    })
  })
})

