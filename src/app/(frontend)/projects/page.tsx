'use client'

import Image from 'next/image'
import './Project.scss'
import ProjectsSection from '@/components/ProjectsSection'

export default function ProjectPage() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="overlay">
          <h1>Projects</h1>
          <p>Home / Projects</p>
        </div>
      </section>

      <ProjectsSection/>
    </main>
  )
}
