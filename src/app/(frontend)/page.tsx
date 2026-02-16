import React from 'react'
import HeroSlider from '@/components/HeroSlider'
import HardwareProductsSection from '@/components/HardwareProductsSection'
import WhyChooseSection from '@/components/WhyChooseSection'
import ExperienceSection from '@/components/ExperienceSection'
import HowWeWorkSection from '@/components/HowWeWorkSection'
import './styles.css'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import FeaturesSection from '@/components/FeaturesSection'
import ProjectsSection from '@/components/ProjectsSection'
import ClientsSection from '@/components/ClientsSection'

// Force dynamic rendering - always fetch fresh category data from database
export const dynamic = 'force-dynamic'

export default async function HomePage() {
  return (
    <div className="front-page">
      <HeroSlider />
      <HardwareProductsSection />
      <WhyChooseSection />
      <ExperienceSection />
      <HowWeWorkSection />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <ProjectsSection />
      <ClientsSection />
    </div>
  )
}
