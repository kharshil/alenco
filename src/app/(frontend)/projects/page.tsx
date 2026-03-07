'use client'

import './Project.scss'
import ProjectsSection from '@/components/ProjectsSection'
import Breadcrumb from '@/components/Breadcrumb'

export default function ProjectsPage() {
  return (
    <main className="about-page">
      <section className="distributor-hero">
        <div className="hero-content">
          <h1>Projects</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Projects' }]} />

      <ProjectsSection/>
    </main>
  )
}
