'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import './HeroSlider.scss'

type Slide = {
  title: string
  subtitle?: string
  imageSrc: string
  accent: string
}

const AUTOPLAY_MS = 5000

export default function HeroSlider() {
  const slides = useMemo<Slide[]>(
    () => [
      {
        title: 'aluminium Window Accessories',
        subtitle: '35MM, 37MM EURO SERIES SLIDING',
        imageSrc:
          'https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=2400&q=80',
        accent: '#27ae60',
      },
      {
        title: 'Premium Window Hardware',
        subtitle: 'Durable, smooth, and secure fittings',
        imageSrc:
          'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=80',
        accent: '#27ae60',
      },
      {
        title: 'Sliding Folding Systems',
        subtitle: 'Flexible solutions for modern spaces',
        imageSrc:
          'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=2400&q=80',
        accent: '#27ae60',
      },
      {
        title: 'Fabrication Machinery',
        subtitle: 'Reliable tools for consistent output',
        imageSrc:
          'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2400&q=80',
        accent: '#27ae60',
      },
      {
        title: 'uPVC Hardware Range',
        subtitle: 'Built for performance and longevity',
        imageSrc:
          'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=2400&q=80',
        accent: '#27ae60',
      },
    ],
    [],
  )

  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const resumeTimer = useRef<number | null>(null)

  const goTo = (index: number) => {
    const next = ((index % slides.length) + slides.length) % slides.length
    setDirection(next > active ? 'next' : 'prev')
    setActive(next)
  }

  const temporarilyPause = () => {
    setPaused(true)
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current)
    resumeTimer.current = window.setTimeout(() => setPaused(false), AUTOPLAY_MS)
  }

  const handlePrev = () => {
    setDirection('prev')
    setActive((prev) => (prev - 1 + slides.length) % slides.length)
    temporarilyPause()
  }

  const handleNext = () => {
    setDirection('next')
    setActive((prev) => (prev + 1) % slides.length)
    temporarilyPause()
  }

  useEffect(() => {
    if (paused) return
    const id = window.setInterval(() => {
      setDirection('next')
      setActive((prev) => (prev + 1) % slides.length)
    }, AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [paused, slides.length])

  useEffect(() => {
    return () => {
      if (resumeTimer.current) window.clearTimeout(resumeTimer.current)
    }
  }, [])

  return (
    <section
      className="hero-slider"
      aria-label="Homepage hero slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="hero-slider__viewport">
        {/* Animated background shapes */}
        <div className="hero-slider__bg-shapes" aria-hidden="true">
          <div className="shape shape--1" />
          <div className="shape shape--2" />
          <div className="shape shape--3" />
        </div>

        {slides.map((slide, idx) => (
          <div
            key={slide.title}
            className={`hero-slider__slide ${idx === active ? 'is-active' : ''} ${
              idx === active ? `slide-${direction}` : ''
            }`}
            aria-hidden={idx !== active}
            style={{ '--accent-color': slide.accent } as React.CSSProperties}
          >
            <img className="hero-slider__image" src={slide.imageSrc} alt={slide.title} />

            {/* Diagonal split overlay */}
            <div className="hero-slider__overlay-wrapper">
              <div className="hero-slider__overlay hero-slider__overlay--primary" />
              <div className="hero-slider__overlay hero-slider__overlay--secondary" />
              <div className="hero-slider__overlay-glow" />
            </div>

            <div className="hero-slider__content">
              <div className="hero-slider__content-wrapper">
                <div className="hero-slider__badge">
                  <span className="badge-line" />
                  <span className="badge-text">Premium Quality</span>
                </div>
                <h2 className="hero-slider__title">
                  <span className="title-word">{slide.title.split(' ')[0]}</span>
                  {slide.title.split(' ').slice(1).map((word, i) => (
                    <span key={i} className="title-word">
                      {' '}
                      {word}
                    </span>
                  ))}
                </h2>
                {slide.subtitle && (
                  <p className="hero-slider__subtitle">
                    <span className="subtitle-icon">▸</span>
                    {slide.subtitle}
                  </p>
                )}
                {/* <div className="hero-slider__cta">
                  <button className="cta-button cta-button--primary">Explore Range</button>
                  <button className="cta-button cta-button--secondary">Learn More</button>
                </div> */}
              </div>
            </div>

            {/* Slide number indicator */}
            <div className="hero-slider__slide-number">
              <span className="number-current">{String(idx + 1).padStart(2, '0')}</span>
              <span className="number-separator">/</span>
              <span className="number-total">{String(slides.length).padStart(2, '0')}</span>
            </div>
          </div>
        ))}

        {/* Navigation controls */}
        <div className="hero-slider__controls">
          <button
            type="button"
            className="control-button control-button--prev"
            aria-label="Previous slide"
            onClick={handlePrev}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            className="control-button control-button--next"
            aria-label="Next slide"
            onClick={handleNext}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Progress dots with mini previews */}
        <div className="hero-slider__navigation" role="tablist" aria-label="Slider navigation">
          {slides.map((slide, idx) => (
            <button
              key={idx}
              type="button"
              className={`nav-dot ${idx === active ? 'is-active' : ''}`}
              aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
              aria-selected={idx === active}
              role="tab"
              onClick={() => {
                goTo(idx)
                temporarilyPause()
              }}
              style={{ '--dot-accent': slide.accent } as React.CSSProperties}
            >
              <span className="nav-dot__inner" />
              {idx === active && (
                <span className="nav-dot__progress">
                  <span className="progress-fill" />
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
