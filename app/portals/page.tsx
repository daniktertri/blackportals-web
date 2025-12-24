export default function Portals() {
  return (
    <>
      
      {/* Hero Section with Phone Mockup */}
      <section className="portals-hero-section">
        <div className="container">
          <div className="portals-hero-grid">
            <div className="portals-hero-content">
              <h1 className="portals-hero-title">Portals: Your new gateway to grow your network</h1>
              <p className="portals-hero-subtitle">
                Following your application, our reviewing team will add you to curated Portals where you will be able to connect with professionals who work in your field of interests.
              </p>
              <p className="portals-hero-description">
                Each Portal is a new opportunity to expand your business activities, discuss partnerships and share insights of your industry. BlackPortals exclusivity prevents unproductive noise and ensures that each minute spent within our community benefits you.
              </p>
            </div>
            <div className="portals-hero-mockup">
              <img 
                src="/mockup/intro.png" 
                alt="BlackPortals App" 
                className="mockup-image" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Phone Mockups */}
      <section className="portals-features-section">
        <div className="container">
          <h2 className="portals-section-title">Experience BlackPortals</h2>
          <p className="portals-section-subtitle">
            A premium networking experience designed for exceptional professionals
          </p>

          <div className="portals-features-grid">
            {/* Feature 1 */}
            <div className="portals-feature-item">
              <div className="portals-feature-mockup">
                <video 
                  src="/mockup/video1.mp4" 
                  className="mockup-image mockup-image-small" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  aria-label="Exclusive Circles"
                />
              </div>
              <div className="portals-feature-content">
                <h3>Exclusive Circles</h3>
                <p>Connect with curated networks of professionals who share your level of achievement and ambition. Each circle is carefully vetted to ensure quality interactions.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="portals-feature-item portals-feature-item-reverse">
              <div className="portals-feature-mockup">
                <video 
                  src="/mockup/video1.mp4" 
                  className="mockup-image mockup-image-small" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  aria-label="Private Messaging"
                />
              </div>
              <div className="portals-feature-content">
                <h3>Private Messaging</h3>
                <p>End-to-end encrypted conversations ensure your privacy. Communicate securely with peers, share insights, and build meaningful professional relationships.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="portals-feature-item">
              <div className="portals-feature-mockup">
                <video 
                  src="/mockup/video1.mp4" 
                  className="mockup-image mockup-image-small" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  aria-label="Secure & Private"
                />
              </div>
              <div className="portals-feature-content">
                <h3>Secure & Private</h3>
                <p>Post-quantum encryption, mandatory 2FA, and screenshot protection. Your professional network stays private and secure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="portals-showcase-section">
        <div className="container">
          <h2 className="portals-section-title">See it in action</h2>
          <div className="portals-showcase-grid">
            <div className="portals-showcase-mockup">
              <video 
                src="/mockup/video1.mp4" 
                className="mockup-image mockup-image-large" 
                autoPlay 
                loop 
                muted 
                playsInline
                aria-label="BlackPortals App"
              />
            </div>
            <div className="portals-showcase-mockup">
              <video 
                src="/mockup/video1.mp4" 
                className="mockup-image mockup-image-large" 
                autoPlay 
                loop 
                muted 
                playsInline
                aria-label="BlackPortals App"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

