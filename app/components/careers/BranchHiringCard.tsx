import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
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

const TEMP_COMPANY_ROLE = 'Apply via The Temp Company'

const ROLE_ORDER: Record<string, number> = {
  'STMS (Practicing)': 0,
  'TMO P':             1,
  'TTM Worker':        2,
  'Unqualified':       3,
  [TEMP_COMPANY_ROLE]: 4,
}

function sortRoles(roles: string[]): string[] {
  return [...roles].sort((a, b) => (ROLE_ORDER[a] ?? 99) - (ROLE_ORDER[b] ?? 99))
}

function roleBorderColor(role: string): string {
  if (role === 'STMS (Practicing)')   return 'rgba(56,189,248,0.5)'   // cyan
  if (role === 'TMO P')               return 'rgba(52,211,153,0.5)'    // emerald
  if (role === 'TTM Worker')          return 'rgba(167,139,250,0.5)'   // violet
  if (role === 'Unqualified')         return 'rgba(239,68,68,0.4)'     // muted red
  if (role === TEMP_COMPANY_ROLE)     return 'rgba(188,156,34,0.4)'      // gold muted
  return 'rgba(255,255,255,0.12)'
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
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: colors.text,
            marginTop: '6px',
          }}
        >
          {statusLabel[item.status]}
        </p>
      </div>

      {/* Divider */}
      <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.08)' }} />

      {/* Roles */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

        {/* Fulltime / Part Time */}
        <div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '8px' }}>
            Roles Available — Fulltime / Part Time
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', minHeight: '28px' }}>
            {sortRoles(item.fulltimeRoles).map(role => (
              <span
                key={role}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.65)',
                  background: 'rgba(255,255,255,0.06)',
                  border: `1px solid ${roleBorderColor(role)}`,
                  borderRadius: '2px',
                  padding: '4px 10px',
                }}
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Divider between sections */}
        <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.08)' }} />

        {/* Casual */}
        <div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '8px' }}>
            Roles Available — Casual
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', minHeight: '28px' }}>
            {sortRoles(item.casualRoles).map(role => {
              const badgeStyle = {
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.65)',
                background: 'rgba(255,255,255,0.06)',
                border: `1px solid ${roleBorderColor(role)}`,
                borderRadius: '2px',
                padding: '4px 10px',
                textDecoration: 'none' as const,
              }
              return role === TEMP_COMPANY_ROLE ? (
                <a
                  key={role}
                  href="https://www.thetempcompany.co.nz"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ ...badgeStyle, cursor: 'pointer' }}
                >
                  {role}
                </a>
              ) : (
                <span key={role} style={badgeStyle}>{role}</span>
              )
            })}
          </div>
        </div>

      </div>


      {/* CTA, separated with divider */}
      <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        {item.status !== 'closed' ? (
          <Link
            href={`/careers?branch=${item.branch.toLowerCase()}#apply`}
            className="inline-flex items-center gap-2 text-xs font-medium transition duration-200 hover:text-[#fd4f00]"
            style={{ color: colors.text }}
          >
            Apply Now
            <ArrowRight size={13} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        ) : (
          <span className="inline-flex items-center gap-2 text-xs font-medium cursor-not-allowed select-none" style={{ color: colors.text }}>
            Apply Now
            <ArrowRight size={13} strokeWidth={1.5} aria-hidden="true" />
          </span>
        )}
      </div>
    </div>
  )
}
