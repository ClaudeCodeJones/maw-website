'use client'

import { useState } from 'react'
import { ClipboardList, MonitorPlay, BookOpen, BookMarked, ListChecks } from 'lucide-react'
import RevealObserver from '../components/RevealObserver'

type EmploymentType = 'casual' | 'fulltime'

type Step = {
  number: string
  title: string
  titleNode?: React.ReactNode
  body: string
  href: string
  cta: string
  icon: React.ElementType
}

const baseSteps: Step[] = [
  {
    number: '01',
    title: 'Onboarding Form',
    body: 'Complete the online form so we have your employment details before your first shift.',
    href: 'https://forms.fillout.com/t/6VC3sHexLhus',
    cta: 'FILL OUT FORM',
    icon: ClipboardList,
  },
  {
    number: '02',
    title: 'Welcome & Overview',
    body: 'A short presentation covering the Men at Work story, what to expect, and how we operate.',
    href: 'https://www.canva.com/design/DAFVKc9tbmc/_2yXJwgjEN_HKKAdSa85zQ/view?utm_content=DAFVKc9tbmc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h887e787189',
    cta: 'WATCH VIDEO',
    icon: MonitorPlay,
  },
]

const handbookSteps: Record<EmploymentType, Step> = {
  casual: {
    number: '03',
    title: 'Casual Staff Handbook',
    titleNode: <><span style={{ color: 'var(--orange)' }}>Casual</span> Staff Handbook</>,
    body: 'Read the handbook covering company procedures, payroll, and health and safety guidance for casual staff.',
    href: 'https://www.canva.com/design/DAGwfPCiAbU/wC1htAzirsbbrTMUQswGhw/view?utm_content=DAGwfPCiAbU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8336729aa1',
    cta: 'READ HANDBOOK',
    icon: BookOpen,
  },
  fulltime: {
    number: '03',
    title: 'Full Time Staff Handbook',
    titleNode: <><span style={{ color: 'var(--orange)' }}>Permanent</span> Staff Handbook</>,
    body: 'Read the handbook covering company procedures, payroll, and health and safety guidance for full time staff.',
    href: 'https://www.canva.com/design/DAFXO2SEMZI/ZIcQwB7IihETDcxh7Q3DTQ/view?utm_content=DAFXO2SEMZI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hfb8e0cb77d',
    cta: 'READ HANDBOOK',
    icon: BookMarked,
  },
}

const quizStep: Step = {
  number: '04',
  title: 'Induction Quiz',
  body: 'Complete a short quiz to confirm your understanding of the handbook.',
  href: 'https://forms.fillout.com/t/29UGhUfVwyus',
  cta: 'START QUIZ',
  icon: ListChecks,
}

export default function InductionClient() {
  const [employmentType, setEmploymentType] = useState<EmploymentType>('casual')

  const steps = [...baseSteps, handbookSteps[employmentType], quizStep]

  return (
    <>
      <RevealObserver />

      {/* HERO */}
      <section
        style={{
          position: 'relative',
          background: '#070f1b',
          paddingTop: '180px',
          paddingBottom: '100px',
          overflow: 'hidden',
        }}
        aria-label="Welcome Aboard hero"
      >
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(242,101,34,0.08) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ marginBottom: '20px' }}>
            <span className="eyebrow">New Starters</span>
          </div>
          <h1
            className="reveal d1 font-display"
            style={{
              fontWeight: 700,
              fontSize: 'clamp(2.4rem,5vw,4.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#fff',
              marginBottom: '24px',
            }}
          >
            Welcome Aboard
          </h1>
          <p
            className="reveal d2"
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.78,
              color: 'var(--light)',
              maxWidth: '560px',
              marginBottom: '32px',
            }}
          >
            We&rsquo;re delighted to have you aboard. Please follow the steps below to complete your induction.
          </p>

          <div
            className="reveal d3"
            style={{
              display: 'inline-block',
              padding: '20px 28px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '4px',
              borderLeft: '3px solid var(--orange)',
            }}
          >
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--muted)', marginBottom: '10px' }}>
              If you are unsure of what you need to do please contact us to clarify.
            </p>
            <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--light)' }}>
              0800 636 289{' '}
              <span style={{ color: 'var(--muted)', fontWeight: 400 }}>|</span>{' '}
              <a
                href="mailto:jobs@menatwork.co.nz"
                style={{ color: 'var(--orange)', textDecoration: 'none' }}
              >
                jobs@menatwork.co.nz
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* THE PROCESS */}
      <section
        style={{
          background: 'var(--charcoal)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          padding: '80px 0 100px',
        }}
        aria-label="The Process"
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ marginBottom: '16px' }}>
            <span className="eyebrow">Getting Started</span>
          </div>
          <h2
            className="reveal d1 font-display"
            style={{
              fontWeight: 700,
              fontSize: 'clamp(1.8rem,3vw,2.8rem)',
              letterSpacing: '-0.03em',
              color: '#fff',
              marginBottom: '16px',
            }}
          >
            The Process
          </h2>
          <p
            className="reveal d2"
            style={{
              fontSize: '1rem',
              lineHeight: 1.78,
              color: 'var(--muted)',
              maxWidth: '600px',
              marginBottom: '36px',
            }}
          >
            Follow the steps below in order and ensure you select the correct handbook for your employment type (Casual or Full Time).
          </p>

          {/* Employment type selector */}
          <div className="reveal d3" style={{ marginBottom: '40px' }}>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                marginBottom: '12px',
              }}
            >
              Employment Type
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {(['casual', 'fulltime'] as EmploymentType[]).map((type) => {
                const selected = employmentType === type
                const label = type === 'casual' ? 'Casual' : 'Permanent'
                return (
                  <button
                    key={type}
                    onClick={() => setEmploymentType(type)}
                    style={{
                      padding: '10px 24px',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      fontFamily: 'Inter, sans-serif',
                      letterSpacing: '0.02em',
                      border: selected ? '1px solid var(--orange)' : '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '3px',
                      background: selected ? 'rgba(242,101,34,0.12)' : 'rgba(255,255,255,0.04)',
                      color: selected ? 'var(--orange)' : 'var(--muted)',
                      cursor: 'pointer',
                      transition: 'border-color 0.15s, background 0.15s, color 0.15s',
                    }}
                  >
                    {label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Step cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
            }}
          >
            {steps.map((step) => (
              <div
                key={step.number}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '28px 24px 24px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderTop: '3px solid var(--orange)',
                  borderRadius: '2px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--orange)',
                      margin: 0,
                    }}
                  >
                    {step.number}
                  </p>
                  <step.icon size={22} style={{ color: 'rgba(255,255,255,0.2)', flexShrink: 0 }} aria-hidden="true" />
                </div>
                <h3
                  className="font-display"
                  style={{
                    fontWeight: 700,
                    fontSize: '1rem',
                    lineHeight: 1.35,
                    letterSpacing: '-0.01em',
                    color: '#fff',
                    marginBottom: '14px',
                    flexGrow: 0,
                  }}
                >
                  {step.titleNode ?? step.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: 1.65,
                    color: 'var(--muted)',
                    flexGrow: 1,
                    marginBottom: '24px',
                  }}
                >
                  {step.body}
                </p>
                <a
                  href={step.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-orange"
                  style={{ display: 'flex', justifyContent: 'center', fontSize: '0.78rem', padding: '10px 20px', letterSpacing: '0.08em' }}
                >
                  {step.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
