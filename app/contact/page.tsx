'use client'

import { useState } from 'react'
import { Phone, Mail } from 'lucide-react'
import RevealObserver from '../components/RevealObserver'
import SelectWrapper from '../components/SelectWrapper'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: '2px',
  padding: '12px 16px',
  fontFamily: 'Inter, sans-serif',
  fontSize: '0.9rem',
  color: '#fff',
  outline: 'none',
  appearance: 'none' as const,
  colorScheme: 'dark' as const,
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'Inter, sans-serif',
  fontSize: '0.75rem',
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase' as const,
  color: 'var(--light)',
  marginBottom: '8px',
}

const fieldStyle: React.CSSProperties = {
  marginBottom: '20px',
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null
  return <p style={{ fontSize: '0.75rem', color: '#f87171', marginTop: '4px' }}>{msg}</p>
}

const branches = ['Wellington', 'Christchurch', 'Nelson', 'Blenheim', 'Timaru']

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', branch: '', message: '' })
  const [errors, setErrors] = useState<Partial<typeof form>>({})
  const [status, setStatus] = useState<FormState>('idle')

  function set(field: keyof typeof form, value: string) {
    setForm(f => ({ ...f, [field]: value }))
    if (errors[field]) setErrors(e => ({ ...e, [field]: undefined }))
  }

  function validate() {
    const e: Partial<typeof form> = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.email.trim()) e.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.phone.trim()) e.phone = 'Required'
    if (!form.branch) e.branch = 'Required'
    if (!form.message.trim()) e.message = 'Required'
    return e
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', phone: '', branch: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <RevealObserver />

      {/* ── HERO ── */}
      <section
        style={{
          position: 'relative',
          background: '#070f1b',
          paddingTop: '180px',
          paddingBottom: '56px',
          overflow: 'hidden',
        }}
        aria-label="Contact hero"
      >
        <div style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(242,101,34,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} aria-hidden="true" />


        <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ marginBottom: '20px' }}>
            <span className="eyebrow">Contact</span>
          </div>
          <h1 className="reveal d1 font-display" style={{ fontWeight: 700, fontSize: 'clamp(2.4rem,5vw,4.5rem)', lineHeight: 1.05, letterSpacing: '-0.03em', color: '#fff' }}>
            Contact Us
          </h1>
          <p className="reveal d2" style={{ fontSize: '1rem', lineHeight: 1.78, color: 'var(--muted)', maxWidth: '480px', marginTop: '20px' }}>
            Send us your enquiry and our team will respond as soon as possible.
          </p>
          <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.15)', margin: '20px 0' }} />
          <div className="reveal d3" style={{ marginTop: '0', fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>
            <p>Prefer to call or email?</p>
            <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="tel:0800636289" className="flex items-center gap-2 hover:opacity-80" style={{ color: 'var(--orange)', fontWeight: 500, textDecoration: 'none' }}>
                <Phone size={15} />
                0800 636 289
              </a>
              <a href="mailto:office@menatwork.co.nz" className="flex items-center gap-2 hover:opacity-80" style={{ color: 'var(--orange)', fontWeight: 500, textDecoration: 'none' }}>
                <Mail size={15} />
                office@menatwork.co.nz
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FORM SECTION ── */}
      <section style={{ background: 'var(--navy)', padding: '36px 0 100px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>

          <div style={{ marginBottom: '32px', padding: '24px', background: 'rgba(242,101,34,0.06)', border: '1px solid rgba(242,101,34,0.15)', borderLeft: '3px solid var(--orange)', borderRadius: '2px' }}>
            <p className="font-display" style={{ fontWeight: 600, fontSize: '0.9rem', color: '#fff', marginBottom: '8px' }}>Looking for an Estimate?</p>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.65, color: 'var(--muted)', marginBottom: '14px' }}>
              If you&apos;re looking for pricing for traffic management on a project or job, please use our{' '}
              <a href="/request-quote" style={{ color: 'var(--orange)', fontWeight: 500, textDecoration: 'none' }}>Get an Estimate</a>{' '}
              page so we can gather the details needed to provide an accurate quote.
            </p>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.65, color: 'var(--muted)' }}>For general enquiries, feel free to use the form below.</p>
          </div>

          <div
            className="reveal"
            style={{
              background: 'var(--navy-mid)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '4px',
              padding: 'clamp(28px, 5vw, 48px)',
            }}
          >
            <form onSubmit={handleSubmit} noValidate>

              <div style={fieldStyle}>
                <label htmlFor="name" style={labelStyle}>Name</label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={e => set('name', e.target.value)}
                  style={{ ...inputStyle, borderColor: errors.name ? '#f87171' : 'rgba(255,255,255,0.12)' }}
                />
                <FieldError msg={errors.name} />
              </div>

              <div style={fieldStyle}>
                <label htmlFor="email" style={labelStyle}>Email</label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={e => set('email', e.target.value)}
                  style={{ ...inputStyle, borderColor: errors.email ? '#f87171' : 'rgba(255,255,255,0.12)' }}
                />
                <FieldError msg={errors.email} />
              </div>

              <div style={fieldStyle}>
                <label htmlFor="phone" style={labelStyle}>Phone</label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={e => set('phone', e.target.value)}
                  style={{ ...inputStyle, borderColor: errors.phone ? '#f87171' : 'rgba(255,255,255,0.12)' }}
                />
                <FieldError msg={errors.phone} />
              </div>

              <div style={fieldStyle}>
                <label htmlFor="branch" style={labelStyle}>Branch</label>
                <SelectWrapper id="branch" value={form.branch} onChange={v => set('branch', v)} error={errors.branch} placeholder="Select a branch">
                  {branches.map(b => <option key={b} value={b} style={{ background: '#0d1f33', color: '#fff' }}>{b}</option>)}
                </SelectWrapper>
                <FieldError msg={errors.branch} />
              </div>

              <div style={fieldStyle}>
                <label htmlFor="message" style={labelStyle}>Message</label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={e => set('message', e.target.value)}
                  style={{ ...inputStyle, borderColor: errors.message ? '#f87171' : 'rgba(255,255,255,0.12)', resize: 'vertical' as const }}
                />
                <FieldError msg={errors.message} />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-orange"
                style={{ width: '100%', padding: '14px 28px', fontSize: '0.9rem', justifyContent: 'center', opacity: status === 'submitting' ? 0.7 : 1, cursor: status === 'submitting' ? 'not-allowed' : 'pointer' }}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p
                  role="status"
                  aria-live="polite"
                  style={{ marginTop: '20px', fontSize: '0.9rem', color: '#4ade80', textAlign: 'center', lineHeight: 1.6 }}
                >
                  Thanks for contacting Men at Work. Our team will respond shortly.
                </p>
              )}

              {status === 'error' && (
                <p
                  role="alert"
                  aria-live="assertive"
                  style={{ marginTop: '20px', fontSize: '0.9rem', color: '#f87171', textAlign: 'center', lineHeight: 1.6 }}
                >
                  Something went wrong. Please try again or call us on 0800 636 289.
                </p>
              )}

            </form>
          </div>

        </div>
      </section>
    </>
  )
}
