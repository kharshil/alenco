// components/ClientsSection/ClientsSection.tsx
"use client";

import React, { useState, useRef, useEffect } from 'react';
import './ClientsSection.scss';

interface Client {
  id: number;
  name: string;
  logo: string;
}

interface ClientsSectionProps {
  title?: string;
  subtitle?: string;
  clients?: Client[];
}

const ClientsSection: React.FC<ClientsSectionProps> = ({
  title = "Our Precious Clients",
  subtitle = "Trusted by leading brands worldwide",
  clients = [
    {
      id: 1,
      name: "Reliance Industries",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80"
    },
    {
      id: 2,
      name: "Profine",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80"
    },
    {
      id: 3,
      name: "Lodha",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80"
    },
    {
      id: 4,
      name: "Larsen & Toubro",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80"
    },
    {
      id: 5,
      name: "Godrej",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80"
    },
    {
      id: 6,
      name: "Tata Group",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80"
    },
    {
      id: 7,
      name: "Mahindra",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80"
    },
    {
      id: 8,
      name: "Birla",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80"
    }
  ]
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  const itemsPerView = 4;
  const totalSlides = Math.ceil(clients.length / itemsPerView);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="clients-section">
      <div className="clients-container">
        <div className="clients-header">
          <h2 className="clients-title">{title}</h2>
          <p className="clients-subtitle">{subtitle}</p>
          <div className="header-decoration">
            <span className="deco-line left"></span>
            <span className="deco-diamond"></span>
            <span className="deco-line right"></span>
          </div>
        </div>

        <div className="clients-slider">
          <button 
            className="slider-nav prev"
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            <span>←</span>
          </button>

          <div 
            className="clients-wrapper"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div 
              className="clients-track"
              ref={trackRef}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="clients-slide">
                  {clients
                    .slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView)
                    .map((client) => (
                      <div key={client.id} className="client-card">
                        <div className="client-inner">
                          <div className="client-logo-wrapper">
                            <img 
                              src={client.logo} 
                              alt={client.name}
                              className="client-logo"
                            />
                            <div className="logo-overlay">
                              <span className="client-name">{client.name}</span>
                            </div>
                          </div>
                          <div className="client-shine"></div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          <button 
            className="slider-nav next"
            onClick={handleNext}
            aria-label="Next slide"
          >
            <span>→</span>
          </button>
        </div>

        <div className="slider-dots">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="clients-stats">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
        </div>
      </div>

      <div className="background-pattern">
        <div className="pattern-grid"></div>
      </div>
    </section>
  );
};

export default ClientsSection;