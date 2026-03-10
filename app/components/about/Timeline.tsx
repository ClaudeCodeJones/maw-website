import { Flag, Building2, MapPin, GraduationCap, HardHat } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Milestone = {
  year: string
  title: string
  Icon: LucideIcon
  subtext?: string
}

const milestones: Milestone[] = [
  { year: '2008', title: 'The Early Years', Icon: Flag, subtext: 'Dean and Esther purchased Men at Work after its earlier establishment in 2005. The business initially operated from their home in Woodend.' },
  { year: '2012', title: 'Moved to Kaiapoi', Icon: Building2, subtext: 'The business outgrew its original base and relocated to Kaiapoi.\nThis move gave the company room to grow its fleet and team.' },
  { year: '2017', title: 'Moved to Belfast Business Park', Icon: Building2, subtext: 'Continued growth led to a move within Christchurch. A purpose-built Belfast Business Park facility became our new head office.' },
  { year: '2017', title: 'Blenheim branch opens', Icon: MapPin, subtext: 'Expansion beyond Christchurch begins in Marlborough. The Blenheim branch supports projects across the wider region.' },
  { year: '2021', title: 'Timaru branch opens', Icon: MapPin, subtext: 'The next step in our growth reaches South Canterbury. The Timaru branch opens with Christina Elliott leading the team.' },
  { year: '2021', title: 'Wellington branch opens', Icon: MapPin, subtext: 'Men at Work opens its Wellington branch to support the Transmission Gully project, establishing a presence that remains a key part of the business.' },
  { year: '2023', title: 'Nelson branch opens', Icon: MapPin, subtext: 'Men at Work arrives in Nelson to support the top of the South Island, providing local crews and faster response across the region.' },
  { year: '2023', title: 'MW Training & Planning established', Icon: GraduationCap, subtext: 'MW Training & Planning is established to support our operations. Providing in-house training and professional TMP design.' },
  { year: '2025', title: 'The Temp Company established', Icon: HardHat, subtext: 'The Temp Company launches in Blenheim initially, later growing further into Christchurch and Wellington to supply trained workers across the regions.' },
]

function MilestoneCard({ year, title, Icon, delayClass, subtext }: { year: string; title: string; Icon: LucideIcon; delayClass: string; subtext?: string }) {
  return (
    <div className={`tl-card reveal ${delayClass}`} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <span className="tl-card-year">{year}</span>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
        <h3 className="font-display" style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--navy)', margin: 0, lineHeight: 1.4 }}>
          {title === 'MW Training & Planning established' ? (
            <><span className="hidden md:inline">MW </span>Training &amp; Planning established</>
          ) : title}
        </h3>
        <Icon size={16} stroke="var(--orange)" strokeWidth={2} style={{ flexShrink: 0, opacity: 0.85 }} aria-hidden="true" />
      </div>
      {subtext && (
        <p style={{ fontSize: '0.78rem', lineHeight: 1.6, color: 'var(--muted)', marginTop: '6px' }}>
          {subtext.replace(/\n/g, ' ')}
        </p>
      )}
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
          max-width: 360px;
          width: 100%;
          transition: transform 0.28s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.28s ease;
        }
        .tl-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 16px rgba(13,27,42,0.12), 0 16px 40px rgba(242,101,34,0.1);
        }
        .tl-card-year {
          display: block;
          font-size: 0.7rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--orange);
          font-weight: 600;
          margin-bottom: 6px;
          opacity: 0.9;
        }
        .tl-row {
          display: flex;
          align-items: center;
          gap: 0;
          padding: 6px 0;
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
          position: relative;
          z-index: 1;
        }
        .tl-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--orange);
          border: 3px solid #f2efe9;
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
              background: 'linear-gradient(to bottom, rgba(253,79,0,0.25), rgba(253,79,0,0.6), rgba(253,79,0,0.25))',
            }}
          />

          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0
            const delayClass = `d${(i % 8) + 1}`
            return (
              <div key={i} className="tl-row">

                {/* ── Desktop: alternating layout ── */}
                <div className="tl-side tl-side--left tl-desktop">
                  {isLeft && <MilestoneCard year={m.year} title={m.title} Icon={m.Icon} delayClass={delayClass} subtext={m.subtext} />}
                </div>
                <div className="tl-spine-col tl-desktop" aria-hidden="true">
                  <div className="tl-dot" />
                </div>
                <div className="tl-side tl-side--right tl-desktop">
                  {!isLeft && <MilestoneCard year={m.year} title={m.title} Icon={m.Icon} delayClass={delayClass} subtext={m.subtext} />}
                </div>

                {/* ── Mobile: stacked layout ── */}
                <div className="tl-mobile" style={{ width: '100%', paddingBottom: '4px' }}>
                  <MilestoneCard year={m.year} title={m.title} Icon={m.Icon} delayClass={delayClass} subtext={m.subtext} />
                </div>

              </div>
            )
          })}

        </div>
      </div>
    </>
  )
}
