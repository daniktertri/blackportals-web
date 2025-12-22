import Navbar from '@/components/Navbar'
import AnimatedCircles from '@/components/AnimatedCircles'
import PublicFeed from '@/components/PublicFeed'
import PortalsFeed from '@/components/PortalsFeed'

export default function Portals() {
  return (
    <>
      <Navbar />
      
      {/* Top Section - Circles and Description */}
      <section className="portals-intro-section">
        <div className="container">
          <div className="portals-intro-grid">
            {/* Left: Animated Circles */}
            <div className="portals-circles-column">
              <AnimatedCircles />
            </div>

            {/* Right: Description */}
            <div className="portals-description-column">
              <h2 className="portals-intro-title">Portals: Your new gateway to grow your network</h2>
              <div className="portals-intro-text">
                <p>
                  Following your application, our reviewing team will add you to curated Portals where you will able to connect with professionals who work in your field of interests.
                </p>
                <p>
                  Each Portals is a new opportunity to expand your business activities, discuss partnerships and share insights of your industry. BlackPortals exclusivity prevents unproductive noise and ensure that each minute spent within our community benefits you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communication Comparison Section */}
      <section className="portals-comparison-section">
        <div className="container">
          <h2 className="comparison-title">BlackPortals: a new way to communicate</h2>
          
          <div className="comparison-grid">
            {/* Left: Public */}
            <div className="comparison-column public-column">
              <h3 className="comparison-column-title">Public</h3>
              <PublicFeed />
            </div>

            {/* Right: Portals */}
            <div className="comparison-column portals-column">
              <h3 className="comparison-column-title">Portals</h3>
              <PortalsFeed />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

