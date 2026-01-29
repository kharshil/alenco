'use client'

import './Project.scss'
import ProjectsSection from '@/components/ProjectsSection'
import Breadcrumb from '@/components/Breadcrumb'

export default function ProjectsPage() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="overlay">
          <h1>Projects</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Projects' }]} />

      <ProjectsSection/>
    </main>
  )
}
