// components/ServicesSection/ServicesSection.tsx
import React from 'react';
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
  title = "Services of Pooja Sales - Window Hardware Accessories Manufacturers in Rajkot",
  subtitle = "The company offers services worldwide. Our brand is just a few steps away from reaching a significant milestone, and if you want to be a part of it, contact us immediately.",
  services = [
    {
      id: 1,
      title: "Technical Assistance",
      description: "The Company offered technical help for HIVIK Hardware products. We provide complete technical information on the products and assembly. We also manage and report any issues are there in the products.",
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
      description: "We provide the best door and window hardware accessories designing support to meet all your needs. Pooja Sales has the best team of qualified designers.",
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
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">{title}</h2>
          <p className="services-subtitle">{subtitle}</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-image-wrapper">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="service-image"
                />
                <div className="service-overlay">
                  <span className="service-icon">{service.icon}</span>
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;