'use client'

import Link from 'next/link'
import Image from 'next/image'

interface FloatingLogoButtonProps {
  alwaysVisible?: boolean
}

export default function FloatingLogoButton({ alwaysVisible = false }: FloatingLogoButtonProps) {
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

