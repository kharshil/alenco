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
    imageSrc:
      'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1',
  },
  {
    title: 'Aluminium Sliding Folding System',
    slug: 'aluminium-sliding-folding-system',
    imageSrc:
      'https://images.pexels.com/photos/271628/pexels-photo-271628.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1',
  },
  {
    title: 'uPVC Window and Door Hardware',
    slug: 'upvc-window-door-hardware',
    imageSrc:
      'https://images.pexels.com/photos/5592263/pexels-photo-5592263.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1',
  },
  {
    title: 'Fabrication Machinery',
    slug: 'fabrication-machinery',
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
    <section className="hardware-products" aria-label="Our Hardware Products">
      <div className="hardware-products__container">
        <h2 className="hardware-products__title">Our Hardware Products</h2>
        <p className="hardware-products__subtitle">
          Explore our wide range of premium hardware solutions
        </p>

        <div className="hardware-products__grid">
          {hasCategories
            ? categories.map((category) => {
                const imageUrl = getImageUrl(category.image as Media)
                return (
                  <Link
                    href={`/products/${category.slug}`}
                    key={category.id}
                    className="hardware-products__card"
                  >
                    <article className="hardware-products__article">
                      <div className="hardware-products__media">
                        {imageUrl ? (
                          <Image
                            className="hardware-products__image"
                            src={imageUrl}
                            alt={category.name}
                            fill
                            sizes="(max-width: 900px) 100vw, 50vw"
                          />
                        ) : (
                          <div className="hardware-products__placeholder" />
                        )}
                        <div className="hardware-products__overlay" />
                        <div className="hardware-products__ribbon" aria-hidden="true">
                          <span className="hardware-products__ribbonText">{category.name}</span>
                        </div>
                        <div className="hardware-products__arrow">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 12H19M19 12L12 5M19 12L12 19"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </article>
                  </Link>
                )
              })
            : fallbackProducts.map((product) => (
                <Link
                  href={`/products/${product.slug}`}
                  key={product.slug}
                  className="hardware-products__card"
                >
                  <article className="hardware-products__article">
                    <div className="hardware-products__media">
                      <Image
                        className="hardware-products__image"
                        src={product.imageSrc}
                        alt={product.title}
                        fill
                        sizes="(max-width: 900px) 100vw, 50vw"
                      />
                      <div className="hardware-products__overlay" />
                      <div className="hardware-products__ribbon" aria-hidden="true">
                        <span className="hardware-products__ribbonText">{product.title}</span>
                      </div>
                      <div className="hardware-products__arrow">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
        </div>
      </div>
    </section>
  )
}
