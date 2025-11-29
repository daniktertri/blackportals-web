'use client'

import Navbar from '@/components/Navbar'
import { FormEvent, useState } from 'react'

export default function WaitingList() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    const formData = new FormData(e.currentTarget)
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

      const data = await response.json()

      if (response.ok) {
        setMessage({ type: 'success', text: data.message || 'Successfully joined waiting list!' })
        e.currentTarget.reset()
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to join waiting list. Please try again.' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Navbar />
      <section className="hero hero-liquid">
        <div className="liquid-background">
          <div className="liquid-blob blob-1"></div>
          <div className="liquid-blob blob-2"></div>
          <div className="liquid-blob blob-3"></div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">waiting list</h1>
            <p className="hero-subtitle">Join the exclusive network</p>
            <form className="contact-form-simple" onSubmit={handleSubmit}>
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

