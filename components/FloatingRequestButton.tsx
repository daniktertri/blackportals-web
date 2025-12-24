'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function FloatingRequestButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroButton = document.getElementById('hero-join-button')
      if (heroButton) {
        const rect = heroButton.getBoundingClientRect()
        // Check if the hero button is out of view (scrolled past)
        const isHeroButtonVisible = rect.top >= 0 && rect.bottom <= window.innerHeight
        setIsVisible(!isHeroButtonVisible && window.scrollY > 100)
      } else {
        // Fallback: show after scrolling down a bit
        setIsVisible(window.scrollY > 300)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <Link 
      href="/waiting-list" 
      className="floating-request-button"
    >
      Request Access
    </Link>
  )
}

