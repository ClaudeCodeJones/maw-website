const steps = [
  {
    number: '01',
    title: 'Traffic Controller',
    description: 'Start on the tools. Learn the signals, the plans, the standards. Build your site confidence from day one.',
    accent: 'var(--orange)',
  },
  {
    number: '02',
    title: 'Senior Controller',
    description: 'Lead small crews, own your site. Develop your TMP reading and stakeholder communication.',
    accent: 'var(--orange)',
  },
  {
    number: '03',
    title: 'Site Supervisor',
    description: 'Oversee multiple controllers, liaise with clients, and take responsibility for site safety outcomes.',
    accent: 'var(--orange)',
  },
  {
    number: '04',
    title: 'Operations or Planning',
    description: 'Step into a specialist role: regional operations, TMP design, training, or business development.',
    accent: 'var(--orange)',
  },
]

export default function CareerPath() {
  return (
    <div style={{ position: 'relative' }}>
      {/* Connector line (desktop) */}
      <div
        className="process-connector"
        style={{
          position: 'absolute',
          top: '28px',
          left: 'calc(12.5% + 28px)',
          right: 'calc(12.5% + 28px)',
          height: '2px',
          background: 'rgba(242,101,34,0.3)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      <div className="process-grid">
        {steps.map(({ number, title, description }, i) => (
          <div
            key={number}
            className={`reveal d${i + 1}`}
            style={{ position: 'relative', zIndex: 1 }}
          >
            {/* Step circle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '2px',
                  background: i === 0 ? 'var(--orange)' : '#fff',
                  border: i === 0 ? 'none' : '2px solid var(--orange)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: 'var(--orange)',
                  }}
                >
                  {number}
                </span>
              </div>
            </div>

            <h3
              className="font-display"
              style={{
                fontWeight: 600,
                fontSize: '1.05rem',
                color: 'var(--navy)',
                marginBottom: '10px',
                lineHeight: 1.3,
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontSize: '0.875rem',
                lineHeight: 1.75,
                color: '#5a6a7a',
              }}
            >
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
