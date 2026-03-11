'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="footer">
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px 32px' }}>

        {/* Top grid */}
        <div className="footer-top-grid">

          {/* Brand */}
          <div>
            <Image
              src="/brand_assets/MAW_TM_Logo_Horizontal-02-WHITE.png"
              alt="Men at Work Traffic Management"
              width={150}
              height={36}
              style={{ height: '36px', width: 'auto', marginBottom: '16px' }}
            />
            <p style={{ fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.72, maxWidth: '280px' }}>
              Professional traffic management solutions built on experience, safety, and excellence.
            </p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '24px' }}>
              {[
                { label: 'Facebook', href: 'https://www.facebook.com/menatworknz/', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z', filled: true },
                { label: 'LinkedIn', href: 'https://nz.linkedin.com/company/men-at-work-traffic-management-new-zealand', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z', extra: <circle cx="4" cy="4" r="2" key="c" />, filled: false },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ width: '36px', height: '36px', background: 'var(--navy-mid)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.2s ease' }}
                  onMouseOver={e => (e.currentTarget.style.borderColor = 'var(--orange)')}
                  onMouseOut={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
                >
                  {label === 'Facebook' && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--muted)" aria-hidden="true">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  )}
                  {label === 'LinkedIn' && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" aria-hidden="true">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  )}
                  {label === 'Instagram' && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5"/>
                      <circle cx="12" cy="12" r="4"/>
                      <circle cx="17.5" cy="6.5" r="0.5" fill="var(--muted)"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="footer-heading">Services</div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '11px', listStyle: 'none' }}>
              {[
                { label: 'Traffic Management for Roadworks', href: '/#service-roadworks' },
                { label: 'Event Traffic Management', href: '/#service-events' },
                { label: 'Traffic Management Plans', href: '/#service-tmp' },
                { label: 'Industry Training', href: '/#service-training' },
              ].map(({ label, href }) => (
                <li key={label}><a href={href} className="footer-link">{label}</a></li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <div className="footer-heading">Branches</div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '11px', listStyle: 'none' }}>
              {[
                { label: 'Wellington',   href: '/traffic-management-wellington' },
                { label: 'Christchurch', href: '/traffic-management-christchurch' },
                { label: 'Nelson',       href: '/traffic-management-nelson' },
                { label: 'Blenheim',     href: '/traffic-management-blenheim' },
                { label: 'Timaru',       href: '/traffic-management-timaru' },
              ].map(({ label, href }) => (
                <li key={label}><Link href={href} className="footer-link">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="footer-heading">Contact</div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', listStyle: 'none' }}>
              <li>
                <a href="tel:0800636289" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'var(--orange)' }}>
                  <Phone size={15} strokeWidth={1.5} aria-hidden="true" />
                  <span style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>0800 636 289</span>
                </a>
              </li>
              <li>
                <a href="mailto:office@menatwork.co.nz" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'var(--orange)' }}>
                  <Mail size={15} strokeWidth={1.5} aria-hidden="true" />
                  <span style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>office@menatwork.co.nz</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: '28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>© 2026 MW Traffic Management. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="/privacy" className="footer-link" style={{ fontSize: '0.78rem' }}>Privacy Policy</a>
            <a href="/terms" className="footer-link" style={{ fontSize: '0.78rem' }}>Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
