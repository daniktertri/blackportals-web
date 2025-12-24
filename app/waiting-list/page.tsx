'use client'

import FloatingRequestButton from '@/components/FloatingRequestButton'
import FloatingLogoButton from '@/components/FloatingLogoButton'
import { FormEvent, useState, useRef } from 'react'

export default function WaitingList() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    const form = e.currentTarget || formRef.current
    if (!form) {
      setMessage({ type: 'error', text: 'Form not found. Please refresh the page.' })
      setIsSubmitting(false)
      return
    }

    const formData = new FormData(form)
    const name = formData.get('name') as string
    const surname = formData.get('surname') as string
    const email = formData.get('email') as string

    try {
      const response = await fetch('/api/waiting-list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, surname, email }),
      })

      // Read response as text first, then parse as JSON
      const responseText = await response.text()
      let data
      try {
        data = JSON.parse(responseText)
      } catch (jsonError) {
        console.error('Failed to parse response JSON:', jsonError)
        console.error('Response text:', responseText)
        setMessage({ type: 'error', text: 'Invalid response from server. Please try again.' })
        setIsSubmitting(false)
        return
      }

      console.log('API Response:', { status: response.status, data })

      if (response.ok) {
        setMessage({ type: 'success', text: data.message || 'Successfully joined waiting list!' })
        form.reset()
      } else {
        console.error('API Error:', data)
        setMessage({ type: 'error', text: data.error || 'Failed to join waiting list. Please try again.' })
      }
    } catch (error) {
      console.error('Fetch error:', error)
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      console.error('Error details:', errorMessage)
      setMessage({ type: 'error', text: `An error occurred: ${errorMessage}` })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <FloatingLogoButton alwaysVisible={true} />
      <FloatingRequestButton position="right" alwaysVisible={true} />
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">waiting list</h1>
            <p className="hero-subtitle">Join the exclusive network</p>
            <form ref={formRef} className="contact-form-simple" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="name" required />
              </div>
              <div className="form-group">
                <input type="text" name="surname" placeholder="surname" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="email" required />
              </div>
              {message && (
                <div className={`form-message ${message.type === 'success' ? 'success' : 'error'}`}>
                  {message.text}
                </div>
              )}
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'joining...' : 'join waiting list'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

