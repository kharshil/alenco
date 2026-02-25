'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Product, ProductGroup, Media } from '@/payload-types'
import ProductModal from '@/components/ProductModal'

interface ProductGroupGridProps {
  group: ProductGroup
  products: Product[]
  allProducts: Product[]
}

function getImageUrl(media: Media | string | null | undefined): string {
  if (!media) return ''
  if (typeof media === 'string') return media
  return media.url || ''
}

function getFirstProductImage(product: Product): string {
  if (product.images && product.images.length > 0) {
    const firstImage = product.images[0]
    if (firstImage.image) {
      return getImageUrl(firstImage.image as Media)
    }
  }
  return ''
}

export default function ProductGroupGrid({ group, products, allProducts }: ProductGroupGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  const handleNavigate = (product: Product) => {
    setSelectedProduct(product)
  }

  if (products.length === 0) return null

  return (
    <>
      <section className="product-groups">
        <div className="product-groups__container">
          <h2 className="product-groups__title">{group.name}</h2>
          <div className="products-grid__grid">
            {products.map((product) => {
              const imageUrl = getFirstProductImage(product)
              return (
                <div
                  key={product.id}
                  className="product-card"
                  onClick={() => handleProductClick(product)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="product-card__image">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={product.name}
                        fill
                        style={{ objectFit: 'contain' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div
                        style={{
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
                        }}
                      />
                    )}
                    {product.featured && <span className="product-card__badge">Featured</span>}
                  </div>
                  <div className="product-card__content">
                    <h3 className="product-card__name">{product.name}</h3>
                    <p className="product-card__code">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M7 7H17M7 12H17M7 17H12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      {product.productCode}
                    </p>
                    {product.shortDescription && (
                      <p className="product-card__description">{product.shortDescription}</p>
                    )}
                  </div>
                  <div className="product-card__footer">
                    <span className="product-card__link">
                      View Details
                      <svg
                        className="product-card__arrow"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M3 8H13M13 8L8 3M13 8L8 13"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        products={allProducts}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onNavigate={handleNavigate}
      />
    </>
  )
}
