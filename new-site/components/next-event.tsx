import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ExternalLink, User } from "lucide-react"

export function NextEvent() {
  // Example event data - in a real app, this would come from a CMS or API
  const nextEvent = {
    title: "IO décembre 2022 à Alma!",
    date: "2022-12-14T23:00:00.000Z",
    location: "Café du Clocher (Alma)",
    locationAddress: "19 Rue St Joseph S, Alma, Québec G8B 3E2",
    eventUrl: "https://www.facebook.com/events/1533854587129087",
    talks: [
      {
        title: "Terraform: gérer ses ressources cloud avec du code",
        authors: ["Jim Plourde"],
        description:
          "Le cloud est complexe d'approche. C'est encore plus vrai lorsqu'on veut utiliser différents environnements (dev, prod, qa, etc.) pour un projet. Nous allons découvrir l'un des outils \"Code as Infrastructure\" qui nous permettent d'aller au-delà de l'implémentation manuelle.",
      },
      {
        title: "Nix pour les nuls",
        authors: ["Martin Lavoie"],
        description:
          "Présentation de l'univers du \"build system\" Nix à partir de l'exécution d'une commande jusqu'à un déploiement sur l'infonuagique. Nous commencerons par les questions de base: quoi, comment, quand, qui et pourquoi.",
      },
      {
        title: "Qwik: Le future des framework JS",
        authors: ["Émile Bergeron"],
        description:
          "Avec des pages de plus en plus lourdes en JavaScript, Qwik est potentiellement la solution à cette tendance.",
      },
    ],
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("fr-CA", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <section id="meetup" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Prochain <span className="text-primary">événement</span>
            </h2>
            <p className="text-lg text-foreground/80">Rejoignez-nous pour notre prochaine rencontre technologique</p>
          </div>

          <Card className="bg-card border-border mb-8">
            <CardHeader>
              <CardTitle className="text-3xl">{nextEvent.title}</CardTitle>
              <div className="flex flex-col gap-3 mt-4 text-foreground/80">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>{formatDate(nextEvent.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>
                    {nextEvent.location} - {nextEvent.locationAddress}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                <a href={nextEvent.eventUrl} target="_blank" rel="noopener noreferrer">
                  Voir l'événement sur Facebook
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Présentations</h3>
            {nextEvent.talks.map((talk, index) => (
              <Card key={index} className="bg-secondary border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3">{talk.title}</h4>
                  <div className="flex items-center gap-2 mb-3 text-sm text-primary">
                    <User className="w-4 h-4" />
                    <span>{talk.authors.join(", ")}</span>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">{talk.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
