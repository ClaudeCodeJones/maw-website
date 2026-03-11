'use client'

import { useState, useEffect, useRef } from 'react'
import BranchCard, { type Branch } from './BranchCard'
import { branchHiring } from '../../data/hiringStatus'

const VB_W = 545.25
const VB_H = 795

type Location = Branch & { x: number; y: number }

const locations: Location[] = [
  { name: 'Nelson',       x: 295, y: 414, manager: 'Darryn Clearwater', role: 'Operations Co-ordinator', phone: '0800 636 289', address: '750 Lower Queen St, Richmond',      illustration: '/images/nsn-sun.svg',        servingAreas: ['Nelson', 'Tasman', 'Golden Bay'] },
  { name: 'Blenheim',     x: 332, y: 458, manager: 'Luke Roberts',       role: 'Branch Manager',          phone: '0800 636 289', address: '7 Freswick St, Blenheim Central',                                              servingAreas: ['Marlborough', 'Kaikoura', 'Wairau Valley'] },
  { name: 'Wellington',   x: 389, y: 423, manager: 'Jason Rankin',       role: 'Branch Manager',          phone: '0800 636 289', address: '23 Meachen St, Seaview',            illustration: '/images/wlg-beehive.svg',    servingAreas: ['Wellington Region', 'Kapiti Coast', 'Hutt Valley', 'Wider Lower North Island'] },
  { name: 'Christchurch', x: 264, y: 560, manager: 'Pete Manahi',        role: 'Branch Manager',          phone: '0800 636 289', address: '25 Blakes Rd, Belfast',             illustration: '/images/chc-cathedral.svg',  servingAreas: ['Christchurch', 'North Canterbury', 'Selwyn', 'Wider Canterbury Region'] },
  { name: 'Timaru',       x: 194, y: 624, manager: 'Christina Elliott',  role: 'Branch Manager',          phone: '0800 636 289', address: '83 Meadows Rd, Washdyke',           illustration: '/images/tiu-lighthouse.svg', servingAreas: ['South Canterbury', 'Mackenzie', 'Waitaki'] },
]

export default function LocationsMap() {
  const [activeBranch, setActiveBranch] = useState<Location | null>(null)
  const [visible, setVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

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
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 500ms ease-out, transform 500ms ease-out',
        display: 'flex',
        gap: '48px',
        width: '100%',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {/* Map column */}
      <div style={{ flex: '1 1 340px', minWidth: 0, maxWidth: '500px', background: 'radial-gradient(circle at center, rgba(242,101,34,0.08) 0%, rgba(242,101,34,0.03) 40%, transparent 70%)', borderRadius: '12px' }}>
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

          {locations.map((location) => (
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
              style={{
                cursor: 'pointer',
                outline: 'none',
              }}
            >
              {/* Glow halo */}
              <circle
                r={34}
                fill="#fd4f00"
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
                stroke="#fd4f00"
                strokeWidth={
                  activeBranch?.name === location.name
                    ? 4
                    : 3
                }
              />

              {/* Core dot */}
              <circle r={7} fill="#fd4f00" />
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
            hiringStatus={branchHiring.find(b => b.branch === activeBranch.name)?.status}
          />
        )}
      </div>
    </div>
  )
}
