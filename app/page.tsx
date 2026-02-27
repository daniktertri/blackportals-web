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
              A private layer for connections &amp; events
            </p>
            <p className="hero-description">
              Host and join intimate, curated events. Capture them through private visual feeds. Stay connected through rich, contextual profiles.
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
                  BlackPortals is a <strong>private</strong> connections and events platform that blends the familiarity of social feeds with the depth of professional profiles.
                </p>
                <p>
                  Think of it as an Instagram-style experience for shared moments, combined with LinkedIn-grade profiles and private, invitation-only events. Every interaction lives in a space that is curated, intentional, and relevant to you.
                </p>
                <p>
                  <strong>Privacy and control</strong> sit at the core of the product. You decide who sees your events, your photos, and your updates—without ads, public algorithms, or background noise shaping what you share.
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
              {/* Recruitment System & Exclusivity */}
              <div className="about-section">
                <ScrollAnimation direction="up" delay={0}>
                  <h2 className="section-heading" data-category="Connections">Connections Built Around Real Moments</h2>
                </ScrollAnimation>
                <ScrollAnimation direction="up" delay={150}>
                  <div className="about-text">
                    <p>
                      The most meaningful relationships rarely start in a generic feed. They begin in the right rooms, with the right people, at the right time.
                    </p>
                    <p>
                      On BlackPortals, private events are the center of gravity. You join or host curated gatherings, meet people who share your ambitions, and continue the conversation in dedicated spaces before, during, and after the event.
                    </p>
                    <p>
                      The result is a network made of <strong>quality interactions</strong> — people you have actually met, projects you truly care about, and opportunities that grow from real context rather than random connection requests.
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
                      In an era of infinite data collection, BlackPortals is designed so you stay fully in charge of your personal and professional presence.
                    </p>
                    <p>
                      Your private event spaces, conversations, and media are for you and the people you choose. There are no public rankings, no engagement farming, and no third parties buying insight into your behavior.
                    </p>
                    <p>
                      BlackPortals gives you a premium, discreet environment where your social and professional life can grow in private—focused on the right people, not on performing for an algorithm.
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
                <h1 className="portals-hero-title">Private connections &amp; events, thoughtfully orchestrated</h1>
                <p className="portals-hero-subtitle">
                  Design intimate experiences, bring the right people together, and keep every interaction anchored to a shared moment.
                </p>
                <p className="portals-hero-description">
                  BlackPortals combines visual feeds, rich profiles, and focused spaces so every interaction around an event feels intentional, elevated, and entirely free from public noise.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={200}>
              <div className="portals-hero-mockup">
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
                </div>
                <div className="portals-feature-content">
                  <h3>Private Events</h3>
                  <p>Create or join invite-only events with people who actually matter to you. Every space is curated so conversations stay focused, relevant, and high signal.</p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Feature 2 */}
            <ScrollAnimation direction="up" delay={150}>
              <div className="portals-feature-item portals-feature-item-reverse">
                <div className="portals-feature-mockup">
                </div>
                <div className="portals-feature-content">
                  <h3>Event Feeds</h3>
                  <p>Share and follow Instagram-style feeds made of photos, stories, and moments from the events you care about – only visible to the people who are part of them.</p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Feature 3 */}
            <ScrollAnimation direction="up" delay={300}>
              <div className="portals-feature-item">
                <div className="portals-feature-mockup">
                </div>
                <div className="portals-feature-content">
                  <h3>Rich Profiles</h3>
                  <p>Combine the depth of a LinkedIn-style profile with the context of real-world events. Show who you are, what you do, and where you’ve met people – all in one place.</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

