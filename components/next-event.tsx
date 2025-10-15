import { getNextEvent, getAuthorAvatar } from '@/lib/data-loader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Calendar, MapPin, ExternalLink, Archive, Twitter, Github, Linkedin, Globe } from 'lucide-react'
import Link from 'next/link'
import type { Author } from '@/lib/types'

// Component to display author social links
function AuthorSocialLinks({ author }: { author: Author }) {
  return (
    <div className="flex items-center gap-1">
      {author.twitter && (
        <a
          href={`https://twitter.com/${author.twitter}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/60 hover:text-primary transition-colors"
          title={`@${author.twitter} sur Twitter`}
        >
          <Twitter className="w-3.5 h-3.5" />
        </a>
      )}
      {author.github && (
        <a
          href={`https://github.com/${author.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/60 hover:text-primary transition-colors"
          title={`${author.github} sur GitHub`}
        >
          <Github className="w-3.5 h-3.5" />
        </a>
      )}
      {author.linkedin && (
        <a
          href={`https://linkedin.com/in/${author.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/60 hover:text-primary transition-colors"
          title={`${author.name} sur LinkedIn`}
        >
          <Linkedin className="w-3.5 h-3.5" />
        </a>
      )}
      {author.website && (
        <a
          href={author.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/60 hover:text-primary transition-colors"
          title={`Site web de ${author.name}`}
        >
          <Globe className="w-3.5 h-3.5" />
        </a>
      )}
    </div>
  )
}

export function NextEvent() {
  const event = getNextEvent()

  if (!event) {
    return (
      <section id="meetup" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Prochain <span className="text-primary">événement</span>
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              Aucun événement à venir pour le moment. Restez à l'affût!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="https://www.facebook.com/groups/saglac.io" target="_blank" rel="noopener noreferrer">
                  Rejoindre le groupe Facebook
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/archives">
                  <Archive className="w-4 h-4 mr-2" />
                  Voir les événements passés
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="meetup" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Prochain <span className="text-primary">événement</span>
            </h2>
          </div>

          <Card className="overflow-hidden border-2 border-primary/20">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-3xl">{event.title}</CardTitle>
              <div className="space-y-2 text-base mt-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {new Date(event.date).toLocaleDateString('fr-CA', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {event.location.url || event.location.facebook ? (
                    <a
                      href={event.location.url || event.location.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {event.location.name}
                    </a>
                  ) : (
                    <span>{event.location.name}</span>
                  )}
                </div>
                {event.location.address && (
                  <div className="text-sm text-foreground/70 ml-7">{event.location.address}</div>
                )}
              </div>
            </CardHeader>

            {/* Map and Event Details Grid */}
            {event.location.map && (
              <div className="grid md:grid-cols-2 gap-0">
                {/* Google Maps Embed */}
                <div className="w-full h-[300px] md:h-[400px]">
                  <iframe
                    title="Event Location Map"
                    src={event.location.map}
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Event Details */}
                <CardContent className="py-6">
                  {event.description && (
                    <div className="mb-6 prose prose-sm max-w-none dark:prose-invert">
                      <p>{event.description}</p>
                    </div>
                  )}

                  {event.location.description && (
                    <div className="mb-6 p-4 bg-secondary/30 rounded-lg">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        À propos du lieu
                      </h3>
                      <p className="text-sm text-foreground/70">{event.location.description}</p>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3">
                    {event.event_url && (
                      <Button asChild size="default" className="flex-1">
                        <a href={event.event_url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Participer
                        </a>
                      </Button>
                    )}
                    <Button asChild size="default" variant="outline" className="flex-1">
                      <Link href="/archives">
                        <Archive className="w-4 h-4 mr-2" />
                        Archives
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            )}

            {/* Talks Section - Full Width */}
            {event.talks && event.talks.length > 0 && (
              <CardContent className={event.location.map ? 'pt-0' : 'pt-6'}>
                {event.description && !event.location.map && (
                  <div className="mb-6 prose prose-sm max-w-none dark:prose-invert">
                    <p>{event.description}</p>
                  </div>
                )}

                <div className="space-y-4 mb-6">
                  <h3 className="font-semibold text-lg">Au programme:</h3>
                  {event.talks.map((talk, idx) => (
                    <div key={idx} className="border-l-2 border-primary/30 pl-4">
                      <h4 className="font-medium">{talk.title}</h4>
                      {talk.description && (
                        <p className="text-sm text-foreground/70 mb-2">{talk.description}</p>
                      )}
                      <div className="flex items-center gap-2 flex-wrap mt-2">
                        <span className="text-sm text-foreground/60">Par:</span>
                        {talk.authors.map((author) => (
                          <div key={author.id} className="flex items-center gap-2 bg-secondary/30 rounded-full pr-2 py-0.5">
                            <Avatar className="w-6 h-6">
                              <AvatarImage src={getAuthorAvatar(author)} alt={author.name} />
                              <AvatarFallback>{author.name[0]}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm">{author.name}</span>
                            <AuthorSocialLinks author={author} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {!event.location.map && (
                  <div className="flex flex-col sm:flex-row gap-4">
                    {event.event_url && (
                      <Button asChild size="lg" className="flex-1 sm:flex-initial">
                        <a href={event.event_url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Voir l'événement Facebook
                        </a>
                      </Button>
                    )}
                    <Button asChild size="lg" variant="outline" className="flex-1 sm:flex-initial">
                      <Link href="/archives">
                        <Archive className="w-4 h-4 mr-2" />
                        Événements passés
                      </Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}
