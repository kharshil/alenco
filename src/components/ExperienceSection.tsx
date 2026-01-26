import './ExperienceSection.scss'

export default function ExperienceSection() {
  return (
    <section className="experience-banner" aria-label="30 years of experience">
      <div className="experience-banner__overlay">
        <div className="experience-banner__content">
          <div className="experience-banner__years">
            <span className="experience-banner__number">30</span>
            <span className="experience-banner__plus">+</span>
            <span className="experience-banner__yearsLabel">Years</span>
          </div>

          <p className="experience-banner__headline">Experience</p>

          <p className="experience-banner__tagline">
            “Architectural Hardware Products development &amp; manufacturing experience worldwide”
          </p>
        </div>
      </div>
    </section>
  )
}

