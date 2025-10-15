# GitHub Actions CI/CD Documentation

## Overview

This project uses GitHub Actions for continuous integration and deployment with parallel job execution for faster builds and comprehensive test coverage.

## Workflow: `ci.yml`

### Triggers

- **Push**: Runs on all branches (`branches: ['**']`)
- **Pull Request**: Runs on PRs targeting any branch

### Concurrency Control

Automatically cancels previous workflow runs when a new commit is pushed to the same branch, preventing wasted CI minutes.

## Jobs

### 1. 🧪 Unit Tests (`test`)

**Purpose**: Run Vitest unit tests with code coverage

**Steps**:
- Checkout code
- Setup pnpm with caching
- Setup Node.js 20 with pnpm cache
- Install dependencies (frozen lockfile)
- Run tests with coverage (`pnpm test:coverage`)
- Upload coverage to Codecov
- Upload coverage artifacts (HTML report)
- Upload test results

**Artifacts**:
- `coverage-report`: Full HTML coverage report (30 days retention)
- `test-results`: Test results and coverage data (7 days retention)

**Coverage Thresholds**:
- Statements: 40%
- Branches: 70%
- Functions: 60%
- Lines: 40%

### 2. 🎭 E2E Tests (`e2e`)

**Purpose**: Run Playwright end-to-end tests

**Steps**:
- Checkout code
- Setup pnpm with caching
- Setup Node.js 20 with pnpm cache
- Install dependencies (frozen lockfile)
- Install Playwright browsers (Chromium only for speed)
- Run E2E tests (`pnpm test:e2e`)
- Upload Playwright HTML report

**Artifacts**:
- `playwright-report`: Test report with screenshots/videos (7 days retention)

**Tests Cover**:
- Homepage functionality
- Navigation across all pages
- Archives page with search
- FAQ accordion
- Contact page
- Accessibility checks
- Responsive design

### 3. 🏗️ Build (`build`)

**Purpose**: Build static Next.js site for deployment

**Dependencies**: Requires `test` and `e2e` jobs to pass first

**Steps**:
- Checkout code
- Setup pnpm with caching
- Setup Node.js 20 with pnpm cache
- Install dependencies (frozen lockfile)
- Build site (`pnpm build`)
- Upload build artifacts
- Verify build output (index.html, sitemap.xml, rss.xml)

**Artifacts**:
- `build-output`: Complete `out/` directory (7 days retention)

### 4. 📝 Lint (`lint`)

**Purpose**: Run ESLint to catch code quality issues

**Steps**:
- Checkout code
- Setup pnpm with caching
- Setup Node.js 20 with pnpm cache
- Install dependencies (frozen lockfile)
- Run linter (`pnpm lint`)

### 5. 🔍 Type Check (`type-check`)

**Purpose**: Run TypeScript compiler in type-check mode

**Steps**:
- Checkout code
- Setup pnpm with caching
- Setup Node.js 20 with pnpm cache
- Install dependencies (frozen lockfile)
- Run TypeScript (`tsc --noEmit`)

### 6. ✅ CI Success (`ci-success`)

**Purpose**: Summary job to verify all required jobs passed

**Dependencies**: Runs after all other jobs complete

**Behavior**:
- Always runs (`if: always()`)
- Fails if any required job failed
- Provides clear success/failure message

## Action Versions Used

All actions use pinned major versions with maintained releases:

- `actions/checkout@v4` - Latest stable
- `pnpm/action-setup@v4` - pnpm 9.x
- `actions/setup-node@v4` - Node.js 20 with built-in caching
- `actions/upload-artifact@v4` - Latest artifact upload
- `codecov/codecov-action@v4` - Coverage reporting

## Caching Strategy

### pnpm Cache

Node.js setup action provides built-in caching for pnpm:
```yaml
- uses: actions/setup-node@v4
  with:
    node-version: '20'
    cache: 'pnpm'  # Built-in cache support
```

**Benefits**:
- Faster dependency installation
- Automatic cache key management
- Cache hits across branches

### Docker Image Cache

Act (local testing) caches Docker images to speed up local runs.

## Parallel Execution

Jobs run in parallel where possible:

```
test ─┐
      ├─→ build ─→ ci-success
e2e  ─┘

lint ─┐
      ├─→ ci-success
type ─┘
```

**Total Time**: ~2-3 minutes (vs 10+ minutes sequential)

## Local Testing with Act

Test workflows locally before pushing:

```bash
# Install act (macOS)
brew install act

# Test individual jobs
act -j test --container-architecture linux/amd64
act -j build --container-architecture linux/amd64
act -j e2e --container-architecture linux/amd64

# Dry run (validates workflow)
act --dryrun

# List all jobs
act -l
```

**Notes**:
- Use `--container-architecture linux/amd64` for Mac M1/M2
- First run downloads Docker images (~2GB)
- Some actions may not work exactly as on GitHub

## Secrets Required

### Codecov Token (Optional)

For coverage reporting to Codecov:

1. Go to https://codecov.io
2. Add your repository
3. Copy the token
4. Add to GitHub Secrets as `CODECOV_TOKEN`

**Note**: Codecov action won't fail if token is missing (`fail_ci_if_error: false`)

## Artifacts

All artifacts can be downloaded from the GitHub Actions UI:

1. Go to Actions tab
2. Click on a workflow run
3. Scroll to "Artifacts" section

### Available Artifacts

- **coverage-report** (30 days): HTML coverage report
- **test-results** (7 days): Raw test results
- **playwright-report** (7 days): E2E test report
- **build-output** (7 days): Static site build

## Viewing Reports

### Coverage Report

1. Download `coverage-report` artifact
2. Extract and open `index.html`
3. Interactive HTML report with line-by-line coverage

### Playwright Report

1. Download `playwright-report` artifact
2. Extract and open `index.html`
3. View test results, screenshots, and videos

## Branch Protection Rules

Recommended branch protection for `main`:

- ✅ Require pull request before merging
- ✅ Require status checks to pass:
  - `Unit Tests`
  - `E2E Tests`
  - `Build`
  - `Lint`
  - `Type Check`
- ✅ Require branches to be up to date
- ✅ Require linear history

## Troubleshooting

### Job Fails: "Cannot find module"

**Solution**: Dependencies not installed correctly
```yaml
run: pnpm install --frozen-lockfile
```

### Job Fails: "pnpm: command not found"

**Solution**: pnpm not set up before Node.js
```yaml
- uses: pnpm/action-setup@v4
  with:
    version: 9
- uses: actions/setup-node@v4
  with:
    cache: 'pnpm'
```

### E2E Tests Timeout

**Solution**: Increase timeout in playwright.config.ts
```typescript
use: {
  timeout: 30000,  // 30 seconds per test
}
```

### Build Fails: "Out of memory"

**Solution**: Increase Node.js memory
```yaml
run: NODE_OPTIONS="--max_old_space_size=4096" pnpm build
```

### Act Fails: "Container architecture"

**Solution**: Specify architecture for Mac M1/M2
```bash
act --container-architecture linux/amd64
```

## Performance Optimization

Current workflow performance:

- **Unit Tests**: ~30 seconds
- **E2E Tests**: ~2 minutes (Chromium only)
- **Build**: ~45 seconds
- **Lint**: ~20 seconds
- **Type Check**: ~25 seconds

**Total parallel time**: ~2-3 minutes

### Further Optimizations

1. **Matrix Strategy**: Run E2E across multiple browsers in parallel
   ```yaml
   strategy:
     matrix:
       browser: [chromium, firefox, webkit]
   ```

2. **Test Sharding**: Split tests across multiple runners
   ```yaml
   strategy:
     matrix:
       shardIndex: [1, 2, 3, 4]
       shardTotal: [4]
   ```

3. **Selective Testing**: Only run affected tests
   ```yaml
   - run: pnpm test --changed --since=origin/main
   ```

## Monitoring

### GitHub Actions Dashboard

- View workflow runs: `Actions` tab
- Check run times and success rates
- Download artifacts
- View logs

### Codecov Dashboard

- View coverage trends over time
- Check coverage by file/directory
- Compare coverage between branches
- View pull request coverage diff

## Maintenance

### Updating Actions

Check for updates quarterly:

```bash
# Check for outdated actions
gh actions list

# Update to latest versions
# Edit .github/workflows/ci.yml
# Update version tags (@v4 → @v5)
```

### Updating Dependencies

```bash
# Update pnpm
pnpm add -g pnpm@latest

# Update Node.js (update workflow)
node-version: '22'  # When LTS updates
```

## Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [pnpm Action Setup](https://github.com/pnpm/action-setup)
- [Act Documentation](https://github.com/nektos/act)
- [Codecov Documentation](https://docs.codecov.com)
- [Playwright CI Guide](https://playwright.dev/docs/ci)

