'use client'

import { useState, useEffect } from 'react'

export default function PublicFeed() {
  const [showShareAnimation, setShowShareAnimation] = useState(false)
  const [showForward, setShowForward] = useState(false)
  const [showCircleForward, setShowCircleForward] = useState(false)

  useEffect(() => {
    // Start animation sequence after component mounts
    const timer1 = setTimeout(() => {
      setShowShareAnimation(true)
    }, 1500)

    const timer2 = setTimeout(() => {
      setShowShareAnimation(false)
      setShowForward(true)
    }, 3500)

    const timer3 = setTimeout(() => {
      setShowForward(false)
      setShowCircleForward(true)
    }, 5500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  return (
    <div className="public-feed-container">
      <div className="feed-post">
        <div className="post-header">
          <div className="post-avatar">HP</div>
          <div className="post-author">
            <h4>Hubert Pillegand</h4>
            <span className="post-time">2h ago</span>
          </div>
        </div>
        <div className="post-content">
          <p>
            <strong>Exclusive:</strong> Jamie Dimon&apos;s JP Morgan to invest in BlackPortals A-series funding!
          </p>
        </div>
        <div className="post-actions">
          <button 
            className={`share-button ${showShareAnimation ? 'animating' : ''}`}
            onClick={() => setShowShareAnimation(true)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 8.33333C16.3807 8.33333 17.5 7.21404 17.5 5.83333C17.5 4.45262 16.3807 3.33333 15 3.33333C13.6193 3.33333 12.5 4.45262 12.5 5.83333C12.5 7.21404 13.6193 8.33333 15 8.33333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 13.3333C6.38071 13.3333 7.5 12.214 7.5 10.8333C7.5 9.45262 6.38071 8.33333 5 8.33333C3.61929 8.33333 2.5 9.45262 2.5 10.8333C2.5 12.214 3.61929 13.3333 5 13.3333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 13.3333C16.3807 13.3333 17.5 12.214 17.5 10.8333C17.5 9.45262 16.3807 8.33333 15 8.33333C13.6193 8.33333 12.5 9.45262 12.5 10.8333C12.5 12.214 13.6193 13.3333 15 13.3333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.15833 9.65833L12.8417 7.15833" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.15833 10.3417L12.8417 12.8417" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Share
          </button>
        </div>
      </div>

      {/* Share Animation Overlay */}
      {showShareAnimation && (
        <div className="share-animation-overlay">
          <div className="share-options">
            <div className="share-option">
              <div className="share-icon">📱</div>
              <span>iMessage</span>
            </div>
            <div className="share-option">
              <div className="share-icon">👥</div>
              <span>Forward to Circle</span>
            </div>
            <div className="share-option">
              <div className="share-icon">💬</div>
              <span>E2E Message</span>
            </div>
          </div>
        </div>
      )}

      {/* Forward to iMessage */}
      {showForward && (
        <div className="forward-animation">
          <div className="imessage-bubble">
            <div className="imessage-header">
              <span>Forwarded message</span>
            </div>
            <div className="imessage-content">
              <strong>Exclusive:</strong> Jamie Dimon&apos;s JP Morgan to invest in BlackPortals A-series funding!
            </div>
          </div>
        </div>
      )}

      {/* Forward to Circle */}
      {showCircleForward && (
        <div className="circle-forward-animation">
          <div className="circle-forward-bubble">
            <div className="circle-forward-header">
              <span>Forwarded to BlackPortals</span>
            </div>
            <div className="circle-forward-content">
              <div className="forwarded-post">
                <strong>Exclusive:</strong> Jamie Dimon&apos;s JP Morgan to invest in BlackPortals A-series funding!
              </div>
              <div className="forward-comment">
                Finally made it
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

