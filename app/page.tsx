import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StarfieldTunnel from '@/components/StarfieldTunnel'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navbar />

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
            <div className="hero-buttons">
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
            <h2 className="section-title">What is BlackPortals</h2>
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
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

