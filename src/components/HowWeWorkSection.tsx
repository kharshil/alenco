import './HowWeWorkSection.scss'

type Item = {
  title: string
  icon: 'analysis' | 'completion' | 'budget' | 'range' | 'experts' | 'export' | 'results' | 'pac'
}

const items: Item[] = [
  { icon: 'analysis', title: 'In-depth analysis of operation' },
  { icon: 'completion', title: 'Completion of projects in prescribed timeline.' },
  { icon: 'budget', title: 'Proper time and budget calculation.' },
  { icon: 'range', title: '2000+ Product Range Options.' },
  { icon: 'experts', title: 'Managed by experts.' },
  { icon: 'export', title: 'Export in Many Countries.' },
  { icon: 'results', title: 'Results as per clients specifications.' },
  { icon: 'pac', title: 'PAC (Product as Customize) design and develop.' },
]

function Icon({ name }: { name: Item['icon'] }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  switch (name) {
    case 'analysis':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M4 19V5m0 14h16" />
          <path {...common} d="M7 16l3-4 3 2 4-6" />
          <path {...common} d="M7 9h.01M10 9h.01M13 9h.01" />
        </svg>
      )
    case 'completion':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M9 12l2 2 4-4" />
          <path {...common} d="M12 22a9 9 0 1 0-9-9 9 9 0 0 0 9 9Z" />
          <path {...common} d="M17.5 3.5l3 3" />
        </svg>
      )
    case 'budget':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M8 3h8v4H8z" />
          <path {...common} d="M6 7h12v14H6z" />
          <path {...common} d="M9 11h6M9 15h4" />
        </svg>
      )
    case 'range':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M4 7h16l-2 4H6L4 7Z" />
          <path {...common} d="M6 11v9h12v-9" />
          <path {...common} d="M9 15h6" />
        </svg>
      )
    case 'experts':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
          <path {...common} d="M4 21a8 8 0 0 1 16 0" />
          <path {...common} d="M19 8h2M20 7v2" />
        </svg>
      )
    case 'export':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z" />
          <path {...common} d="M2 12h20" />
          <path {...common} d="M12 2a15 15 0 0 1 0 20" />
          <path {...common} d="M12 2a15 15 0 0 0 0 20" />
        </svg>
      )
    case 'results':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M6 3h9l3 3v15H6z" />
          <path {...common} d="M9 13l2 2 4-4" />
          <path {...common} d="M9 7h6" />
        </svg>
      )
    case 'pac':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M3 21l3-1 12-12-2-2L4 18l-1 3Z" />
          <path {...common} d="M14 6l2 2" />
          <path {...common} d="M18 14h3M19.5 12.5v3" />
        </svg>
      )
  }
}

export default function HowWeWorkSection() {
  return (
    <section className="hww-section" aria-label="How we work">
      

      <div className="hww-section__container">
        {/* Left Side - Hero Section */}
        <div className="hww-section__hero">
          {/* Background Image */}
          <div className="hww-hero__image" aria-hidden="true"></div>
          
          {/* Content Overlay */}
          <div className="hww-hero__content">
            <div className="hww-hero__badge">
              <span className="badge-icons">⚡</span>
              <span className="badge-text">Our Process</span>
            </div>
            
            <h2 className="hww-hero__title">
              <span className="title-word title-word--1">How</span>
              <span className="title-word title-word--2">We</span>
              <span className="title-word title-word--3">Work</span>
            </h2>
            
            <p className="hww-hero__description">
              Our proven methodology ensures exceptional results through systematic planning and expert execution
            </p>

            {/* Decorative Elements */}
            <div className="hww-hero__decoration">
              <div className="deco-circle"></div>
              <div className="deco-line1"></div>
            </div>
          </div>
        </div>

        {/* Right Side - Process Timeline */}
        <div className="hww-section__process">
          <div className="hww-process__header">
            <h3 className="process-subtitle">Our Methodology</h3>
            <div className="process-line" aria-hidden="true"></div>
          </div>

          <ul className="hww-process__list">
            {items.map((item, index) => (
              <li 
                key={item.title} 
                className="process-item"
                style={{ '--item-index': index } as React.CSSProperties}
              >
                {/* Icon Circle */}
                <div className="process-item__icon-wrapper">
                  <div className="icon-circle">
                    <span className="process-icon" aria-hidden="true">
                      <Icon name={item.icon} />
                    </span>
                  </div>
                  
                </div>

                {/* Content */}
                <div className="process-item__content">
                  <p className="process-text">{item.title}</p>
                  
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}