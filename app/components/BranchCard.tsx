'use client'

import Link from 'next/link'
import type { HiringStatus } from '../../data/hiringStatus'

export type Branch = {
  name: string
  manager: string
  role: string
  phone: string
  address?: string
  illustration?: string
}

export default function BranchCard({
  branch,
  onClose,
  hiringStatus,
}: {
  branch: Branch
  onClose: () => void
  hiringStatus?: HiringStatus
}) {
  const telHref = `tel:${branch.phone.replace(/\s/g, '')}`

  return (
    <div
      className="relative flex flex-col transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(242,101,34,0.18)] hover:border-[#F26522]/40"
      style={{
        background: '#0D1B2A',
        borderRadius: '12px',
        boxShadow: '0 0 0 1px rgba(242,101,34,0.15), 0 4px 6px rgba(0,0,0,0.2), 0 24px 48px rgba(0,0,0,0.5)',
        border: '1px solid rgba(255,255,255,0.14)',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      <div className="absolute top-0 left-0 h-[3px] w-full bg-[#F26522]" />

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
          <path d="M1 1l9 9M10 1L1 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {/* Growing content area */}
      <div className="flex flex-col flex-grow" style={{ padding: '28px 28px 0' }}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F26522', marginBottom: '8px' }}>
          Branch
        </p>

        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '2rem', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '20px' }}>
          {branch.name}
        </h2>

        <div style={{ width: '32px', height: '2px', background: '#F26522', marginBottom: '24px' }} />

        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 600, color: '#fff', lineHeight: 1.4, marginBottom: '4px' }}>
          {branch.manager}
        </p>

        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.825rem', color: 'rgba(255,255,255,0.45)', marginBottom: '28px' }}>
          {branch.role}
        </p>

        {branch.address && (
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.825rem', color: 'rgba(255,255,255,0.45)', marginBottom: '28px', lineHeight: 1.5 }}>
            {branch.address}
          </p>
        )}

        <a
          href={telHref}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#F26522', fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 500, textDecoration: 'none' }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-.82-8.63A2 2 0 014 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
          {branch.phone}
        </a>
      </div>

      <div style={{ padding: '20px 28px 28px' }}>
        <Link
          href="/request-quote"
          className="btn-orange"
          style={{ width: '100%', justifyContent: 'center', fontSize: '0.82rem', padding: '11px 20px' }}
        >
          Get an Estimate
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </div>
  )
}
