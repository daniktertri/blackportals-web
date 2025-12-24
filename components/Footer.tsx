import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <Link href="/waiting-list" className="footer-link">
            Join BP
          </Link>
          <Link href="/contact" className="footer-link">
            Contact
          </Link>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 BlackPortals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

