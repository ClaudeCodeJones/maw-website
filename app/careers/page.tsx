import type { Metadata } from 'next'
import Link from 'next/link'
import RevealObserver from '../components/RevealObserver'
import CareerPath from '../components/careers/CareerPath'
import BranchHiringCard from '../components/careers/BranchHiringCard'
import ApplicationForm from '../components/careers/ApplicationForm'
import { branchHiring } from '../../data/hiringStatus'

export const metadata: Metadata = {
  title: 'Careers | Men at Work Traffic Management',
  description:
    'Join the Men at Work team. We are looking for traffic controllers, supervisors, and planners across our South Island branches. View current openings and apply today.',
}

const benefits = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Safe by Default',
    body: 'Safety is not a box we tick. It is how every team member thinks and works, from day one.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Real Teams',
    body: 'You work alongside people who have been in the industry for years. Experienced crews to help you develop.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Grow With Us',
    body: 'We promote from within. STMs become Leads. Leads become managers. There is a path here.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Training Provided',
    body: 'We develop our own people. Through in-house training we build qualifications, competencies, and real site experience.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: 'Industry Leadership',
    body: 'Men at Work is known for delivering quality traffic management. Join a team that takes pride in doing the job properly.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Five Locations',
    body: 'With branches in Wellington, Nelson, Blenheim, Christchurch, and Timaru, opportunities exist across New Zealand.',
  },
]

export default function CareersPage() {
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
        aria-label="Careers hero"
      >
        <div style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(242,101,34,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} aria-hidden="true" />
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: 'var(--orange)' }} aria-hidden="true" />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '20px' }}>
            <span className="eyebrow">Join the Team</span>
            <div style={{ width: '28px', height: '2px', background: 'var(--orange)' }} />
          </div>
          <h1 className="reveal d1 font-display" style={{ fontWeight: 700, fontSize: 'clamp(2.4rem,5vw,4.5rem)', lineHeight: 1.05, letterSpacing: '-0.03em', color: '#fff' }}>
            Build a Career in Traffic
          </h1>
          <p className="reveal d2 font-display" style={{ fontWeight: 600, fontSize: 'clamp(1rem,2vw,1.3rem)', letterSpacing: '-0.01em', color: 'var(--light)', marginTop: '20px' }}>
            Real work. Solid teams. A clear path forward.
          </p>
          <p className="reveal d3" style={{ fontSize: '1rem', lineHeight: 1.78, color: 'var(--muted)', maxWidth: '540px', margin: '20px auto 0' }}>
            Men at Work has been building teams across New Zealand since 2008. We look for people who take safety seriously, show up, and want to grow in a hands-on industry.
          </p>
          <div className="reveal d4" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px', marginTop: '40px' }}>
            <a href="#apply" className="btn-orange">
              Apply Now
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 8h12M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#openings" className="btn-ghost">
              View Openings
            </a>
          </div>
        </div>
      </section>

      {/* ── BEFORE YOU APPLY ── */}
      <section style={{ background: 'var(--charcoal)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '72px 0' }} aria-label="Before you apply">
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <span className="eyebrow">Before You Apply</span>
            <div style={{ width: '28px', height: '2px', background: 'var(--orange)' }} />
          </div>
          <p className="reveal d1" style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--light)', marginBottom: '24px' }}>
            We are always on the lookout for great people, whether you are qualified or not. Traffic management has a clear career pathway, and we will support you to upskill from the ground up. If you are already qualified, we will help you take the next step.
          </p>
          <div className="reveal d2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '28px' }}>
            {[
              { label: 'Right to Work', body: 'You must hold a working holiday visa or have the legal right to work in New Zealand.' },
              { label: 'Drug Testing', body: 'All successful applicants are required to pass a pre-employment drug and alcohol test.' },
              { label: 'Licence Requirement', body: 'A minimum Restricted Class 1 (car) licence is required. A Full Class 1 is preferred.' },
            ].map(({ label, body }) => (
              <div key={label} style={{ padding: '20px 24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderLeft: '3px solid var(--orange)', borderRadius: '2px' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '8px' }}>{label}</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: 'var(--muted)' }}>{body}</p>
              </div>
            ))}
          </div>
          <p className="reveal d3" style={{ fontSize: '0.875rem', lineHeight: 1.72, color: 'var(--muted)', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '20px' }}>
            Check the hiring status for each location below before applying. Applications that do not meet the criteria above may not receive a response.
          </p>
        </div>
      </section>

      {/* ── WHY WORK WITH US ── */}
      <section style={{ background: 'var(--navy)', padding: '100px 0' }} aria-label="Why work with us">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

          <div style={{ marginBottom: '60px' }}>
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <span className="eyebrow">Why Men at Work</span>
              <div style={{ width: '28px', height: '2px', background: 'var(--orange)' }} />
            </div>
            <h2 className="section-title reveal d1" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', color: '#fff' }}>
              Why Work With Us
            </h2>
            <div className="orange-rule reveal d2" style={{ marginTop: '16px' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
            {benefits.map(({ icon, title, body }, i) => (
              <div
                key={title}
                className={`reveal d${(i % 4) + 1}`}
                style={{
                  display: 'flex',
                  gap: '16px',
                  padding: '28px',
                  background: 'var(--charcoal)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '2px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'var(--orange)',
                    borderRadius: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </div>
                <div>
                  <h3 className="font-display" style={{ fontWeight: 600, fontSize: '0.95rem', color: '#fff', marginBottom: '8px', lineHeight: 1.3 }}>
                    {title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.72, color: 'var(--muted)' }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CAREER PATH ── */}
      <section style={{ background: 'var(--off-white)', padding: '100px 0' }} aria-label="Career path">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

          <div style={{ marginBottom: '60px' }}>
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <span className="eyebrow">Your Path</span>
              <div style={{ width: '28px', height: '2px', background: 'var(--orange)' }} />
            </div>
            <h2 className="section-title reveal d1" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', color: 'var(--navy)' }}>
              Where You Can Go
            </h2>
            <div className="orange-rule reveal d2" style={{ marginTop: '16px' }} />
            <p className="reveal d3" style={{ fontSize: '1rem', lineHeight: 1.78, color: '#5a6a7a', maxWidth: '520px', marginTop: '20px' }}>
              Most of our managers started on the tools. We build careers, not just rosters.
            </p>
          </div>

          <CareerPath />

        </div>
      </section>

      {/* ── CURRENT OPENINGS ── */}
      <section id="openings" style={{ background: 'var(--navy)', padding: '100px 0' }} aria-label="Current openings">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

          <div style={{ marginBottom: '60px' }}>
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <span className="eyebrow">Current Openings</span>
              <div style={{ width: '28px', height: '2px', background: 'var(--orange)' }} />
            </div>
            <h2 className="section-title reveal d1" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', color: '#fff' }}>
              Where We Are Hiring
            </h2>
            <div className="orange-rule reveal d2" style={{ marginTop: '16px' }} />
            <p className="reveal d3" style={{ fontSize: '1rem', lineHeight: 1.78, color: 'var(--muted)', maxWidth: '520px', marginTop: '20px' }}>
              Hiring status is updated regularly. Applications are accepted only when a branch is actively hiring.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {branchHiring.map((item, i) => (
              <div key={item.branch} className={`reveal d${(i % 4) + 1}`}>
                <BranchHiringCard item={item} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── APPLICATION FORM ── */}
      <section id="apply" style={{ background: '#0A1623', padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.04)' }} aria-label="Apply now">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

          <div className="two-col-grid" style={{ alignItems: 'start' }}>

            {/* Left: copy */}
            <div>
              <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <span className="eyebrow">Get In Touch</span>
                <div style={{ width: '28px', height: '2px', background: 'var(--orange)' }} />
              </div>
              <h2 className="section-title reveal d1" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', color: '#fff' }}>
                Apply Now
              </h2>
              <div className="orange-rule reveal d2" style={{ marginTop: '16px' }} />
              <p className="reveal d3" style={{ fontSize: '1rem', lineHeight: 1.78, color: 'var(--muted)', marginTop: '24px' }}>
                Fill in the form and one of our team will be in touch. We review every application and aim to respond within a few business days.
              </p>
              <p className="reveal d4" style={{ fontSize: '1rem', lineHeight: 1.78, color: 'var(--muted)', marginTop: '16px' }}>
                You can also reach us directly on{' '}
                <a href="tel:0800639289" style={{ color: 'var(--orange)', textDecoration: 'none', fontWeight: 500 }}>
                  0800 639 289
                </a>
                .
              </p>

              <div className="reveal d5" style={{ marginTop: '40px', padding: '24px', background: 'rgba(242,101,34,0.06)', border: '1px solid rgba(242,101,34,0.15)', borderLeft: '3px solid var(--orange)', borderRadius: '2px' }}>
                <p className="font-display" style={{ fontWeight: 600, fontSize: '0.9rem', color: '#fff', marginBottom: '8px' }}>
                  Important for Casual Applicants
                </p>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.65, color: 'var(--muted)', marginBottom: '14px' }}>
                  The nature of casual work is sporadic. While this can offer flexibility, and we do promote from within our casual pool when full-time positions become available, it may not suit everyone. We want to ensure you fully understand the role before proceeding. If you require a consistent income, this may not be the right fit for you.
                </p>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.65, color: 'var(--muted)' }}>
                  If you are applying for a casual traffic role, please read the{' '}
                  <a
                    href="https://assets.zyrosite.com/AE0ryZVv54tkZZN7/what-to-expect-as-a-casual-employee-ttc-AMqDWav4NQCQ4qOe.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--orange)', textDecoration: 'none', fontWeight: 500 }}
                  >
                    What to Expect as a Casual Worker
                  </a>
                  {' '}guide before completing the application form.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="reveal d2">
              <ApplicationForm />
            </div>

          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section" aria-label="Call to action">
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
          <div className="reveal">
            <h2 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(2rem,4.5vw,4rem)', color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Ready to join the team?
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.88)', maxWidth: '480px', margin: '20px auto 0', lineHeight: 1.72 }}>
              Apply above or reach out to your nearest branch directly.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px', marginTop: '36px' }}>
              <a href="#apply" className="btn-white">
                Apply Now
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 8h12M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <Link href="/contact" className="btn-outline-white">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
