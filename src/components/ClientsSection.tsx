// components/ClientsSection/ClientsSection.tsx
"use client";

import React, { useState } from 'react';
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
  const [hoveredClient, setHoveredClient] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate clients for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="trust-section">
      

      <div className="trust-container">
        {/* Header */}
        <div className="trust-header">
          <div className="header-label">
            <span className="label-icon">★</span>
            <span className="label-txt">Trusted Partners</span>
          </div>
          
          <h2 className="trust-heading">
            <span className="heading-line">Trusted by</span>
            <span className="heading-highlight">Industry Leaders</span>
          </h2>
          
          <p className="trust-desc">{subtitle}</p>

        </div>

        {/* Infinite Marquee Rows */}
        <div className="trust-marquee">
          {/* Row 1 - Left to Right */}
          <div 
            className="marquee-row marquee-row--ltr"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            <div className="marquee-track">
              {duplicatedClients.map((client, index) => (
                <div 
                  key={`ltr-${client.id}-${index}`}
                  className={`trust-card ${hoveredClient === client.id ? 'is-hovered' : ''}`}
                  onMouseEnter={() => setHoveredClient(client.id)}
                  onMouseLeave={() => setHoveredClient(null)}
                >
                  <div className="card-frame">
                    {/* Logo Container */}
                    <div className="logo-holder">
                      <img 
                        src={client.logo} 
                        alt={client.name}
                        className="logo-img"
                      />
                      <div className="logo-filter"></div>
                    </div>

                    

                    {/* Corner Accent */}
                    <div className="card-accent"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

         
        </div>

      </div>
    </section>
  );
};

export default ClientsSection;