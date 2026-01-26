// components/FeaturesSection/FeaturesSection.tsx
import React from 'react';
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
  title = "Features of Hivik Hardware Products",
  subtitle = "If you want to grab any of our door and window hardware & accessories, we welcome you! Book a consultation with our experts and share your requirements. HIVIK hardware offers you new and creative patterns as it has a wide reach for entryway hardware and embellishments.",
  features = [
    {
      id: 1,
      title: "Cost-effective",
      description: "Our accessories are less expensive compared to other companies, and they bring a large audience to our business.",
      icon: "💰",
      color: "#4CAF50"
    },
    {
      id: 2,
      title: "Innovative Design",
      description: "Our Company is looking forward to delivering innovative design. We are in charge of releasing several innovative hardware in the business.",
      icon: "💡",
      color: "#2196F3"
    },
    {
      id: 3,
      title: "Customization",
      description: "Our expert manufacturers and the designing team will customize the door and window hardware & accessories as per your need.",
      icon: "🎨",
      color: "#FF9800"
    },
    {
      id: 4,
      title: "High Quality",
      description: "All the hardware available in our store has gone through stringent quality control checks to ensure we have the best.",
      icon: "⭐",
      color: "#9C27B0"
    },
    {
      id: 5,
      title: "Warranty",
      description: "The Company offers warranties on every product to build trust.",
      icon: "🛡️",
      color: "#F44336"
    },
    {
      id: 6,
      title: "Wide Range of Availability",
      description: "On this platform, you can grab the largest Range of hardware & accessories in a reasonable amount.",
      icon: "📦",
      color: "#00BCD4"
    }
  ]
}) => {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">{title}</h2>
          <p className="features-subtitle">{subtitle}</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className="feature-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="feature-icon-wrapper">
                <div 
                  className="feature-icon-bg"
                  style={{ background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}40)` }}
                >
                  <span className="feature-icon">{feature.icon}</span>
                </div>
                <div 
                  className="feature-glow"
                  style={{ background: feature.color }}
                ></div>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-border-bottom" style={{ background: feature.color }}></div>
            </div>
          ))}
        </div>
      </div>

      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
};

export default FeaturesSection;