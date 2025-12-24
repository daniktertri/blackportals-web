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

