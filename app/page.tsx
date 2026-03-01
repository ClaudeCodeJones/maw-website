import { Fragment } from 'react'
import Link from 'next/link'
import RevealObserver from './components/RevealObserver'

export default function HomePage() {
  return (
    <>
      <RevealObserver />

      {/* ── HERO ── */}
      <section id="hero" aria-label="Hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-accent-line" aria-hidden="true" />
        <div className="hero-panel" aria-hidden="true">
          <div className="hero-panel-corner" aria-hidden="true" />
        </div>

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '140px 24px 160px', width: '100%' }}>
          <div style={{ maxWidth: '660px' }}>

            <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <span className="eyebrow">Traffic Management Solutions</span>
              <div style={{ width: '28px', height: '2px', background: 'var(--orange)' }} />
            </div>

            <h1 className="reveal d1 font-display"
                style={{ fontWeight: 700, fontSize: 'clamp(2.6rem,6vw,5rem)', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
              We Don&apos;t<br />
              Just Manage<br />
              <span style={{ color: 'var(--orange)' }}>Traffic.</span>
            </h1>

            <p className="reveal d2 font-display"
               style={{ fontWeight: 600, fontSize: 'clamp(1.1rem,2vw,1.4rem)', letterSpacing: '-0.01em', color: 'var(--light)', marginTop: '20px' }}>
              We manage it well.
            </p>

            <p className="reveal d3"
               style={{ fontSize: '1rem', lineHeight: 1.78, color: 'var(--muted)', maxWidth: '460px', marginTop: '20px' }}>
              Professional traffic management for road works, construction sites, events, and infrastructure projects.
              Accredited, reliable, and safety-first.
            </p>

            <div className="reveal d4" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '36px' }}>
              <Link href="/contact" className="btn-orange" style={{ padding: '14px 28px', fontSize: '0.9rem' }}>
                Get a Free Quote
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true">
                  <path d="M3 8.5h11M10 5l3.5 3.5L10 12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/services" className="btn-ghost" style={{ padding: '14px 28px', fontSize: '0.9rem' }}>View Services</Link>
            </div>

          </div>
        </div>

        {/* Stats bar */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 10, background: 'rgba(22,36,53,0.92)', backdropFilter: 'blur(10px)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
              {[
                { value: '15+', label: 'Years Experience' },
                { value: '500+', label: 'Projects Completed' },
                { value: '24/7', label: 'Emergency Response' },
              ].map(({ value, label }, i) => (
                <div key={value} style={{ padding: '20px 24px', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : undefined, textAlign: 'center' }}>
                  <div className="font-display" style={{ fontWeight: 700, fontSize: '2rem', color: 'var(--orange)', lineHeight: 1 }}>{value}</div>
                  <div style={{ fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '4px' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ACCREDITATION BAND ── */}
      <div style={{ background: 'var(--navy-mid)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '18px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500 }}>Accredited &amp; Certified Traffic Management Specialists</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px', flexWrap: 'wrap' }}>
            {['Workzone Certified','RMS Approved','ISO 9001 Compliant','SafeWork NSW'].map((cert, i) => (
              <Fragment key={cert}>
                {i > 0 && <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.15)' }} />}
                <span style={{ fontSize: '0.72rem', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.7 }}>{cert}</span>
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section id="services" style={{ background: 'var(--off-white)', padding: '100px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

          <div style={{ marginBottom: '60px' }}>
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <span className="eyebrow">What We Do</span>
              <div style={{ width: '28px', height: '2px', background: 'var(--orange)' }} />
            </div>
            <h2 className="section-title reveal d1" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', color: 'var(--navy)' }}>
              Comprehensive Traffic<br />Management Services
            </h2>
            <div className="orange-rule reveal d2" style={{ marginTop: '16px' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '20px' }}>
            {[
              {
                icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>,
                extra: <><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/></>,
                title: 'Traffic Management Plans',
                body: 'Custom TMPs designed to meet compliance standards and keep your project on schedule — safely and efficiently.',
                delay: 'd1',
              },
              {
                icon: <rect x="1" y="3" width="15" height="13"/>,
                extra: <><polygon points="16,8 20,8 23,11 23,16 16,16 16,8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>,
                title: 'Road Works Control',
                body: 'Safe, compliant traffic control for road works, maintenance, and construction projects of all scales and durations.',
                delay: 'd2',
              },
              {
                icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
                extra: null,
                title: 'Event Traffic Management',
                body: 'Seamless vehicle and crowd flow for sporting events, concerts, festivals, and large-scale public gatherings.',
                delay: 'd3',
              },
              {
                icon: <><circle cx="12" cy="5" r="3"/><path d="M12 8v8M9 14l3 3 3-3M8 10c-2 0-4 1.5-4 4"/><path d="M16 10c2 0 4 1.5 4 4"/></>,
                extra: null,
                title: 'Pedestrian Management',
                body: 'Safe pedestrian access and flow through work zones, construction sites, and high foot-traffic areas.',
                delay: 'd1',
              },
              {
                icon: <><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>,
                extra: null,
                title: 'VMS & Signage',
                body: 'Variable message signs, temporary road signage, and lane markings to redirect traffic clearly and safely.',
                delay: 'd2',
              },
              {
                icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.27-.45a2 2 0 0 1 2.11.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 18.92z"/>,
                extra: null,
                title: '24/7 Emergency Response',
                body: 'Rapid on-site deployment for emergency incidents, urgent callouts, and after-hours traffic management requirements.',
                delay: 'd3',
              },
            ].map(({ icon, extra, title, body, delay }) => (
              <div key={title} className={`service-card reveal ${delay}`}>
                <div className="service-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {icon}{extra}
                  </svg>
                </div>
                <h3 className="font-display" style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--navy)' }}>{title}</h3>
                <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#5a6a7a', marginTop: '10px' }}>{body}</p>
                <Link href="/services" className="service-link">
                  Learn More{' '}
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                    <path d="M2 6.5h9M8 3l3 3.5-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section id="why-us" style={{ background: 'var(--navy)', padding: '100px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div className="two-col-grid">

            {/* Left: copy */}
            <div>
              <div className="reveal">
                <span className="eyebrow">Why Choose Us</span>
                <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', color: '#fff', marginTop: '8px' }}>
                  Authority. Safety.<br />
                  <span style={{ color: 'var(--orange)' }}>Excellence.</span>
                </h2>
                <div className="orange-rule" style={{ marginTop: '16px' }} />
                <p style={{ fontSize: '1rem', lineHeight: 1.78, color: 'var(--muted)', marginTop: '20px', maxWidth: '440px' }}>
                  Men at Work Traffic Management brings industry-leading expertise and an unwavering commitment to safety.
                  Every plan is built with precision, every deployment executed with care.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '36px' }}>
                {[
                  { d: 'd1', title: 'Fully Accredited & Certified', body: 'All team members hold current accreditations and certifications to the highest industry standards.' },
                  { d: 'd2', title: 'Tailored to Your Project', body: 'No two projects are the same. Every traffic management plan is custom-built for your site, scope, and schedule.' },
                  { d: 'd3', title: 'Zero Compromise on Safety', body: 'Our approach starts and ends with safety. Every decision, every deployment, every plan is safety-driven.' },
                  { d: 'd4', title: 'Rapid Mobilisation', body: 'Our teams are ready to mobilise at short notice — 24 hours a day, 7 days a week, 365 days a year.' },
                ].map(({ d, title, body }) => (
                  <div key={title} className={`reveal ${d}`} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div className="feature-icon">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M2 8l4.5 4.5 7.5-9" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-display" style={{ fontWeight: 600, fontSize: '1rem', color: '#fff' }}>{title}</h4>
                      <p style={{ fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.65, marginTop: '5px' }}>{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: stat boxes */}
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', position: 'relative' }}>
              <div className="stat-box" style={{ background: 'var(--navy-mid)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="stat-num" style={{ fontSize: 'clamp(2.5rem,4.5vw,4rem)' }}>15+</div>
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '8px' }}>Years of Experience</div>
              </div>
              <div className="stat-box" style={{ background: 'var(--orange)' }}>
                <div className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(2.5rem,4.5vw,4rem)', color: '#fff', lineHeight: 1 }}>500+</div>
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', marginTop: '8px' }}>Projects Completed</div>
              </div>
              <div className="stat-box" style={{ background: 'var(--charcoal)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="stat-num" style={{ fontSize: 'clamp(2.5rem,4.5vw,4rem)' }}>100%</div>
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '8px' }}>Accredited Staff</div>
              </div>
              <div className="stat-box" style={{ background: 'var(--navy-mid)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="stat-num" style={{ fontSize: 'clamp(2.5rem,4.5vw,4rem)' }}>24/7</div>
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '8px' }}>Emergency Support</div>
              </div>
              <div style={{ position: 'absolute', top: 0, right: '-10px', bottom: 0, width: '3px', background: 'var(--orange)', borderRadius: '2px' }} />
            </div>

          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="process" style={{ background: '#0A1623', padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

          <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span className="eyebrow">Our Process</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', color: '#fff', marginTop: '8px' }}>
              Simple. Efficient.<br />
              <span style={{ color: 'var(--orange)' }}>Reliable.</span>
            </h2>
            <div className="orange-rule" style={{ margin: '16px auto 0' }} />
          </div>

          <div className="process-grid">
            <div className="process-connector" style={{ position: 'absolute', top: '27px', left: '12.5%', right: '12.5%', height: '2px', background: 'linear-gradient(90deg, var(--orange) 0%, rgba(242,101,34,0.15) 100%)', pointerEvents: 'none', zIndex: 0 }} />

            {[
              { n: '01', title: 'Initial Consult', body: 'We discuss your project, timeline, and site-specific needs to understand the full scope.', solid: true },
              { n: '02', title: 'Plan & Design', body: 'Our engineers develop a detailed, compliant traffic management plan tailored to your project.', solid: false },
              { n: '03', title: 'Deploy & Execute', body: 'Accredited teams arrive on-site with equipment and signage ready to go from day one.', solid: false },
              { n: '04', title: 'Monitor & Report', body: 'Ongoing real-time monitoring with comprehensive reporting delivered at project completion.', solid: false },
            ].map(({ n, title, body, solid }, i) => (
              <div key={n} className={`reveal d${i+1}`} style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div className={solid ? 'step-circle-solid' : 'step-circle-outline'} style={{ margin: '0 auto' }}>
                  <span className="step-num">{n}</span>
                </div>
                <h3 className="font-display" style={{ fontWeight: 600, fontSize: '1rem', color: '#fff', marginTop: '20px' }}>{title}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.7, marginTop: '10px' }}>{body}</p>
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
              Ready to Get Started?
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.88)', maxWidth: '480px', margin: '20px auto 0', lineHeight: 1.72 }}>
              Contact our team today for a free consultation and quote. We&apos;ll have a plan ready before your project begins.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px', marginTop: '36px' }}>
              <Link href="/contact" className="btn-white">
                Get a Free Quote
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 8h12M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <a href="tel:+611800000000" className="btn-outline-white">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M14.5 10.3a1.25 1.25 0 0 1-1.14.84c-3.98.1-7.82-3.74-7.72-7.72A1.25 1.25 0 0 1 6.48 2.28l1.09-.52a.63.63 0 0 1 .7.27l1.88 3.13a.63.63 0 0 1-.13.8l-1.25 1.04a6.88 6.88 0 0 0 3.22 3.22l1.04-1.25a.63.63 0 0 1 .8-.13l3.13 1.88a.63.63 0 0 1 .27.7l-.52 1.09Z" stroke="currentColor" strokeWidth="1.3"/>
                </svg>
                1800 000 000
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
