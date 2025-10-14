'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

interface NewsletterFormProps {
  standalone?: boolean
}

export function NewsletterForm({ standalone = false }: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setStatus('error')
      setMessage('Veuillez entrer une adresse courriel valide.')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      // Create form data for Mailchimp
      const formData = new FormData()
      formData.append('EMAIL', email)
      if (firstName) formData.append('FNAME', firstName)
      if (lastName) formData.append('LNAME', lastName)

      // Mailchimp endpoint
      const url =
        'https://saglac.us17.list-manage.com/subscribe/post?u=c9f3c71f1370a7e550caa409b&id=f45e751233&f_id=000640e2f0'

      // Submit to Mailchimp using a hidden iframe to avoid CORS
      const form = document.createElement('form')
      form.method = 'POST'
      form.action = url
      form.target = '_blank'
      form.style.display = 'none'

      const emailInput = document.createElement('input')
      emailInput.type = 'email'
      emailInput.name = 'EMAIL'
      emailInput.value = email
      form.appendChild(emailInput)

      if (firstName) {
        const fnameInput = document.createElement('input')
        fnameInput.type = 'text'
        fnameInput.name = 'FNAME'
        fnameInput.value = firstName
        form.appendChild(fnameInput)
      }

      if (lastName) {
        const lnameInput = document.createElement('input')
        lnameInput.type = 'text'
        lnameInput.name = 'LNAME'
        lnameInput.value = lastName
        form.appendChild(lnameInput)
      }

      // Honeypot field
      const honeypot = document.createElement('input')
      honeypot.type = 'text'
      honeypot.name = 'b_c9f3c71f1370a7e550caa409b_f45e751233'
      honeypot.tabIndex = -1
      honeypot.value = ''
      form.appendChild(honeypot)

      document.body.appendChild(form)
      form.submit()
      document.body.removeChild(form)

      // Show success message
      setStatus('success')
      setMessage(
        'Merci de votre inscription! Vérifiez votre boîte courriel pour confirmer votre abonnement.'
      )
      setEmail('')
      setFirstName('')
      setLastName('')

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    } catch (error) {
      setStatus('error')
      setMessage('Une erreur est survenue. Veuillez réessayer plus tard.')

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    }
  }

  const cardClassName = standalone
    ? 'border-primary/30 bg-primary/5'
    : 'mt-8 border-primary/30 bg-primary/5'

  return (
    <Card className={cardClassName}>
      <CardContent className="pt-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
            <Mail className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg">Infolettre</h3>
            <p className="text-sm text-foreground/70">
              Recevez les annonces d'événements et de conférences directement dans votre boîte courriel.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3">
            <Input
              type="text"
              placeholder="Prénom (optionnel)"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              disabled={status === 'loading'}
              className="bg-background"
            />
            <Input
              type="text"
              placeholder="Nom (optionnel)"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              disabled={status === 'loading'}
              className="bg-background"
            />
          </div>

          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="votre@courriel.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === 'loading'}
              className="flex-1 bg-background"
            />
            <Button type="submit" disabled={status === 'loading' || !email} className="px-6">
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Envoi...
                </>
              ) : (
                "S'inscrire"
              )}
            </Button>
          </div>

          {message && (
            <div
              className={`flex items-start gap-2 p-3 rounded-lg text-sm ${
                status === 'success'
                  ? 'bg-green-500/10 text-green-700 dark:text-green-400'
                  : 'bg-red-500/10 text-red-700 dark:text-red-400'
              }`}
            >
              {status === 'success' ? (
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              )}
              <p>{message}</p>
            </div>
          )}
        </form>

        <p className="text-xs text-foreground/50 mt-3">
          En vous inscrivant, vous acceptez de recevoir nos infolettres. Vous pouvez vous désabonner à
          tout moment.
        </p>
      </CardContent>
    </Card>
  )
}


