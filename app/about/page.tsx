import Navbar from '@/components/Navbar'

export default function About() {
  return (
    <>
      <Navbar />
      <section className="about-page">
        <div className="container">
          <div className="about-page-content">
            <h1 className="page-title">About</h1>
            <p className="page-subtitle">Productivity through exclusivity</p>
            
            <div className="about-content">
              {/* Failure of Other Networks */}
              <div className="about-section">
                <h2 className="section-heading">Why Other Networks Fail</h2>
                <div className="about-text">
                  <p>
                    Traditional professional networks have become cluttered with noise, irrelevant connections, and endless spam. 
                    They prioritize quantity over quality, leaving you drowning in requests from people who don&apos;t share your level 
                    of achievement or ambition.
                  </p>
                  <p>
                    These platforms have lost their purpose—transforming from valuable networking tools into digital wastelands where 
                    meaningful connections are buried under a flood of low-quality interactions. The signal-to-noise ratio has collapsed, 
                    making it nearly impossible to find the connections that truly matter.
                  </p>
                  <p>
                    We&apos;ve seen this failure firsthand. That&apos;s why we built something different.
                  </p>
                </div>
              </div>

              {/* Recruitment System & Exclusivity */}
              <div className="about-section">
                <h2 className="section-heading">Productivity Through Exclusivity</h2>
                <div className="about-text">
                  <p>
                    BlackPortals operates on a fundamental principle: productivity and success are achieved through exclusivity. 
                    When you&apos;re surrounded by peers who match your caliber, every interaction becomes meaningful, every conversation 
                    becomes valuable, and every connection becomes an opportunity.
                  </p>
                  <p>
                    Our recruitment system is designed to maintain this standard. We don&apos;t accept everyone—we carefully evaluate 
                    each application to ensure that every member brings value to the network. This isn&apos;t about elitism; it&apos;s about 
                    creating an environment where serious professionals can connect without distraction.
                  </p>
                  <p>
                    By limiting membership to accomplished professionals, executives, and leaders, we ensure that your time spent on 
                    BlackPortals is productive. No sorting through irrelevant messages. No filtering out unqualified connections. 
                    Just quality interactions with people who understand what you&apos;re building.
                  </p>
                </div>
                
                <div className="process-simple">
                  <div className="process-item">
                    <div className="process-content">
                      <h3>Join waiting list</h3>
                      <p>Submit your information to be considered for membership</p>
                    </div>
                  </div>
                  <div className="process-item">
                    <div className="process-content">
                      <h3>Application review</h3>
                      <p>Our team reviews each application to ensure quality and fit</p>
                    </div>
                  </div>
                  <div className="process-item">
                    <div className="process-content">
                      <h3>Exclusive access</h3>
                      <p>Once approved, receive access to your curated circles of accomplished professionals</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Privacy Section */}
              <div className="about-section">
                <h2 className="section-heading">Privacy First</h2>
                <div className="about-text">
                  <p>
                    Your privacy isn&apos;t negotiable. In an era where data is constantly harvested and sold, BlackPortals takes a 
                    fundamentally different approach. We believe that your professional network should be private, secure, and under 
                    your control.
                  </p>
                  <p>
                    All communications on BlackPortals are end-to-end encrypted. We don&apos;t track your behavior, sell your data, 
                    or expose your information to third parties. Your conversations remain private, your connections remain confidential, 
                    and your professional activities stay within the network.
                  </p>
                  <p>
                    Security isn&apos;t optional—every account is protected with mandatory two-factor authentication. We&apos;ve built 
                    privacy and security into the foundation of BlackPortals because we understand that trust is the currency of 
                    professional relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Features</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Exclusive Circles</h3>
              <p>Curated networks of professionals who share your level of achievement and ambition.</p>
            </div>
            <div className="feature-item">
              <h3>Private Messaging</h3>
              <p>End-to-end encrypted conversations. Your privacy is our priority.</p>
            </div>
            <div className="feature-item">
              <h3>Mandatory 2FA</h3>
              <p>Security isn&apos;t optional. Every account is protected with two-factor authentication.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
