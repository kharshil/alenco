// components/Footer/Footer.tsx
'use client';
import React from 'react';
import './Footer.scss';

interface FooterProps {
  companyName?: string;
  tagline?: string;
  email?: string;
  phone?: string[];
  address?: string[];
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    pinterest?: string;
    linkedin?: string;
  };
}

const Footer: React.FC<FooterProps> = ({
  companyName = "Pooja Sales",
  tagline = "SINCE 1982",
  email = "info@poojasales.in",
  phone = [
    "+91 28123 88515",
    "+91 99987 40409",
    "+91 99987 40402",
    "+91 99987 40403"
  ],
  address = [
    "5-BHUMI INDUSTRIAL ESTATE,",
    "OPP. ASHOK LEYLAND SHOWROOM,",
    "RAJKOT-GONDAL HIGHWAY NH-27,",
    "KOTHARIYA, RAJKOT-360 004, (GUJ.)",
    "INDIA"
  ],
  socialLinks = {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    pinterest: "#",
    linkedin: "#"
  }
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Grid Layout */}
          <div className="footer-grid">
            {/* Column 1: Logo & About */}
            <div className="footer-col footer-col--brand">
              <div className="brand-wrapper">
                {/* Logo */}
                <div className="footer-logo">
                  <div className="logo-mark">
                    <svg viewBox="0 0 48 48" fill="none">
                      <path d="M24 4L44 14V34L24 44L4 34V14L24 4Z" fill="currentColor" opacity="0.2"/>
                      <path d="M24 4L44 14V34L24 44L4 34V14L24 4Z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="24" cy="24" r="8" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="logo-text">
                    <span className="logo-tagline">{tagline}</span>
                    <span className="logo-name">{companyName}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="footer-desc">
                  Leading manufacturer and supplier of premium quality aluminium and uPVC window & door hardware accessories.
                </p>

                {/* Social Links */}
                <div className="social-links">
                  {socialLinks.facebook && (
                    <a href={socialLinks.facebook} className="social-link" aria-label="Facebook">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  )}
                  {socialLinks.twitter && (
                    <a href={socialLinks.twitter} className="social-link" aria-label="Twitter">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  )}
                  {socialLinks.instagram && (
                    <a href={socialLinks.instagram} className="social-link" aria-label="Instagram">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  )}
                  {socialLinks.linkedin && (
                    <a href={socialLinks.linkedin} className="social-link" aria-label="LinkedIn">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Column 2: Address */}
            <div className="footer-col">
              <h3 className="footer-heading">
                <span className="heading-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 21s-8-4.5-8-11.8A8 8 0 0112 1a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="9" r="2.5" fill="currentColor"/>
                  </svg>
                </span>
                Our Location
              </h3>
              <address className="footer-address">
                {address.map((line, index) => (
                  <span key={index} className="address-line">{line}</span>
                ))}
              </address>
            </div>

            {/* Column 3: Contact */}
            <div className="footer-col">
              <h3 className="footer-heading">
                <span className="heading-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                Get In Touch
              </h3>
              <div className="contact-info">
                <a href={`mailto:${email}`} className="contact-item contact-item--email">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>{email}</span>
                </a>
                {phone.map((number, index) => (
                  <a key={index} href={`tel:${number.replace(/\s/g, '')}`} className="contact-item contact-item--phone">
                    <svg className="contact-icon" viewBox="0 0 24 24" fill="none">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span>{number}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 4: Newsletter */}
            <div className="footer-col">
              <h3 className="footer-heading">
                <span className="heading-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                Stay Updated
              </h3>
              <p className="newsletter-text">
                Subscribe to get updates on new products and exclusive offers.
              </p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <input 
                    type="email" 
                    className="form-input" 
                    placeholder="Your email address"
                    required
                  />
                  <button type="submit" className="form-submit">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="bottom-content">
            <p className="copyright">
              Copyright {currentYear} All Rights Reserved by {companyName} Hardware
            </p>
            <div className="credits">
              Powered by <a href="https://skywebtech.com" target="_blank" rel="noopener noreferrer" className="credits-link">SkyWebTech</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;