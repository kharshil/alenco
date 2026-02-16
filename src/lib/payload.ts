import 'server-only' 
import { getPayload } from 'payload'
import config from '@payload-config'

export async function getPayloadClient() {
  return await getPayload({ config })
}

export async function getCategories() {
  const payload = await getPayloadClient()
  const categories = await payload.find({
    collection: 'categories',
    sort: 'order',
    where: {
      featured: {
        equals: true,
      },
    },
    depth: 1,
  })
  return categories.docs
}

export async function getAllCategories() {
  const payload = await getPayloadClient()
  const categories = await payload.find({
    collection: 'categories',
    sort: 'order',
    depth: 1,
    limit: 10000, // Very high limit to fetch all categories
  })
  console.log(`[getAllCategories] Fetched ${categories.docs.length} categories`)
  return categories.docs
}

export async function getCategoryBySlug(slug: string) {
  const payload = await getPayloadClient()
  const categories = await payload.find({
    collection: 'categories',
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 2,
  })
  return categories.docs[0] || null
}

export async function getSubcategoriesByCategory(categoryId: string | number) {
  const payload = await getPayloadClient()
  const subcategories = await payload.find({
    collection: 'subcategories',
    where: {
      category: {
        equals: categoryId,
      },
    },
    sort: 'order',
    depth: 2,
    limit: 10000, // Very high limit to fetch all subcategories
  })
  return subcategories.docs
}

export async function getSubcategoryBySlug(slug: string) {
  const payload = await getPayloadClient()
  
  // Decode first
  const decodedSlug = decodeURIComponent(slug)
  
  const subcategories = await payload.find({
    collection: 'subcategories',
    where: {
      slug: {
        equals: decodedSlug,
      },
    },
    depth: 2,
  })
  
  
  return subcategories.docs[0] || null
}

export async function getProductsBySubcategory(subcategoryId: string | number) {
  const payload = await getPayloadClient()
  const products = await payload.find({
    collection: 'products',
    where: {
      subcategory: {
        equals: subcategoryId,
      },
    },
    sort: 'order',
    depth: 2,
    limit: 10000, // Very high limit to fetch all products
  })
  return products.docs
}

export async function getProductsByCategory(categoryId: string | number) {
  const payload = await getPayloadClient()
  const products = await payload.find({
    collection: 'products',
    where: {
      category: {
        equals: categoryId,
      },
    },
    sort: 'order',
    depth: 2,
    limit: 10000, // Very high limit to fetch all products
  })
  return products.docs
}

export async function getProductBySlug(slug: string) {
  const payload = await getPayloadClient()
  const products = await payload.find({
    collection: 'products',
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 3,
  })
  return products.docs[0] || null
}

export async function getProductGroupsBySubcategory(subcategoryId: string | number) {
  const payload = await getPayloadClient()
  const groups = await payload.find({
    collection: 'product-groups',
    where: {
      subcategory: {
        equals: subcategoryId,
      },
    },
    sort: 'order',
    depth: 1,
    limit: 10000, // Very high limit to fetch all product groups
  })
  return groups.docs
}

export async function getFeaturedProducts() {
  const payload = await getPayloadClient()
  const products = await payload.find({
    collection: 'products',
    where: {
      featured: {
        equals: true,
      },
      status: {
        equals: 'active',
      },
    },
    sort: 'order',
    depth: 2,
    limit: 6,
  })
  return products.docs
}

export async function getCategoriesWithSubcategories() {
  const payload = await getPayloadClient()
  const categories = await payload.find({
    collection: 'categories',
    sort: 'order',
    depth: 0,
    limit: 10000, // Very high limit to fetch all categories
  })

  console.log(`[getCategoriesWithSubcategories] Fetched ${categories.docs.length} categories`)

  // For each category, fetch its subcategories
  const categoriesWithSubs = await Promise.all(
    categories.docs.map(async (category) => {
      const subcategories = await getSubcategoriesByCategory(category.id)
      return {
        ...category,
        subcategories,
      }
    })
  )

  return categoriesWithSubs
}
