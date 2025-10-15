# RSS Feed & Sitemap Generation

## Overview

This project uses a **build-time script** approach for generating RSS feeds and sitemaps, rather than Next.js's built-in metadata API. This approach is necessary because:

1. **Static Export Limitation**: Next.js's `output: 'export'` doesn't support the metadata API for `sitemap.ts` in version 15.5.5
2. **Route Handler Limitation**: Route Handlers (like `app/rss.xml/route.ts`) don't work with static export
3. **Build-Time Generation**: RSS and sitemap are static files that don't need runtime generation

## Architecture

### Script-Based Generation (Current Approach ✅)

```
next build → Static HTML/JS → postbuild script → RSS + Sitemap XML
```

**Pros:**
- ✅ Works with `output: 'export'`
- ✅ Simple and testable
- ✅ No runtime overhead
- ✅ Easy to debug
- ✅ Matches GitHub Pages deployment model

**Cons:**
- Files generated at build time (not at runtime)
- Must rebuild to update feeds

### Files

```
scripts/
  generate-feeds.mjs      # Build script (runs after Next.js build)
lib/
  rss-generator.ts        # Testable RSS generation function
  __tests__/
    rss-generator.test.ts # Unit tests for RSS generation
package.json
  scripts.postbuild       # Automatically runs after `pnpm build`
```

## How It Works

### Build Process

1. **Next.js Build**: `pnpm build` runs `next build`
2. **Automatic Trigger**: npm/pnpm lifecycle runs `postbuild` script
3. **Feed Generation**: `scripts/generate-feeds.mjs` executes:
   - Loads events from `data/io-events/*.yml`
   - Loads locations from `data/locations/*.yml`
   - Loads authors from `data/authors/*.yml`
   - Generates RSS feed (`out/rss.xml`)
   - Generates sitemap (`out/sitemap.xml`)

### Generated Files

#### RSS Feed (`out/rss.xml`)

- **Standard**: RSS 2.0
- **Content**: Latest 81 events (sorted by date)
- **Fields**: title, description, link, guid, pubDate
- **Images**: Event authors, location info, presentation details
- **URL**: `https://saglac.io/rss.xml`

#### Sitemap (`out/sitemap.xml`)

- **Standard**: XML Sitemap 0.9
- **Pages**: All static pages (/, /about, /archives, /faq, /contact, /qrcode)
- **Fields**: loc, lastmod, changefreq, priority
- **URL**: `https://saglac.io/sitemap.xml`

## Development

### Running Locally

```bash
# Full build with feeds
pnpm build

# Build only (no feeds)
next build

# Generate feeds manually (after build)
node scripts/generate-feeds.mjs
```

### Testing

```bash
# Test RSS generator
pnpm test lib/__tests__/rss-generator.test.ts

# Test all
pnpm test
```

### Modifying Feed Generation

To modify RSS or sitemap generation:

1. **Edit Script**: `scripts/generate-feeds.mjs`
2. **Edit Tests**: `lib/__tests__/rss-generator.test.ts`
3. **Run Tests**: `pnpm test`
4. **Test Build**: `pnpm build`
5. **Verify Output**: Check `out/rss.xml` and `out/sitemap.xml`

## RSS Feed Structure

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>SagLac IO - Événements</title>
    <description>Rencontres technologiques du Saguenay—Lac-St-Jean</description>
    <link>https://saglac.io</link>
    <language>fr</language>
    <image>
      <url>https://saglac.io/images/logos/SaglacIO_Logo_Meetups_Inverted.png</url>
      <title>SagLac IO - Événements</title>
      <link>https://saglac.io</link>
    </image>
    <item>
      <title>Event Title</title>
      <description>
        Event description
        
        Lieu: Location Name
        
        Présentations:
        - Talk Title par Author Name
      </description>
      <link>https://facebook.com/events/123</link>
      <guid isPermaLink="false">event-slug</guid>
      <pubDate>Wed, 22 Oct 2025 22:00:00 GMT</pubDate>
    </item>
  </channel>
</rss>
```

## Sitemap Structure

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://saglac.io/</loc>
    <changefreq>weekly</changefreq>
    <priority>1</priority>
    <lastmod>2025-10-15T00:00:00.000Z</lastmod>
  </url>
  <url>
    <loc>https://saglac.io/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <lastmod>2025-10-15T00:00:00.000Z</lastmod>
  </url>
  <!-- ... more URLs ... -->
</urlset>
```

## CI/CD Integration

### GitHub Actions

The RSS and sitemap are automatically generated during the build process:

```yaml
- name: Build static site
  run: pnpm build  # Runs next build + postbuild script
```

The `postbuild` script ensures feeds are generated after every build, whether local or in CI.

### Deployment

For GitHub Pages deployment:

1. Build process generates `out/` directory
2. `out/rss.xml` and `out/sitemap.xml` are included
3. Files are deployed with the rest of the static site

## Troubleshooting

### RSS Feed Not Generated

**Problem**: `out/rss.xml` doesn't exist after build

**Solutions**:
1. Check if `out/` directory exists: `ls out/`
2. Run script manually: `node scripts/generate-feeds.mjs`
3. Check for errors in build output
4. Verify `package.json` has `"postbuild": "node scripts/generate-feeds.mjs"`

### Invalid XML

**Problem**: RSS or sitemap XML is malformed

**Solutions**:
1. Test with XML validator: `xmllint --noout out/rss.xml`
2. Check YAML data files for special characters
3. Review `scripts/generate-feeds.mjs` for escaping issues

### Missing Events in RSS

**Problem**: Some events don't appear in RSS feed

**Solutions**:
1. Check event YAML files are valid: `ls data/io-events/*.yml`
2. Verify date format: `YYYY-MM-DD`
3. Check for YAML parsing errors in build output
4. Run script with verbose logging

### Sitemap Missing Pages

**Problem**: Some pages don't appear in sitemap

**Solutions**:
1. Check `scripts/generate-feeds.mjs` for static pages list
2. Add missing pages to `staticPages` array
3. Rebuild: `pnpm build`

## Future Improvements

### Potential Enhancements

1. **Dynamic Event Pages**: If individual event pages are added, include them in sitemap
2. **RSS Pagination**: Support for paginated feeds if event count grows significantly
3. **Multiple Feeds**: Separate feeds by topic/location
4. **JSON Feed**: Add JSON Feed format support
5. **Atom Feed**: Add Atom 1.0 feed support

### Migration to Next.js Metadata API

When Next.js fixes static export support for metadata API:

1. Move sitemap logic to `app/sitemap.ts`
2. Consider Route Handler for RSS (if supported with static export)
3. Keep tests updated for new approach
4. Update this documentation

## Resources

- [RSS 2.0 Specification](https://www.rssboard.org/rss-specification)
- [XML Sitemap Protocol](https://www.sitemaps.org/protocol.html)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [npm Scripts Lifecycle](https://docs.npmjs.com/cli/v10/using-npm/scripts#life-cycle-scripts)

## Validation

### RSS Feed Validation

```bash
# W3C RSS Validator
curl -X POST --data-urlencode "url=https://saglac.io/rss.xml" \
  https://validator.w3.org/feed/check.cgi
```

### Sitemap Validation

```bash
# Google Sitemap Validator
# Submit https://saglac.io/sitemap.xml to Google Search Console
```

### Local Testing

```bash
# Check XML syntax
xmllint --noout out/rss.xml out/sitemap.xml

# Pretty print
xmllint --format out/rss.xml | head -50

# Check file sizes
ls -lh out/*.xml
```

## Maintenance Checklist

- [ ] RSS feed includes all recent events
- [ ] Sitemap includes all public pages
- [ ] XML is valid and well-formed
- [ ] Images/logos are accessible
- [ ] Links are working (no 404s)
- [ ] Tests are passing
- [ ] Documentation is up to date

