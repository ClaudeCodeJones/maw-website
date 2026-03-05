'use client'

import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const branches = ['Wellington', 'Nelson', 'Blenheim', 'Christchurch', 'Timaru']

const tmExperienceOptions = [
  'No qualifications',
  'TTM Worker',
  'TMO (NP)',
  'TMO (P)',
  'STMS (NP)',
  'STMS Cat A/B',
  'STMS Cat C',
  'Other (please describe below)',
]

const licenceOptions = ['Restricted (Car)', 'Full (Car)', 'Class 2 (Truck)']

const contactOptions = [
  { value: 'email', label: "Yep, I'm happy with an Email" },
  { value: 'text', label: 'A text would be great' },
  { value: 'call', label: 'Please give me a call' },
]

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

const fieldGroupStyle: React.CSSProperties = {
  marginBottom: '20px',
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null
  return <p style={{ fontSize: '0.75rem', color: '#f87171', marginTop: '4px' }}>{msg}</p>
}

function RadioOption({
  name, value, checked, onChange, label,
}: { name: string; value: string; checked: boolean; onChange: () => void; label: string }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', padding: '6px 0' }}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
      />
      <span style={{
        width: '16px', height: '16px', borderRadius: '50%', flexShrink: 0,
        border: checked ? '2px solid var(--orange)' : '2px solid rgba(255,255,255,0.2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {checked && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--orange)' }} />}
      </span>
      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.4 }}>{label}</span>
    </label>
  )
}

function CheckboxOption({
  value, checked, onChange, label,
}: { value: string; checked: boolean; onChange: () => void; label: string }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', padding: '6px 0' }}>
      <input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
      />
      <span style={{
        width: '16px', height: '16px', borderRadius: '2px', flexShrink: 0,
        border: checked ? '2px solid var(--orange)' : '2px solid rgba(255,255,255,0.2)',
        background: checked ? 'var(--orange)' : 'transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {checked && (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <polyline points="1.5 5 4 7.5 8.5 2.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.4 }}>{label}</span>
    </label>
  )
}

export default function ApplicationForm() {
  const [step, setStep] = useState<1 | 2>(1)
  const [state, setState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    startDate: '',
    branch: '',
    experience: '',
    licences: [] as string[],
    contactMethod: '',
    workHistory: '',
    aboutYourself: '',
    healthIssues: '',
    accHistory: '',
    howDidYouHear: '',
    casualConfirm: false,
    drugAlcoholConfirm: false,
    criminalHistoryConfirm: false,
    experienceOther: '',
  })

  function set(field: string, value: string | boolean | string[]) {
    setForm(prev => ({ ...prev, [field]: value }))
    setErrors(prev => ({ ...prev, [field]: '' }))
  }

  function toggleLicence(licence: string) {
    setForm(prev => ({
      ...prev,
      licences: prev.licences.includes(licence)
        ? prev.licences.filter(l => l !== licence)
        : [...prev.licences, licence],
    }))
    setErrors(prev => ({ ...prev, licences: '' }))
  }

  function validateStep1() {
    const e: Record<string, string> = {}
    if (!form.firstName.trim()) e.firstName = 'Required'
    if (!form.lastName.trim()) e.lastName = 'Required'
    if (!form.email.trim()) e.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.phone.trim()) e.phone = 'Required'
    if (!form.city.trim()) e.city = 'Required'
    if (!form.startDate) e.startDate = 'Required'
    if (!form.branch) e.branch = 'Select a branch'
    return e
  }

  function validateStep2() {
    const e: Record<string, string> = {}
    if (!form.experience) e.experience = 'Please select your experience level'
    if (form.licences.length === 0) e.licences = 'Please select at least one licence'
    if (!form.contactMethod) e.contactMethod = 'Please select a contact preference'
    if (!form.workHistory.trim()) e.workHistory = 'Required'
    if (!form.aboutYourself.trim()) e.aboutYourself = 'Required'
    if (!form.healthIssues.trim()) e.healthIssues = 'Required'
    if (!form.accHistory.trim()) e.accHistory = 'Required'
    return e
  }

  function handleNext() {
    const e = validateStep1()
    if (Object.keys(e).length > 0) { setErrors(e); return }
    setErrors({})
    setStep(2)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const e2 = validateStep2()
    if (Object.keys(e2).length > 0) { setErrors(e2); return }
    setErrors({})
    setState('submitting')

    try {
      const res = await fetch('/api/careers-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setState(res.ok ? 'success' : 'error')
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div style={{
        background: 'var(--charcoal)', border: '1px solid rgba(255,255,255,0.08)',
        borderTop: '3px solid var(--orange)', borderRadius: '2px',
        padding: '64px 40px', textAlign: 'center',
      }}>
        <div style={{
          width: '56px', height: '56px', background: 'rgba(34,197,94,0.12)',
          borderRadius: '50%', display: 'flex', alignItems: 'center',
          justifyContent: 'center', margin: '0 auto 24px',
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-display" style={{ fontWeight: 700, fontSize: '1.4rem', color: '#fff', marginBottom: '12px' }}>
          Application Received
        </h3>
        <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--muted)', maxWidth: '360px', margin: '0 auto' }}>
          Thanks for getting in touch. Our team will review your application and reach out within a few days.
        </p>
      </div>
    )
  }

  const cardStyle: React.CSSProperties = {
    background: 'var(--charcoal)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderTop: '3px solid var(--orange)',
    borderRadius: '2px',
    padding: '40px',
  }

  return (
    <div style={cardStyle}>
      {/* Step indicator */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>
            Step {step} of 2
          </span>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', color: 'var(--muted)' }}>
            {step === 1 ? 'Personal Details' : 'Experience & Background'}
          </span>
        </div>
        <div style={{ height: '2px', background: 'rgba(255,255,255,0.08)', borderRadius: '1px' }}>
          <div style={{ height: '100%', width: step === 1 ? '50%' : '100%', background: 'var(--orange)', borderRadius: '1px', transition: 'width 0.4s ease' }} />
        </div>
      </div>

      {/* ── STEP 1 ── */}
      {step === 1 && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <div>
              <label style={labelStyle}>First Name</label>
              <input
                type="text" autoComplete="given-name" value={form.firstName}
                onChange={e => set('firstName', e.target.value)}
                style={{ ...inputStyle, borderColor: errors.firstName ? '#f87171' : 'rgba(255,255,255,0.12)' }}
              />
              <FieldError msg={errors.firstName} />
            </div>
            <div>
              <label style={labelStyle}>Last Name</label>
              <input
                type="text" autoComplete="family-name" value={form.lastName}
                onChange={e => set('lastName', e.target.value)}
                style={{ ...inputStyle, borderColor: errors.lastName ? '#f87171' : 'rgba(255,255,255,0.12)' }}
              />
              <FieldError msg={errors.lastName} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <div>
              <label style={labelStyle}>Email</label>
              <input
                type="email" autoComplete="email" value={form.email}
                onChange={e => set('email', e.target.value)}
                style={{ ...inputStyle, borderColor: errors.email ? '#f87171' : 'rgba(255,255,255,0.12)' }}
              />
              <FieldError msg={errors.email} />
            </div>
            <div>
              <label style={labelStyle}>Phone</label>
              <input
                type="tel" autoComplete="tel" value={form.phone}
                onChange={e => set('phone', e.target.value)}
                style={{ ...inputStyle, borderColor: errors.phone ? '#f87171' : 'rgba(255,255,255,0.12)' }}
              />
              <FieldError msg={errors.phone} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <div>
              <label style={labelStyle}>City / Town</label>
              <input
                type="text" value={form.city}
                onChange={e => set('city', e.target.value)}
                style={{ ...inputStyle, borderColor: errors.city ? '#f87171' : 'rgba(255,255,255,0.12)' }}
              />
              <FieldError msg={errors.city} />
            </div>
            <div>
              <label style={labelStyle}>Earliest Start Date</label>
              <input
                type="date" value={form.startDate}
                onChange={e => set('startDate', e.target.value)}
                style={{ ...inputStyle, borderColor: errors.startDate ? '#f87171' : 'rgba(255,255,255,0.12)' }}
              />
              <FieldError msg={errors.startDate} />
            </div>
          </div>

          <div style={fieldGroupStyle}>
            <label style={labelStyle}>Applying For</label>
            <div style={{ position: 'relative' }}>
              <select
                value={form.branch}
                onChange={e => set('branch', e.target.value)}
                style={{ ...inputStyle, borderColor: errors.branch ? '#f87171' : 'rgba(255,255,255,0.12)', cursor: 'pointer', paddingRight: '36px' }}
              >
                <option value="" disabled style={{ background: '#1F2D3D' }}>Select branch</option>
                {branches.map(b => (
                  <option key={b} value={b} style={{ background: '#1F2D3D' }}>{b}</option>
                ))}
              </select>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--muted)' }}
                aria-hidden="true">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <FieldError msg={errors.branch} />
          </div>

          <button type="button" onClick={handleNext} className="btn-orange" style={{ width: '100%', justifyContent: 'center' }}>
            Next
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 8h12M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}

      {/* ── STEP 2 ── */}
      {step === 2 && (
        <form onSubmit={handleSubmit} noValidate>
          {/* TM Experience */}
          <div style={{ marginBottom: '28px' }}>
            <label style={labelStyle}>Traffic Management Qualifications</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
              {tmExperienceOptions.map(opt => (
                <RadioOption
                  key={opt} name="experience" value={opt}
                  checked={form.experience === opt}
                  onChange={() => set('experience', opt)}
                  label={opt}
                />
              ))}
            </div>
            {form.experience === 'Other (please describe below)' && (
              <div style={{ marginTop: '12px' }}>
                <textarea
                  rows={3}
                  placeholder="Please describe your experience..."
                  value={form.experienceOther ?? ''}
                  onChange={e => set('experienceOther', e.target.value)}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '80px', borderColor: 'rgba(255,255,255,0.12)' }}
                />
              </div>
            )}
            <FieldError msg={errors.experience} />
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '28px' }} />

          {/* Licences */}
          <div style={{ marginBottom: '28px' }}>
            <label style={labelStyle}>Licence(s) Held</label>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'rgba(251,191,36,0.8)', marginBottom: '10px', lineHeight: 1.5 }}>
              Note: You must hold at least a Restricted (Car), Full (Car), or Class 2 licence. Learner licences or no licence are not accepted.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0 32px' }}>
              {licenceOptions.map(opt => (
                <CheckboxOption
                  key={opt} value={opt}
                  checked={form.licences.includes(opt)}
                  onChange={() => toggleLicence(opt)}
                  label={opt}
                />
              ))}
            </div>
            <FieldError msg={errors.licences} />
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '28px' }} />

          {/* Text areas */}
          {[
            { field: 'workHistory', label: 'Brief Work History (Last 2 Years)', placeholder: 'Employer names, roles held, dates...' },
            { field: 'aboutYourself', label: 'Tell Us a Bit More About Yourself', placeholder: 'Your motivations, strengths, what you are looking for...' },
            { field: 'healthIssues', label: 'Any Health Issues We Should Be Aware Of?', placeholder: 'This is a high stress, physically demanding job. Please be honest...' },
            { field: 'accHistory', label: 'Any ACC History We Should Be Aware Of?', placeholder: 'Please describe any relevant ACC claims or injuries...' },
          ].map(({ field, label, placeholder }) => (
            <div key={field} style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>{label}</label>
              <textarea
                rows={3}
                placeholder={placeholder}
                value={(form as Record<string, string>)[field]}
                onChange={e => set(field, e.target.value)}
                style={{
                  ...inputStyle,
                  resize: 'vertical',
                  minHeight: '88px',
                  borderColor: errors[field] ? '#f87171' : 'rgba(255,255,255,0.12)',
                }}
              />
              <FieldError msg={errors[field]} />
            </div>
          ))}

          <div style={{ marginBottom: '28px' }}>
            <label style={labelStyle}>
              How Did You Hear About This Role?{' '}
              <span style={{ color: 'var(--muted)', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(optional)</span>
            </label>
            <textarea
              rows={2}
              value={form.howDidYouHear}
              onChange={e => set('howDidYouHear', e.target.value)}
              style={{ ...inputStyle, resize: 'vertical', minHeight: '64px' }}
            />
          </div>

          {/* Contact preference */}
          <div style={{ marginBottom: '28px' }}>
            <label style={labelStyle}>Preferred Contact Method</label>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '10px', lineHeight: 1.5 }}>
              We prefer to email you so we have a record of our conversation, but how would you like us to contact you?
            </p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {contactOptions.map(opt => (
                <RadioOption
                  key={opt.value} name="contactMethod" value={opt.value}
                  checked={form.contactMethod === opt.value}
                  onChange={() => set('contactMethod', opt.value)}
                  label={opt.label}
                />
              ))}
            </div>
            <FieldError msg={errors.contactMethod} />
          </div>

          {/* Confirmations */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
            <div style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '2px' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '8px' }}>Casual Worker Guide</p>
              <CheckboxOption
                value="casualConfirm"
                checked={form.casualConfirm}
                onChange={() => set('casualConfirm', !form.casualConfirm)}
                label="I confirm I have read 'What to Expect as a Casual Worker' (see link above)"
              />
            </div>
            <div style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '2px' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '8px' }}>Drug &amp; Alcohol Test</p>
              <CheckboxOption
                value="drugAlcoholConfirm"
                checked={form.drugAlcoholConfirm}
                onChange={() => set('drugAlcoholConfirm', !form.drugAlcoholConfirm)}
                label="I confirm that I am able to pass a drug and alcohol test."
              />
            </div>
            <div style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '2px' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '8px' }}>Criminal History Check</p>
              <CheckboxOption
                value="criminalHistoryConfirm"
                checked={form.criminalHistoryConfirm}
                onChange={() => set('criminalHistoryConfirm', !form.criminalHistoryConfirm)}
                label="I confirm that, if successful in my application, I consent to a Ministry of Health criminal history check."
              />
            </div>
          </div>

          {state === 'error' && (
            <p style={{ fontSize: '0.85rem', color: '#f87171', marginBottom: '16px' }}>
              Something went wrong. Please try again or call us on 0800 639 289.
            </p>
          )}

          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              type="button"
              onClick={() => { setStep(1); setErrors({}) }}
              className="btn-ghost"
              style={{ flexShrink: 0 }}
            >
              Back
            </button>
            <button
              type="submit"
              disabled={state === 'submitting'}
              className="btn-orange"
              style={{ flex: 1, justifyContent: 'center', opacity: state === 'submitting' ? 0.7 : 1 }}
            >
              {state === 'submitting' ? 'Sending...' : 'Submit Application'}
              {state !== 'submitting' && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 8h12M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
