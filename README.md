# BlackPortals - Next.js Application

A modern Next.js application for BlackPortals - the world's first truly anonymous professional networking platform.

## Overview

This is a Next.js 14 application converted from the original HTML/CSS/JavaScript website. It maintains all the original functionality while leveraging Next.js features like server-side rendering, optimized performance, and modern React patterns.

## Features

- **Complete Anonymity**: Choose to remain fully anonymous or reveal your identity gradually
- **Anonymous Messaging**: Connect and communicate without revealing your identity
- **Profile Control**: Decide who sees what information based on your comfort level
- **Data Deletion**: All personal information is permanently deleted after application review
- **Native iOS Experience**: Beautiful, intuitive mobile app built with Swift
- **End-to-End Encryption**: All communications are encrypted and private

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS (Global styles)
- **Icons**: Font Awesome 6.0
- **Charts**: TradingView Widget
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
blackportals/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio page
│   └── portals/           # Portals page
├── components/            # React components
│   ├── Navbar.tsx        # Navigation component
│   ├── Footer.tsx        # Footer component
│   ├── TradingViewChart.tsx  # TradingView chart component
│   └── ClientScripts.tsx  # Client-side scripts
├── styles/                # Global styles
│   └── globals.css        # Main stylesheet
└── public/                # Static assets
```

## Pages

- **Home** (`/`) - Main landing page with hero section, features, and privacy information
- **About** (`/about`) - Information about BlackPortals
- **Portfolio** (`/portfolio`) - Portfolio of TON projects with filtering
- **Contact** (`/contact`) - Contact form and information
- **Portals** (`/portals`) - Elite networking platform information

## Key Components

### Navbar
Responsive navigation bar with mobile hamburger menu. Automatically highlights active page.

### Footer
Site footer with links and company information.

### TradingViewChart
Reusable TradingView chart component for displaying cryptocurrency charts.

### ClientScripts
Handles client-side animations, smooth scrolling, and interactive effects.

## Features Implemented

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scrolling navigation
- ✅ Portfolio filtering by category
- ✅ TradingView chart integration
- ✅ Animated elements on scroll
- ✅ Mobile hamburger menu
- ✅ Form handling
- ✅ SEO optimization with metadata

## Building for Production

```bash
npm run build
npm start
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 BlackPortals. All rights reserved.

# blackportals-web
