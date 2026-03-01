import type { Metadata } from 'next'
import Link from 'next/link'
import RevealObserver from '../components/RevealObserver'

export const metadata: Metadata = {
  title: 'About Us | Men at Work Traffic Management',
  description:
    'Learn about Men at Work Traffic Management, founded in 2008 and operating across five South Island locations. Discover our leadership team and group services.',
}

/* ── Data ── */

const locations = [
  { name: 'Christchurch', isHQ: true },
  { name: 'Wellington', isHQ: false },
  { name: 'Nelson', isHQ: false },
  { name: 'Blenheim', isHQ: false },
  { name: 'Timaru', isHQ: false },
]

const groupEntities = [
  {
    name: 'Men at Work Traffic Management',
    body: 'Comprehensive traffic management solutions across infrastructure, civil, and event environments.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="3,11 12,2 21,11"/><rect x="5" y="11" width="14" height="11"/>
      </svg>
    ),
  },
  {
    name: 'MW Training & Planning',
    body: 'Specialist TMP design, planning, and industry training services.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    name: 'The Temp Company',
    body: 'Flexible workforce solutions supporting civil, infrastructure, and construction sectors.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    name: 'QualCard',
    body: 'Digital qualification management platform built specifically for the traffic management industry.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
]

const leadership = [
  { name: 'Dean Hyde', title: 'Managing Director' },
  { name: 'Esther Hyde', title: 'Director' },
  { name: 'Hayden Wilson', title: 'General Manager' },
  { name: 'Nathan Jones', title: 'Business Manager' },
  { name: 'Kurt Puryer-Smith', title: 'Regional Manager – Central' },
  { name: 'Royden van Dyk', title: 'Regional Manager – Southern' },
  { name: 'Brock Vuleta', title: 'Business Development Manager' },
  { name: 'Daniel Adams', title: 'Training and Compliance Manager' },
]

/* ── Page ── */

export default function AboutUsPage() {
  return (
    <>
      <RevealObserver />

      {/* ── HERO ── */}
      <section
        style={{
          position: 'relative',
          background: '#070f1b',
          paddingTop: '180px',
          paddingBottom: '100px',
          overflow: 'hidden',
          textAlign: 'center',
        }}
        aria-label="About Us hero"
      >
        {/* Radial glow */}
        <div style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(242,101,34,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} aria-hidden="true" />
        {/* Orange left accent line */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: 'var(--orange)' }} aria-hidden="true" />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '20px' }}>
            <span className="eyebrow">Who We Are</span>
            <div style={{ width: '28px', height: '2px', background: 'var(--orange)' }} />
          </div>
          <h1 className="reveal d1 font-display" style={{ fontWeight: 700, fontSize: 'clamp(2.4rem,5vw,4.5rem)', lineHeight: 1.05, letterSpacing: '-0.03em', color: '#fff' }}>
            About Men at Work
          </h1>
          <p className="reveal d2 font-display" style={{ fontWeight: 600, fontSize: 'clamp(1rem,2vw,1.3rem)', letterSpacing: '-0.01em', color: 'var(--light)', marginTop: '20px' }}>
            Built on hard work. Grown on trust. Since 2008.
          </p>
          <p className="reveal d3" style={{ fontSize: '1rem', lineHeight: 1.78, color: 'var(--muted)', maxWidth: '560px', margin: '20px auto 0' }}>
            Since 2008, Men at Work has grown from an owner-operated traffic management company into a multi-division group operating across five South Island regions.
          </p>
        </div>
      </section>

      {/* ── BEGINNINGS ── */}
      <section style={{ background: 'var(--navy)', padding: '100px 0' }} aria-label="Our beginnings">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div className="two-col-grid">

            {/* Left: copy */}
            <div>
              <div className="reveal">
                <span className="eyebrow">Our Beginnings</span>
                <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', color: '#fff', marginTop: '8px' }}>
                  Since 2008
                </h2>
                <div className="orange-rule" style={{ marginTop: '16px' }} />
              </div>
              <p className="reveal d1" style={{ fontSize: '1rem', lineHeight: 1.78, color: 'var(--muted)', marginTop: '24px' }}>
                In 2008, Dean and Esther Hyde purchased Men at Work Limited and have led the business as hands-on owner-operators from day one. What began as a focused traffic management company in Christchurch has steadily expanded in capability, reach, and responsibility.
              </p>
              <p className="reveal d2" style={{ fontSize: '1rem', lineHeight: 1.78, color: 'var(--muted)', marginTop: '16px' }}>
                Since establishing our purpose-built head office in Belfast Business Park in 2017, the company has continued to grow across the South Island while maintaining a practical, people-first culture grounded in accountability and steady leadership.
              </p>
            </div>

            {/* Right: image placeholder */}
            <div className="reveal d1">
              {/* Replace with head office or operations image */}
              <div style={{
                width: '100%',
                aspectRatio: '4/3',
                background: 'var(--charcoal)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '2px',
                borderTop: '3px solid var(--orange)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '12px',
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--slate)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21,15 16,10 5,21"/>
                </svg>
                <span style={{ fontSize: '0.75rem', color: 'var(--slate)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Head Office Image</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── LOCATIONS ── */}
      <section style={{ background: '#0A1623', padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.04)' }} aria-label="Our locations">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '10px' }}>
              <span className="eyebrow">Where We Operate</span>
              <div style={{ width: '28px', height: '2px', background: 'var(--orange)' }} />
            </div>
            <h2 className="section-title reveal d1" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', color: '#fff' }}>
              Five Locations. One Standard.
            </h2>
            <div className="orange-rule reveal d2" style={{ margin: '16px auto 0' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '20px' }}>
            {locations.map(({ name, isHQ }, i) => (
              <div key={name} className={`service-card reveal d${(i % 4) + 1}`}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div className="service-icon" style={{ marginBottom: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  {isHQ && (
                    <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', background: 'var(--orange)', color: '#fff', padding: '3px 8px', borderRadius: '9999px' }}>
                      Head Office
                    </span>
                  )}
                </div>
                <h3 className="font-display" style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--navy)' }}>{name}</h3>
                <p style={{ fontSize: '0.875rem', color: '#7a8a99', marginTop: '10px', lineHeight: 1.6 }}>
                  Branch Manager: <span style={{ color: '#5a6a7a' }}>[Name Placeholder]</span>
                </p>
                <p style={{ fontSize: '0.875rem', color: '#7a8a99', marginTop: '6px', lineHeight: 1.6 }}>
                  Phone: <span style={{ color: '#5a6a7a' }}>[Placeholder]</span>
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── MORE THAN TRAFFIC ── */}
      <section style={{ background: 'var(--off-white)', padding: '100px 0' }} aria-label="Group services">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

          <div style={{ marginBottom: '60px' }}>
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <span className="eyebrow">The MAW Group</span>
              <div style={{ width: '28px', height: '2px', background: 'var(--orange)' }} />
            </div>
            <h2 className="section-title reveal d1" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', color: 'var(--navy)' }}>
              More Than Traffic
            </h2>
            <div className="orange-rule reveal d2" style={{ marginTop: '16px' }} />
            <p className="reveal d3" style={{ fontSize: '1rem', lineHeight: 1.78, color: '#5a6a7a', maxWidth: '600px', marginTop: '20px' }}>
              While traffic management remains our core service, the Men at Work Group delivers broader capability across training, workforce supply, and digital compliance.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '20px' }}>
            {groupEntities.map(({ name, body, icon }, i) => (
              <div key={name} className={`service-card reveal d${(i % 4) + 1}`}>
                <div className="service-icon">{icon}</div>
                <h3 className="font-display" style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--navy)' }}>{name}</h3>
                <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#5a6a7a', marginTop: '10px' }}>{body}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section style={{ background: 'var(--navy)', padding: '100px 0' }} aria-label="Leadership team">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '10px' }}>
              <span className="eyebrow">Our People</span>
              <div style={{ width: '28px', height: '2px', background: 'var(--orange)' }} />
            </div>
            <h2 className="section-title reveal d1" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', color: '#fff' }}>
              Leadership
            </h2>
            <div className="orange-rule reveal d2" style={{ margin: '16px auto 0' }} />
            <p className="reveal d3" style={{ fontSize: '1rem', lineHeight: 1.78, color: 'var(--muted)', maxWidth: '480px', margin: '20px auto 0' }}>
              Experienced leadership across operations, regions, compliance, and growth.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: '20px' }}>
            {leadership.map(({ name, title }, i) => (
              <div
                key={name}
                className={`team-card reveal d${(i % 4) + 1}`}
                style={{
                  background: 'var(--charcoal)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}
              >
                {/* Image placeholder — structured for next/image replacement */}
                <div style={{ width: '100%', aspectRatio: '1', background: 'var(--navy-mid)', borderBottom: '2px solid var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* Replace with: <Image src="/images/team/..." alt={name} fill style={{ objectFit: 'cover' }} /> */}
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--slate)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                {/* Details */}
                <div style={{ padding: '20px 24px' }}>
                  <p className="font-display" style={{ fontWeight: 600, fontSize: '1rem', color: '#fff', lineHeight: 1.3 }}>{name}</p>
                  <p style={{ fontSize: '0.825rem', color: 'var(--muted)', marginTop: '5px', lineHeight: 1.5 }}>{title}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section" aria-label="Call to action">
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
          <div className="reveal">
            <h2 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(2rem,4.5vw,4rem)', color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Ready to work with a team that delivers?
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.88)', maxWidth: '480px', margin: '20px auto 0', lineHeight: 1.72 }}>
              Get in touch with our team and let&apos;s talk about your project.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px', marginTop: '36px' }}>
              <Link href="/contact" className="btn-white">
                Get in Touch
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 8h12M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
