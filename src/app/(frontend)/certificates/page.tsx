'use client'

import './certificates.scss'
import Breadcrumb from '@/components/Breadcrumb'
import cartificet from '../../../images/certificate.png'
import Image from 'next/image'

export default function CertificatesPage() {
  return (
    <main className="certificates-page">
      {/* Hero */}
      <section className="distributor-hero">
        <div className="hero-content">
          <h1>Certificates</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Certificates' }]} />


      <div className='container'>
        {/* Certificates Content */}
        <div className="certificates_header">
          <h2 className="certificates_title">Certificates</h2>
        </div>

        <div className="certificates_gallery">
          <div className="certificate_item">
            <Image src={cartificet} alt="Certificate 1" style={{width:"100%"}} />
          </div>
        </div>
      </div>
    </main>
  )
}
