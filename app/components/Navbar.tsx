'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const h1Ref = useRef<HTMLSpanElement>(null)
  const h2Ref = useRef<HTMLSpanElement>(null)
  const h3Ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    if (h1Ref.current && h2Ref.current && h3Ref.current) {
      if (next) {
        h1Ref.current.style.transform = 'translateY(7px) rotate(45deg)'
        h2Ref.current.style.opacity = '0'
        h3Ref.current.style.transform = 'translateY(-7px) rotate(-45deg)'
      } else {
        h1Ref.current.style.transform = ''
        h2Ref.current.style.opacity = '1'
        h3Ref.current.style.transform = ''
      }
    }
  }

  const isActive = (href: string) => pathname === href

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about-us', label: 'About Us' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''} role="navigation" aria-label="Main navigation">
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '96px' }}>

        {/* Logo */}
        <Link href="/" style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
          <Image
            src="/brand_assets/MAW_TM_Logo_Horizontal-02-WHITE.png"
            alt="Men at Work Traffic Management"
            width={200}
            height={74}
            style={{ height: '74px', width: 'auto' }}
            priority
          />
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="hidden-mobile">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className={`nav-link${isActive(href) ? ' active' : ''}`}>
              {label}
            </Link>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link href="/contact" className="btn-orange hidden-mobile" style={{ fontSize: '0.8rem', padding: '10px 20px' }}>
            Get a Quote
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <button
            id="ham-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            style={{ display: 'none', flexDirection: 'column', gap: '5px', background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
          >
            <span ref={h1Ref} style={{ display: 'block', width: '22px', height: '2px', background: '#fff', transition: 'transform 0.2s ease, opacity 0.2s ease' }} />
            <span ref={h2Ref} style={{ display: 'block', width: '22px', height: '2px', background: '#fff', transition: 'opacity 0.2s ease' }} />
            <span ref={h3Ref} style={{ display: 'block', width: '22px', height: '2px', background: '#fff', transition: 'transform 0.2s ease' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div id="mobile-menu" className={menuOpen ? 'open' : ''} style={{ background: 'var(--navy-mid)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {navLinks.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              className="nav-link"
              style={{ fontSize: '1rem', padding: '8px 0', borderBottom: i < navLinks.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link href="/contact" className="btn-orange" style={{ textAlign: 'center', marginTop: '8px' }}>
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  )
}
