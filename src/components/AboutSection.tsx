import React from 'react';
import './AboutSection.scss';

interface AboutSectionProps {
  title?: string;
  description?: string[];
  buttonText?: string;
  buttonLink?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title = "About Pooja Sales & Hivik Hardware",
  description = [
    "Pooja Sales is a premier organization with years of experience delivering doors and window hardware & accessories. We have a variety of styles & designs of door and window Hardware that are the custom-made. The company has increased its reach and variety by improving the quality of service features. It follows unique rules to achieve its goals, like flexibility, quick responds, high-quality packing standard, and the best manufacturing facility. We set a standard in the industry by applying solid strategies. We have been serving the nation over the decades.",
    "A major part of the quality hardware manufacturers sold in India comes from architectural hardware firms in India. Our company has the best expert who is certified in this field. We want to reach the top position by delivering quality premium products of windows and door Hardware at an affordable price. The team we have is highly professional with specialized skills, knowledge, crafting & designing. Want to see our aesthetically designed accessories? Come to us & consult a call with our expertise. Education is important; some people have extraordinary hardware requirements when purchasing from a firm that sells doors and window Hardware & accessories."
  ],
  buttonText = "READ MORE",
  buttonLink = "#",
  imageSrc = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  imageAlt = "Modern sliding glass doors"
}) => {
  return (
    <section className="about-section">
      {/* Background Pattern */}
      {/* <div className="about-section__bg-pattern" aria-hidden="true">
        <div className="pattern-grid"></div>
        <div className="pattern-circle pattern-circle--1"></div>
        <div className="pattern-circle pattern-circle--2"></div>
      </div> */}

      <div className="about-section__container">
        {/* Section Header */}
        <div className="about-section__header">
          <div className="header-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">About Us</span>
          </div>
          <h2 className="about-section__title">
            <span className="title-main">{title.split('&')[0]}</span>
            {title.includes('&') && (
              <span className="title-sub">& {title.split('&')[1]}</span>
            )}
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="about-section__content">
          {/* Left Side - Image with Decorations */}
          <div className="about-image">
            <div className="about-image__wrapper">
              {/* Decorative Frame */}
              <div className="image-frame" aria-hidden="true">
                <div className="frame-corner frame-corner--tl"></div>
                <div className="frame-corner frame-corner--tr"></div>
                <div className="frame-corner frame-corner--bl"></div>
                <div className="frame-corner frame-corner--br"></div>
              </div>

              {/* Main Image */}
              <div className="image-container">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="about-image__img"
                />
                <div className="image-overlay"></div>
              </div>

              {/* Stats Card Overlay */}
              {/* <div className="stats-card">
                <div className="stat-item">
                  <div className="stat-number">30+</div>
                  <div className="stat-label">Years</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">2000+</div>
                  <div className="stat-label">Products</div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="about-content">
            {/* Features Grid */}
            <div className="features-grid">
              <div className="feature-badge1">
                <svg className="feature-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="feature-text1">Premium Quality</span>
              </div>
              <div className="feature-badge1">
                <svg className="feature-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="feature-text1">Fast Delivery</span>
              </div>
              <div className="feature-badge1">
                <svg className="feature-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="feature-text1">Certified</span>
              </div>
            </div>

            {/* Description */}
            <div className="about-description">
              {description.map((paragraph, index) => (
                <p key={index} className="description-text">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Points */}
            <div className="key-points">
              <div className="key-point">
                <div className="point-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="point-text">Custom-made designs tailored to your needs</span>
              </div>
              <div className="key-point">
                <div className="point-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="point-text">Certified experts with specialized skills</span>
              </div>
              <div className="key-point">
                <div className="point-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="point-text">Decades of trusted service nationwide</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="about-cta">
              <a href={buttonLink} className="abo-button abo-button--primary">
                <span className="button-text">{buttonText}</span>
                <svg className="button-arrow" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#contact" className="abo-button abo-button--secondary">
                <span className="button-text">Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;