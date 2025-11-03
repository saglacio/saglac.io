# SagLac IO

> The official website for the SagLac IO tech community in Saguenay—Lac-Saint-Jean, Quebec, Canada.

[![CI](https://github.com/saglacio/saglac.io/actions/workflows/ci.yml/badge.svg)](https://github.com/saglacio/saglac.io/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Live Site**: [saglac.io](https://saglac.io)

## About

SagLac IO is a volunteer-driven tech community bringing together developers, designers, and technology enthusiasts for regular meetups, presentations, and knowledge sharing in the Saguenay—Lac-Saint-Jean region.

This repository contains the source code for our community website, built as a modern static site with Next.js.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router (static export)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Components**: [shadcn/ui](https://ui.shadcn.com) (New York style)
- **Testing**: [Vitest](https://vitest.dev) + [Playwright](https://playwright.dev)
- **Package Manager**: pnpm
- **Deployment**: GitHub Pages

## Features

- 📅 **Event Management** - YAML-based event data with location and speaker information
- 👤 **Speaker Profiles** - Author profiles with social links and GitHub avatars
- 🔍 **Event Search** - Filter and search through past events
- 📡 **RSS Feed** - Stay updated with latest events
- 🗺️ **Sitemap** - SEO-optimized with automatic generation
- 🌙 **Dark Mode** - System-aware theme switching
- 🇫🇷 **French Content** - Locale: `fr_CA`
- ♿ **Accessible** - WCAG compliant components

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/saglacio/saglac.io.git
cd saglac.io

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev

# Open http://localhost:3000
```

### Building

```bash
# Build for production
pnpm build

# Output in ./out directory
```

### Testing

```bash
# Run unit tests
pnpm test

# Run with coverage
pnpm test:coverage

# Run E2E tests (critical user flows)
pnpm test:e2e

# Run E2E tests with UI (interactive)
pnpm test:e2e:ui

# Run all tests
pnpm test:all

# View E2E test report
pnpm exec playwright show-report
```

**Test Coverage**:
- ✅ **unit tests** - Components and business logic
- ✅ **E2E tests** - Critical user flows
- ✅ **Automatic screenshots** on E2E failure
- ✅ **Visual debugging** with Playwright trace viewer

## Project Structure

```
saglac.io/
├── app/              # Next.js App Router pages
├── components/       # React components
│   ├── ui/          # shadcn/ui components
│   └── __tests__/   # Component tests
├── data/            # YAML content files
│   ├── io-events/   # Event definitions
│   ├── authors/     # Speaker profiles
│   └── locations/   # Venue information
├── lib/             # Utilities and types
├── scripts/         # Build scripts (RSS generation)
└── public/          # Static assets
```

## Contributing

We welcome contributions! Whether you're fixing bugs, improving documentation, or proposing new features, your help is appreciated.

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and add tests if applicable
4. **Run tests**: `pnpm test:all`
5. **Commit your changes**: `git commit -m 'Add amazing feature'`
6. **Push to your fork**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

### Adding an Event

Events are stored as YAML files in `data/io-events/`. To add a new event:

1. Create a new file: `data/io-events/YYYY-MM-DD-event-slug.yml`
2. Follow this structure:

```yaml
title: "Your Event Title"
date: "2025-10-22T19:00:00.000Z"
location: location-slug  # Reference to data/locations/
event_url: "https://facebook.com/events/123"
description: "Event description"
talks:
  - title: "Talk Title"
    description: "Talk description"
    authors:
      - author-id  # Reference to data/authors/
    slides: "https://slides.com/presentation"
    # or
    slides:
      - "https://slides.com/presentation-1"
      - "https://slides.com/presentation-2"
```

3. Test locally: `pnpm dev`
4. Submit a pull request

### Adding a Speaker

Create a new file in `data/authors/username.yml`:

```yaml
id: username
name: "Full Name"
twitter: username
github: username
linkedin: username
website: "https://example.com"
```

The avatar is automatically fetched from GitHub.

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Run `pnpm lint` before committing
- **Imports**: Use `@/` path alias
- **Components**: Functional components with TypeScript
- **Tests**: Write tests for new features

## Documentation

- **[RSS & Sitemap Generation](./docs/RSS_AND_SITEMAP.md)** - Feed generation details

## Community

- **Website**: [saglac.io](https://saglac.io)
- **Facebook**: [SagLac IO Group](https://www.facebook.com/groups/saglac.io)
- **Twitter**: [@saglacio](https://twitter.com/saglacio)
- **LinkedIn**: [SagLac IO Company](https://www.linkedin.com/company/saglac-io)
- **Discord**: [Join our server](https://discord.gg/8pY5XVhvYM)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with ❤️ by the SagLac IO community
- Powered by [Next.js](https://nextjs.org) and [Vercel](https://vercel.com)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Hosted on [GitHub Pages](https://pages.github.com)

---

**Interested in joining our community?** Visit [saglac.io](https://saglac.io) to find our next meetup!

