'use client'

import { useState, useCallback, useEffect } from 'react'

/* ── Types ── */

type LocationData = {
  name: string
  isHQ?: boolean
  cx: number
  cy: number
  manager: string
  address: string[]
  phone: string
  mapsQuery: string
}

/* ── SVG viewBox dimensions ── */
const VB_W = 1181
const VB_H = 1722

/* ── Data ── */

const LOCATIONS: LocationData[] = [
  {
    name: 'Wellington',
    cx: 847,
    cy: 915,
    manager: '[Branch Manager]',
    address: ['[Street Address]', 'Wellington'],
    phone: '[Phone Number]',
    mapsQuery: 'Wellington, New Zealand',
  },
  {
    name: 'Nelson',
    cx: 610,
    cy: 865,
    manager: '[Branch Manager]',
    address: ['[Street Address]', 'Nelson'],
    phone: '[Phone Number]',
    mapsQuery: 'Nelson, New Zealand',
  },
  {
    name: 'Blenheim',
    cx: 712,
    cy: 947,
    manager: '[Branch Manager]',
    address: ['[Street Address]', 'Blenheim'],
    phone: '[Phone Number]',
    mapsQuery: 'Blenheim, Marlborough, New Zealand',
  },
  {
    name: 'Christchurch',
    isHQ: true,
    cx: 599,
    cy: 1213,
    manager: 'Hayden Wilson',
    address: ['Belfast Business Park', 'Christchurch'],
    phone: '[Phone Number]',
    mapsQuery: 'Belfast Business Park, Christchurch, New Zealand',
  },
  {
    name: 'Timaru',
    cx: 441,
    cy: 1397,
    manager: '[Branch Manager]',
    address: ['[Street Address]', 'Timaru'],
    phone: '[Phone Number]',
    mapsQuery: 'Timaru, New Zealand',
  },
]

/* ── Popup card ── */

function Popup({
  location,
  onClose,
}: {
  location: LocationData
  onClose: () => void
}) {
  const leftPct = (location.cx / VB_W) * 100
  const topPct  = (location.cy / VB_H) * 100
  const showToLeft = leftPct > 55

  return (
    <div
      className="location-popup"
      onClick={e => e.stopPropagation()}
      role="dialog"
      aria-label={`${location.name} branch details`}
      style={{
        position: 'absolute',
        top: `${topPct}%`,
        left: `${leftPct}%`,
        zIndex: 60,
        width: '264px',
        transform: showToLeft
          ? 'translate(calc(-100% - 24px), -50%)'
          : 'translate(24px, -50%)',
        pointerEvents: 'all',
      }}
    >
      <div
        style={{
          background: '#fff',
          borderRadius: '8px',
          borderTop: '3px solid #F26522',
          padding: '20px',
          boxShadow:
            '0 4px 6px rgba(0,0,0,0.1), 0 20px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,0,0,0.06)',
        }}
      >
        {/* Header row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginBottom: '14px',
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '1.05rem',
                color: '#0D1B2A',
                lineHeight: 1.2,
              }}
            >
              {location.name}
            </h3>
            {location.isHQ && (
              <span
                style={{
                  display: 'inline-block',
                  marginTop: '5px',
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  background: '#F26522',
                  color: '#fff',
                  padding: '2px 8px',
                  borderRadius: '9999px',
                }}
              >
                Head Office
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              color: '#7A8FA3',
              lineHeight: 1,
              flexShrink: 0,
              marginLeft: '8px',
              borderRadius: '4px',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M1 1l12 12M13 1L1 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Branch manager */}
        <p
          style={{
            fontSize: '0.68rem',
            color: '#7A8FA3',
            fontFamily: 'Inter, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '0.07em',
            fontWeight: 600,
          }}
        >
          Branch Manager
        </p>
        <p
          style={{
            fontSize: '0.875rem',
            color: '#0D1B2A',
            fontWeight: 500,
            marginTop: '2px',
            lineHeight: 1.4,
          }}
        >
          {location.manager}
        </p>

        {/* Address */}
        <div style={{ marginTop: '12px' }}>
          {location.address.map((line, i) => (
            <p
              key={i}
              style={{
                fontSize: '0.825rem',
                color: i === 0 ? '#1F2D3D' : '#5a6a7a',
                lineHeight: 1.65,
              }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* Phone */}
        <p
          style={{
            fontSize: '0.875rem',
            color: '#0D1B2A',
            fontWeight: 500,
            marginTop: '10px',
          }}
        >
          {location.phone}
        </p>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
          <a
            href={`tel:${location.phone.replace(/\s/g, '')}`}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px',
              background: '#F26522',
              color: '#fff',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.775rem',
              fontWeight: 500,
              padding: '9px 12px',
              borderRadius: '9999px',
              textDecoration: 'none',
            }}
          >
            <svg
              width="12" height="12" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-.82-8.63A2 2 0 014 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Call
          </a>

          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(location.mapsQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px',
              border: '1.5px solid rgba(13,27,42,0.2)',
              color: '#1F2D3D',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.775rem',
              fontWeight: 500,
              padding: '9px 12px',
              borderRadius: '9999px',
              textDecoration: 'none',
              background: '#fff',
            }}
          >
            <svg
              width="12" height="12" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Open in Maps
          </a>
        </div>
      </div>
    </div>
  )
}

/* ── Main component ── */

export default function LocationsMap() {
  const [activeName, setActiveName] = useState<string | null>(null)
  const [hoverName, setHoverName] = useState<string | null>(null)

  const activeLocation = LOCATIONS.find(l => l.name === activeName) ?? null

  const close = useCallback(() => setActiveName(null), [])
  const toggle = useCallback(
    (name: string) => setActiveName(prev => (prev === name ? null : name)),
    [],
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [close])

  return (
    <div className="flex justify-center w-full">
      {/* Click-outside backdrop */}
      {activeName && (
        <div
          onClick={close}
          style={{ position: 'fixed', inset: 0, zIndex: 40, cursor: 'default' }}
          aria-hidden="true"
        />
      )}

      {/* SVG map + popup overlay */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '540px' }}>
        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          className="block w-full h-auto"
          aria-label="Map of New Zealand showing Men at Work branch locations"
          role="img"
        >
          <defs>
            {/* Tight glow: small circle + low stdDeviation keeps it crisp, not smudged */}
            <filter id="marker-glow-filter" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="5" />
            </filter>
            {/*
              Map tone filter: shifts white PNG lines to #6B7F91 (cool mid-grey)
              Matrix maps R→0.42, G→0.50, B→0.57 — matching the target hex value.
              Alpha row * 0.9 gives the requested strokeOpacity equivalent.
            */}
            <filter id="map-tone-filter">
              <feColorMatrix
                type="matrix"
                values="0.42 0    0    0 0
                        0    0.50 0    0 0
                        0    0    0.57 0 0
                        0    0    0    0.9 0"
              />
            </filter>
          </defs>

          <image
            href="/images/nz-outline.png"
            width={VB_W}
            height={VB_H}
            filter="url(#map-tone-filter)"
          />

          {LOCATIONS.map(location => {
            const isActive = activeName === location.name
            return (
              <g
                key={location.name}
                className={`map-marker-group${isActive ? ' is-active' : ''}`}
                onClick={() => toggle(location.name)}
                onMouseEnter={() => setHoverName(location.name)}
                onMouseLeave={() => setHoverName(null)}
                onFocus={() => setHoverName(location.name)}
                onBlur={() => setHoverName(null)}
                role="button"
                tabIndex={0}
                aria-label={`View ${location.name} branch details`}
                aria-pressed={isActive}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(location.name) } }}
                style={{ outline: 'none', cursor: 'pointer' }}
              >
                {/* Controlled glow — tight radius + low stdDeviation = crisp halo */}
                <circle
                  className="marker-glow"
                  cx={location.cx}
                  cy={location.cy}
                  r="10"
                  fill="#F26522"
                  filter="url(#marker-glow-filter)"
                />
                {/* Solid core dot */}
                <circle
                  className="marker-core"
                  cx={location.cx}
                  cy={location.cy}
                  r="4"
                  fill={isActive ? '#d4551a' : '#F26522'}
                />
              </g>
            )
          })}
        </svg>

        {/* Hover tooltip — hidden when the full popup is already open for that marker */}
        {hoverName && hoverName !== activeName && (() => {
          const loc = LOCATIONS.find(l => l.name === hoverName)!
          const leftPct = (loc.cx / VB_W) * 100
          const topPct  = (loc.cy / VB_H) * 100
          const showLeft = leftPct > 60
          return (
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: `${topPct}%`,
                left: `${leftPct}%`,
                transform: showLeft
                  ? 'translate(calc(-100% - 12px), -50%)'
                  : 'translate(12px, -50%)',
                pointerEvents: 'none',
                zIndex: 50,
              }}
            >
              <div style={{
                background: '#0D1B2A',
                color: 'rgba(210, 225, 240, 0.92)',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.72rem',
                fontWeight: 500,
                letterSpacing: '0.07em',
                padding: '5px 11px',
                borderRadius: '6px',
                whiteSpace: 'nowrap',
                boxShadow: '0 2px 10px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)',
              }}>
                {loc.name}
              </div>
            </div>
          )
        })()}

        {activeLocation && (
          <Popup location={activeLocation} onClose={close} />
        )}
      </div>
    </div>
  )
}
