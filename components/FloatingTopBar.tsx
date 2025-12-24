'use client'

import FloatingLogoButton from './FloatingLogoButton'
import FloatingRequestButton from './FloatingRequestButton'

interface FloatingTopBarProps {
  showLogo?: boolean
  showRequestAccess?: boolean
  requestAccessPosition?: 'left' | 'right'
}

export default function FloatingTopBar({ 
  showLogo = true, 
  showRequestAccess = true,
  requestAccessPosition = 'right'
}: FloatingTopBarProps) {
  return (
    <div className="floating-top-bar">
      {showLogo && <FloatingLogoButton alwaysVisible={true} />}
      {showRequestAccess && <FloatingRequestButton position={requestAccessPosition} alwaysVisible={true} />}
    </div>
  )
}

