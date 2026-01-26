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
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">{title}</h2>
          <div className="title-underline">
            <span className="underline-dot"></span>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className={`project-overlay ${hoveredId === project.id ? 'active' : ''}`}>
                  <div className="overlay-content">
                    <span className="project-category">{project.category}</span>
                    <button className="view-project-btn">
                      View Project
                      <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </div>
                <div className="project-corner-accent"></div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-location">
                  <span className="location-icon">📍</span>
                  <span>{project.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <a href={buttonLink} className="more-projects-btn">
            {buttonText}
            <span className="btn-icon">
              <span className="arrow-1">→</span>
              <span className="arrow-2">→</span>
            </span>
          </a>
        </div>
      </div>

      <div className="background-decoration">
        <div className="deco-circle deco-1"></div>
        <div className="deco-circle deco-2"></div>
      </div>
    </section>
  );
};

export default ProjectsSection;