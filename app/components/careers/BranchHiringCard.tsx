import Link from 'next/link'
import type { BranchHiring, HiringStatus } from '../../../data/hiringStatus'
import { statusLabel } from '../../../data/hiringStatus'

const statusColors: Record<HiringStatus, { bg: string; text: string; dot: string }> = {
  hiring: {
    bg: 'rgba(34,197,94,0.1)',
    text: '#4ade80',
    dot: '#4ade80',
  },
  limited: {
    bg: 'rgba(251,191,36,0.1)',
    text: '#fbbf24',
    dot: '#fbbf24',
  },
  closed: {
    bg: 'rgba(239,68,68,0.1)',
    text: '#f87171',
    dot: '#f87171',
  },
}

export default function BranchHiringCard({ item }: { item: BranchHiring }) {
  const colors = statusColors[item.status]

  return (
    <div
      style={{
        background: 'var(--charcoal)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderTop: `3px solid ${item.status === 'hiring' ? '#4ade80' : item.status === 'limited' ? '#fbbf24' : '#f87171'}`,
        borderRadius: '2px',
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        transition: 'transform 0.28s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.28s ease',
      }}
      className="hiring-card hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(242,101,34,0.14)]"
    >
      {/* Header */}
      <div>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: '4px',
          }}
        >
          {item.region}
        </p>
        <h3
          className="font-display"
          style={{
            fontWeight: 700,
            fontSize: '1.25rem',
            color: '#fff',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
          }}
        >
          {item.branch}
        </h3>
      </div>

      {/* Divider */}
      <div style={{ width: '32px', height: '2px', background: 'var(--orange)' }} />

      {/* Roles */}
      {item.roles.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {item.roles.map(role => (
            <span
              key={role}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.65)',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '2px',
                padding: '4px 10px',
              }}
            >
              {role}
            </span>
          ))}
        </div>
      ) : (
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.3)',
            fontStyle: 'italic',
          }}
        >
          No current openings
        </p>
      )}

      {/* Sister company callout */}
      {item.tempCompany && (
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.5 }}>
          Casual positions may be available through our Labour Hire division,{' '}
          <a
            href="https://www.thetempcompany.co.nz"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(242,101,34,0.7)', textDecoration: 'none', fontWeight: 500 }}
          >
            The Temp Company
          </a>
        </p>
      )}

      {/* Status badge — bottom */}
      <div style={{ marginTop: 'auto', paddingTop: '4px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: colors.bg,
            borderRadius: '9999px',
            padding: '5px 10px',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: colors.dot,
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.7rem',
              fontWeight: 600,
              color: colors.text,
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap',
            }}
          >
            {statusLabel[item.status]}
          </span>
        </div>

      </div>

      {/* CTA — separated with divider */}
      <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        {item.status !== 'closed' ? (
          <Link
            href={`/careers?branch=${item.branch.toLowerCase()}#apply`}
            className="inline-flex items-center justify-center gap-2 w-full rounded-md border border-white/10 bg-transparent px-4 py-2 text-xs font-medium text-white/40 transition duration-200 hover:border-[#F26522]/60 hover:text-[#F26522] active:scale-[0.98]"
          >
            Apply Now
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 8h12M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        ) : (
          <span className="inline-flex items-center justify-center gap-2 w-full rounded-md border border-white/6 bg-transparent px-4 py-2 text-xs font-medium text-white/20 cursor-not-allowed select-none">
            Apply Now
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 8h12M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        )}
      </div>
    </div>
  )
}
