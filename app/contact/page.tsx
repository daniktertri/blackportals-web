'use client'

import Navbar from '@/components/Navbar'
import { FormEvent } from 'react'

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <>
      <Navbar />
      <section className="contact-page">
        <div className="container">
          <div className="contact-page-content">
            <h1 className="page-title">Contact</h1>
            <p className="page-subtitle">Get in touch</p>
            <form className="contact-form-simple" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" placeholder="name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="message" rows={5} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                send
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

