import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, Users, MapPin, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À propos',
  description: 'À propos de SagLac IO, communauté tech du Saguenay—Lac-Saint-Jean',
  openGraph: {
    title: 'À propos - SagLac IO',
    description: 'À propos de SagLac IO, communauté tech du Saguenay—Lac-Saint-Jean',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              À propos de <span className="text-primary">SagLac IO</span>
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Une communauté bénévole de passionnés de technologies numériques au
              Saguenay—Lac-Saint-Jean depuis 2013
            </p>
          </div>
        </div>
      </section>

      {/* What is SagLac IO */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Qu'est-ce que le SagLac IO?</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <Calendar className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Rencontres mensuelles</h3>
                  <p className="text-foreground/70 text-sm">
                    Des événements gratuits et ouverts à tous, organisés chaque mois
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Communauté inclusive</h3>
                  <p className="text-foreground/70 text-sm">
                    Professionnels et amateurs partagent leur passion pour la tech
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <MapPin className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Saguenay & Alma</h3>
                  <p className="text-foreground/70 text-sm">
                    Alternance entre les deux villes selon la demande
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed">
                Le Saglac IO est un rassemblement technologique mensuel gratuit dans la région du
                Saguenay—Lac-St-Jean, organisé par une communauté d'enthousiastes de la technologie.
                Ces rencontres, ouvertes à tous, permettent aux professionnels et aux amateurs de
                partager leur passion et leurs dernières découvertes dans le domaine informatique à
                travers des discussions, du réseautage et des présentations courtes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Notre histoire</h2>

            <div className="space-y-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="text-primary font-bold text-2xl">2013</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Les débuts</h3>
                      <p className="text-foreground/70">
                        Automne 2013, Jean-Philippe Boily, de retour en région après plusieurs années,
                        s'inspire de l'{' '}
                        <a
                          href="https://www.opencode.ca/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary hover:underline inline-flex items-center gap-1"
                        >
                          OpenCode
                          <ExternalLink className="w-3 h-3" />
                        </a>{' '}
                        de Québec pour créer un regroupement technologique local. Ainsi naît le SagLac IO
                        en octobre 2013, proposant depuis des rencontres mensuelles alternées entre
                        Saguenay et Alma.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="text-primary font-bold text-2xl">2014</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Visibilité médiatique</h3>
                      <p className="text-foreground/70 mb-3">
                        L'IO gagne en visibilité dès Janvier 2014 lors du passage de{' '}
                        <a
                          href="https://twitter.com/aspleenic"
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary hover:underline inline-flex items-center gap-1"
                        >
                          PJ Hagerty
                          <ExternalLink className="w-3 h-3" />
                        </a>{' '}
                        à Alma, attirant l'attention de plusieurs médias régionaux.
                      </p>
                      <div className="text-sm text-foreground/60">
                        Couverture médiatique:{' '}
                        <a
                          href="https://www.journaldequebec.com/2014/01/08/lio-prend-de-lampleur"
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary hover:underline"
                        >
                          Le Journal de Québec
                        </a>
                        ,{' '}
                        <a
                          href="https://web.archive.org/web/20220124160753/https://www.neomedia.com/saguenay-lac-st-jean/actualites/actualites/265742/lio-prend-de-lampleur"
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary hover:underline"
                        >
                          Le Point du Lac-St-Jean
                        </a>
                        , Le Progrès-Dimanche (version papier seulement)
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="text-primary font-bold text-2xl">2019</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Grande conférence</h3>
                      <p className="text-foreground/70">
                        En 2019,{' '}
                        <a
                          href="https://conference.saglac.io"
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary hover:underline inline-flex items-center gap-1"
                        >
                          une journée complète de conférence
                          <ExternalLink className="w-3 h-3" />
                        </a>{' '}
                        est organisée avec des conférenciers locaux et internationaux, et près de 200
                        participants de la région et de l'extérieur.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="text-primary font-bold text-2xl">2023</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">À la radio</h3>
                      <p className="text-foreground/70">
                        Plusieurs années plus tard, on en parle aussi à la radio 📻 avec une entrevue à{' '}
                        <a
                          href="https://ici.radio-canada.ca/ohdio/premiere/emissions/place-publique/episodes/750416/rattrapage-mardi-24-octobre-2023"
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary hover:underline inline-flex items-center gap-1"
                        >
                          Radio-Canada - Place publique
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Rejoignez la communauté</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Que vous soyez développeur, designer, étudiant ou simplement curieux, vous êtes les
              bienvenus à nos événements!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/archives">Voir les événements passés</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

