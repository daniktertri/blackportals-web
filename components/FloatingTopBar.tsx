'use client'

import FloatingLogoButton from './FloatingLogoButton'
import FloatingRequestButton from './FloatingRequestButton'
import { useState, useEffect } from 'react'

interface FloatingTopBarProps {
  showLogo?: boolean
  showRequestAccess?: boolean
  requestAccessPosition?: 'left' | 'right'
  alwaysVisible?: boolean
}

export default function FloatingTopBar({ 
  showLogo = true, 
  showRequestAccess = true,
  requestAccessPosition = 'right',
  alwaysVisible = false
}: FloatingTopBarProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // On mobile, always show buttons in the top bar
  const shouldAlwaysShow = alwaysVisible || isMobile

  return (
    <div className="floating-top-bar">
      {showLogo && <FloatingLogoButton alwaysVisible={shouldAlwaysShow} />}
      {showRequestAccess && <FloatingRequestButton position={requestAccessPosition} alwaysVisible={shouldAlwaysShow} />}
    </div>
  )
}

