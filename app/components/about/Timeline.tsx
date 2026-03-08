import { Flag, Building2, MapPin, Briefcase, GraduationCap, HardHat } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Milestone = {
  year: string
  title: string
  Icon: LucideIcon
}

const milestones: Milestone[] = [
  { year: '2008', title: 'Founded in Christchurch',          Icon: Flag         },
  { year: '2012', title: 'Moved to Ohoka Rd, Kaiapoi',       Icon: Building2    },
  { year: '2017', title: 'Moved to Belfast Business Park',   Icon: Building2    },
  { year: '2017', title: 'Blenheim branch opened',           Icon: MapPin       },
  { year: '2021', title: 'Timaru branch opened',             Icon: MapPin       },
  { year: '2021', title: 'Wellington branch opened',         Icon: MapPin       },
  { year: '2023', title: 'Nelson branch opened',             Icon: MapPin       },
  { year: '2023', title: 'MW Training & Planning established', Icon: GraduationCap },
  { year: '2025', title: 'The Temp Company established',     Icon: HardHat      },
]

function MilestoneCard({ title, Icon, delayClass }: { title: string; Icon: LucideIcon; delayClass: string }) {
  return (
    <div className={`tl-card reveal ${delayClass}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
      <h3 className="font-display" style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--navy)', margin: 0 }}>{title}</h3>
      <Icon size={16} stroke="var(--orange)" strokeWidth={2} style={{ flexShrink: 0, opacity: 0.85 }} aria-hidden="true" />
    </div>
  )
}

export default function Timeline() {
  return (
    <>
      <style>{`
        .tl-card {
          background: #fff;
          border-radius: 2px;
          padding: 14px 18px;
          box-shadow: 0 2px 8px rgba(13,27,42,0.08), 0 8px 24px rgba(13,27,42,0.06);
          max-width: 340px;
          width: 100%;
          transition: transform 0.28s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.28s ease;
        }
        .tl-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 16px rgba(13,27,42,0.12), 0 16px 40px rgba(242,101,34,0.1);
        }
        .tl-row {
          display: flex;
          align-items: center;
          gap: 0;
          padding: 12px 0;
        }
        .tl-side {
          flex: 1;
          min-width: 0;
          display: flex;
        }
        .tl-side--left  { justify-content: flex-end; padding-right: 36px; }
        .tl-side--right { justify-content: flex-start; padding-left: 36px; }
        .tl-spine-col {
          width: 60px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          position: relative;
          z-index: 1;
        }
        .tl-year {
          font-family: 'Poppins', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--orange);
          text-transform: uppercase;
          line-height: 1;
        }
        .tl-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--orange);
          border: 3px solid var(--off-white);
          box-shadow: 0 0 0 2px var(--orange);
          flex-shrink: 0;
        }

        /* Desktop-only elements */
        .tl-desktop { display: flex; }
        .tl-mobile  { display: none; }

        /* Mobile: stacked single column */
        @media (max-width: 767px) {
          .tl-desktop { display: none !important; }
          .tl-mobile  { display: block; }
          .tl-row { padding: 8px 0; }
          .tl-card { max-width: 100%; }
        }
      `}</style>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 24px 96px' }}>

        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
          <div className="reveal" style={{ marginBottom: '10px' }}>
            <span className="eyebrow">Our Journey</span>
          </div>
          <h2 className="section-title reveal d1" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', color: 'var(--navy)' }}>
            Milestones That Made Us
          </h2>
        </div>

        {/* Track with spine */}
        <div style={{ position: 'relative' }}>

          {/* Vertical spine — desktop only */}
          <div
            className="tl-desktop"
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 'calc(50% - 1px)',
              width: '2px',
              background: 'var(--orange)',
              opacity: 0.28,
            }}
          />

          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0
            const delayClass = `d${(i % 8) + 1}`
            return (
              <div key={i} className="tl-row">

                {/* ── Desktop: alternating layout ── */}
                <div className="tl-side tl-side--left tl-desktop">
                  {isLeft && <MilestoneCard title={m.title} Icon={m.Icon} delayClass={delayClass} />}
                </div>
                <div className="tl-spine-col tl-desktop" aria-hidden="true">
                  <span className="tl-year">{m.year}</span>
                  <div className="tl-dot" />
                </div>
                <div className="tl-side tl-side--right tl-desktop">
                  {!isLeft && <MilestoneCard title={m.title} Icon={m.Icon} delayClass={delayClass} />}
                </div>

                {/* ── Mobile: stacked layout ── */}
                <div className="tl-mobile" style={{ width: '100%', paddingBottom: '4px' }}>
                  <span className="tl-year" style={{ display: 'block', marginBottom: '8px' }}>{m.year}</span>
                  <MilestoneCard title={m.title} Icon={m.Icon} delayClass={delayClass} />
                </div>

              </div>
            )
          })}

        </div>
      </div>
    </>
  )
}
