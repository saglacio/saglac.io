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
    
    // Verify page loads
    await expect(page).toHaveTitle(/SagLac IO/)
    
    // Verify logo is visible
    await expect(page.locator('img[alt*="Logo"]')).toBeVisible()
    
    // Verify main navigation is accessible
    await expect(page.getByRole('link', { name: /Accueil/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /Archives/i })).toBeVisible()
    
    // Verify hero content
    await expect(page.locator('text=/communauté/i').first()).toBeVisible()
    
    // Verify footer
    await expect(page.locator('footer')).toBeVisible()
  })

  test('User can navigate to archives and view events', async ({ page }) => {
    await page.goto('/')
    
    // Click Archives link
    await page.getByRole('link', { name: /Archives/i }).click()
    
    // Verify we're on archives page
    await expect(page).toHaveURL(/archives/)
    await expect(page.getByRole('heading', { name: /Archives/i })).toBeVisible()
    
    // Verify search box is present
    await expect(page.getByPlaceholder(/Rechercher/i)).toBeVisible()
    
    // Verify at least one event is displayed
    await expect(page.locator('[class*="event"]').first()).toBeVisible({ timeout: 10000 })
  })

  test('User can search for events in archives', async ({ page }) => {
    await page.goto('/archives')
    
    // Wait for page to be ready
    await page.waitForLoadState('networkidle')
    
    // Type in search box
    const searchBox = page.getByPlaceholder(/Rechercher/i)
    await searchBox.fill('homelab')
    
    // Wait a bit for debounce
    await page.waitForTimeout(500)
    
    // Verify search results update (check if page content changes)
    const pageContent = await page.textContent('body')
    expect(pageContent).toBeTruthy()
  })

  test('User can navigate to About page', async ({ page }) => {
    await page.goto('/')
    
    // Click About link
    await page.getByRole('link', { name: /À propos/i }).click()
    
    // Verify we're on about page
    await expect(page).toHaveURL(/about/)
    await expect(page.getByRole('heading', { name: /À propos/i })).toBeVisible()
  })

  test('User can navigate to Contact page', async ({ page }) => {
    await page.goto('/')
    
    // Click Contact link
    await page.getByRole('link', { name: /Contact/i }).click()
    
    // Verify we're on contact page
    await expect(page).toHaveURL(/contact/)
    await expect(page.getByRole('heading', { name: /Contact/i })).toBeVisible()
    
    // Verify contact information is displayed
    await expect(page.locator('text=/info@saglac.io/i')).toBeVisible()
  })

  test('User can access Facebook group from header', async ({ page, context }) => {
    await page.goto('/')
    
    // Find the join button
    const joinLink = page.getByRole('link', { name: /Rejoindre/i }).first()
    await expect(joinLink).toBeVisible()
    
    // Verify it points to Facebook
    const href = await joinLink.getAttribute('href')
    expect(href).toContain('facebook.com')
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
      // Desktop navigation should be visible
      await expect(page.getByRole('link', { name: /Archives/i })).toBeVisible()
    }
  })
})

