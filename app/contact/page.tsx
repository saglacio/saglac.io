import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Facebook, Twitter, Linkedin, MessageSquare } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: "Contactez l'équipe de SagLac IO. Rejoignez notre communauté sur Facebook, Twitter, LinkedIn ou Discord. Courriel: info@saglac.io",
  openGraph: {
    title: 'Contact - SagLac IO',
    description: "Contactez l'équipe de SagLac IO. Rejoignez notre communauté sur Facebook, Twitter, LinkedIn ou Discord.",
    url: 'https://saglac.io/contact',
    type: 'website',
    images: [
      {
        url: '/images/open-graph-default-image.png',
        width: 1200,
        height: 630,
        alt: 'Contactez SagLac IO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact - SagLac IO',
    description: "Contactez l'équipe de SagLac IO via courriel ou rejoignez notre communauté.",
    images: ['/images/open-graph-default-image.png'],
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Nous <span className="text-primary">contacter</span>
              </h1>
              <p className="text-lg text-foreground/80">Rejoignez la communauté ou contactez-nous</p>
            </div>

            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    Courriel
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:info@saglac.io" className="text-primary hover:underline">
                    info@saglac.io
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Facebook className="w-5 h-5 text-primary" />
                    Facebook
                  </CardTitle>
                  <CardDescription>Rejoignez notre groupe pour les dernières nouvelles</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://www.facebook.com/groups/saglac.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    facebook.com/groups/saglac.io
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Twitter className="w-5 h-5 text-primary" />
                    Twitter
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://twitter.com/saglacio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    @saglacio
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Linkedin className="w-5 h-5 text-primary" />
                    LinkedIn
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://www.linkedin.com/company/saglac-io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    linkedin.com/company/saglac-io
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    Discord
                  </CardTitle>
                  <CardDescription>Rejoignez notre serveur Discord pour discuter</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://discord.gg/8pY5XVhvYM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    discord.gg/8pY5XVhvYM
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


