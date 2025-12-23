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
                <h2 className="section-heading">Why BlackPortals?</h2>
                <div className="about-text">
                  <p>
                    Traditional professional networks have become cluttered with noise, irrelevant connections, and endless spam.
                    The model has failed by letting quantity win over quality and transforming that space into a self contemplative
                    haven for wannabe professionals.
                  </p>
                  <p>
                    As a result, the signal-to-noise ratio has collapsed, making it nearly impossible to find the connections that
                    truly matter. That is why we built something different.
                  </p>
                </div>
              </div>

              {/* Recruitment System & Exclusivity */}
              <div className="about-section">
                <h2 className="section-heading">Productivity Through Exclusivity</h2>
                <div className="about-text">
                  <p>
                    We believe in a fundamental correlation between success and work. Surrounding yourself with like-minded peers
                    leads to meaningful opportunities and fosters tangible career growth.
                  </p>
                  <p>
                    Our admission process is structured to preserve this standard. Each application is thoroughly inspected to
                    ensure that the profile would bring value to the network. This is about efficiency: creating an environment
                    where serious professionals can connect without distraction.
                  </p>
                  <p>
                    By limiting membership to accomplished professionals, executives, and leaders, we ensure that your time spent
                    on BlackPortals is productive. No sorting through irrelevant messages. No filtering out unqualified connections.
                    Just quality interactions with people who understand what you are building.
                  </p>
                </div>
              </div>

              {/* Privacy Section */}
              <div className="about-section">
                <h2 className="section-heading">Privacy First</h2>
                <div className="about-text">
                  <p>
                    In an era of infinite data collection, at BlackPortals we believe you must stay in charge of your personal and
                    professional information.
                  </p>
                  <p>
                    All 1:1 and group conversations are protected by state-of-the-art post-quantum end-to-end encryption. None of
                    your behavior or data is tracked, stored, or sold. Your application is deleted after review, and account deletion
                    leads to immediate and permanent erasure of your activity on our network.
                  </p>
                  <p>
                    Regarding the exclusivity of BlackPortals, security has always been our number one priority. Every account is
                    protected by mandatory 2FA, and a dedicated response team is available 24/7 to handle any security incident.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
