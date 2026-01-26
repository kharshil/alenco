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
  { icon: 'results', title: 'Results as per clients’ specifications.' },
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
    <section className="how-we-work" aria-label="How we work">
      <div className="how-we-work__container">
        <div className="how-we-work__left">
          <div className="how-we-work__image" aria-hidden="true" />
          <div className="how-we-work__headline">
            <span className="how-we-work__how">How</span>
            <span className="how-we-work__we">We</span>
            <span className="how-we-work__work">Work</span>
          </div>
        </div>

        <div className="how-we-work__right">
          <ul className="how-we-work__list">
            {items.map((item) => (
              <li key={item.title} className="how-we-work__item">
                <span className="how-we-work__icon" aria-hidden="true">
                  <Icon name={item.icon} />
                </span>
                <span className="how-we-work__text">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

