import Navbar from '@/components/Navbar'

export default function About() {
  return (
    <>
      <Navbar />
      <section className="about-page">
        <div className="container">
          <div className="about-page-content">
            <h1 className="page-title">About</h1>
            <p className="page-subtitle">An Exclusive Private Network</p>
            <div className="about-content">
              <div className="about-text">
                <p>
                  BlackPortals is an invitation-only private network for accomplished professionals, executives, and leaders. 
                  Think of it as LinkedIn without the noise—where every connection is meaningful and every conversation matters.
                </p>
                <p>
                  We carefully curate our membership, ensuring that you&apos;re connecting with peers who share your level of achievement 
                  and ambition. No spam, no irrelevant requests, just quality connections with people who understand what you&apos;re building.
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
                    <p>Our team reviews each application within one week</p>
                  </div>
                </div>
                <div className="process-item">
                  <div className="process-content">
                    <h3>Exclusive access</h3>
                    <p>Once approved, receive access to your curated circles</p>
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

