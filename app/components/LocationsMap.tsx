'use client'

import { useState, useEffect, useRef } from 'react'
import BranchCard, { type Branch } from './BranchCard'

const VB_W = 545.25
const VB_H = 795

type Location = Branch & { x: number; y: number }

const locations: Location[] = [
  { name: 'Nelson',       x: 295, y: 414, manager: 'Darryn Clearwater', role: 'Operations Co-ordinator', phone: '0800 639 289' },
  { name: 'Blenheim',     x: 332, y: 458, manager: 'Luke Roberts',       role: 'Branch Manager',          phone: '0800 639 289' },
  { name: 'Wellington',   x: 389, y: 423, manager: 'Jason Rankin',       role: 'Branch Manager',          phone: '0800 639 289' },
  { name: 'Christchurch', x: 264, y: 560, manager: 'Pete Manahi',        role: 'Branch Manager',          phone: '0800 639 289' },
  { name: 'Timaru',       x: 194, y: 624, manager: 'Christina Elliott',  role: 'Branch Manager',          phone: '0800 639 289' },
]

export default function LocationsMap() {
  const [activeBranch, setActiveBranch] = useState<Location | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) setActiveBranch(null)
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  function toggle(location: Location) {
    setActiveBranch(prev =>
      prev?.name === location.name ? null : location
    )
  }

  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        gap: '48px',
        width: '100%',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {/* Map column */}
      <div style={{ flex: '1 1 340px', minWidth: 0, maxWidth: '500px' }}>
        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          className="block w-full h-auto"
          aria-label="Map of New Zealand showing Men at Work branch locations"
          role="img"
        >
          <image
            href="/images/nz-map.svg"
            width={VB_W}
            height={VB_H}
          />

          {locations.map(location => (
            <g
              key={location.name}
              transform={`translate(${location.x}, ${location.y})`}
              onClick={() => toggle(location)}
              role="button"
              tabIndex={0}
              aria-label={`View ${location.name} branch details`}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  toggle(location)
                }
              }}
              style={{ cursor: 'pointer', outline: 'none' }}
            >
              {/* Glow halo */}
              <circle
                r={34}
                fill="#F26522"
                opacity={
                  activeBranch?.name === location.name
                    ? 0.14
                    : 0.09
                }
              />

              {/* Outer ring */}
              <circle
                r={16}
                fill="none"
                stroke="#F26522"
                strokeWidth={
                  activeBranch?.name === location.name
                    ? 4
                    : 3
                }
              />

              {/* Core dot */}
              <circle r={7} fill="#F26522" />
            </g>
          ))}
        </svg>
      </div>

      {/* Branch card column */}
      <div
        style={{
          flex: '0 0 360px',
          width: '360px',
          minWidth: '280px',
          alignSelf: 'center',
        }}
      >
        {activeBranch && (
          <BranchCard
            branch={activeBranch}
            onClose={() => setActiveBranch(null)}
          />
        )}
      </div>
    </div>
  )
}