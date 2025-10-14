import { Code2, Users, Calendar, Presentation } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const features = [
    {
      icon: Calendar,
      title: "Rencontres mensuelles",
      description: "Événements en formule 5 à 7 chaque mois, alternant entre Saguenay et Alma selon la demande.",
    },
    {
      icon: Presentation,
      title: "Présentations éclair",
      description: "Format court de 3 à 15 minutes pour partager découvertes, projets et bibliothèques open source.",
    },
    {
      icon: Code2,
      title: "Micro ouvert",
      description: "Proposez spontanément des sujets à discuter. Vote collectif pour retenir les meilleurs thèmes.",
    },
    {
      icon: Users,
      title: "Communauté inclusive",
      description: "Ouvert aux professionnels et amateurs. Entrée gratuite, seule la consommation est à vos frais.",
    },
  ]

  return (
    <section id="a-propos" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Une communauté tech <span className="text-primary">passionnée</span>
          </h2>
          <p className="text-lg text-foreground/80 text-pretty leading-relaxed">
            SagLacIO est une communauté bénévole qui réunit les passionnés de technologies numériques dans la région du
            Saguenay—Lac-Saint-Jean. Nous organisons des rencontres informelles axées sur le partage de connaissances et
            l'innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="bg-card border-primary/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Journée annuelle spéciale</h3>
              <p className="text-foreground/80 text-center leading-relaxed">
                Une fois par année, nous organisons une journée complète dédiée à des présentations plus approfondies
                touchant au web, au jeu vidéo, et au développement logiciel en général. Une place spéciale est réservée
                aux présentations sur Linux et NixOS.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
