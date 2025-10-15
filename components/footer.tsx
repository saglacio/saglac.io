import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Mail, Twitter, Linkedin, MessageSquare } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Image
                src="/images/logos/SaglacIO_Logo_Meetups_Inverted.png"
                alt="Logo de SagLac IO"
                width={180}
                height={45}
                className="h-10 w-auto"
                unoptimized
              />
            </div>
            <p className="text-foreground/70 leading-relaxed">
              Communauté bénévole de passionnés de technologies numériques au Saguenay—Lac-Saint-Jean.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-foreground/70 hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-foreground/70 hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/archives" className="text-foreground/70 hover:text-primary transition-colors">
                  Archives
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-foreground/70 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Communauté</h4>
            <div className="space-y-3">
              <a
                href="https://www.facebook.com/groups/saglac.io"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
              >
                <Facebook size={18} />
                <span>Groupe Facebook</span>
              </a>
              <a
                href="https://www.facebook.com/saglacio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
              >
                <Facebook size={18} />
                <span>Page Facebook</span>
              </a>
              <a
                href="https://twitter.com/saglacio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
              >
                <Twitter size={18} />
                <span>Twitter</span>
              </a>
              <a
                href="https://www.linkedin.com/company/saglac-io"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://discord.gg/8pY5XVhvYM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
              >
                <MessageSquare size={18} />
                <span>Discord</span>
              </a>
              <a
                href="mailto:info@saglac.io"
                className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
              >
                <Mail size={18} />
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
