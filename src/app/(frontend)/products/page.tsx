import './products.scss'
import Breadcrumb from '@/components/Breadcrumb'
import HardwareProductsSection from '@/components/HardwareProductsSection'

export default function ProductsPage() {
  return (
    <main className="products-page">
      {/* Hero */}
      <section className="distributor-hero">
        <div className="hero-content">
          <h1>Products</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Products' }]} />

      <div className="productsblock"></div>

      {/* This can safely fetch Payload data */}
      <HardwareProductsSection />
    </main>
  )
}