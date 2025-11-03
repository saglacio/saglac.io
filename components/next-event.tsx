import { getNextEvent, getAuthorAvatar } from '@/lib/data-loader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Calendar, MapPin, ExternalLink, Archive, Twitter, Github, Linkedin, Globe, ChevronDown } from 'lucide-react'
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
          aria-label={`Twitter — @${author.twitter}`}
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
          aria-label={`GitHub — ${author.github}`}
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
          aria-label={`${author.name} sur LinkedIn`}
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
          aria-label={`Site web de ${author.name}`}
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

          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl">{event.title}</CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Top Section: Event Info + Map */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left: Date, Time, Location Info */}
                <div className="space-y-4">
                  {/* Date & Time */}
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">
                        {new Date(event.date).toLocaleDateString('fr-CA', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                      <div className="text-sm text-foreground/70">
                        {new Date(event.date).toLocaleTimeString('fr-CA', {
                          hour: '2-digit',
                          minute: '2-digit',
                          timeZone: 'America/Toronto',
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      {event.location.url || event.location.facebook ? (
                        <a
                          href={event.location.url || event.location.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:underline hover:text-primary transition-colors"
                        >
                          {event.location.name}
                        </a>
                      ) : (
                        <div className="font-medium">{event.location.name}</div>
                      )}
                      {event.location.address && (
                        <div className="text-sm text-foreground/70 mt-1">{event.location.address}</div>
                      )}
                      
                      {/* Collapsible Location Description */}
                      {event.location.description && (
                        <Collapsible className="mt-3">
                          <CollapsibleTrigger className="flex items-center gap-1 text-sm text-primary hover:underline">
                            Voir les détails du lieu
                            <ChevronDown className="w-4 h-4 transition-transform ui-expanded:rotate-180" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-2">
                            <p className="text-sm text-foreground/70">{event.location.description}</p>
                          </CollapsibleContent>
                        </Collapsible>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right: Map */}
                {event.location.map && (
                  <div className="h-[280px] md:h-[300px] rounded-lg overflow-hidden border border-border">
                    <iframe
                      title="Emplacement de l'événement"
                      src={event.location.map}
                      className="w-full h-full border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                )}
              </div>

              {/* Event Description */}
              {event.description && (
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  <p className="text-foreground/80">{event.description}</p>
                </div>
              )}

              {/* Talks Section */}
              {event.talks && event.talks.length > 0 && (
                <div className="space-y-8">
                  <h3 className="font-semibold text-xl">Au programme</h3>
                  <div className="space-y-8">
                    {event.talks.map((talk, idx) => (
                      <div key={idx} className="border-l-4 border-primary/40 pl-6 py-2">
                        <div className="flex flex-col md:flex-row gap-6">
                          {/* Speakers Column */}
                          <div className="flex flex-row md:flex-col gap-4 md:gap-6">
                            {talk.authors.map((author) => (
                              <div key={author.id} className="flex flex-col items-center text-center">
                                <Avatar className="w-24 h-24 md:w-28 md:h-28 border-2 border-primary/20 shadow-md mb-3">
                                  <AvatarImage src={getAuthorAvatar(author)} alt={author.name} />
                                  <AvatarFallback className="text-2xl font-medium">{author.name[0]}</AvatarFallback>
                                </Avatar>
                                <div className="space-y-2">
                                  <div className="font-medium text-sm">{author.name}</div>
                                  <AuthorSocialLinks author={author} />
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Talk Content */}
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-xl mb-3">{talk.title}</h4>
                            {talk.description && (
                              <p className="text-base text-foreground/70 leading-relaxed">{talk.description}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                {event.event_url && (
                  <Button asChild className="flex-1 h-12 text-base">
                    <a href={event.event_url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Participer
                    </a>
                  </Button>
                )}
                <Button asChild variant="outline" className="flex-1 h-12 text-base">
                  <Link href="/archives">
                    <Archive className="w-4 h-4 mr-2" />
                    Événements passés
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
