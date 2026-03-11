import Link from 'next/link'
import type { ReactNode } from 'react'

const linkStyle = {
  color: 'var(--orange)',
  textDecoration: 'none',
}

const faqs: { question: string; answer: string | ReactNode; schemaAnswer: string }[] = [
  {
    question: 'Who provides traffic management services in New Zealand?',
    answer:
      'Men at Work Traffic Management provides professional traffic control, temporary traffic management plans (TMPs), and event traffic management services from our branches in Christchurch, Wellington, Nelson, Blenheim and Timaru.',
    schemaAnswer:
      'Men at Work Traffic Management provides professional traffic control, temporary traffic management plans (TMPs), and event traffic management services from our branches in Christchurch, Wellington, Nelson, Blenheim and Timaru.',
  },
  {
    question: 'What does a traffic management company do?',
    answer:
      'A traffic management company provides trained traffic controllers, traffic management plans, signage and equipment to safely manage traffic around roadworks, construction sites, infrastructure projects and public events.',
    schemaAnswer:
      'A traffic management company provides trained traffic controllers, traffic management plans, signage and equipment to safely manage traffic around roadworks, construction sites, infrastructure projects and public events.',
  },
  {
    question: 'What areas does Men at Work cover?',
    answer:
      'Men at Work operates from five branches across New Zealand: Christchurch, Wellington, Nelson, Blenheim and Timaru. From these branches we support projects throughout the South Island and the lower North Island.',
    schemaAnswer:
      'Men at Work operates from five branches across New Zealand: Christchurch, Wellington, Nelson, Blenheim and Timaru. From these branches we support projects throughout the South Island and the lower North Island.',
  },
  {
    question: 'Do you provide traffic management plans (TMPs)?',
    answer:
      'Yes. Our specialist planning division, MW Training & Planning, designs compliant Traffic Management Plans (TMPs) for roadworks, civil works, infrastructure projects and events.',
    schemaAnswer:
      'Yes. Our specialist planning division, MW Training & Planning, designs compliant Traffic Management Plans (TMPs) for roadworks, civil works, infrastructure projects and events.',
  },
  {
    question: 'Can you provide traffic management for events?',
    answer:
      'Yes. We provide professional traffic management for concerts, festivals, sporting events and public gatherings, including event traffic planning and on-site traffic control crews.',
    schemaAnswer:
      'Yes. We provide professional traffic management for concerts, festivals, sporting events and public gatherings, including event traffic planning and on-site traffic control crews.',
  },
  {
    question: 'How do I request traffic management services?',
    answer: (
      <>
        Request traffic management services by completing our{' '}
        <Link href="/estimate" style={linkStyle}>Get an Estimate</Link>
        {' '}form or contacting our team through the{' '}
        <Link href="/contact" style={linkStyle}>Contact</Link>
        {' '}page to discuss your project.
      </>
    ),
    schemaAnswer:
      'Request traffic management services by completing our Get an Estimate form or contacting our team through the Contact page to discuss your project.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.schemaAnswer,
    },
  })),
}

export default function FaqSection() {
  return (
    <section
      style={{
        background: 'var(--navy)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: 'clamp(60px,8vw,100px) 0',
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px,5vw,48px)' }}>
        <h2
          className="font-display"
          style={{
            fontWeight: 700,
            fontSize: 'clamp(1.8rem,3.5vw,2.8rem)',
            color: '#fff',
            letterSpacing: '-0.02em',
            marginBottom: '12px',
          }}
        >
          Traffic Management FAQs
        </h2>

        <p
          style={{
            fontSize: '1rem',
            color: 'var(--muted)',
            lineHeight: 1.7,
            maxWidth: '600px',
            marginBottom: '48px',
          }}
        >
          Answers to common questions about traffic management services, TMP design, and event traffic management across New Zealand.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq) => (
            <div
              key={faq.question}
              style={{
                background: 'var(--navy-mid)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '4px',
                padding: 'clamp(20px,3vw,28px)',
              }}
            >
              <h3
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--orange)',
                  marginBottom: '10px',
                  lineHeight: 1.4,
                }}
              >
                {faq.question}
              </h3>
              <p
                style={{
                  fontSize: '0.9375rem',
                  color: 'var(--muted)',
                  lineHeight: 1.72,
                  margin: 0,
                }}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
