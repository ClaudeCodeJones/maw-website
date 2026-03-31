import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, User } from 'lucide-react'
import RevealObserver from '../components/RevealObserver'
import LocationsMap from '../components/LocationsMap'
import Timeline from '../components/about/Timeline'

export const metadata: Metadata = {
  title: 'About Us | Men at Work Traffic Management',
  description:
    'Learn about Men at Work Traffic Management, founded in 2008 and operating across five South Island locations. Discover our leadership team and group services.',
  alternates: {
    canonical: '/about-us',
  },
}

/* ── Data ── */

type GroupEntity = {
  name: string
  headline: string
  body: string
  href: string
  logo: string
  modifier: string
  comingSoon?: boolean
}

const groupEntities: GroupEntity[] = [
  {
    name: 'MW Training & Planning',
    headline: 'Specialist TMP design, risk assessment, planning, and industry training services.',
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
    headline: 'Professional sweeping for construction sites, industrial yards and public spaces.',
    body: 'From post-construction clean-ups to site maintenance, our sweepers remove debris, dust, and loose material to keep surfaces safe and operational.',
    href: 'https://www.sweepco.co.nz',
    logo: '/logos/sweepco_white.webp',
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
  { name: 'Dean Hyde', title: 'Managing Director', region: 'MW Group' },
  { name: 'Esther Hyde', title: 'Director', region: 'MW Group' },
  { name: 'Hayden Wilson', title: 'General Manager', region: 'MW Group' },
  { name: 'Nathan Jones', title: 'Business Manager', region: 'MW Group' },
  { name: 'Daniel Adams', title: 'Training & Compliance Manager', region: 'National' },
  { name: 'Brock Vuleta', title: 'Business Development Manager', titleShort: 'BDM', region: 'National' },
  { name: 'Kurt Puryer-Smith', title: 'Regional Manager', region: 'Central' },
  { name: 'Royden van Dyk', title: 'Regional Manager', region: 'Southern' },
]

const leadershipImages: Record<string, string> = {
  'Dean Hyde': '/leadership/dean_hyde_v2.webp',
  'Esther Hyde': '/leadership/estherhyde_v1.webp',
  'Hayden Wilson': '/leadership/haydenwilson.webp',
  'Nathan Jones': '/leadership/nathanjones.webp',
  'Daniel Adams': '/leadership/danadams.webp',
  'Kurt Puryer-Smith': '/leadership/kurtpuryersmith_v1.webp',
  'Brock Vuleta': '/leadership/brockvuleta.webp',
  'Royden van Dyk': '/leadership/roydenvandyk-v2.webp',
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dean Hyde',
  jobTitle: 'Managing Director',
  worksFor: {
    '@type': 'Organization',
    name: 'Men at Work Traffic Management',
    url: 'https://www.menatwork.co.nz',
  },
  image: 'https://www.menatwork.co.nz/leadership/deanhyde.webp',
}

/* ── Page ── */

export default function AboutUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <RevealObserver />

      {/* ── HERO ── */}
      <section
        style={{
          position: 'relative',
          background: '#070f1b',
          paddingTop: '180px',
          paddingBottom: '80px',
          overflow: 'hidden',
        }}
        aria-label="About Us hero"
      >
        <div style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(253,79,0,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} aria-hidden="true" />


        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ marginBottom: '20px' }}>
            <span className="eyebrow">Who We Are</span>
          </div>
          <h1 className="reveal d1 font-display" style={{ fontWeight: 700, fontSize: 'clamp(2.4rem,5vw,4.5rem)', lineHeight: 1.05, letterSpacing: '-0.03em', color: '#fff' }}>
            About Men at Work
          </h1>
          <p className="reveal d2 font-display" style={{ fontWeight: 600, fontSize: 'clamp(1rem,2vw,1.3rem)', letterSpacing: '-0.01em', color: 'var(--light)', marginTop: '20px' }}>
            Built on hard work. Grown on trust.
          </p>
          <p className="reveal d3" style={{ fontSize: '1rem', lineHeight: 1.78, color: 'var(--muted)', maxWidth: '540px', marginTop: '20px' }}>
            Men at Work has grown from an owner-operated traffic management company into a multi-division group delivering traffic management, planning, and consultancy services across New Zealand.
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
                In 2008, Dean and Esther Hyde took ownership of Men at Work and have led the business as hands-on owner-operators ever since.
              </p>
              <p className="reveal d2" style={{ fontSize: '1rem', lineHeight: 1.78, color: 'var(--muted)', marginTop: '16px', maxWidth: '540px' }}>
                What began as a focused traffic management company in Christchurch has grown steadily through strong leadership, experienced crews, and long-term client relationships.
              </p>
              <p className="reveal d3" style={{ fontSize: '1rem', lineHeight: 1.78, color: 'var(--muted)', marginTop: '16px', maxWidth: '540px' }}>
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

      {/* ── TIMELINE ── */}
      <section style={{ background: 'var(--off-white)', borderTop: '1px solid rgba(13,27,42,0.06)', borderBottom: '1px solid rgba(13,27,42,0.06)' }} aria-label="Company history">
        <Timeline />
      </section>

      {/* ── LOCATIONS ── */}
      <section style={{ background: '#0A1623', padding: '80px 0 40px', borderTop: '1px solid rgba(255,255,255,0.04)' }} aria-label="Our locations">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

          <div style={{ marginBottom: '20px' }}>
            <div className="reveal" style={{ marginBottom: '10px' }}>
              <span className="eyebrow">Where We Operate</span>
            </div>
            <h2 className="section-title reveal d1" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', color: '#fff' }}>
              Five Branches. One Standard.
            </h2>
            <div className="orange-rule reveal d2" style={{ marginTop: '16px' }} />
            <p className="reveal d3" style={{ marginTop: '20px', fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.65)', maxWidth: '480px' }}>
              Five branches delivering the same professional standard across every region we operate.
            </p>
            <p className="reveal d3" style={{ marginTop: '10px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', fontStyle: 'normal' }}>
              <span style={{ color: 'rgba(253,79,0,0.55)' }}>→</span> Select a branch to view details
            </p>
          </div>

          <div className="reveal d1">
            <LocationsMap />
          </div>

        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section style={{ background: 'var(--off-white)', padding: '100px 0', borderTop: '1px solid rgba(13,27,42,0.06)' }} aria-label="Leadership team">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

          <div style={{ marginBottom: '60px' }}>
            <div className="reveal" style={{ marginBottom: '10px' }}>
              <span className="eyebrow">Our People</span>
            </div>
            <h2 className="section-title reveal d1" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', color: 'var(--navy)' }}>
              Leadership
            </h2>
            <div className="orange-rule reveal d2" style={{ marginTop: '16px' }} />
            <p className="reveal d3" style={{ fontSize: '1rem', lineHeight: 1.78, color: 'var(--muted)', maxWidth: '480px', marginTop: '20px' }}>
              Experienced leadership across operations, regions, compliance, and growth.
            </p>
          </div>

          {/* Row 1 — Senior Leadership */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4" style={{ marginBottom: '16px' }}>

            {/* Label card */}
            <div
              className="hidden md:flex"
              style={{
                background: 'rgba(253,79,0,0.04)',
                border: '1px solid rgba(226,226,226,0.9)',
                borderLeft: '4px solid var(--orange)',
                borderRadius: '2px',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '24px 20px',
                boxShadow: 'inset 4px 0 12px rgba(253,79,0,0.06)',
              }}
            >
              <div>
                <p className="font-display" style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--navy)', lineHeight: 1.3, marginBottom: '8px' }}>
                  Senior Leadership Team
                </p>
                <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', lineHeight: 1.5 }}>
                  Executive leadership of the MW Group
                </p>
              </div>
            </div>

            {leadership.slice(0, 4).map(({ name, title, titleShort, region }, i) => (
              <div
                key={name}
                className={`team-card reveal d${i + 1}`}
                style={{
                  background: '#fff',
                  border: '1px solid rgba(253,79,0,0.2)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}
              >
                <div className="leadership-img-wrap" style={{ position: 'relative', width: '100%', aspectRatio: '1', background: 'var(--light)', borderBottom: '2px solid var(--orange)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {leadershipImages[name] ? (
                    <Image
                      src={leadershipImages[name]}
                      alt={name}
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center top' }}
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 260px"
                    />
                  ) : (
                    <User size={48} strokeWidth={1.5} aria-hidden="true" style={{ color: 'var(--muted)' }} />
                  )}
                </div>
                <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <p className="font-display" style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--navy)', lineHeight: 1.3 }}>
                    {name}
                  </p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.45 }}>
                    {titleShort ? (
                      <><span className="lg:hidden">{titleShort}</span><span className="hidden lg:inline">{title}</span></>
                    ) : title}
                    {region && <><br />{region}</>}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 — Leadership Team */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

            {/* Label card */}
            <div
              className="hidden md:flex"
              style={{
                background: 'rgba(253,79,0,0.04)',
                border: '1px solid rgba(226,226,226,0.9)',
                borderLeft: '4px solid var(--orange)',
                borderRadius: '2px',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '24px 20px',
                boxShadow: 'inset 4px 0 12px rgba(253,79,0,0.06)',
              }}
            >
              <div>
                <p className="font-display" style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--navy)', lineHeight: 1.3, marginBottom: '8px' }}>
                  Leadership Team
                </p>
                <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', lineHeight: 1.5 }}>
                  Regional and operational management across branches
                </p>
              </div>
            </div>

            {leadership.slice(4).map(({ name, title, titleShort, region }, i) => (
              <div
                key={name}
                className={`team-card reveal d${i + 1}`}
                style={{
                  background: '#fff',
                  border: '1px solid rgba(253,79,0,0.2)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}
              >
                <div className="leadership-img-wrap" style={{ position: 'relative', width: '100%', aspectRatio: '1', background: 'var(--light)', borderBottom: '2px solid var(--orange)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {leadershipImages[name] ? (
                    <Image
                      src={leadershipImages[name]}
                      alt={name}
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center top' }}
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 260px"
                    />
                  ) : (
                    <User size={48} strokeWidth={1.5} aria-hidden="true" style={{ color: 'var(--muted)' }} />
                  )}
                </div>
                <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <p className="font-display" style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--navy)', lineHeight: 1.3 }}>
                    {name === 'Kurt Puryer-Smith' ? (
                      <>
                        <span className="lg:hidden">Kurt<br />Puryer-Smith</span>
                        <span className="hidden lg:inline">Kurt Puryer-Smith</span>
                      </>
                    ) : name === 'Royden van Dyk' ? (
                      <>
                        <span className="lg:hidden">Royden<br />van Dyk</span>
                        <span className="hidden lg:inline">Royden van Dyk</span>
                      </>
                    ) : name}
                  </p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.45 }}>
                    {name === 'Brock Vuleta' ? (
                      <>
                        <span className="lg:hidden">Business Dev Mgr<br />National</span>
                        <span className="hidden lg:inline">{title}<br />{region}</span>
                      </>
                    ) : name === 'Daniel Adams' ? (
                      <>
                        <span className="lg:hidden">Training &amp; Compliance Mgr<br />National</span>
                        <span className="hidden lg:inline">{title}<br />{region}</span>
                      </>
                    ) : titleShort ? (
                      <><span className="lg:hidden">{titleShort}</span><span className="hidden lg:inline">{title}</span>{region && <><br />{region}</>}</>
                    ) : (
                      <>{title}{region && <><br />{region}</>}</>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── MORE THAN TRAFFIC ── */}
      <section style={{ background: '#0A1623', padding: '100px 0' }} aria-label="Group services">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

          <div style={{ marginBottom: '80px' }}>
            <div className="reveal" style={{ marginBottom: '10px' }}>
              <span className="eyebrow">The MW Group</span>
            </div>
            <h2 className="section-title reveal d1" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', color: '#fff' }}>
              More Than Traffic
            </h2>
            <div className="orange-rule reveal d2" style={{ marginTop: '16px' }} />
            <p className="reveal d3" style={{ fontSize: '1rem', lineHeight: 1.78, color: 'var(--muted)', maxWidth: '600px', marginTop: '20px' }}>
              While traffic management remains our core service, the MW Group delivers broader capability across planning, training, workforce supply, road sweeping, and digital compliance.
            </p>
          </div>

          {/* 2×2 card grid */}
          <div className="group-grid">
            {groupEntities.map(({ name, headline, body, href, logo, modifier, comingSoon }, i) => (
              <div
                key={name}
                className={`group-card ${modifier} reveal d${(i % 2) + 1}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'var(--charcoal)',
                  borderRadius: '2px',
                }}
              >
                {/* Logo container */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '220px',
                  height: '80px',
                  margin: '0',
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
                <p className="group-card-headline text-[var(--muted)] md:text-white text-base md:text-lg font-[400] md:font-[600] leading-relaxed max-w-[520px]" style={{
                  marginTop: '40px',
                }}>
                  {headline}
                </p>

                {/* Supporting copy */}
                <p className="group-card-body" style={{
                  fontSize: '0.875rem',
                  lineHeight: 1.78,
                  color: 'var(--muted)',
                  marginTop: '10px',
                  flexGrow: 1,
                }}>
                  {body}
                </p>

                {/* CTA */}
                {comingSoon ? (
                  <span className="group-card-cta" style={{ marginTop: '14px', opacity: 0.5, cursor: 'default', pointerEvents: 'none' }}>
                    Coming Soon
                  </span>
                ) : (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="group-card-cta" style={{ marginTop: '14px' }}>
                    Visit Site
                    <ArrowRight size={14} strokeWidth={1.5} aria-hidden="true" />
                  </a>
                )}
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
                <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
