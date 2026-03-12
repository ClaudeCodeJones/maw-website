import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.menatwork.co.nz'),
  title: 'Men at Work Traffic Management',
  description: 'Professional traffic management services across Wellington, Christchurch, Nelson, Blenheim, and Timaru. Traffic management, TMP design, event traffic management, and consultancy.',
  openGraph: {
    title: 'Men at Work Traffic Management',
    description: 'Professional traffic management services across five South Island branches.',
    url: 'https://www.menatwork.co.nz',
    siteName: 'Men at Work Traffic Management',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Men at Work Traffic Management',
    description: 'Professional traffic management services across New Zealand.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/images/hero.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
