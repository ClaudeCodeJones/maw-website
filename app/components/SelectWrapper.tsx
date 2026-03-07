'use client'

import React from 'react'

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

export default function SelectWrapper({
  id,
  value,
  onChange,
  error,
  placeholder,
  children,
}: {
  id?: string
  value: string
  onChange: (v: string) => void
  error?: string
  placeholder: string
  children: React.ReactNode
}) {
  return (
    <div style={{ position: 'relative' }}>
      <select
        id={id}
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{
          ...inputStyle,
          background: '#0d1f33',
          borderColor: error ? '#f87171' : 'rgba(255,255,255,0.12)',
          paddingRight: '40px',
          cursor: 'pointer',
          color: value === '' ? 'rgba(255,255,255,0.45)' : '#fff',
        }}
      >
        <option value="" disabled hidden style={{ background: '#0d1f33' }}>
          {placeholder}
        </option>
        {children}
      </select>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--muted)' }}
        aria-hidden="true"
      >
        <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}
