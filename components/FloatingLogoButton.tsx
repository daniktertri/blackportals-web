'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface FloatingLogoButtonProps {
  alwaysVisible?: boolean
}

export default function FloatingLogoButton({ alwaysVisible = false }: FloatingLogoButtonProps) {
  const [isVisible, setIsVisible] = useState(alwaysVisible)

  useEffect(() => {
    if (alwaysVisible) {
      setIsVisible(true)
      return
    }

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
  }, [alwaysVisible])

  if (!isVisible) return null

  return (
    <Link 
      href="/" 
      className="floating-logo-button"
    >
      <Image
        src="/icon/bpicon.png"
        alt="BlackPortals"
        width={24}
        height={24}
        className="floating-logo-icon"
        priority
      />
      <span className="floating-logo-text">BlackPortals</span>
    </Link>
  )
}

