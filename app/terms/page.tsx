import type { Metadata } from 'next'
import RevealObserver from '../components/RevealObserver'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Men at Work Traffic Management',
  description: 'Terms and Conditions of Services for Men at Work Canterbury Limited and Men at Work Wellington Limited.',
  alternates: {
    canonical: '/terms',
  },
}

type Section = {
  number: string
  heading: string
  body?: string
  bullets?: string[]
  afterBullets?: string
  subSections?: {
    heading: string
    body: string
  }[]
  extraParas?: string[]
}

const sections: Section[] = [
  {
    number: '1',
    heading: 'Definitions',
    body: 'In these Terms:',
    bullets: [
      'Client means the person, company or organisation requesting services from Men at Work.',
      'Services means traffic management services including (but not limited to): traffic management planning and implementation, temporary traffic management operations, traffic management consultancy, traffic management for events, and temporary traffic management equipment supplied as part of a service.',
      'Work Order means any booking, work instruction, quote, schedule, or other written confirmation of services.',
      'Agreement means the Work Order together with these Terms.',
    ],
  },
  {
    number: '2',
    heading: 'Supply of Services',
    body: 'Men at Work agrees to provide Services to the Client in accordance with the Agreement.',
    extraParas: [
      'Men at Work will perform the Services using reasonable care, skill and industry standards expected of a professional traffic management contractor.',
      'Men at Work may engage subcontractors or other personnel to perform the Services where required.',
    ],
  },
  {
    number: '3',
    heading: 'Client Responsibilities',
    body: 'The Client must:',
    bullets: [
      'provide safe and lawful access to all worksites',
      'ensure site conditions are safe for work to be undertaken',
      'provide any information required by Men at Work to perform the Services',
      'comply with any approved Traffic Management Plan (TMP)',
      'comply with all applicable health and safety obligations under the Health and Safety at Work Act 2015',
    ],
    afterBullets: 'Men at Work may suspend or stop work if it reasonably believes conditions are unsafe. Any delay or additional cost caused by unsafe conditions, restricted access, inaccurate information, or Client actions may be charged to the Client.',
  },
  {
    number: '4',
    heading: 'Variations',
    body: 'The Client may request changes to the Services. If the requested change affects cost, resources, timing, or scope of work, Men at Work may issue a revised charge or variation before continuing. Where additional work is required due to circumstances outside Men at Work\'s control, those costs may be charged to the Client.',
  },
  {
    number: '5',
    heading: 'Charges and Payment',
    body: 'Men at Work may invoice the Client monthly or as otherwise agreed. Unless otherwise agreed in writing, payment is due on the 20th day of the month following the invoice date. All prices are exclusive of GST unless stated otherwise.',
    extraParas: ['If payment is not made by the due date Men at Work may:'],
    bullets: [
      'charge interest at 15% per annum calculated daily',
      'suspend or withhold further services',
      'recover all reasonable debt collection and legal costs',
    ],
    afterBullets: 'Men at Work\'s standard rates may change from time to time and apply to future bookings or work orders.',
  },
  {
    number: '6',
    heading: 'Cancellation Charges',
    body: 'Cancellation charges apply in accordance with Men at Work\'s published rate cards. Unless otherwise agreed:',
    subSections: [
      {
        heading: 'Day shift cancellations',
        body: 'Cancellation must be notified before 2:00pm on the previous day. Otherwise a cancellation charge equivalent to 8 hours at the applicable unit rate per shift may apply.',
      },
      {
        heading: 'Night shift cancellations',
        body: 'Cancellation must be notified at least 12 hours prior to the shift start. Otherwise a cancellation charge equivalent to 8 hours at the applicable unit rate per shift may apply.',
      },
    ],
  },
  {
    number: '7',
    heading: 'Equipment and Property',
    body: 'Where Men at Work equipment is used on site, the Client is responsible for ensuring it is not damaged, stolen, or misused. The Client is liable for the reasonable cost of repair or replacement of any equipment damaged or lost due to:',
    bullets: [
      'actions of the Client',
      'actions of the Client\'s contractors or staff',
      'unsafe site conditions',
      'vehicles or machinery operating within the worksite',
    ],
  },
  {
    number: '8',
    heading: 'Construction Contracts Act',
    body: 'Where the Services relate to construction work, the parties agree the Construction Contracts Act 2002 applies. Men at Work may issue invoices as payment claims under that Act. The Client must respond with a payment schedule within the timeframe required by the Act if disputing the claim.',
  },
  {
    number: '9',
    heading: 'Liability',
    body: 'To the fullest extent permitted by law, Men at Work is not liable for:',
    bullets: [
      'indirect or consequential loss',
      'loss of profit',
      'loss of opportunity',
      'business interruption',
    ],
    afterBullets: 'If Men at Work is found liable for any claim arising from the Services, its total liability is limited to the total amount paid by the Client to Men at Work in the six months prior to the event giving rise to the claim. Nothing in these Terms limits any liability that cannot be excluded under New Zealand law. Where the Services are supplied for business purposes, the Consumer Guarantees Act 1993 does not apply.',
  },
  {
    number: '10',
    heading: 'Security Interest (PPSA)',
    body: 'To secure payment of all amounts owed, the Client grants Men at Work a security interest in all present and after-acquired personal property of the Client under the Personal Property Securities Act 1999. The Client agrees that Men at Work may register this security interest on the Personal Property Securities Register (PPSR). The Client must sign any documents reasonably required to give effect to this security interest.',
  },
  {
    number: '11',
    heading: 'Default',
    body: 'An Event of Default occurs if:',
    bullets: [
      'the Client fails to pay any invoice when due',
      'the Client breaches these Terms and does not remedy the breach within 5 business days of notice',
      'the Client becomes insolvent or unable to pay its debts',
    ],
    afterBullets: 'If an Event of Default occurs Men at Work may suspend services, terminate the Agreement, or demand immediate payment of all outstanding amounts.',
  },
  {
    number: '12',
    heading: 'Force Majeure',
    body: 'Men at Work will not be liable for delays or failure to perform Services caused by events beyond its reasonable control including but not limited to:',
    bullets: [
      'severe weather',
      'natural disasters',
      'strikes',
      'labour shortages',
      'government restrictions',
      'pandemics',
    ],
    afterBullets: 'Where such events occur the parties will act reasonably to minimise disruption.',
  },
  {
    number: '13',
    heading: 'Privacy',
    body: 'Men at Work may collect and use personal or business information for the purposes of:',
    bullets: [
      'providing services',
      'credit assessment',
      'debt recovery',
      'business administration',
    ],
    afterBullets: 'All information will be handled in accordance with the Privacy Act 2020.',
  },
  {
    number: '14',
    heading: 'General',
    body: 'Men at Work may subcontract any part of the Services. The Client may not assign its rights or obligations without Men at Work\'s written consent. If any provision of these Terms is invalid or unenforceable, the remaining provisions remain in effect. These Terms are governed by the laws of New Zealand and the parties submit to the jurisdiction of the New Zealand courts.',
  },
]

export default function TermsPage() {
  return (
    <>
      <RevealObserver />

      {/* HERO */}
      <section
        style={{
          position: 'relative',
          background: '#070f1b',
          paddingTop: '180px',
          paddingBottom: '80px',
          overflow: 'hidden',
        }}
        aria-label="Terms and Conditions hero"
      >
        <div style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(253,79,0,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} aria-hidden="true" />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ marginBottom: '20px' }}>
            <span className="eyebrow">Legal</span>
          </div>
          <h1 className="reveal d1 font-display" style={{ fontWeight: 700, fontSize: 'clamp(2.4rem,5vw,4.5rem)', lineHeight: 1.05, letterSpacing: '-0.03em', color: '#fff' }}>
            Terms &amp; Conditions
          </h1>
          <p className="reveal d2" style={{ fontSize: '1rem', lineHeight: 1.78, color: 'var(--muted)', maxWidth: '540px', marginTop: '20px' }}>
            These terms apply to all services supplied by Men at Work unless otherwise agreed in writing.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ background: 'var(--navy)', padding: '80px 0 120px' }} aria-label="Terms and Conditions content">
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px' }}>

          <div className="reveal" style={{ marginBottom: '48px' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7 }}>
              Last updated: March 2026
            </p>
          </div>

          {/* Preamble */}
          <div className="reveal" style={{ marginBottom: '56px', padding: '24px 28px', background: 'var(--charcoal)', borderRadius: '8px', borderLeft: '3px solid var(--orange)' }}>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.78, color: 'var(--muted)', marginBottom: '12px' }}>
              These Terms apply to services provided by:
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.78, color: '#fff', fontWeight: 600, marginBottom: '4px' }}>
              Men at Work Canterbury Limited
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.78, color: '#fff', fontWeight: 600, marginBottom: '12px' }}>
              Men at Work Wellington Limited
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.78, color: 'var(--muted)' }}>
              In these Terms both entities are referred to as &ldquo;Men at Work&rdquo;.
            </p>
          </div>

          {/* Sections */}
          {sections.map((section) => (
            <div key={section.number} className="reveal" style={{ marginBottom: '48px' }}>
              <div className="orange-rule" style={{ marginBottom: '20px' }} />
              <h2 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(1.2rem,2vw,1.5rem)', letterSpacing: '-0.02em', color: '#fff', marginBottom: '16px' }}>
                {section.number}. {section.heading}
              </h2>

              {section.body && (
                <p style={{ fontSize: '1rem', lineHeight: 1.78, color: 'var(--muted)', marginBottom: section.bullets || section.subSections || section.extraParas ? '12px' : 0 }}>
                  {section.body}
                </p>
              )}

              {section.extraParas && section.extraParas.map((para, i) => (
                <p key={i} style={{ fontSize: '1rem', lineHeight: 1.78, color: 'var(--muted)', marginBottom: '12px' }}>
                  {para}
                </p>
              ))}

              {section.bullets && (
                <ul style={{ paddingLeft: '20px', margin: '8px 0 12px', listStyleType: 'disc' }}>
                  {section.bullets.map((bullet, i) => (
                    <li key={i} style={{ fontSize: '1rem', lineHeight: 1.78, color: 'var(--muted)', marginBottom: '4px' }}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              {section.subSections && section.subSections.map((sub) => (
                <div key={sub.heading} style={{ marginTop: '16px' }}>
                  <p style={{ fontSize: '1rem', lineHeight: 1.78, color: '#fff', fontWeight: 600, marginBottom: '6px' }}>
                    {sub.heading}
                  </p>
                  <p style={{ fontSize: '1rem', lineHeight: 1.78, color: 'var(--muted)' }}>
                    {sub.body}
                  </p>
                </div>
              ))}

              {section.afterBullets && (
                <p style={{ fontSize: '1rem', lineHeight: 1.78, color: 'var(--muted)', marginTop: '12px' }}>
                  {section.afterBullets}
                </p>
              )}
            </div>
          ))}

        </div>
      </section>
    </>
  )
}
