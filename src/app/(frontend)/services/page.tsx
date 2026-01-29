'use client'

import Image from 'next/image'
import './Services.scss'
import ServicesSection from '@/components/ServicesSection'

export default function ProjectPage() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="overlay">
          <h1>Services</h1>
          <p>Home / Services</p>
        </div>
      </section>
      <div className="servicesblock"></div>
      <ServicesSection/>
    </main>
  )
}
