'use client'

import { useState, useEffect } from 'react'

export default function PortalsFeed() {
  const [showNewIndividual, setShowNewIndividual] = useState(false)
  const [showShareAnimation, setShowShareAnimation] = useState(false)
  const [showE2EAnswer, setShowE2EAnswer] = useState(false)

  useEffect(() => {
    // Show new individual after initial posts
    const timer1 = setTimeout(() => {
      setShowNewIndividual(true)
    }, 2000)

    // Show share animation after new individual appears
    const timer2 = setTimeout(() => {
      setShowShareAnimation(true)
    }, 4500)

    // Hide share animation and show E2E answer
    const timer3 = setTimeout(() => {
      setShowShareAnimation(false)
      setShowE2EAnswer(true)
    }, 6500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  return (
    <div className="portals-feed-container">
      {/* Existing Posts */}
      <div className="feed-post">
        <div className="post-header">
          <div className="post-avatar">You</div>
          <div className="post-author">
            <h4>You</h4>
            <span className="post-time">1d ago</span>
          </div>
        </div>
        <div className="post-content">
          <p>Just implemented some new features for the circles. The E2E encryption is working perfectly!</p>
        </div>
      </div>

      <div className="feed-post">
        <div className="post-header">
          <div className="post-avatar">Me</div>
          <div className="post-author">
            <h4>Me</h4>
            <span className="post-time">2d ago</span>
          </div>
        </div>
        <div className="post-content">
          <p>Discussing partnership opportunities with some members. The exclusivity of these circles really makes a difference.</p>
        </div>
      </div>

      {/* New Individual Post */}
      {showNewIndividual && (
        <div className={`feed-post new-individual ${showNewIndividual ? 'visible' : ''}`}>
          <div className="post-header">
            <div className="post-avatar new">NI</div>
            <div className="post-author">
              <h4>New Individual</h4>
              <span className="post-time">Just now</span>
            </div>
          </div>
          <div className="post-content">
            <p>
              <strong>Looking for a secure private way to communicate within my company</strong>
            </p>
          </div>
          {showShareAnimation && (
            <div className="post-actions">
              <button className="share-button animating">
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
          )}
        </div>
      )}

      {/* Share Animation with E2E Answer */}
      {showShareAnimation && showNewIndividual && (
        <div className="share-animation-overlay">
          <div className="share-options">
            <div className="share-option highlight">
              <div className="share-icon">💬</div>
              <span>Answer 1:1</span>
            </div>
            <div className="share-option">
              <div className="share-icon">👥</div>
              <span>Forward to Circle</span>
            </div>
            <div className="share-option">
              <div className="share-icon">📱</div>
              <span>iMessage</span>
            </div>
          </div>
        </div>
      )}

      {/* E2E Answer Message */}
      {showE2EAnswer && (
        <div className="e2e-answer-animation">
          <div className="e2e-bubble">
            <div className="e2e-header">
              <span>E2E Message to New Individual</span>
            </div>
            <div className="e2e-content">
              <p>You can apply directly with us for a private circle in BlackPortals:</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

