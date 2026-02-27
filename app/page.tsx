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
            <h1 className="hero-title">Axiom</h1>
            <p className="hero-subtitle">
              Private connections &amp; events, without the noise
            </p>
            <p className="hero-description">
              Private events, rich profiles, and visual feeds that bring people together around what actually matters.
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
              <h2 className="section-title">What is Axiom</h2>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={100}>
              <div className="about-text">
                <p className="about-lead">
                  Axiom is a <strong>private</strong> network built around invite-only events, meaningful connections, and
                  shared experiences.
                </p>
                <p>
                  Instead of endless public feeds, Axiom focuses on <strong>relevance</strong>. You connect with people through
                  private events, shared interests, and professional goals, keeping your network intentional and curated.
                </p>
                <p>
                  <strong>Privacy and control</strong> are fundamental. Axiom gives you a discreet space to share photos, stories,
                  and updates from events—without ads, public exposure, or unnecessary noise.
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
                  <h2 className="section-heading" data-category="Connections">Connections Around Private Events</h2>
                </ScrollAnimation>
                <ScrollAnimation direction="up" delay={150}>
                  <div className="about-text">
                    <p>
                      We believe the best connections start in the right rooms. Private events with the right people create
                      opportunities that public networks cannot.
                    </p>
                    <p>
                      On Axiom, events are the center of gravity. You join or host private gatherings, meet people who share
                      your ambitions, and stay in touch through dedicated event spaces instead of getting lost in a global feed.
                    </p>
                    <p>
                      The result is <strong>quality interactions</strong> with people who are actually relevant to you – not just another
                      list of random connections.
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
                      In an era of infinite data collection, Axiom is built so you stay in charge of your personal and
                      professional information.
                    </p>
                    <p>
                      Your private event spaces, conversations, and media are for you and the people you choose. We do not sell your data
                      or flood your experience with tracking and advertising.
                    </p>
                    <p>
                      Axiom is designed so your social and professional life can grow in private: focused on the right people, not on
                      performing for an algorithm.
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
                <h1 className="portals-hero-title">Private connections &amp; events in one place</h1>
                <p className="portals-hero-subtitle">
                  Join and host private events where you meet the right people and keep the connection alive before, during, and after.
                </p>
                <p className="portals-hero-description">
                  Axiom combines visual feeds, rich profiles, and focused spaces so every interaction around an event is meaningful – and stays
                  free from public noise.
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
            <h2 className="portals-section-title">Experience Axiom</h2>
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

