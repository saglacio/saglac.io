# E2E Testing Guide

## Overview

Our E2E tests focus on **critical user flows** - the essential journeys users take through the application. This approach ensures:

- ✅ Fast test execution
- ✅ Clear failure signals
- ✅ Visual debugging with screenshots
- ✅ Minimal maintenance overhead

## Testing Strategy

### What We Test

**Critical User Flows:**
1. Homepage loads with key content
2. Navigation between main pages
3. Event search functionality
4. External links work correctly
5. Mobile navigation (hamburger menu)

### What We Don't Test

- ❌ Individual UI components (covered by unit tests)
- ❌ Styling details (not critical for functionality)
- ❌ Complex accessibility (beyond basic visibility)
- ❌ Multiple browser engines (Chromium is sufficient)

## Test Configuration

### Browsers

- **Desktop**: Chrome (most common browser)
- **Mobile**: Chrome on Pixel 5 (representative mobile device)

### Failure Handling

When a test fails, Playwright automatically captures:
- 📸 Screenshot of the failure
- 🎬 Video of the test run (retained on failure)
- 📋 Trace file (on first retry in CI)

## Running Tests

### Local Development

```bash
# Run all E2E tests
pnpm test:e2e

# Run tests in UI mode (interactive)
pnpm test:e2e:ui

# Show last test report
pnpm exec playwright show-report
```

### CI/CD

Tests automatically run in GitHub Actions with:
- 2 retries on failure
- Full trace collection on first retry
- HTML report generation

## Writing New Tests

### Best Practices

1. **Focus on User Actions**: Test what users actually do
2. **Use Semantic Selectors**: Prefer `getByRole`, `getByLabel` over CSS classes
3. **Wait for Content**: Use Playwright's auto-waiting
4. **Keep Tests Independent**: Each test should work in isolation
5. **Meaningful Assertions**: Verify business value, not implementation details

### Example Test

```typescript
test('User can search for events', async ({ page }) => {
  // Navigate to archives
  await page.goto('/archives')
  
  // Perform search
  const searchBox = page.getByPlaceholderText(/Rechercher/i)
  await searchBox.fill('homelab')
  
  // Verify results update
  await expect(page.locator('.event').first()).toBeVisible()
})
```

### Test Structure

```typescript
test.describe('Feature Name', () => {
  test('specific user action', async ({ page }) => {
    // 1. Setup: Navigate to starting point
    await page.goto('/page')
    
    // 2. Action: Perform user action
    await page.click('button')
    
    // 3. Assertion: Verify expected outcome
    await expect(page.locator('.result')).toBeVisible()
  })
})
```

## Debugging Failed Tests

### View Test Report

```bash
pnpm exec playwright show-report
```

The HTML report includes:
- Test results overview
- Screenshots of failures
- Videos of test runs
- Trace files for detailed debugging

### View Trace

1. Open test report
2. Click on failed test
3. Click "Trace" tab
4. Navigate through test steps

The trace viewer shows:
- DOM snapshots at each step
- Network requests
- Console logs
- Screenshots at each action

### Common Issues

#### Test Timeout
```
Error: Test timeout of 30000ms exceeded
```
**Solution**: Increase timeout or check if element selector is correct

```typescript
test('slow test', async ({ page }) => {
  test.setTimeout(60000) // 60 seconds
  // ... test code
})
```

#### Element Not Found
```
Error: Locator.click: Target closed
```
**Solution**: Wait for element or check selector

```typescript
// Wait for element
await page.waitForSelector('.element')

// Use more resilient selector
await page.getByRole('button', { name: 'Submit' }).click()
```

#### Flaky Tests
**Solution**: Use explicit waits and auto-retrying assertions

```typescript
// Bad: Fixed wait
await page.waitForTimeout(1000)

// Good: Wait for condition
await page.waitForLoadState('networkidle')

// Best: Auto-retrying assertion
await expect(page.locator('.result')).toBeVisible()
```

## Test Maintenance

### When to Update Tests

- ✅ When user flows change
- ✅ When critical features are added
- ✅ When tests become flaky (fix or remove)

### When to Remove Tests

- ❌ When feature is removed
- ❌ When test is consistently flaky
- ❌ When test provides low value

## Performance

Current test suite performance:
- **7 tests** in ~30 seconds (local)
- **14 tests** (7 × 2 browsers) in ~2 minutes (CI)

## Resources

- [Playwright Documentation](https://playwright.dev)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Test Selectors Guide](https://playwright.dev/docs/selectors)
- [Debugging Guide](https://playwright.dev/docs/debug)

## Contributing

When adding new E2E tests:

1. Ensure they test critical user flows
2. Keep tests simple and focused
3. Use semantic selectors (role, label, text)
4. Add test to appropriate describe block
5. Run tests locally before committing
6. Check test report for screenshots/traces

## CI Integration

GitHub Actions automatically:
- ✅ Runs tests on all PRs
- ✅ Retries failed tests (2 attempts)
- ✅ Uploads test reports as artifacts
- ✅ Fails PR if critical tests fail

View reports:
1. Go to Actions tab
2. Click on workflow run
3. Download "playwright-report" artifact
4. Extract and open `index.html`

