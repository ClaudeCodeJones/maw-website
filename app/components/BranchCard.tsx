'use client'

export type Branch = {
  name: string
  manager: string
  role: string
  phone: string
}

export default function BranchCard({
  branch,
  onClose,
}: {
  branch: Branch
  onClose: () => void
}) {
  const telHref = `tel:${branch.phone.replace(/\s/g, '')}`

  return (
    <div
      style={{
        background: '#0D1B2A',
        borderRadius: '12px',
        borderTop: '3px solid #F26522',
        boxShadow:
          '0 0 0 1px rgba(242,101,34,0.15), 0 4px 6px rgba(0,0,0,0.2), 0 24px 48px rgba(0,0,0,0.5)',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {/* Placeholder header — space for future city illustration */}
      <div
        style={{
          height: '120px',
          background:
            'linear-gradient(135deg, rgba(242,101,34,0.12) 0%, rgba(13,27,42,0) 100%)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Placeholder pin icon */}
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" opacity={0.25} aria-hidden="true">
          <path
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
            stroke="#F26522"
            strokeWidth="1.5"
            fill="rgba(242,101,34,0.2)"
          />
          <circle cx="12" cy="9" r="2.5" fill="#F26522" />
        </svg>

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close branch card"
          style={{
            position: 'absolute',
            top: 14,
            right: 14,
            width: 30,
            height: 30,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            cursor: 'pointer',
            color: 'rgba(255,255,255,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
            <path
              d="M1 1l9 9M10 1L1 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div style={{ padding: '28px 28px 32px' }}>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.625rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#F26522',
            marginBottom: '8px',
          }}
        >
          Branch
        </p>

        <h2
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: '2rem',
            color: '#fff',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: '20px',
          }}
        >
          {branch.name}
        </h2>

        <div
          style={{ width: '32px', height: '2px', background: '#F26522', marginBottom: '24px' }}
        />

        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1rem',
            fontWeight: 600,
            color: '#fff',
            lineHeight: 1.4,
            marginBottom: '4px',
          }}
        >
          {branch.manager}
        </p>

        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.825rem',
            color: 'rgba(255,255,255,0.45)',
            marginBottom: '28px',
          }}
        >
          {branch.role}
        </p>

        <a
          href={telHref}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#F26522',
            fontFamily: 'Inter, sans-serif',
            fontSize: '1rem',
            fontWeight: 500,
            textDecoration: 'none',
          }}
        >
          <svg
            width="14" height="14" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-.82-8.63A2 2 0 014 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
          {branch.phone}
        </a>
      </div>
    </div>
  )
}
