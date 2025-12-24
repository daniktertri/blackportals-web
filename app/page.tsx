import Footer from '@/components/Footer'
import StarfieldTunnel from '@/components/StarfieldTunnel'
import FloatingTopBar from '@/components/FloatingTopBar'
import ScrollAnimation from '@/components/ScrollAnimation'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <FloatingTopBar showLogo={true} showRequestAccess={true} requestAccessPosition="right" />

      {/* Hero Section */}
      <section id="home" className="hero">
        <StarfieldTunnel />
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">BlackPortals</h1>
            <p className="hero-subtitle">
              A private, application-based, professional network
            </p>
            <p className="hero-description">
              Quality connections. Encrypted communications. No noise.
            </p>
            <div className="hero-buttons" id="hero-join-button">
              <Link href="/waiting-list" className="btn btn-primary">
                Join waiting list
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is BlackPortals */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <ScrollAnimation direction="up" delay={0}>
              <span className="section-category">Network</span>
              <h2 className="section-title">What is BlackPortals</h2>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={100}>
              <div className="about-text">
                <p className="about-lead">
                  BlackPortals is an exclusive private network for executives, senior professionals, and
                  high-potential individuals.
                </p>
                <p>
                  Membership is reviewed to uphold high standard and ensure relevance. BlackPortals is
                  designed for focused, direct interactions among peers at exceptional levels of
                  responsibility.
                </p>
                <p>
                  Privacy and security are fundamental. All communications are post-quantum encrypted.
                  The platform provides a discreet environment for collaboration and professional
                  exchange without advertisements or unnecessary noise.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* About Page Content */}
      <section className="about-page">
        <div className="container">
          <div className="about-page-content">
            <div className="about-content">
              {/* Failure of Other Networks */}
              <div className="about-section">
                <ScrollAnimation direction="up" delay={0}>
                  <h2 className="section-heading" data-category="Exclusivity">Why BlackPortals?</h2>
                </ScrollAnimation>
                <ScrollAnimation direction="up" delay={150}>
                  <div className="about-text">
                    <p>
                      Traditional professional networks have become cluttered with noise, irrelevant connections, and endless spam.
                      The model has failed by letting quantity win over quality and transforming that space into a self contemplative
                      haven for wannabe professionals.
                    </p>
                    <p>
                      As a result, the signal-to-noise ratio has collapsed, making it nearly impossible to find the connections that
                      <strong> truly matter</strong>. That is why we built something different.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>

              {/* Recruitment System & Exclusivity */}
              <div className="about-section">
                <ScrollAnimation direction="up" delay={0}>
                  <h2 className="section-heading" data-category="Productivity">Productivity Through Exclusivity</h2>
                </ScrollAnimation>
                <ScrollAnimation direction="up" delay={150}>
                  <div className="about-text">
                    <p>
                      We believe in a fundamental correlation between <strong>success and work</strong>. Surrounding yourself with like-minded peers
                      leads to meaningful opportunities and fosters tangible career growth.
                    </p>
                    <p>
                      Our admission process is structured to preserve this standard. Each application is thoroughly inspected to
                      ensure that the profile would bring value to the network. This is about <strong>efficiency</strong>: creating an environment
                      where serious professionals can connect without distraction.
                    </p>
                    <p>
                      By limiting membership to accomplished professionals, executives, and leaders, we ensure that your time spent
                      on BlackPortals is productive. No sorting through irrelevant messages. No filtering out unqualified connections.
                      Just <strong>quality interactions</strong> with people who understand what you are building.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>

              {/* Privacy Section */}
              <div className="about-section">
                <ScrollAnimation direction="up" delay={0}>
                  <h2 className="section-heading" data-category="Security">Privacy First</h2>
                </ScrollAnimation>
                <ScrollAnimation direction="up" delay={150}>
                  <div className="about-text">
                    <p>
                      In an era of infinite data collection, at BlackPortals we believe you must stay in charge of your personal and
                      professional information.
                    </p>
                    <p>
                      All 1:1 and group conversations are protected by <strong>state-of-the-art post-quantum end-to-end encryption</strong>. None of
                      your behavior or data is tracked, stored, or sold. Your application is deleted after review, and account deletion
                      leads to immediate and permanent erasure of your activity on our network.
                    </p>
                    <p>
                      Regarding the exclusivity of BlackPortals, <strong>security has always been our number one priority</strong>. Every account is
                      protected by mandatory 2FA, and a dedicated response team is available 24/7 to handle any security incident.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portals Page Content */}
      <section className="portals-hero-section">
        <div className="container">
          <div className="portals-hero-grid">
            <ScrollAnimation direction="up" delay={0}>
              <div className="portals-hero-content">
                <h1 className="portals-hero-title">Portals: Your new gateway to grow your network</h1>
                <p className="portals-hero-subtitle">
                  Following your application, our reviewing team will add you to curated Portals where you will be able to connect with professionals who work in your field of interests.
                </p>
                <p className="portals-hero-description">
                  Each Portal is a new opportunity to expand your business activities, discuss partnerships and share insights of your industry. BlackPortals exclusivity prevents unproductive noise and ensures that each minute spent within our community benefits you.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={200}>
              <div className="portals-hero-mockup">
                <video 
                  src="/mockup/video1.mp4" 
                  className="mockup-image" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  aria-label="BlackPortals App"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Features Section with Phone Mockups */}
      <section className="portals-features-section">
        <div className="container">
          <ScrollAnimation direction="up" delay={0}>
            <span className="section-category">Features</span>
            <h2 className="portals-section-title">Experience BlackPortals</h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={100}>
            <p className="portals-section-subtitle">
              A premium networking experience designed for exceptional professionals
            </p>
          </ScrollAnimation>

          <div className="portals-features-grid">
            {/* Feature 1 */}
            <ScrollAnimation direction="up" delay={0}>
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
            </ScrollAnimation>

            {/* Feature 2 */}
            <ScrollAnimation direction="up" delay={150}>
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
            </ScrollAnimation>

            {/* Feature 3 */}
            <ScrollAnimation direction="up" delay={300}>
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
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="portals-showcase-section">
        <div className="container">
          <ScrollAnimation direction="up" delay={0}>
            <h2 className="portals-section-title">See it in action</h2>
          </ScrollAnimation>
          <div className="portals-showcase-grid">
            <ScrollAnimation direction="up" delay={100}>
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
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={200}>
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
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

