import { HardHat, TrafficCone } from 'lucide-react'

const steps = [
  {
    title: 'TTM Worker',
    description: 'Start on the tools. Learn signals, site setup, and traffic management fundamentals.',
    image: '/roles/ttm-worker.webp',
    icon: null,
    LucideIcon: TrafficCone,
  },
  {
    title: 'STMS',
    description: 'Take responsibility for traffic sites and manage safe traffic operations.',
    image: '/roles/stms.webp',
    icon: null,
    LucideIcon: HardHat,
  },
  {
    title: 'Lead STMS',
    description: 'Run traffic sites while leading small teams and supporting crew development.',
    image: '/roles/lead-stms.webp',
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9,12 11,14 15,10" />
      </>
    ),
  },
  {
    title: 'Foreman',
    description: 'Lead multiple crews across projects and support operational planning.',
    image: '/roles/foreman.webp',
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    title: 'TMP Designer',
    description: 'Design traffic management plans and support project planning.',
    image: '/roles/tmp-designer.webp',
    icon: (
      <>
        <polygon points="3,6 9,3 15,6 21,3 21,18 15,21 9,18 3,21" />
        <line x1="9" y1="3" x2="9" y2="18" />
        <line x1="15" y1="6" x2="15" y2="21" />
      </>
    ),
  },
  {
    title: 'Manager',
    description: 'Move into regional operations, training, or business development.',
    image: '/roles/manager.webp',
    icon: (
      <>
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </>
    ),
  },
]

const iconBoxStyle: React.CSSProperties = {
  width: '40px',
  height: '40px',
  borderRadius: '6px',
  background: 'rgba(242,101,34,0.12)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '16px',
}

export default function CareerPath() {
  return (
    <>
      <style>{`
        .career-path-card {
          transition: transform 0.28s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.28s ease;
        }
        .career-path-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 2px 4px rgba(0,0,0,0.3), 0 12px 32px rgba(242,101,34,0.22), 0 32px 64px rgba(0,0,0,0.45);
        }
      `}</style>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {steps.map(({ title, description, image, icon, LucideIcon }) => (
        <div
          className="career-path-card h-[240px] md:h-[360px]"
          key={title}
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderTop: '3px solid var(--orange)',
            borderRadius: '2px',
            padding: '32px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Inline overlay — no CSS class interference */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(7,15,27,0.62) 0%, rgba(13,27,42,0.55) 55%, rgba(22,36,53,0.44) 100%)', zIndex: 0, pointerEvents: 'none' }} />
          {/* Content pushed to bottom */}
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
            <div style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', background: 'rgba(7,15,27,0.45)', borderRadius: '4px', padding: '16px', position: 'relative' }}>
              <div style={{ ...iconBoxStyle, position: 'absolute', top: '12px', right: '12px', marginBottom: 0, background: 'none' }}>
                {LucideIcon
                  ? <LucideIcon width={22} height={22} stroke="var(--orange)" strokeWidth={2} aria-hidden="true" />
                  : (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {icon}
                    </svg>
                  )
                }
              </div>
              <h3 className="font-display" style={{ fontWeight: 600, fontSize: '0.95rem', color: '#fff', paddingRight: '52px' }}>{title}</h3>
              <p style={{ fontSize: '0.8rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.62)', marginTop: '8px' }}>{description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}
