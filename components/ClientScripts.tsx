'use client'

import { useEffect } from 'react'

export default function ClientScripts() {
  useEffect(() => {
    // Smooth Scrolling for Navigation Links
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      if (link && link.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const href = link.getAttribute('href')
        if (href) {
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          }
        }
      }
    }

    document.addEventListener('click', handleSmoothScroll)

    // Intersection Observer for Animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('style', 'opacity: 1; transform: translateY(0);')
        }
      })
    }, observerOptions)

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-item, .audience-item, .step, .privacy-feature')
    
    animatedElements.forEach(el => {
      el.setAttribute('style', 'opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease;')
      observer.observe(el)
    })

    // Portal Animation Enhancement
    const portalRings = document.querySelectorAll('.portal-ring')
    portalRings.forEach(ring => {
      ring.addEventListener('mouseenter', () => {
        ;(ring as HTMLElement).style.animationPlayState = 'paused'
      })
      
      ring.addEventListener('mouseleave', () => {
        ;(ring as HTMLElement).style.animationPlayState = 'running'
      })
    })

    // Parallax Effect for Hero Section
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const heroVisual = document.querySelector('.hero-visual')
      if (heroVisual) {
        ;(heroVisual as HTMLElement).style.transform = `translateY(${scrolled * 0.1}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Enhanced Button Hover Effects
    document.querySelectorAll('.btn').forEach(button => {
      button.addEventListener('mouseenter', () => {
        ;(button as HTMLElement).style.transform = 'translateY(-3px) scale(1.02)'
      })
      
      button.addEventListener('mouseleave', () => {
        ;(button as HTMLElement).style.transform = 'translateY(0) scale(1)'
      })
    })

    return () => {
      document.removeEventListener('click', handleSmoothScroll)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return null
}

