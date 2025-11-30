'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)

  const navLinks = [
    { href: '/', label: 'home' },
    { href: '/about', label: 'about' },
    { href: '/portals', label: 'portals' },
    { href: '/contact', label: 'contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const updateIndicator = (linkElement: HTMLElement | null, animate: boolean = true) => {
    const indicator = indicatorRef.current
    if (!indicator) return

    // Disable transition if we don't want animation
    if (!animate) {
      indicator.style.transition = 'none'
    } else {
      indicator.style.transition = ''
    }

    const targetLink = linkElement || (document.querySelector('.nav-menu a.active') as HTMLElement)
    
    if (targetLink) {
      const menu = targetLink.closest('.nav-menu') as HTMLElement
      if (menu) {
        const menuRect = menu.getBoundingClientRect()
        const linkRect = targetLink.getBoundingClientRect()
        const left = linkRect.left - menuRect.left
        const width = linkRect.width
        indicator.style.left = `${left}px`
        indicator.style.width = `${width}px`
      }
    }

    // Re-enable transition after a brief moment if we disabled it
    if (!animate) {
      setTimeout(() => {
        if (indicator) {
          indicator.style.transition = ''
        }
      }, 50)
    }
  }

  useEffect(() => {
    // Update indicator position instantly when pathname changes (no animation)
    if (!hoveredLink) {
      setTimeout(() => updateIndicator(null, false), 0)
    }
  }, [pathname])

  useEffect(() => {
    // Update indicator position when hover changes (with animation)
    if (hoveredLink) {
      const hoveredElement = document.querySelector(`.nav-menu a[href="${hoveredLink}"]`) as HTMLElement
      if (hoveredElement) {
        updateIndicator(hoveredElement, true)
      }
    } else {
      // Return to active tab with animation when leaving hover
      setTimeout(() => updateIndicator(null, true), 0)
    }
  }, [hoveredLink])

  const handleLinkHover = (href: string, element: HTMLElement) => {
    setHoveredLink(href)
  }

  const handleLinkLeave = () => {
    setHoveredLink(null)
  }

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" className="nav-logo" onClick={handleLogoClick}>
            <div className="logo-symbol">
              <div className="logo-ring outer"></div>
              <div className="logo-ring inner"></div>
            </div>
            <h2 className="logo-text">blackportals</h2>
          </Link>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={isActive(link.href) ? 'active' : ''}
                  onMouseEnter={(e) => handleLinkHover(link.href, e.currentTarget)}
                  onMouseLeave={handleLinkLeave}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <div className="nav-indicator" ref={indicatorRef}></div>
          </ul>
          <div 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div 
          className="menu-overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  )
}

