import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  getCategoryBySlug,
  getSubcategoryBySlug,
  getProductsBySubcategory,
  getProductGroupsBySubcategory,
} from '@/lib/payload'
import type { Media, Product, ProductGroup, Category } from '@/payload-types'
import Breadcrumb from '@/components/Breadcrumb'
import ProductsGrid from '@/components/ProductsGrid'
import ProductGroupGrid from '@/components/ProductGroupGrid'
import '../../products.scss'

interface PageProps {
  params: Promise<{ categorySlug: string; subcategorySlug: string }>
}

function getImageUrl(media: Media | string | null | undefined): string {
  if (!media) return ''
  if (typeof media === 'string') return media
  return media.url || ''
}

export default async function SubcategoryPage({ params }: PageProps) {
  const { categorySlug, subcategorySlug } = await params

  const [category, subcategory] = await Promise.all([
    getCategoryBySlug(categorySlug),
    getSubcategoryBySlug(subcategorySlug),
  ])

  if (!category || !subcategory) {
    notFound()
  }

  const [products, productGroups] = await Promise.all([
    getProductsBySubcategory(subcategory.id),
    getProductGroupsBySubcategory(subcategory.id),
  ])

  const subcategoryImage =
    getImageUrl(subcategory.bannerImage as Media) || getImageUrl(subcategory.image as Media)
  const categoryName =
    typeof subcategory.category === 'object'
      ? (subcategory.category as Category).name
      : category.name

  // Group products by their product group
  const groupedProducts =
    productGroups.length > 0
      ? productGroups.map((group: ProductGroup) => ({
          group,
          products: products.filter((p: Product) => {
            const productGroup = p.productGroup
            if (typeof productGroup === 'object' && productGroup !== null) {
              return productGroup.id === group.id
            }
            return productGroup === group.id
          }),
        }))
      : null

  const ungroupedProducts =
    productGroups.length > 0 ? products.filter((p: Product) => !p.productGroup) : products

  return (
    <div className="subcategory-page">
      {/* Hero Banner */}
      <section className="product-hero">
        <div className="product-hero__content">
          <span className="product-hero__badge">{categoryName}</span>
          <h1 className="product-hero__title">{subcategory.name}</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Products', href: '/#hardware-products' },
          { label: categoryName, href: `/products/${categorySlug}` },
          { label: subcategory.name },
        ]}
      />

      {/* Subcategory Content */}
      {subcategoryImage && (
        <section className="category-content">
          <div className="category-content__container">
            <div className="category-content__header">
              <div className="category-content__image">
                <Image
                  src={subcategoryImage}
                  alt={subcategory.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="category-content__info">
                <h2 className="category-content__title">{subcategory.name}</h2>
                {subcategory.shortDescription && (
                  <p className="category-content__text">{subcategory.shortDescription}</p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Grouped Products */}
      {groupedProducts &&
        groupedProducts.map(({ group, products: groupProducts }) =>
          groupProducts.length > 0 ? (
            <ProductGroupGrid
              key={group.id}
              group={group}
              products={groupProducts}
              allProducts={products}
            />
          ) : null
        )}

      {/* Ungrouped Products / All Products */}
      {ungroupedProducts.length > 0 && (
        <ProductsGrid
          products={ungroupedProducts}
          title={groupedProducts ? 'Other Products' : 'Products'}
          showCount={true}
        />
      )}

      {/* Empty State */}
      {products.length === 0 && (
        <section className="products-grid">
          <div className="products-grid__container">
            <div className="empty-state">
              <div className="empty-state__icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="empty-state__title">No products yet</h3>
              <p className="empty-state__text">Check back soon for new products in this series.</p>
              <Link href={`/products/${categorySlug}`} className="empty-state__link">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M13 8H3M3 8L8 3M3 8L8 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back to {categoryName}
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export async function generateMetadata({ params }: PageProps) {
  const { subcategorySlug } = await params
  const subcategory = await getSubcategoryBySlug(subcategorySlug)

  if (!subcategory) {
    return { title: 'Product Series Not Found' }
  }

  return {
    title: subcategory.seo?.metaTitle || `${subcategory.name} | Alenco`,
    description:
      subcategory.seo?.metaDescription ||
      subcategory.shortDescription ||
      `Explore ${subcategory.name} products from Alenco`,
    keywords: subcategory.seo?.metaKeywords,
  }
}
