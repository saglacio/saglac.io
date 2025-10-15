import type React from 'react'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { Suspense } from 'react'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://saglac.io'),
  title: {
    default: 'SagLac IO - Communauté Tech du Saguenay—Lac-Saint-Jean',
    template: '%s | SagLac IO',
  },
  description:
    'Rencontres mensuelles gratuites pour passionnés de technologies numériques au Saguenay—Lac-Saint-Jean. Discussions, présentations et réseautage.',
  keywords: [
    'SagLac IO',
    'Saguenay',
    'Lac-Saint-Jean',
    'technologie',
    'développement',
    'programmation',
    'meetup',
    'communauté tech',
    'Chicoutimi',
    'Alma',
  ],
  authors: [{ name: "L'organisation du Saglac IO" }],
  creator: 'SagLac IO',
  publisher: 'SagLac IO',
  openGraph: {
    type: 'website',
    locale: 'fr_CA',
    url: 'https://saglac.io',
    title: 'SagLac IO - Communauté Tech du Saguenay—Lac-Saint-Jean',
    description:
      'Rencontres mensuelles gratuites pour passionnés de technologies numériques au Saguenay—Lac-Saint-Jean.',
    siteName: 'SagLac IO',
    images: [
      {
        url: '/images/open-graph-default-image.png',
        width: 1200,
        height: 630,
        alt: 'SagLac IO - Communauté Tech du Saguenay—Lac-Saint-Jean',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SagLac IO - Communauté Tech du Saguenay—Lac-Saint-Jean',
    description:
      'Rencontres mensuelles gratuites pour passionnés de technologies numériques au Saguenay—Lac-Saint-Jean.',
    creator: '@saglacio',
    images: ['/images/open-graph-default-image.png'],
  },
  alternates: {
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SagLac IO',
  url: 'https://saglac.io',
  logo: 'https://saglac.io/images/open-graph-default-image.png',
  description:
    'Communauté tech du Saguenay—Lac-Saint-Jean. Rencontres mensuelles gratuites pour passionnés de technologies numériques.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Saguenay',
    addressRegion: 'QC',
    addressCountry: 'CA',
  },
  sameAs: [
    'https://www.facebook.com/groups/saglac.io',
    'https://twitter.com/saglacio',
    'https://www.linkedin.com/company/saglac-io',
    'https://discord.gg/8pY5XVhvYM',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@saglac.io',
    contactType: 'customer service',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="alternate" type="application/rss+xml" title="SagLac IO RSS Feed" href="/rss.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
