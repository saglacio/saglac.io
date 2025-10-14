import Link from "next/link"
import { Facebook, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-foreground">saglac</span>
              <span className="text-primary">.io</span>
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              Communauté bénévole de passionnés de technologies numériques au Saguenay—Lac-Saint-Jean.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#meetup" className="text-foreground/70 hover:text-primary transition-colors">
                  Meetup
                </Link>
              </li>
              <li>
                <Link href="#a-propos" className="text-foreground/70 hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#archives" className="text-foreground/70 hover:text-primary transition-colors">
                  Archives
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-foreground/70 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="https://www.facebook.com/groups/saglac.io"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
              >
                <Facebook size={20} />
                <span>Groupe Facebook</span>
              </a>
              <a
                href="mailto:info@saglac.io"
                className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
              >
                <Mail size={20} />
                <span>info@saglac.io</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} SagLac IO. Tous droits réservés.</p>
          <p className="mt-2">Événements gratuits et ouverts à tous les passionnés de technologie.</p>
        </div>
      </div>
    </footer>
  )
}
