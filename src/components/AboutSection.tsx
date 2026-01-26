// components/AboutSection/AboutSection.tsx
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
      <div className="container">
        <div className="content">
          <div className="text-content">
            <h2 className="title">{title}</h2>
            
            <div className="description">
              {description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <a href={buttonLink} className="button">
              {buttonText}
              <span className="arrow">→</span>
            </a>
          </div>

          <div className="image-content">
            <div className="image-wrapper">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;