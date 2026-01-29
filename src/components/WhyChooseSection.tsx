import './WhyChooseSection.scss'

type Feature = {
  title: string
  description: string
  icon: 'bulb' | 'clock' | 'flask' | 'gear'
}

const features: Feature[] = [
  {
    icon: 'bulb',
    title: 'Receive an end-to-end solution',
    description:
      'We offer end-to-end service to the customers. We take care of every process, starting from design to development and consultations.',
  },
  {
    icon: 'clock',
    title: 'On-time project delivery',
    description:
      'We promise to complete the project on time. We offer the best customer service and complete product delivery.',
  },
  {
    icon: 'flask',
    title: 'Proven & tested service',
    description:
      'No other companies can match the expertise of our company. We have a great record of delivering complete services on time with an affordable budget.',
  },
  {
    icon: 'gear',
    title: 'Use of advanced technology',
    description:
      'Our company uses advanced technologies and methodologies to deliver aesthetic solutions with increasing energy efficiency and the value of products.',
  },
]

function Icon({ name }: { name: Feature['icon'] }) {
  switch (name) {
    case 'bulb':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M9 21h6m-7-3h8m-4-16a6 6 0 0 0-3.5 10.9c.6.45 1 1.1 1.2 1.85L10 16h4l.3-1.25c.2-.75.6-1.4 1.2-1.85A6 6 0 0 0 12 2Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'clock':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 8v5l3 2m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'flask':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M10 2h4m-1 0v6.2l4.8 7.7A3 3 0 0 1 15.2 20H8.8a3 3 0 0 1-2.6-4.1L11 8.2V2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 14h7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'gear':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06A2 2 0 1 1 3.4 17l.06-.06A1.65 1.65 0 0 0 3.79 15a1.65 1.65 0 0 0-1.51-1H2a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 6.04 3.4l.06.06a1.65 1.65 0 0 0 1.82.33H8a1.65 1.65 0 0 0 1-1.51V2a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06A2 2 0 1 1 20.6 6.04l-.06.06a1.65 1.65 0 0 0-.33 1.82V8c0 .66.39 1.26 1 1.51H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      )
  }
}

export default function WhyChooseSection() {
  return (
    <section className="why-section" aria-label="Why Choose">
      {/* Background Elements */}
      <div className="why-section__bg-elements" aria-hidden="true">
        <div className="bg-circle bg-circle--1"></div>
        <div className="bg-circle bg-circle--2"></div>
        <div className="bg-shape bg-shape--1"></div>
        <div className="bg-shape bg-shape--2"></div>
      </div>

      <div className="why-section__container">
        {/* Header Section */}
        <div className="why-section__header">
          <div className="why-section__badge">
            <span className="badge-dot"></span>
            <span className="badge-text">Why Choose Us</span>
          </div>
          
          <h2 className="why-section__title">
            <span className="title-line">Why Choose</span>
            <span className="title-highlight">Pooja Sales?</span>
          </h2>
          
          <p className="why-section__description">
            Pooja Sales is the leading business that offers the best quality, Aluminium window locks,
            door locks, sliding window rollers, metro locks, uPVC window locks, rollers, Locking Espag,
            Aluminium Sliding folding systems, Customize product development and other products. We must
            simply use the best products. Our products are long-lasting and resistant to weather
            changes. We are the top customized hardware manufacturer in India.
          </p>

          <div className="why-section__stats">
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Quality Products</div>
            </div>
          </div>
        </div>

        {/* Features Grid with Staggered Layout */}
        <div className="why-section__features">
          {features.map((feature, index) => (
            <article 
              key={feature.title} 
              className="feature-card"
              style={{ '--card-index': index } as React.CSSProperties}
            >
              {/* Icon Container with Gradient Background */}
              <div className="feature-card__icon-wrapper">
                <div className="feature-card__icon-bg"></div>
                <div className="feature-card__icon">
                  <Icon name={feature.icon} />
                </div>
                <div className="feature-card__number">{String(index + 1).padStart(2, '0')}</div>
              </div>

              {/* Content */}
              <div className="feature-card__content">
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__description">{feature.description}</p>
                
              </div>

              {/* Decorative Corner */}
              <div className="feature-card__corner"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}