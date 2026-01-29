'use client'

import Image from 'next/image'
import './About.scss'
import ExperienceSection from '@/components/ExperienceSection'

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="overlay">
          <h1>About Us</h1>
          <p>Home / About Us</p>
        </div>
      </section>

      {/* Welcome */}
      <section className="about-welcome container">
        <div className="image">
          <Image
            src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1600&auto=format&fit=crop"
            alt="Welcome"
            width={600}
            height={400}
          />
        </div>
        <div className="content">
          <h2>Welcome to Alenco</h2>
          <p>
            With over 15 years of experience, Alenco Alu LLP
            is an India-based company specializing in the
            design and manufacture of premium window and
            door hardware. Our strong commitment to quality
            and continuous improvement has earned us ISO
            9001:2015 certification and, most importantly, the
            trust and satisfaction of our customers.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="about-company container">
        <div className="content">
          <h2>About Us</h2>
          <p>
            Our primary goal is to understand your needs and
            deliver products that meet the highest standards
            of performance and reliability. Supported by a
            flexible and experienced management team,
            Alenco's tightly integrated operations allow us to
            anticipate and respond quickly to customer
            requirements.
            At Alenco, we take pride in creating innovative,
            high-quality hardware solutions that enhance the
            performance and aesthetics of windows and
            doors.
          </p>
        </div>
        <div className="image">
          <Image
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1600&auto=format&fit=crop"
            alt="About Company"
            width={600}
            height={400}
          />
        </div>
      </section>

      {/* Infrastructure */}
      <section className="about-infra">
        <div className="container">
          <h2>Industries Served</h2>
          <div className="infra-grid">
            <div className="image">
              <Image
                src="https://images.unsplash.com/photo-1565610222536-ef125c59da2e?q=80&w=1600&auto=format&fit=crop"
                alt="Industries"
                width={600}
                height={400}
              />
            </div>
            <ul>
              <li>✔ Doors & Windows</li>
              <li>✔ Architectural Hardware and Assemblies Solutions</li>
              <li>✔ Aluminium Extrusion</li>
              <li>✔ Machined Components</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="about-vision-mission container">
        <div className="card">
          <h3>Vision Statement</h3>
          <p>
            To become a global leader in architectural hardware by delivering
            innovative, sustainable, and reliable solutions.
          </p>
        </div>
        <div className="card">
          <h3>Mission Statement</h3>
          <p>
            To consistently provide high-quality products while building strong
            relationships with customers through trust and performance.
          </p>
        </div>
      </section>

      {/* Experience */}
      <ExperienceSection/>

        <div style={{paddingBottom:"80px"}}></div>
      {/* Certifications */}
      {/* <section className="about-certifications container">
        <Image src="/images/cert/1.png" alt="Cert" width={120} height={80} />
        <Image src="/images/cert/2.png" alt="Cert" width={120} height={80} />
        <Image src="/images/cert/3.png" alt="Cert" width={120} height={80} />
        <Image src="/images/cert/4.png" alt="Cert" width={120} height={80} />
      </section> */}
    </main>
  )
}
