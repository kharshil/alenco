import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getCategoryBySlug, getSubcategoriesByCategory } from '@/lib/payload'
import type { Media, Subcategory } from '@/payload-types'
import Breadcrumb from '@/components/Breadcrumb'
import '../products.scss'

interface PageProps {
  params: Promise<{ categorySlug: string }>
}

function getImageUrl(media: Media | string | null | undefined): string {
  if (!media) return ''
  if (typeof media === 'string') return media
  return media.url || ''
}

export default async function CategoryPage({ params }: PageProps) {
  const { categorySlug } = await params
  const category = await getCategoryBySlug(categorySlug)

  if (!category) {
    notFound()
  }

  const subcategories = await getSubcategoriesByCategory(category.id)
  const categoryImage = getImageUrl(category.bannerImage as Media) || getImageUrl(category.image as Media)

  return (
    <div className="category-page">
      {/* Hero Banner */}
      <section className="product-hero">
        <div className="product-hero__content">
          <span className="product-hero__badge">Products</span>
          <h1 className="product-hero__title">{category.name}</h1>
          
        </div>
      </section>

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Products', href: '/#hardware-products' },
          { label: category.name }
        ]}
      />

      {/* Category Content */}
      {categoryImage && (
        <section className="category-content">
          <div className="category-content__container">
            <div className="category-content__header">
              <div className="category-content__image">
                <Image
                  src={categoryImage}
                  alt={category.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="category-content__info">
                <h2 className="category-content__title">{category.name}</h2>
                {category.shortDescription && (
                  <p className="category-content__text">{category.shortDescription}</p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Subcategories Grid */}
      <section className="products-grid">
        <div className="products-grid__container">
          <div className="products-grid__header">
            <h2 className="products-grid__title">Product Series</h2>
            <span className="products-grid__count">{subcategories.length} series</span>
          </div>

          {subcategories.length > 0 ? (
            <div className="products-grid__grid">
              {subcategories.map((subcategory: Subcategory) => {
                const imageUrl = getImageUrl(subcategory.image as Media)
                return (
                  <Link
                    href={`/products/${categorySlug}/${subcategory.slug}`}
                    key={subcategory.id}
                    className="product-card"
                  >
                    <div className="product-card__image">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={subcategory.name}
                          fill
                          style={{ objectFit: 'cover' }}
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)' }} />
                      )}
                    </div>
                    <div className="product-card__content">
                      <h3 className="product-card__name">{subcategory.name}</h3>
                      {subcategory.shortDescription && (
                        <p className="product-card__description">{subcategory.shortDescription}</p>
                      )}
                    </div>
                    <div className="product-card__footer">
                      <span className="product-card__link">
                        View Products
                        <svg className="product-card__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-state__icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="empty-state__title">No products yet</h3>
              <p className="empty-state__text">Check back soon for new products in this category.</p>
              <Link href="/" className="empty-state__link">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13 8H3M3 8L8 3M3 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export async function generateMetadata({ params }: PageProps) {
  const { categorySlug } = await params
  const category = await getCategoryBySlug(categorySlug)

  if (!category) {
    return { title: 'Category Not Found' }
  }

  return {
    title: category.seo?.metaTitle || `${category.name} | Alenco`,
    description: category.seo?.metaDescription || category.shortDescription || `Explore ${category.name} products from Alenco`,
    keywords: category.seo?.metaKeywords,
  }
}
