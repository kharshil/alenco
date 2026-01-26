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
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.4 15a7.9 7.9 0 0 0 .1-1l2-1.2-2-3.6-2.3.5a7.8 7.8 0 0 0-1.7-1L15 6.4h-6l-.5 2.3a7.8 7.8 0 0 0-1.7 1L4.5 9.2l-2 3.6 2 1.2a7.9 7.9 0 0 0 .1 1l-2 1.2 2 3.6 2.3-.5c.5.4 1.1.8 1.7 1l.5 2.3h6l.5-2.3c.6-.2 1.2-.6 1.7-1l2.3.5 2-3.6-2-1.2Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
  }
}

export default function WhyChooseSection() {
  return (
    <section className="why-choose" aria-label="Why Choose">
      <div className="why-choose__container">
        <h2 className="why-choose__title">Why Choose Pooja Sales?</h2>
        <p className="why-choose__subtitle">
          Pooja Sales is the leading business that offers the best quality, Aluminium window locks,
          door locks, sliding window rollers, metro locks, uPVC window locks, rollers, Locking Espag,
          Aluminium Sliding folding systems, Customize product development and other products. We must
          simply use the best products. Our products are long-lasting and resistant to weather
          changes. We are the top customized hardware manufacturer in India.
        </p>

        <div className="why-choose__grid">
          {features.map((f) => (
            <article key={f.title} className="why-choose__card">
              <div className="why-choose__icon" aria-hidden="true">
                <Icon name={f.icon} />
              </div>
              <h3 className="why-choose__cardTitle">{f.title}</h3>
              <p className="why-choose__cardText">{f.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

