'use client'

import { useEffect } from 'react'

interface PrivacyModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="privacy-modal-backdrop"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="privacy-modal">
        <div className="privacy-modal-content">
          {/* Header */}
          <div className="privacy-modal-header">
            <h2 className="privacy-modal-title">Privacy</h2>
            <button 
              className="privacy-modal-close"
              onClick={onClose}
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="privacy-modal-body">
            <div className="privacy-intro">
              <p className="privacy-lead">
                Privacy is the core foundation of BlackPortals
              </p>
            </div>

            <div className="privacy-text-content">
              <p>
                From the application process to all your posts, the exclusivity of BlackPortals makes it a safe place to gather your thoughts around like-minded professionals.
              </p>
              
              <p>
                Each conversation, whether in groups or 1:1 messages, is end-to-end encrypted with post-quantum protocols. Your communications remain private and secure.
              </p>
              
              <p>
                Each report of a BlackPortals member who you think might not suit our model by their attitude will be examined within 8 hours and may lead to account termination. We take the greatest care of the safety and privacy of all our members to make BlackPortals a serious networking place.
              </p>
              
              <p>
                Screenshots are disabled throughout the app to ensure privacy and can lead to permanent ban if attempted.
              </p>
            </div>

            {/* Screenshot placeholder */}
            <div className="privacy-screenshot">
              <div className="privacy-screenshot-placeholder">
                <div className="privacy-screenshot-message">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                  <p>Screenshot not available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

