'use client'

import './Services.scss'
import ServicesSection from '@/components/ServicesSection'
import Breadcrumb from '@/components/Breadcrumb'

export default function ServicesPage() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="distributor-hero">
        <div className="hero-content">
          <h1>Services</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Services' }]} />

      <div className="servicesblock"></div>
      <ServicesSection/>
    </main>
  )
}
