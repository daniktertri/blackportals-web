import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>BlackPortals</h3>
            <p>An exclusive private network for accomplished professionals. Quality connections, encrypted communications.</p>
          </div>
          <div className="footer-section">
            <h4>Platform</h4>
            <ul>
              <li><Link href="/#features">Features</Link></li>
              <li><Link href="/#how-it-works">How It Works</Link></li>
              <li><Link href="/#privacy">Privacy</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/#privacy">Privacy Policy</Link></li>
              <li><Link href="/#terms">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 BlackPortals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

