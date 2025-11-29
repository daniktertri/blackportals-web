'use client'

import Navbar from '@/components/Navbar'
import { FormEvent, useState, useRef } from 'react'

export default function Contact() {
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
    const email = formData.get('email') as string
    const messageText = formData.get('message') as string

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message: messageText }),
      })

      let data
      try {
        data = await response.json()
      } catch (jsonError) {
        console.error('Failed to parse response JSON:', jsonError)
        const text = await response.text()
        console.error('Response text:', text)
        setMessage({ type: 'error', text: 'Invalid response from server. Please try again.' })
        setIsSubmitting(false)
        return
      }

      console.log('API Response:', { status: response.status, data })

      if (response.ok) {
        setMessage({ type: 'success', text: data.message || 'Message sent successfully!' })
        form.reset()
      } else {
        console.error('API Error:', data)
        setMessage({ type: 'error', text: data.error || 'Failed to send message. Please try again.' })
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
      <Navbar />
      <section className="contact-page">
        <div className="container">
          <div className="contact-page-content">
            <h1 className="page-title">Contact</h1>
            <p className="page-subtitle">Get in touch</p>
            <form ref={formRef} className="contact-form-simple" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="email" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="message" rows={5} required></textarea>
              </div>
              {message && (
                <div className={`form-message ${message.type === 'success' ? 'success' : 'error'}`}>
                  {message.text}
                </div>
              )}
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'sending...' : 'send'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

