import Link from 'next/link'
import Image from 'next/image'
import { getAllCategories } from '@/lib/payload'
import type { Category, Media } from '@/payload-types'
import './HardwareProductsSection.scss'

// Fallback data when no categories exist in CMS
const fallbackProducts = [
  {
    title: 'Aluminium Window & Door Hardware',
    slug: 'aluminium-window-door-hardware',
    description: 'Premium quality sliding systems and accessories',
    imageSrc:
      'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1',
  },
  {
    title: 'Aluminium Sliding Folding System',
    slug: 'aluminium-sliding-folding-system',
    description: 'Flexible solutions for modern architectural spaces',
    imageSrc:
      'https://images.pexels.com/photos/271628/pexels-photo-271628.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1',
  },
  {
    title: 'uPVC Window and Door Hardware',
    slug: 'upvc-window-door-hardware',
    description: 'Durable and weather-resistant fittings',
    imageSrc:
      'https://images.pexels.com/photos/5592263/pexels-photo-5592263.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1',
  },
  {
    title: 'Fabrication Machinery',
    slug: 'fabrication-machinery',
    description: 'Industrial-grade precision equipment',
    imageSrc:
      'https://images.pexels.com/photos/259972/pexels-photo-259972.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1',
  },
]

function getImageUrl(media: Media | string | null | undefined): string {
  if (!media) return ''
  if (typeof media === 'string') return media
  return media.url || ''
}

export default async function HardwareProductsSection() {
  let categories: Category[] = []

  try {
    categories = await getAllCategories()
  } catch (error) {
    console.error('Failed to fetch categories:', error)
  }

  const hasCategories = categories.length > 0

  return (
    <section className="hw-products" aria-label="Our Hardware Products">
      {/* Background decoration */}
      <div className="hw-products__bg-grid" aria-hidden="true"></div>
      
      <div className="hw-products__container">
        {/* Section Header */}
        <div className="hw-products__header">
          <span className="hw-products__label">Product Categories</span>
          <h2 className="hw-products__title">Our Hardware Products</h2>
          <p className="hw-products__description">
            Explore our wide range of premium hardware solutions
          </p>
        </div>

        {/* Products Grid */}
        <div className="hw-products__grid">
          {hasCategories
            ? categories.map((category, index) => {
                const imageUrl = getImageUrl(category.image as Media)
                return (
                  <Link
                    href={`/products/${category.slug}`}
                    key={category.id}
                    className="product-card"
                  >
                    <article className="product-card__wrapper">
                      {/* Image Section with Diagonal Split */}
                      <div className="product-card__visual">
                        {imageUrl ? (
                          <Image
                            className="product-card__image"
                            src={imageUrl}
                            alt={category.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="product-card__placeholder" />
                        )}
                        
                        {/* Diagonal overlay */}
                        <div className="product-card__diagonal-overlay"></div>
                        
                        {/* Gradient overlay */}
                        <div className="product-card__gradient"></div>
                        
                        
                        {/* Animated icon */}
                        <div className="product-card__icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="product-card__content">
                        <div className="product-card__content-inner">
                          <h3 className="product-card__title">{category.name}</h3>
                          
                          <div className="product-card__footer">
                            <span className="product-card__link-text">View Products</span>
                            <svg className="product-card__arrow" viewBox="0 0 24 24" fill="none">
                              <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                        
                        {/* Decorative corner element */}
                        <div className="product-card__corner-decor"></div>
                      </div>
                    </article>
                  </Link>
                )
              })
            : fallbackProducts.map((product, index) => (
                <Link
                  href={`/products/${product.slug}`}
                  key={product.slug}
                  className="product-card"
                >
                  <article className="product-card__wrapper">
                    <div className="product-card__visual">
                      <Image
                        className="product-card__image"
                        src={product.imageSrc}
                        alt={product.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      
                      <div className="product-card__diagonal-overlay"></div>
                      <div className="product-card__gradient"></div>
                      
                      <div className="product-card__index">
                        <span>{String(index + 1).padStart(2, '0')}</span>
                      </div>

                      <div className="product-card__icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>

                    <div className="product-card__content">
                      <div className="product-card__content-inner">
                        <h3 className="product-card__title">{product.title}</h3>
                        <p className="product-card__desc">{product.description}</p>
                        
                        <div className="product-card__footer">
                          <span className="product-card__link-text">View Products</span>
                          <svg className="product-card__arrow" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                      
                      <div className="product-card__corner-decor"></div>
                    </div>
                  </article>
                </Link>
              ))}
        </div>
      </div>
    </section>
  )
}