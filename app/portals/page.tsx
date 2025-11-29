import Navbar from '@/components/Navbar'

export default function Portals() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="portals-page-hero">
        <div className="container">
          <div className="portals-hero-content">
            <h1 className="page-title">Portals</h1>
            <p className="page-subtitle">Elite Networking Platform</p>
            <p className="portals-description">
              Exclusive access to the world&apos;s most influential network. Connect with CEOs, 
              Bank Officials, Crypto Whales, and Industry Leaders through our premium iPhone application.
            </p>
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="portals-features">
        <div className="container">
          <div className="portals-features-content">
            <h2 className="section-title">iOS Application</h2>
            <p className="portals-lead">
              Native iOS app with dark mode by default. Built for professionals who demand excellence in every interaction.
            </p>
            <div className="app-features-grid">
              <div className="app-feature-item">
                <h3>Home</h3>
                <p>Curated feed with liquid glass navigation</p>
              </div>
              <div className="app-feature-item">
                <h3>Messages</h3>
                <p>End-to-end encrypted private & group chats</p>
              </div>
              <div className="app-feature-item">
                <h3>Circles</h3>
                <p>Exclusive professional circles</p>
              </div>
              <div className="app-feature-item">
                <h3>Profile</h3>
                <p>Customizable with privacy controls</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

