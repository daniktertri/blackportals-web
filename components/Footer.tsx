'use client'

import Link from 'next/link'
import { useState } from 'react'
import PrivacyModal from './PrivacyModal'

export default function Footer() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false)

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-links">
            <Link href="/waiting-list" className="footer-link">
              Join BP
            </Link>
            <button 
              className="footer-link footer-link-button"
              onClick={() => setIsPrivacyModalOpen(true)}
            >
              Privacy
            </button>
            <Link href="/about" className="footer-link">
              About us
            </Link>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 BlackPortals. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      <PrivacyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
    </>
  )
}

