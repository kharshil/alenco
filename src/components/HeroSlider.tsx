'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import './HeroSlider.scss'

type Slide = {
  title: string
  subtitle?: string
  imageSrc: string
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
      },
      {
        title: 'Premium Window Hardware',
        subtitle: 'Durable, smooth, and secure fittings',
        imageSrc:
          'https://images.unsplash.com/photo-1582582621959-48d27397dc76?auto=format&fit=crop&w=2400&q=80',
      },
      {
        title: 'Sliding Folding Systems',
        subtitle: 'Flexible solutions for modern spaces',
        imageSrc:
          'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=2400&q=80',
      },
      {
        title: 'Fabrication Machinery',
        subtitle: 'Reliable tools for consistent output',
        imageSrc:
          'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2400&q=80',
      },
      {
        title: 'uPVC Hardware Range',
        subtitle: 'Built for performance and longevity',
        imageSrc:
          'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=2400&q=80',
      },
    ],
    [],
  )

  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const resumeTimer = useRef<number | null>(null)

  const goTo = (index: number) => {
    const next = ((index % slides.length) + slides.length) % slides.length
    setActive(next)
  }

  const temporarilyPause = () => {
    setPaused(true)
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current)
    resumeTimer.current = window.setTimeout(() => setPaused(false), AUTOPLAY_MS)
  }

  useEffect(() => {
    if (paused) return
    const id = window.setInterval(() => {
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
        {slides.map((slide, idx) => (
          <div
            key={slide.title}
            className={`hero-slider__slide ${idx === active ? 'is-active' : ''}`}
            aria-hidden={idx !== active}
          >
            {/* Use <img> to avoid Next Image remote domain config for now */}
            <img className="hero-slider__image" src={slide.imageSrc} alt={slide.title} />

            <div className="hero-slider__overlay" aria-hidden="true" />

            <div className="hero-slider__content">
              <h2 className="hero-slider__title">{slide.title}</h2>
              {slide.subtitle ? (
                <p className="hero-slider__subtitle">{slide.subtitle}</p>
              ) : null}
            </div>
          </div>
        ))}

        <div className="hero-slider__dots" role="tablist" aria-label="Slider navigation">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`hero-slider__dot ${idx === active ? 'is-active' : ''}`}
              aria-label={`Go to slide ${idx + 1}`}
              aria-selected={idx === active}
              role="tab"
              onClick={() => {
                goTo(idx)
                temporarilyPause()
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

