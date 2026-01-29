import './ExperienceSection.scss'

export default function ExperienceSection() {
  return (
    <section className="exp-section" aria-label="30 years of experience">
      {/* Parallax Background */}
      <div className="exp-section__bg" aria-hidden="true"></div>
      
      {/* Animated Pattern Overlay */}
      <div className="exp-section__pattern" aria-hidden="true">
        <div className="pattern-line pattern-line--1"></div>
        <div className="pattern-line pattern-line--2"></div>
        <div className="pattern-line pattern-line--3"></div>
        <div className="pattern-dot pattern-dot--1"></div>
        <div className="pattern-dot pattern-dot--2"></div>
        <div className="pattern-dot pattern-dot--3"></div>
      </div>

      {/* Diagonal Split Overlay */}
      <div className="exp-section__diagonal-overlay" aria-hidden="true"></div>

      <div className="exp-section__container">
        <div className="exp-section__content">
          {/* Left Side - Number Display */}
          <div className="exp-section__number-block">
            <div className="number-wrapper">
              <div className="number-bg" aria-hidden="true"></div>
              <div className="number-display">
                <span className="number-value">30</span>
                <span className="number-plus">+</span>
              </div>
              <div className="number-label">
                <span className="label-text">Years of</span>
                <span className="label-highlight">Excellence</span>
              </div>
            </div>
            
            {/* Decorative Stats */}
            <div className="mini-stats">
              <div className="mini-stat">
                <div className="mini-stat__icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="mini-stat__value">500+</div>
                <div className="mini-stat__label">Projects</div>
              </div>
              <div className="mini-stat">
                <div className="mini-stat__icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="mini-stat__value">100+</div>
                <div className="mini-stat__label">Clients</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="exp-section__text-block">
            <div className="text-badge">
              <span className="badge-icon">★</span>
              <span className="badge-label">Industry Leader</span>
            </div>
            
            <h2 className="exp-section__title">
              <span className="title-line1">Decades of</span>
              <span className="title-highlight">Experience</span>
            </h2>
            
            <p className="exp-section__description">
              Architectural Hardware Products development &amp; manufacturing experience worldwide
            </p>
            
            <div className="exp-section__features">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="feature-text">Global Manufacturing Excellence</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="feature-text">Innovative Product Development</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="feature-text">Trusted by Industry Leaders</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="exp-section__cta">
              <button className="cta-button">
                <span className="cta-text">Explore Our Legacy</span>
                <svg className="cta-arrow" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="exp-section__corner exp-section__corner--tl" aria-hidden="true"></div>
      <div className="exp-section__corner exp-section__corner--br" aria-hidden="true"></div>
    </section>
  )
}