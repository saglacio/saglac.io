"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold">
              <span className="text-foreground">saglac</span>
              <span className="text-primary">.io</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#meetup" className="text-foreground/80 hover:text-primary transition-colors">
              Meetup
            </Link>
            <Link href="#a-propos" className="text-foreground/80 hover:text-primary transition-colors">
              À propos
            </Link>
            <Link href="#archives" className="text-foreground/80 hover:text-primary transition-colors">
              Archives
            </Link>
            <Link href="#faq" className="text-foreground/80 hover:text-primary transition-colors">
              FAQ
            </Link>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <a href="https://www.facebook.com/groups/saglac.io" target="_blank" rel="noopener noreferrer">
                Rejoindre
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link
              href="#meetup"
              className="text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Meetup
            </Link>
            <Link
              href="#a-propos"
              className="text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              À propos
            </Link>
            <Link
              href="#archives"
              className="text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Archives
            </Link>
            <Link
              href="#faq"
              className="text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full bg-transparent"
            >
              <a href="https://www.facebook.com/groups/saglac.io" target="_blank" rel="noopener noreferrer">
                Rejoindre
              </a>
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
