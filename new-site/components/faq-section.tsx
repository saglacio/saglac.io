import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqData = [
    {
      category: "L'événement",
      questions: [
        {
          question: "Combien coûte un billet pour participer?",
          answer:
            "C'est totalement GRATUIT. Il n'y a pas de billet de participation et c'est ouvert au public. Ceci dit, bien qu'optionnel, si vous désirez manger et prendre une consommation, c'est à vos frais.",
        },
        {
          question: "À qui s'adresse l'événement?",
          answer:
            "À tous les passionnés d'informatique, autant professionnels qu'amateurs. Bien que les sujets gravitent autour du développement logiciel et de l'administration de système, nous avons régulièrement d'autres sujets qui émergent, comme le jeux vidéos, la sécurité informatique, ainsi que l'Internet of Things.",
        },
        {
          question: "C'est où?",
          answer:
            "En alternance entre Saguenay et Alma selon la demande, l'événement se déroule normalement dans une salle privé d'un restaurant. Quelques événements spéciaux se déroulent à l'UQAC ou ailleurs.",
        },
        {
          question: "C'est quand?",
          answer:
            "L'événement est mensuel et les dates sont déterminés quelques semaines à l'avance selon la disponibilité des organisateurs et des présentateurs.",
        },
        {
          question: "Ça dure combien de temps normalement?",
          answer:
            "L'événement débute à 18h00 et se termine normalement à la fermeture de l'endroit. Nous invitons les gens à rester après les présentations pour discuter et boire une bière.",
        },
        {
          question: "Est-ce que je peux faire du résautage pour mon entreprise ou du recrutement?",
          answer:
            "Nous encourageons les entreprises à venir à l'événement et à parler des postes à combler. Par contre, nous ne tolérons pas les recruteurs qui harcèlent les participants durant et en dehors de l'événement.",
        },
      ],
    },
    {
      category: "Présentations",
      questions: [
        {
          question: "Qui a le droit de parler?",
          answer:
            "Tout le monde est invité à proposer une présentation pour un événement futur. De plus, il est encouragé d'intéragir (avec respect) et de poser des questions durant les présentations.",
        },
        {
          question: "Combien de temps dure une présentation?",
          answer:
            "Deux formats s'offrent aux présentateurs, soient le survol rapide de 15 minutes (talk) ou la présentation spontanée de 5 minutes (lightning talk).",
        },
        {
          question: "À quels types de sujets dois-je m'attendre?",
          answer:
            "Une lib JS, un nouveau framework, un language ésotérique et/ou fonctionnel, un nouveau projet arduino, etc. Le sujet d'une présentation doit intéresser la majorité, il est donc découragé de faire un pitch de vente.",
        },
        {
          question: "J'aimerais présenter mais je ne sais pas trop comment m'y prendre.",
          answer:
            "Plusieurs outils existent pour aider à faire des présentations rapidement. La communauté du Saglac IO peut aussi te diriger vers les meilleurs outils.",
        },
      ],
    },
    {
      category: "L'organisation",
      questions: [
        {
          question: 'C\'est quoi le "IO" dans SagLac IO?',
          answer:
            'Input/Output ou 2 en binaire, comme le numéro de la région administrative. Cours de prononciation anglophone en 2 secondes: IO se prononce "ail eau".',
        },
        {
          question: "Qui sont les membres de l'organisation?",
          answer:
            "Personne n'est spécifiquement élu membre de l'organisation. Le Saglac IO existe grâce à un groupe de bénévoles.",
        },
        {
          question: "Comment puis-je m'impliquer?",
          answer:
            "Joins-toi au groupe Facebook et/ou au Slack et propose ton aide! Il est aussi possible de devenir un partenaire de l'événement suite à une entente avec une majorité de l'organisation.",
        },
        {
          question: "Comment puis-je aider l'événement?",
          answer:
            "La façon la plus facile d'aider est de parler de l'événement à vos amis et collègues du domaine de l'informatique. Vous pouvez aussi donner un coup de main dans les tâches autours de l'événement. En tant qu'employeur, vous pouvez encouragez vos employés à participer.",
        },
      ],
    },
  ]

  return (
    <section id="faq" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Questions <span className="text-primary">fréquentes</span>
            </h2>
            <p className="text-lg text-foreground/80">Tout ce que vous devez savoir sur SagLac IO</p>
          </div>

          <div className="space-y-8">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold mb-4 text-primary">{category.category}</h3>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`${categoryIndex}-${index}`}
                      className="bg-card border border-border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left hover:text-primary">{item.question}</AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
