import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { QrCode, Sparkles, Home } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Code QR 🤯 - SagLac IO',
  description: 'Vous avez trouvé notre easter egg!',
  robots: 'noindex, nofollow', // Easter egg - don't index
}

export default function QRCodePage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-24 min-h-[calc(100vh-200px)] flex items-center justify-center bg-gradient-to-b from-background via-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Easter Egg Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full border-2 border-primary/20 animate-pulse">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">Easter Egg Découvert!</span>
                <Sparkles className="w-4 h-4" />
              </div>
            </div>

            <Card className="overflow-hidden border-2 border-primary/20 shadow-xl">
              <CardContent className="p-8 md:p-12">
                {/* Title */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <QrCode className="w-8 h-8 text-primary" />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Wow un <span className="text-primary">code QR</span>!?
                  </h1>
                </div>

                {/* Mind Blown GIF */}
                <div className="flex justify-center mb-8">
                  <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden border-4 border-primary/20 shadow-lg">
                    <Image
                      src="/images/qrcode-mind-blown.gif"
                      alt="QR Code Mind Blown"
                      fill
                      className="object-contain"
                      unoptimized // GIF needs unoptimized flag
                      priority
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-6 text-center mb-8">
                  <p className="text-2xl md:text-3xl font-bold text-primary">
                    QR Code Mind Blown 🤯
                  </p>

                  <div className="space-y-4 text-lg md:text-xl text-foreground/80">
                    <p className="font-medium">
                      Les gens utilisent ça encore?
                    </p>
                    <p className="text-primary font-semibold">
                      Vous l'avez utilisé, clairement! 😄
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-base md:text-lg leading-relaxed">
                      Prenez le temps de visiter notre site, parce que vous avez le temps on dirait, 
                      pour en apprendre davantage sur l'événement.
                    </p>
                  </div>
                </div>

                {/* Fun Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-secondary/30 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary">🎯</div>
                    <div className="text-xs md:text-sm text-foreground/60 mt-1">Vous êtes</div>
                    <div className="text-sm md:text-base font-semibold">Curieux</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary">🚀</div>
                    <div className="text-xs md:text-sm text-foreground/60 mt-1">Niveau</div>
                    <div className="text-sm md:text-base font-semibold">Pro QR</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary">⭐</div>
                    <div className="text-xs md:text-sm text-foreground/60 mt-1">Badge</div>
                    <div className="text-sm md:text-base font-semibold">Débloqué</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="group">
                    <Link href="/">
                      <Home className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      Retour à l'accueil
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/archives">
                      📚 Voir les archives
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="https://perdu.com">
                    🗺️ Perdu?
                    </Link>
                  </Button>
                </div>

                {/* Secret Message */}
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-xs text-center text-foreground/40">
                    <span className="italic">Psst... Vous faites maintenant partie du club secret des scanneurs de QR codes. 
                    Bienvenue parmi nous!</span> 🤫
                    </p>
                </div>
              </CardContent>
            </Card>

            {/* Fun Tech Quote */}
            <div className="mt-8 text-center">
              <blockquote className="text-sm italic text-foreground/60">
                "Le code QR, c'est comme les vinyles, c'est revenu à la mode et on sait pas vraiment pourquoi."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

