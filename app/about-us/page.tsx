import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import RevealObserver from '../components/RevealObserver'
import LocationsMap from '../components/LocationsMap'

export const metadata: Metadata = {
  title: 'About Us | Men at Work Traffic Management',
  description:
    'Learn about Men at Work Traffic Management, founded in 2008 and operating across five South Island locations. Discover our leadership team and group services.',
}

/* ── Data ── */


const groupEntities = [
  {
    name: 'MW Training & Planning',
    headline: 'Specialist TMP design, planning, and industry training services.',
    body: 'We design compliant Traffic Management Plans and deliver practical training to support safe, professional worksites.',
    href: 'https://www.mwtrainplan.co.nz',
    logo: '/logos/mwtrainingandplanning_white.webp',
    modifier: 'group-card--training',
  },
  {
    name: 'The Temp Company',
    headline: 'Flexible workforce solutions supporting civil, infrastructure, and construction sectors.',
    body: 'We connect skilled, vetted workers with the right opportunities across the South Island, quickly and reliably.',
    href: 'https://www.thetempcompany.co.nz',
    logo: '/logos/thetempcompany_white.webp',
    modifier: 'group-card--temp',
  },
  {
    name: 'Sweepco',
    headline: 'Professional sweeping services for construction sites, industrial yards, and public spaces.',
    body: 'From post-construction clean-ups to ongoing site maintenance, our specialised sweepers remove debris, dust, and loose material to keep surfaces safe, tidy, and operational.',
    href: '/',
    logo: '/logos/sweepco_white.png',
    modifier: 'group-card--sweepco',
  },
  {
    name: 'QualCard',
    headline: 'A digital qualification management platform built for the traffic management industry.',
    body: 'QualCard streamlines compliance tracking, card issuance, and workforce verification, all in one place.',
    href: 'https://www.qualcard.co.nz',
    logo: '/logos/qualcard_white.webp',
    modifier: 'group-card--qualcard',
  },
]

const leadership = [
  { name: 'Dean Hyde', title: 'Managing Director' },
  { name: 'Esther Hyde', title: 'Director' },
  { name: 'Hayden Wilson', title: 'General Manager' },
  { name: 'Nathan Jones', title: 'Business Manager' },
  { name: 'Daniel Adams', title: 'Training and Compliance Manager' },
  { name: 'Kurt Puryer-Smith', title: 'Regional Manager – Central' },
  { name: 'Royden van Dyk', title: 'Regional Manager – Southern' },
  { name: 'Brock Vuleta', title: 'Business Development Manager' },
]

const leadershipImages: Record<string, string> = {
  'Dean Hyde': '/leadership/dean_hyde.png',
  'Esther Hyde': '/leadership/esther_hyde.png',
  'Hayden Wilson': '/leadership/hayden_wilson.png',
  'Nathan Jones': '/leadership/nathan_jones.png',
  'Daniel Adams': '/leadership/daniel_adams.png',
  'Kurt Puryer-Smith': '/leadership/kurt_puryer_smith.png',
  'Brock Vuleta': '/leadership/brock_vuleta.png',
}

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
        <div style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(242,101,34,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} aria-hidden="true" />
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
          <p className="reveal d3" style={{ fontSize: '1rem', lineHeight: 1.78, color: 'var(--muted)', maxWidth: '540px', margin: '20px auto 0' }}>
            Since 2008, Men at Work has grown from an owner-operated traffic management company into a multi-division group delivering traffic management, planning, and consultancy services across New Zealand.
          </p>
        </div>
      </section>

      {/* ── BEGINNINGS ── */}
      <section style={{ background: 'var(--navy)', padding: '100px 0' }} aria-label="Our beginnings">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div className="two-col-grid">

            <div>
              <div className="reveal">
                <span className="eyebrow">Our Beginnings</span>
                <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', color: '#fff', marginTop: '8px' }}>
                  Since 2008
                </h2>
                <div className="orange-rule" style={{ marginTop: '16px' }} />
              </div>
              <p className="reveal d1" style={{ fontSize: '1rem', lineHeight: 1.78, color: 'var(--muted)', marginTop: '24px', maxWidth: '540px' }}>
                In 2008, Dean and Esther Hyde took ownership of Men at Work and have led the business as hands-on owner-operators ever since. What began as a focused traffic management company in Christchurch has grown steadily through strong leadership, experienced crews, and long-term client relationships.
              </p>
              <p className="reveal d2" style={{ fontSize: '1rem', lineHeight: 1.78, color: 'var(--muted)', marginTop: '16px', maxWidth: '540px' }}>
                Today, Men at Work operates across multiple regions with a purpose-built head office in Belfast and a reputation for practical, dependable traffic management across civil, infrastructure, and event projects.
              </p>
            </div>

            <div className="reveal d1">
              <div style={{
                width: '100%',
                aspectRatio: '4/3',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/dean-esther.svg"
                  alt="Dean and Esther Hyde"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── LOCATIONS ── */}
      <section style={{ background: '#0A1623', padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.04)' }} aria-label="Our locations">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '10px' }}>
              <span className="eyebrow">Where We Operate</span>
              <div style={{ width: '28px', height: '2px', background: 'var(--orange)' }} />
            </div>
            <h2 className="section-title reveal d1" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', color: '#fff' }}>
              Five Locations. One Standard.
            </h2>
            <div className="orange-rule reveal d2" style={{ margin: '16px auto 0' }} />
          </div>

          <div className="reveal d1">
            <LocationsMap />
          </div>

        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section style={{ background: 'var(--off-white)', padding: '100px 0' }} aria-label="Leadership team">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '10px' }}>
              <span className="eyebrow">Our People</span>
              <div style={{ width: '28px', height: '2px', background: 'var(--orange)' }} />
            </div>
            <h2 className="section-title reveal d1" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', color: 'var(--navy)' }}>
              Leadership
            </h2>
            <div className="orange-rule reveal d2" style={{ margin: '16px auto 0' }} />
            <p className="reveal d3" style={{ fontSize: '1rem', lineHeight: 1.78, color: '#5a6a7a', maxWidth: '480px', margin: '20px auto 0' }}>
              Experienced leadership across operations, regions, compliance, and growth.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: '20px' }}>
            {leadership.map(({ name, title }, i) => (
              <div
                key={name}
                className={`team-card reveal d${(i % 4) + 1}`}
                style={{
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}
              >
                <div style={{ position: 'relative', width: '100%', aspectRatio: '1', background: 'var(--light)', borderBottom: '2px solid var(--orange)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {leadershipImages[name] ? (
                    <Image
                      src={leadershipImages[name]}
                      alt={name}
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center top' }}
                      sizes="(max-width: 640px) 50vw, (max-width: 1280px) 25vw, 300px"
                    />
                  ) : (
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                    </svg>
                  )}
                </div>
                <div style={{ padding: '20px 24px' }}>
                  <p className="font-display" style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--navy)', lineHeight: 1.3 }}>{name}</p>
                  <p style={{ fontSize: '0.825rem', color: '#5a6a7a', marginTop: '5px', lineHeight: 1.5 }}>{title}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── MORE THAN TRAFFIC ── */}
      <section style={{ background: 'var(--navy)', padding: '100px 0' }} aria-label="Group services">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

          <div style={{ marginBottom: '80px' }}>
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <span className="eyebrow">The MW Group</span>
              <div style={{ width: '28px', height: '2px', background: 'var(--orange)' }} />
            </div>
            <h2 className="section-title reveal d1" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', color: '#fff' }}>
              More Than Traffic
            </h2>
            <div className="orange-rule reveal d2" style={{ marginTop: '16px' }} />
            <p className="reveal d3" style={{ fontSize: '1rem', lineHeight: 1.78, color: 'var(--muted)', maxWidth: '600px', marginTop: '20px' }}>
              While traffic management remains our core service, the MW Group delivers broader capability across training, workforce supply, and digital compliance.
            </p>
          </div>

          {/* 2×2 card grid */}
          <div className="group-grid">
            {groupEntities.map(({ name, headline, body, href, logo, modifier }, i) => (
              <div
                key={name}
                className={`group-card ${modifier} reveal d${(i % 2) + 1}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'var(--charcoal)',
                  borderRadius: '2px',
                  padding: '36px 32px',
                }}
              >
                {/* Logo container */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '220px',
                  height: '80px',
                  margin: '0 auto',
                  flexShrink: 0,
                }}>
                  <Image
                    src={logo}
                    alt={`${name} logo`}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="220px"
                  />
                </div>

                {/* Positioning headline */}
                <p className="font-display" style={{
                  fontWeight: 600,
                  fontSize: '1rem',
                  color: '#fff',
                  lineHeight: 1.45,
                  marginTop: '40px',
                }}>
                  {headline}
                </p>

                {/* Supporting copy */}
                <p style={{
                  fontSize: '0.875rem',
                  lineHeight: 1.78,
                  color: 'var(--muted)',
                  marginTop: '10px',
                  flexGrow: 1,
                }}>
                  {body}
                </p>

                {/* CTA */}
                <a href={href} target="_blank" rel="noopener noreferrer" className="group-card-cta" style={{ marginTop: '14px' }}>
                  Visit Site
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M2 8h12M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
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
