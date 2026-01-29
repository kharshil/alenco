// components/ServicesSection/ServicesSection.tsx
"use client";

import React, { useState } from 'react';
import './ServicesSection.scss';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  icon?: string;
}

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  services?: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  title = "Services of Alenco - Window Hardware Accessories Manufacturers in Rajkot",
  subtitle = "The company offers services worldwide. Our brand is just a few steps away from reaching a significant milestone, and if you want to be a part of it, contact us immediately.",
  services = [
    {
      id: 1,
      title: "Technical Assistance",
      description: "The Company offered technical help for ALENCO Hardware products. We provide complete technical information on the products and assembly. We also manage and report any issues are there in the products.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80",
      icon: "⚙️"
    },
    {
      id: 2,
      title: "Customize Product",
      description: "Our store offers completely customizable products. We offer all current and new door and window hardware & accessories. With us, you can make your window more elegant. We have brilliant R&D professionals to produce products faster and at lower costs.",
      image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&q=80",
      icon: "🎨"
    },
    {
      id: 3,
      title: "Design",
      description: "We provide the best door and window hardware accessories designing support to meet all your needs. Alenco has the best team of qualified designers.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
      icon: "📐"
    },
    {
      id: 4,
      title: "Shipping, Handling & Logistics",
      description: "We also deliver the shipping, cargo, and handling & logistic services. Our hardware suppliers deliver the materials faster than any other company!",
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600&q=80",
      icon: "🚚"
    }
  ]
}) => {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section className="services-section">
      {/* Background Elements */}
      <div className="services-bg" aria-hidden="true">
        <div className="bg-grid"></div>
        <div className="bg-shape bg-shape--1"></div>
        <div className="bg-shape bg-shape--2"></div>
        <div className="bg-lines">
          <div className="line line--1"></div>
          <div className="line line--2"></div>
          <div className="line line--3"></div>
        </div>
      </div>

      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <div className="header-badge">
            <span className="badge-icon">✨</span>
            <span className="badge-text">Our Services</span>
          </div>
          
          <h2 className="services-title">
            <span className="title-main1">What We
            <span className="title-accent1"> Offer</span>
            </span>
          </h2>
          
          <p className="services-subtitle">{subtitle}</p>

          {/* Decorative Line */}
          
        </div>

        {/* Services List */}
        <div className="services-list">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`service-item ${activeService === service.id ? 'is-active' : ''} ${index % 2 === 0 ? 'is-left' : 'is-right'}`}
              style={{ '--item-index': index } as React.CSSProperties}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              {/* Service Number */}
              {/* <div className="service-number">
                <span className="number-text">{String(index + 1).padStart(2, '0')}</span>
                <div className="number-line"></div>
              </div> */}

              {/* Service Card */}
              <div className="service-card">
                {/* Image Section */}
                <div className="service-visual">
                  <div className="visual-wrapper">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="service-image"
                    />
                    <div className="image-overlay"></div>
                    
                    {/* Icon Badge */}
                    <div className="icon-badge">
                      <div className="icon-bg"></div>
                      <span className="icon-emoji">{service.icon}</span>
                    </div>

                    {/* Hover Arrow */}
                    <div className="hover-arrow">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="service-content">
                  <div className="content-wrapper">
                    {/* Category Tag */}
                    <div className="service-tag">
                      <span className="tag-dot"></span>
                      <span className="tag-text">Service</span>
                    </div>

                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>

                    {/* Learn More Link */}
                    {/* <div className="service-link">
                      <span className="link-text">Learn More</span>
                      <svg className="link-arrow" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div> */}
                  </div>

                  {/* Decorative Corner */}
                  <div className="content-corner"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        {/* <div className="services-footer">
          <p className="footer-text">Need a custom solution?</p>
          <a href="#contact" className="footer-cta">
            <span className="cta-text">Contact Our Team</span>
            <svg className="cta-icon" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default ServicesSection;