// components/ProjectsSection/ProjectsSection.tsx
"use client";
import React, { useState } from 'react';
import './ProjectsSection.scss';

interface Project {
  id: number;
  title: string;
  location: string;
  image: string;
  category: string;
}

interface ProjectsSectionProps {
  title?: string;
  projects?: Project[];
  buttonText?: string;
  buttonLink?: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  title = "Our Projects",
  buttonText = "MORE PROJECTS",
  buttonLink = "#",
  projects = [
    {
      id: 1,
      title: "9 Square Ahmedabad",
      location: "Ahmedabad",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
      category: "Commercial"
    },
    {
      id: 2,
      title: "9-Square Rajkot",
      location: "Rajkot",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
      category: "Residential"
    },
    {
      id: 3,
      title: "Ahuja Mumbai",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80",
      category: "High-rise"
    },
    {
      id: 4,
      title: "Emerald Club Rajkot",
      location: "Rajkot",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
      category: "Resort"
    },
    {
      id: 5,
      title: "Ganesh Glory Ahmedabad",
      location: "Ahmedabad",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&q=80",
      category: "Commercial"
    },
    {
      id: 6,
      title: "Halcyon Ahmedabad",
      location: "Ahmedabad",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
      category: "Residential"
    }
  ]
}) => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section className="projects-section">
      {/* Background Elements */}
      <div className="projects-bg" aria-hidden="true">
        <div className="bg-pattern"></div>
        <div className="bg-shape bg-shape--1"></div>
        <div className="bg-shape bg-shape--2"></div>
        <div className="bg-gradient"></div>
      </div>

      <div className="projects-container">
        {/* Header */}
        <div className="projects-header">
          <div className="header-content">
            <span className="header-badge">
              <span className="badge-icon">🏗️</span>
              <span className="badge-text">Portfolio</span>
            </span>
            <h2 className="projects-title">
              <span className="title-main">{title}</span>
              <span className="title-accent">We've Built</span>
            </h2>
            <p className="projects-subtitle">
              Showcasing excellence in architectural hardware installations across major cities
            </p>
          </div>
          
          {/* Stats */}
          {/* <div className="projects-stats">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Completed</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Cities</div>
            </div>
          </div> */}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${activeProject === project.id ? 'is-active' : ''}`}
              style={{ '--card-index': index } as React.CSSProperties}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {/* Image Container */}
              <div className="project-visual">
                <div className="visual-frame">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="image-overlay"></div>
                </div>

                {/* Category Badge */}
                <div className="category-badge">
                  <span className="category-dot"></span>
                  <span className="category-text">{project.category}</span>
                </div>

                {/* Hover Content */}
                {/* <div className="hover-content">
                  <button className="view-btn" aria-label={`View ${project.title}`}>
                    <svg className="btn-icon" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="btn-text">View Project</span>
                  </button>
                </div> */}

                {/* Number Badge */}
                <div className="number-badge">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Info Section */}
              <div className="project-info">
                <h3 className="project-name">{project.title}</h3>
                <div className="project-location">
                  <svg className="location-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M12 21s-8-4.5-8-11.8A8 8 0 0 1 12 1a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span className="location-text">{project.location}</span>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="card-corner"></div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="projects-footer">
          <a href={buttonLink} className="load-more-btn">
            <span className="btn-content">
              <span className="btn-label">{buttonText}</span>
              <svg className="btn-arrow" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="btn-glow"></span>
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;