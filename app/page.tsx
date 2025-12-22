import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StarfieldTunnel from '@/components/StarfieldTunnel'
import AnimatedMessages from '@/components/AnimatedMessages'
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
            <p className="hero-subtitle">A private network for exceptional professionals</p>
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

      {/* About Section */}
      <section id="about" className="about">
        <AnimatedMessages />
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">What is BlackPortals</h2>
            <div className="about-text">
              <p className="about-lead">
                An exclusive private network for accomplished professionals, executives, and leaders.
              </p>
              <p>
                Think LinkedIn, but without the noise—where every connection matters and every conversation is meaningful. 
                We curate our membership carefully, ensuring you connect with peers who share your level of achievement and ambition.
              </p>
              <p>
                All communications are end-to-end encrypted. Your privacy is protected. This is a space where serious professionals 
                can connect, collaborate, and create opportunities without distractions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

