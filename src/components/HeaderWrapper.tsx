import { getCategoriesWithSubcategories } from '@/lib/payload'
import type { Category, Subcategory } from '@/payload-types'
import Header from './Header'

interface CategoryWithSubs extends Category {
  subcategories?: Subcategory[]
}

export default async function HeaderWrapper() {
  let categories: CategoryWithSubs[] = []

  try {
    categories = await getCategoriesWithSubcategories()
  } catch (error) {
    console.error('Failed to fetch categories for navigation:', error)
  }

  return <Header categories={categories} />
}
