import Navbar from '@/components/Navbar'

export default function Portals() {
  return (
    <>
      <Navbar />
      
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
              <div className="phone-mockup">
                <div className="phone-frame">
                  <div className="phone-screen">
                    {/* To add your screenshot, replace the placeholder div below with:
                        <img src="/screenshots/screenshot1.jpg" alt="App Screenshot" className="phone-screenshot" />
                        Or use Next.js Image:
                        <Image src="/screenshots/screenshot1.jpg" alt="App Screenshot" fill className="phone-screenshot" />
                        Note: Place your images in the /public/screenshots/ folder
                    */}
                    <div className="phone-screenshot-placeholder">
                      <p>App Screenshot 1</p>
                      <span>Add your screenshot here</span>
                    </div>
                  </div>
                </div>
              </div>
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
                <div className="phone-mockup phone-mockup-small">
                  <div className="phone-frame">
                    <div className="phone-screen">
                      {/* Replace with: <img src="/screenshots/screenshot2.jpg" alt="Exclusive Circles" className="phone-screenshot" /> */}
                      <div className="phone-screenshot-placeholder">
                        <p>App Screenshot 2</p>
                        <span>Add your screenshot here</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="portals-feature-content">
                <h3>Exclusive Circles</h3>
                <p>Connect with curated networks of professionals who share your level of achievement and ambition. Each circle is carefully vetted to ensure quality interactions.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="portals-feature-item portals-feature-item-reverse">
              <div className="portals-feature-mockup">
                <div className="phone-mockup phone-mockup-small">
                  <div className="phone-frame">
                    <div className="phone-screen">
                      {/* Replace with: <img src="/screenshots/screenshot3.jpg" alt="Private Messaging" className="phone-screenshot" /> */}
                      <div className="phone-screenshot-placeholder">
                        <p>App Screenshot 3</p>
                        <span>Add your screenshot here</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="portals-feature-content">
                <h3>Private Messaging</h3>
                <p>End-to-end encrypted conversations ensure your privacy. Communicate securely with peers, share insights, and build meaningful professional relationships.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="portals-feature-item">
              <div className="portals-feature-mockup">
                <div className="phone-mockup phone-mockup-small">
                  <div className="phone-frame">
                    <div className="phone-screen">
                      {/* Replace with: <img src="/screenshots/screenshot4.jpg" alt="Secure & Private" className="phone-screenshot" /> */}
                      <div className="phone-screenshot-placeholder">
                        <p>App Screenshot 4</p>
                        <span>Add your screenshot here</span>
                      </div>
                    </div>
                  </div>
                </div>
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
              <div className="phone-mockup phone-mockup-large">
                <div className="phone-frame">
                  <div className="phone-screen">
                    {/* Replace with: <img src="/screenshots/screenshot5.jpg" alt="App Screenshot" className="phone-screenshot" /> */}
                    <div className="phone-screenshot-placeholder">
                      <p>App Screenshot 5</p>
                      <span>Add your screenshot here</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="portals-showcase-mockup">
              <div className="phone-mockup phone-mockup-large">
                <div className="phone-frame">
                  <div className="phone-screen">
                    {/* Replace with: <img src="/screenshots/screenshot6.jpg" alt="App Screenshot" className="phone-screenshot" /> */}
                    <div className="phone-screenshot-placeholder">
                      <p>App Screenshot 6</p>
                      <span>Add your screenshot here</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

