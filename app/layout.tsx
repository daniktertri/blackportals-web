import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import '../styles/globals.css'
import ClientScripts from '@/components/ClientScripts'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'BlackPortals - Exclusive Private Network',
  description: 'BlackPortals is an exclusive invitation-only private network for accomplished professionals, executives, and leaders. Quality connections, encrypted communications, no noise.',
  icons: {
    icon: '/icon/bpicon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body className={inter.className}>
        {children}
        <Script src="https://s3.tradingview.com/tv.js" strategy="lazyOnload" />
        <ClientScripts />
      </body>
    </html>
  )
}

