// components/FeaturesSection/FeaturesSection.tsx
'use client';
import React, { useState } from 'react';
import './FeaturesSection.scss';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface FeaturesSectionProps {
  title?: string;
  subtitle?: string;
  features?: Feature[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  title = "Features of Alenco Hardware Products",
  subtitle = "If you want to grab any of our door and window hardware & accessories, we welcome you! Book a consultation with our experts and share your requirements. Alenco hardware offers you new and creative patterns as it has a wide reach for entryway hardware and embellishments.",
  features = [
    {
      id: 1,
      title: "Cost-effective",
      description: "Our accessories are less expensive compared to other companies, and they bring a large audience to our business.",
      icon: "💰",
      color: "#2bb249"
    },
    {
      id: 2,
      title: "Innovative Design",
      description: "Our Company is looking forward to delivering innovative design. We are in charge of releasing several innovative hardware in the business.",
      icon: "💡",
      color: "#2bb249"
    },
    {
      id: 3,
      title: "Customization",
      description: "Our expert manufacturers and the designing team will customize the door and window hardware & accessories as per your need.",
      icon: "🎨",
      color: "#2bb249"
    },
    {
      id: 4,
      title: "High Quality",
      description: "All the hardware available in our store has gone through stringent quality control checks to ensure we have the best.",
      icon: "⭐",
      color: "#2bb249"
    },
    {
      id: 5,
      title: "Warranty",
      description: "The Company offers warranties on every product to build trust.",
      icon: "🛡️",
      color: "#2bb249"
    },
    {
      id: 6,
      title: "Wide Range of Availability",
      description: "On this platform, you can grab the largest Range of hardware & accessories in a reasonable amount.",
      icon: "📦",
      color: "#2bb249"
    }
  ]
}) => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  return (
    <section className="feat-section">
      {/* Background Elements */}
      <div className="feat-bg" aria-hidden="true">
        <div className="bg-mesh"></div>
        <div className="bg-orb bg-orb--1"></div>
        <div className="bg-orb bg-orb--2"></div>
        <div className="bg-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{ '--particle-index': i } as React.CSSProperties}></div>
          ))}
        </div>
      </div>

      <div className="feat-container">
        {/* Header */}
        <div className="feat-header">
          <div className="header-tag">
            <span className="tag-icon">✦</span>
            <span className="tag-label">Key Features</span>
          </div>
          
          <h2 className="feat-heading">
            <span className="heading-primary">Why Choose</span>
            <span className="heading-accent">Alenco Hardware</span>
          </h2>
          
          <p className="feat-intro">{subtitle}</p>

          {/* Decorative Elements */}
          <div className="header-decor">
            <div className="decor-ring"></div>
            <div className="decor-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>

        {/* Features Bento Grid */}
        <div className="feat-grid">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`feat-box ${activeFeature === feature.id ? 'is-highlighted' : ''}`}
              style={{ '--box-index': index } as React.CSSProperties}
              onMouseEnter={() => setActiveFeature(feature.id)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              {/* Background Gradient */}
              <div className="box-gradient"></div>

              {/* Icon Container */}
              <div className="box-icon-wrapper">
                <div className="icon-frame">
                  <div className="frame-inner"></div>
                  <div className="frame-glow"></div>
                  <span className="icon-symbol">{feature.icon}</span>
                </div>
                
                {/* Feature Number */}
                <div className="feature-num">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Content */}
              <div className="box-content">
                <h3 className="box-heading">{feature.title}</h3>
                <p className="box-text">{feature.description}</p>
                
                {/* Link */}
               
              </div>

              {/* Decorative Corner */}
              <div className="box-corner"></div>

              {/* Shine Effect */}
              <div className="box-shine"></div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default FeaturesSection;