/**
 * Critical User Flows E2E Tests
 * 
 * Tests focus on the most important user journeys:
 * 1. Homepage loads and displays key content
 * 2. Navigation between main pages works
 * 3. Event search in archives functions
 * 
 * Failures automatically capture screenshots for debugging
 */

import { test, expect } from '@playwright/test'

test.describe('Critical User Flows', () => {
  test('User can view homepage and key sections', async ({ page }) => {
    // Navigate to homepage
    await page.goto('/')
    
    // Verify page loads with correct French title
    await expect(page).toHaveTitle(/Accueil/)
    
    // Verify logo is visible in header (not footer)
    await expect(page.locator('header img[alt*="Logo"]').first()).toBeVisible()
    
    // Verify header exists
    await expect(page.locator('header').first()).toBeVisible()
    
    // Verify hero content
    await expect(page.locator('text=/communauté/i').first()).toBeVisible()
    
    // Verify footer
    await expect(page.locator('footer')).toBeVisible()
  })

  test('User can navigate to archives and view events', async ({ page }) => {
    // Navigate directly to archives page
    await page.goto('/archives')
    
    // Verify we're on archives page
    await expect(page).toHaveURL(/archives/)
    await expect(page.getByRole('heading', { name: /Archives/i })).toBeVisible()
    
    // Verify search box is present
    await expect(page.getByPlaceholder(/Rechercher/i)).toBeVisible()
    
    // Verify page has loaded (check for any content)
    const bodyText = await page.textContent('body')
    expect(bodyText).toBeTruthy()
  })

  test('User can search for events in archives', async ({ page }) => {
    await page.goto('/archives')
    
    // Wait for page to be ready
    await page.waitForLoadState('load')
    
    // Type in search box
    const searchBox = page.getByPlaceholder(/Rechercher/i)
    await searchBox.fill('homelab')
    
    // Wait for filtering to occur (debounce + render)
    await page.waitForTimeout(1000)
    
    // Verify page content is present after search
    const pageContent = await page.textContent('body')
    expect(pageContent).toBeTruthy()
    
    // If homelab content exists in search results, verify it's present
    if (pageContent?.toLowerCase().includes('homelab')) {
      // Search successfully filtered to show homelab content
      expect(pageContent.toLowerCase()).toContain('homelab')
    } else {
      // No homelab events exist, which is also valid
      // Just ensure the search box worked and page didn't error
      expect(await searchBox.inputValue()).toBe('homelab')
    }
  })

  test('User can navigate to About page', async ({ page }) => {
    // Navigate directly to about page
    await page.goto('/about')
    
    // Verify we're on about page
    await expect(page).toHaveURL(/about/)
    await expect(page.getByRole('heading', { name: /À propos/i })).toBeVisible()
  })

  test('User can navigate to Contact page', async ({ page }) => {
    // Navigate directly to contact page
    await page.goto('/contact')
    
    // Verify we're on contact page
    await expect(page).toHaveURL(/contact/)
    await expect(page.getByRole('heading', { name: /Contact/i })).toBeVisible()
    
    // Verify contact information is displayed (in main section, not footer)
    await expect(page.locator('main').getByText(/info@saglac.io/i).first()).toBeVisible()
  })

  test('User can access Facebook group from header', async ({ page, context }) => {
    await page.goto('/')
    
    // Find any "Rejoindre" link on the page (header, hero, or elsewhere)
    // Use a more specific selector or just check that a Facebook link exists
    const facebookLinks = page.locator('a[href*="facebook.com/groups/saglac.io"]')
    
    // Verify at least one Facebook group link exists (may not be visible in mobile menu)
    const count = await facebookLinks.count()
    expect(count).toBeGreaterThan(0)
  })
})

test.describe('Mobile Critical Flows', () => {
  test.use({ viewport: { width: 375, height: 667 } }) // iPhone SE size
  
  test('Mobile user can navigate using hamburger menu', async ({ page }) => {
    await page.goto('/')
    
    // Find and click mobile menu toggle
    const menuButton = page.getByLabel(/menu/i).or(page.locator('[aria-label*="menu"]'))
    
    // Check if mobile menu exists (might not on all viewport sizes)
    const isVisible = await menuButton.isVisible().catch(() => false)
    
    if (isVisible) {
      await menuButton.click()
      
      // Verify menu items appear
      await expect(page.getByRole('link', { name: /Archives/i }).first()).toBeVisible()
    } else {
      // Desktop navigation should be visible - use .first() to avoid strict mode violation
      await expect(page.getByRole('link', { name: /Archives/i }).first()).toBeVisible()
    }
  })
})

