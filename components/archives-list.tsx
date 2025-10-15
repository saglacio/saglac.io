'use client'

import { useState, useMemo, useRef, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, ExternalLink, Search, ChevronLeft, ChevronRight, FileText, Twitter, Github, Linkedin, Globe } from 'lucide-react'
import type { ResolvedEvent, Author } from '@/lib/types'

interface ArchivesListProps {
  events: ResolvedEvent[]
}

const ITEMS_PER_PAGE = 10

// Helper function to get author avatar URL
function getAuthorAvatar(author: Author): string {
  if (author.avatar) {
    return author.avatar
  }
  if (author.github) {
    return `https://github.com/${author.github}.png`
  }
  if (author.twitter) {
    return `https://twitter.com/${author.twitter}/profile_image?size=normal`
  }
  return '/images/default_user_icon.png'
}

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

export function ArchivesList({ events }: ArchivesListProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const eventsTopRef = useRef<HTMLDivElement>(null)

  // Filter events based on search query
  const filteredEvents = useMemo(() => {
    if (!searchQuery.trim()) return events

    const query = searchQuery.toLowerCase()
    return events.filter((event) => {
      // Search in title
      if (event.title?.toLowerCase().includes(query)) return true

      // Search in location
      if (event.location?.name?.toLowerCase().includes(query)) return true

      // Search in talks
      if (event.talks) {
        for (const talk of event.talks) {
          if (talk.title?.toLowerCase().includes(query)) return true
          if (talk.description?.toLowerCase().includes(query)) return true

          // Search in author names
          if (talk.authors) {
            for (const author of talk.authors) {
              if (author.name?.toLowerCase().includes(query)) return true
            }
          }
        }
      }

      return false
    })
  }, [events, searchQuery])

  // Calculate pagination
  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedEvents = filteredEvents.slice(startIndex, endIndex)

  // Reset to page 1 when search changes
  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    setCurrentPage(1)
  }

  // Scroll to top of events when page changes
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
    eventsTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // Pagination component for reusability
  const PaginationControls = () => {
    if (totalPages <= 1) return null

    return (
      <div className="flex items-center justify-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Précédent
        </Button>

        <div className="flex items-center gap-1">
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNum
            if (totalPages <= 5) {
              pageNum = i + 1
            } else if (currentPage <= 3) {
              pageNum = i + 1
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i
            } else {
              pageNum = currentPage - 2 + i
            }

            return (
              <Button
                key={pageNum}
                variant={currentPage === pageNum ? 'default' : 'outline'}
                size="sm"
                onClick={() => handlePageChange(pageNum)}
                className="w-10"
              >
                {pageNum}
              </Button>
            )
          })}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
        >
          Suivant
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Scroll anchor */}
      <div ref={eventsTopRef} className="scroll-mt-24" />
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
        <Input
          type="text"
          placeholder="Rechercher par titre, lieu, présentation ou auteur..."
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="pl-10 py-6 text-base"
        />
      </div>

      {/* Results count and top pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-sm text-foreground/60">
          {filteredEvents.length === events.length ? (
            <span>{events.length} événements au total</span>
          ) : (
            <span>
              {filteredEvents.length} résultat{filteredEvents.length !== 1 ? 's' : ''} sur {events.length}{' '}
              événements
            </span>
          )}
        </div>
        <PaginationControls />
      </div>

      {/* Events List */}
      {paginatedEvents.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-foreground/60">Aucun événement trouvé pour votre recherche.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {paginatedEvents.map((event) => (
            <Card key={event.slug} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{event.title}</CardTitle>
                    <CardDescription className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4" />
                        {new Date(event.date).toLocaleDateString('fr-CA', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        {event.location.name}
                      </div>
                    </CardDescription>
                  </div>
                  {event.event_url && (
                    <a
                      href={event.event_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Événement
                    </a>
                  )}
                </div>
              </CardHeader>

              {event.talks && event.talks.length > 0 && (
                <CardContent>
                  <h3 className="font-semibold mb-3">Présentations:</h3>
                  <div className="space-y-4">
                        {event.talks.map((talk, idx) => {
                          const slides = talk.slides
                            ? Array.isArray(talk.slides)
                              ? talk.slides
                              : [talk.slides]
                            : []

                          return (
                            <div key={idx} className="border-l-2 border-primary/30 pl-4">
                              <h4 className="font-medium mb-2">{talk.title}</h4>
                              {talk.description && (
                                <p className="text-sm text-foreground/70 mb-2">{talk.description}</p>
                              )}
                              <div className="flex items-center gap-2 flex-wrap mb-2">
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
                              {slides.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                  {slides.map((slideUrl, slideIdx) => (
                                    <a
                                      key={slideIdx}
                                      href={slideUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline bg-primary/10 px-2 py-1 rounded"
                                    >
                                      <FileText className="w-3 h-3" />
                                      Slides {slides.length > 1 ? `${slideIdx + 1}` : ''}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          )
                        })}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      )}

      {/* Bottom Pagination */}
      <div className="pt-4">
        <PaginationControls />
      </div>
    </div>
  )
}

