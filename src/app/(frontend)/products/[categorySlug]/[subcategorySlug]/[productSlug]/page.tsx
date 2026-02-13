'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Media, Product, Category, Subcategory } from '@/payload-types'
import Breadcrumb from '@/components/Breadcrumb'
import '../../../products.scss'

interface PageProps {
  params: Promise<{ categorySlug: string; subcategorySlug: string; productSlug: string }>
}

function getImageUrl(media: Media | string | null | undefined): string {
  if (!media) return ''
  if (typeof media === 'string') return media
  return media.url || ''
}

export default function ProductDetailPage({ params }: PageProps) {
  const [product, setProduct] = useState<Product | null>(null)
  const [categorySlug, setCategorySlug] = useState('')
  const [subcategorySlug, setSubcategorySlug] = useState('')
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadProduct() {
      const { categorySlug, subcategorySlug, productSlug } = await params
      setCategorySlug(categorySlug)
      setSubcategorySlug(subcategorySlug)

      try {
        const response = await fetch(`/api/products?where[slug][equals]=${productSlug}&depth=3`)
        const data = await response.json()
        if (data.docs && data.docs.length > 0) {
          setProduct(data.docs[0])
        }
      } catch (error) {
        console.error('Error fetching product:', error)
      } finally {
        setLoading(false)
      }
    }
    loadProduct()
  }, [params])

  if (loading) {
    return (
      <div className="product-detail">
        <div className="product-detail__container">
          <div style={{ textAlign: 'center', padding: '100px 0' }}>
            <div style={{
              width: '48px',
              height: '48px',
              border: '3px solid #e5e7eb',
              borderTopColor: '#4CAF50',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto'
            }} />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="product-detail">
        <div className="product-detail__container">
          <div className="empty-state">
            <div className="empty-state__icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M12 9V11M12 15H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="empty-state__title">Product not found</h3>
            <p className="empty-state__text">The product you&apos;re looking for doesn&apos;t exist.</p>
            <Link
              href={subcategorySlug === '__direct__' ? `/products/${categorySlug}` : `/products/${categorySlug}/${subcategorySlug}`}
              className="empty-state__link"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13 8H3M3 8L8 3M3 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Handle both direct category products and subcategory products
  const isDirectProduct = subcategorySlug === '__direct__'
  const subcategory = !isDirectProduct ? (product.subcategory as Subcategory | undefined) : undefined
  const category = isDirectProduct
    ? (product.category as Category | undefined)
    : (subcategory?.category as Category | undefined)
  const categoryName = category?.name || 'Products'
  const subcategoryName = subcategory?.name || 'Products'

  const images = product.images || []
  const currentImage = images[selectedImageIndex]
  const currentImageUrl = currentImage ? getImageUrl(currentImage.image as Media) : ''

  return (
    <div className="product-detail-page">
      {/* Hero Banner */}
      
      <section className="distributor-hero">
        <div className="hero-content">
          <h1>{product.name}</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <Breadcrumb
        items={
          isDirectProduct
            ? [
                { label: 'Products', href: '/#hardware-products' },
                { label: categoryName, href: `/products/${categorySlug}` },
                { label: product.name }
              ]
            : [
                { label: 'Products', href: '/#hardware-products' },
                { label: categoryName, href: `/products/${categorySlug}` },
                { label: subcategoryName, href: `/products/${categorySlug}/${subcategorySlug}` },
                { label: product.name }
              ]
        }
      />

      {/* Product Detail */}
      <section className="product-detail">
        <div className="product-detail__container">
          <div className="product-detail__layout">
            {/* Image Gallery */}
            <div className="product-detail__gallery">
              <div className="product-detail__main-image">
                {currentImageUrl ? (
                  <Image
                    src={currentImageUrl}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                ) : (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" style={{ color: '#a5d6a7' }}>
                      <path d="M4 16L8.586 11.414C9.367 10.633 10.633 10.633 11.414 11.414L16 16M14 14L15.586 12.414C16.367 11.633 17.633 11.633 18.414 12.414L20 14M14 8H14.01M6 20H18C19.105 20 20 19.105 20 18V6C20 4.895 19.105 4 18 4H6C4.895 4 4 4.895 4 6V18C4 19.105 4.895 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>

              {images.length > 1 && (
                <div className="product-detail__thumbnails">
                  {images.map((img, index) => {
                    const thumbUrl = getImageUrl(img.image as Media)
                    return (
                      <button
                        key={index}
                        className={`product-detail__thumbnail ${index === selectedImageIndex ? 'active' : ''}`}
                        onClick={() => setSelectedImageIndex(index)}
                        type="button"
                      >
                        {thumbUrl ? (
                          <Image
                            src={thumbUrl}
                            alt={`${product.name} - Image ${index + 1}`}
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="80px"
                          />
                        ) : (
                          <div style={{ width: '100%', height: '100%', background: '#f0f0f0' }} />
                        )}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="product-detail__info">
              {product.featured && (
                <span className="product-detail__badge">Featured Product</span>
              )}

              <h1 className="product-detail__name">{product.name}</h1>

              <p className="product-detail__code">
                Product Code:
                <span className="product-detail__code-value">{product.productCode}</span>
              </p>

              {product.shortDescription && (
                <p className="product-detail__description">{product.shortDescription}</p>
              )}

              {/* Technical Specifications */}
              {product.technicalSpecifications && product.technicalSpecifications.length > 0 && (
                <div className="product-specs">
                  <h3 className="product-specs__title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Technical Specifications
                  </h3>
                  <ul className="product-specs__list">
                    {product.technicalSpecifications.map((spec, index) => (
                      <li key={index} className="product-specs__item">
                        {spec.specification}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Detailed Specifications */}
              {product.detailedSpecifications && product.detailedSpecifications.length > 0 && (
                <div className="product-specs">
                  <h3 className="product-specs__title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M9 5H7C5.895 5 5 5.895 5 7V19C5 20.105 5.895 21 7 21H17C18.105 21 19 20.105 19 19V7C19 5.895 18.105 5 17 5H15M9 5C9 6.105 9.895 7 11 7H13C14.105 7 15 6.105 15 5M9 5C9 3.895 9.895 3 11 3H13C14.105 3 15 3.895 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Specifications
                  </h3>
                  <ul className="product-specs__list">
                    {product.detailedSpecifications.map((spec, index) => (
                      <li key={index} className="product-specs__item">
                        <span className="product-specs__key">{spec.key}:</span>
                        {spec.value}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Available Finishes */}
              {product.finishes && product.finishes.length > 0 && (
                <div className="product-specs" style={{ background: '#fff', border: '1px solid #e5e7eb' }}>
                  <h3 className="product-specs__title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M7 21C5.895 21 5 20.105 5 19V5C5 3.895 5.895 3 7 3H17C18.105 3 19 3.895 19 5V19C19 20.105 18.105 21 17 21M7 21H17M7 21V18M17 21V18M7 18H17M7 18V15M17 18V15M7 15H17M7 15V12M17 15V12M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Available Finishes
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
                    {product.finishes.map((finish, index) => (
                      <span
                        key={index}
                        style={{
                          background: '#f0f9f0',
                          border: '1px solid #c8e6c9',
                          padding: '6px 14px',
                          borderRadius: '20px',
                          fontSize: '14px',
                          color: '#388E3C',
                          fontWeight: 500
                        }}
                      >
                        {finish.finish}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Enquiry Button */}
              <div style={{ marginTop: '32px' }}>
                <Link href="/contact" className="enquiry-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C20.105 19 21 18.105 21 17V7C21 5.895 20.105 5 19 5H5C3.895 5 3 5.895 3 7V17C3 18.105 3.895 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Send Enquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <section className="products-grid">
          <div className="products-grid__container">
            <div className="products-grid__header">
              <h2 className="products-grid__title">Related Products</h2>
            </div>
            <div className="products-grid__grid">
              {(product.relatedProducts as Product[]).slice(0, 3).map((related) => {
                const relatedImage = related.images && related.images.length > 0
                  ? getImageUrl(related.images[0].image as Media)
                  : ''

                // Build correct URL based on whether related product is under category or subcategory
                const relatedSubcategory = related.subcategory as Subcategory | undefined
                const relatedCategory = related.category as Category | undefined
                const relatedCategorySlug = relatedCategory?.slug || (relatedSubcategory?.category as Category)?.slug || categorySlug
                const relatedUrl = relatedSubcategory
                  ? `/products/${relatedCategorySlug}/${relatedSubcategory.slug}/${related.slug}`
                  : `/products/${relatedCategorySlug}/__direct__/${related.slug}`

                return (
                  <Link
                    href={relatedUrl}
                    key={related.id}
                    className="product-card"
                  >
                    <div className="product-card__image">
                      {relatedImage ? (
                        <Image
                          src={relatedImage}
                          alt={related.name}
                          fill
                          style={{ objectFit: 'cover' }}
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      ) : (
                        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)' }} />
                      )}
                    </div>
                    <div className="product-card__content">
                      <h3 className="product-card__name">{related.name}</h3>
                      <p className="product-card__code">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path d="M7 7H17M7 12H17M7 17H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        {related.productCode}
                      </p>
                    </div>
                    <div className="product-card__footer">
                      <span className="product-card__link">
                        View Details
                        <svg className="product-card__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
