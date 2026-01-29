/**
 * Product Seed Data for Alenco
 * Run this script with: npx ts-node --esm src/scripts/seed-products.ts
 *
 * This script creates:
 * - Categories
 * - Subcategories
 * - Product Groups
 * - Products
 */

import { getPayloadClient } from '../lib/payload'

interface ProductData {
  name: string
  productCode: string
  shortDescription?: string
  technicalSpecifications?: { specification: string }[]
  detailedSpecifications?: { key: string; value: string }[]
  order: number
}

// Premium Series Corner Cleats (10mm) - Function and specs from images
const premiumCornerCleats10mm: ProductData[] = [
  {
    name: '10X22MM CORNER CLEAT',
    productCode: 'AC1022P',
    shortDescription: 'Premium series corner cleat for 45° corner joints in aluminium frames',
    technicalSpecifications: [
      { specification: 'Corner connector equipped with external Ø10mm buttons' },
      { specification: 'Each button is spring-loaded to ensure fast and secure assembly' },
      { specification: 'Engineered for 45° corner joints in aluminium frames' },
      { specification: 'Delivers secure fitting and consistent performance' },
    ],
    detailedSpecifications: [
      { key: 'H (mm)', value: '10' },
      { key: 'L (mm)', value: '22' },
      { key: 'A (mm)', value: '42.5' },
      { key: 'Button Material', value: 'Steel Sheet Metal' },
      { key: 'Body Material', value: 'Aluminium Extrusion' },
      { key: 'Bolt', value: 'SS304 Button Head M6 x 16mm' },
      { key: 'Springs', value: 'Zinc-plated' },
    ],
    order: 1,
  },
  {
    name: '10X24MM CORNER CLEAT',
    productCode: 'AC1024P',
    shortDescription: 'Premium series corner cleat for 45° corner joints in aluminium frames',
    technicalSpecifications: [
      { specification: 'Corner connector equipped with external Ø10mm buttons' },
      { specification: 'Each button is spring-loaded to ensure fast and secure assembly' },
      { specification: 'Engineered for 45° corner joints in aluminium frames' },
      { specification: 'Delivers secure fitting and consistent performance' },
    ],
    detailedSpecifications: [
      { key: 'H (mm)', value: '10' },
      { key: 'L (mm)', value: '24' },
      { key: 'A (mm)', value: '42.5' },
      { key: 'Button Material', value: 'Steel Sheet Metal' },
      { key: 'Body Material', value: 'Aluminium Extrusion' },
      { key: 'Bolt', value: 'SS304 Button Head M6 x 16mm' },
      { key: 'Springs', value: 'Zinc-plated' },
    ],
    order: 2,
  },
  {
    name: '10X25MM CORNER CLEAT',
    productCode: 'AC1025P',
    shortDescription: 'Premium series corner cleat for 45° corner joints in aluminium frames',
    technicalSpecifications: [
      { specification: 'Corner connector equipped with external Ø10mm buttons' },
      { specification: 'Each button is spring-loaded to ensure fast and secure assembly' },
      { specification: 'Engineered for 45° corner joints in aluminium frames' },
      { specification: 'Delivers secure fitting and consistent performance' },
    ],
    detailedSpecifications: [
      { key: 'H (mm)', value: '10' },
      { key: 'L (mm)', value: '25' },
      { key: 'A (mm)', value: '42.5' },
      { key: 'Button Material', value: 'Steel Sheet Metal' },
      { key: 'Body Material', value: 'Aluminium Extrusion' },
      { key: 'Bolt', value: 'SS304 Button Head M6 x 16mm' },
      { key: 'Springs', value: 'Zinc-plated' },
    ],
    order: 3,
  },
  {
    name: '10X26MM CORNER CLEAT',
    productCode: 'AC1026P',
    shortDescription: 'Premium series corner cleat for 45° corner joints in aluminium frames',
    technicalSpecifications: [
      { specification: 'Corner connector equipped with external Ø10mm buttons' },
      { specification: 'Each button is spring-loaded to ensure fast and secure assembly' },
      { specification: 'Engineered for 45° corner joints in aluminium frames' },
      { specification: 'Delivers secure fitting and consistent performance' },
    ],
    detailedSpecifications: [
      { key: 'H (mm)', value: '10' },
      { key: 'L (mm)', value: '26' },
      { key: 'A (mm)', value: '42.5' },
      { key: 'Button Material', value: 'Steel Sheet Metal' },
      { key: 'Body Material', value: 'Aluminium Extrusion' },
      { key: 'Bolt', value: 'SS304 Button Head M6 x 16mm' },
      { key: 'Springs', value: 'Zinc-plated' },
    ],
    order: 4,
  },
  {
    name: '10X28MM CORNER CLEAT',
    productCode: 'AC1028P',
    shortDescription: 'Premium series corner cleat for 45° corner joints in aluminium frames',
    technicalSpecifications: [
      { specification: 'Corner connector equipped with external Ø10mm buttons' },
      { specification: 'Each button is spring-loaded to ensure fast and secure assembly' },
      { specification: 'Engineered for 45° corner joints in aluminium frames' },
      { specification: 'Delivers secure fitting and consistent performance' },
    ],
    detailedSpecifications: [
      { key: 'H (mm)', value: '10' },
      { key: 'L (mm)', value: '28' },
      { key: 'A (mm)', value: '42.5' },
      { key: 'Button Material', value: 'Steel Sheet Metal' },
      { key: 'Body Material', value: 'Aluminium Extrusion' },
      { key: 'Bolt', value: 'SS304 Button Head M6 x 16mm' },
      { key: 'Springs', value: 'Zinc-plated' },
    ],
    order: 5,
  },
  {
    name: '10X31MM CORNER CLEAT',
    productCode: 'AC1031P',
    shortDescription: 'Premium series corner cleat for 45° corner joints in aluminium frames',
    technicalSpecifications: [
      { specification: 'Corner connector equipped with external Ø10mm buttons' },
      { specification: 'Each button is spring-loaded to ensure fast and secure assembly' },
      { specification: 'Engineered for 45° corner joints in aluminium frames' },
      { specification: 'Delivers secure fitting and consistent performance' },
    ],
    detailedSpecifications: [
      { key: 'H (mm)', value: '10' },
      { key: 'L (mm)', value: '31' },
      { key: 'A (mm)', value: '42.5' },
      { key: 'Button Material', value: 'Steel Sheet Metal' },
      { key: 'Body Material', value: 'Aluminium Extrusion' },
      { key: 'Bolt', value: 'SS304 Button Head M6 x 16mm' },
      { key: 'Springs', value: 'Zinc-plated' },
    ],
    order: 6,
  },
  {
    name: '10X36MM CORNER CLEAT',
    productCode: 'AC1036P',
    shortDescription: 'Premium series corner cleat for 45° corner joints in aluminium frames',
    technicalSpecifications: [
      { specification: 'Corner connector equipped with external Ø10mm buttons' },
      { specification: 'Each button is spring-loaded to ensure fast and secure assembly' },
      { specification: 'Engineered for 45° corner joints in aluminium frames' },
      { specification: 'Delivers secure fitting and consistent performance' },
    ],
    detailedSpecifications: [
      { key: 'H (mm)', value: '10' },
      { key: 'L (mm)', value: '36' },
      { key: 'A (mm)', value: '42.5' },
      { key: 'Button Material', value: 'Steel Sheet Metal' },
      { key: 'Body Material', value: 'Aluminium Extrusion' },
      { key: 'Bolt', value: 'SS304 Button Head M6 x 16mm' },
      { key: 'Springs', value: 'Zinc-plated' },
    ],
    order: 7,
  },
  {
    name: '10X41MM CORNER CLEAT',
    productCode: 'AC1041P',
    shortDescription: 'Premium series corner cleat for 45° corner joints in aluminium frames',
    technicalSpecifications: [
      { specification: 'Corner connector equipped with external Ø10mm buttons' },
      { specification: 'Each button is spring-loaded to ensure fast and secure assembly' },
      { specification: 'Engineered for 45° corner joints in aluminium frames' },
      { specification: 'Delivers secure fitting and consistent performance' },
    ],
    detailedSpecifications: [
      { key: 'H (mm)', value: '10' },
      { key: 'L (mm)', value: '41' },
      { key: 'A (mm)', value: '42.5' },
      { key: 'Button Material', value: 'Steel Sheet Metal' },
      { key: 'Body Material', value: 'Aluminium Extrusion' },
      { key: 'Bolt', value: 'SS304 Button Head M6 x 16mm' },
      { key: 'Springs', value: 'Zinc-plated' },
    ],
    order: 8,
  },
]

// Premium Series Corner Cleats (14mm)
const premiumCornerCleats14mm: ProductData[] = [
  {
    name: '14X24MM CORNER CLEAT',
    productCode: 'AC1424P',
    shortDescription: 'Premium series 14mm corner cleat for 45° corner joints in aluminium frames',
    technicalSpecifications: [
      { specification: 'Corner connector equipped with external Ø10mm buttons' },
      { specification: 'Each button is spring-loaded to ensure fast and secure assembly' },
      { specification: 'Engineered for 45° corner joints in aluminium frames' },
      { specification: 'Delivers secure fitting and consistent performance' },
    ],
    detailedSpecifications: [
      { key: 'H (mm)', value: '14' },
      { key: 'L (mm)', value: '24' },
      { key: 'A (mm)', value: '42.5' },
      { key: 'Button Material', value: 'Steel Sheet Metal' },
      { key: 'Body Material', value: 'Aluminium Extrusion' },
      { key: 'Bolt', value: 'SS304 Button Head M6 x 16mm' },
      { key: 'Springs', value: 'Zinc-plated' },
    ],
    order: 1,
  },
  {
    name: '14X25.5MM CORNER CLEAT',
    productCode: 'AC1425P',
    shortDescription: 'Premium series 14mm corner cleat for 45° corner joints in aluminium frames',
    technicalSpecifications: [
      { specification: 'Corner connector equipped with external Ø10mm buttons' },
      { specification: 'Each button is spring-loaded to ensure fast and secure assembly' },
      { specification: 'Engineered for 45° corner joints in aluminium frames' },
      { specification: 'Delivers secure fitting and consistent performance' },
    ],
    detailedSpecifications: [
      { key: 'H (mm)', value: '14' },
      { key: 'L (mm)', value: '25.5' },
      { key: 'A (mm)', value: '42.5' },
      { key: 'Button Material', value: 'Steel Sheet Metal' },
      { key: 'Body Material', value: 'Aluminium Extrusion' },
      { key: 'Bolt', value: 'SS304 Button Head M6 x 16mm' },
      { key: 'Springs', value: 'Zinc-plated' },
    ],
    order: 2,
  },
  {
    name: '14X28MM CORNER CLEAT',
    productCode: 'AC1428P',
    shortDescription: 'Premium series 14mm corner cleat for 45° corner joints in aluminium frames',
    technicalSpecifications: [
      { specification: 'Corner connector equipped with external Ø10mm buttons' },
      { specification: 'Each button is spring-loaded to ensure fast and secure assembly' },
      { specification: 'Engineered for 45° corner joints in aluminium frames' },
      { specification: 'Delivers secure fitting and consistent performance' },
    ],
    detailedSpecifications: [
      { key: 'H (mm)', value: '14' },
      { key: 'L (mm)', value: '28' },
      { key: 'A (mm)', value: '42.5' },
      { key: 'Button Material', value: 'Steel Sheet Metal' },
      { key: 'Body Material', value: 'Aluminium Extrusion' },
      { key: 'Bolt', value: 'SS304 Button Head M6 x 16mm' },
      { key: 'Springs', value: 'Zinc-plated' },
    ],
    order: 3,
  },
  {
    name: '14X31MM CORNER CLEAT',
    productCode: 'AC1431P',
    shortDescription: 'Premium series 14mm corner cleat for 45° corner joints in aluminium frames',
    technicalSpecifications: [
      { specification: 'Corner connector equipped with external Ø10mm buttons' },
      { specification: 'Each button is spring-loaded to ensure fast and secure assembly' },
      { specification: 'Engineered for 45° corner joints in aluminium frames' },
      { specification: 'Delivers secure fitting and consistent performance' },
    ],
    detailedSpecifications: [
      { key: 'H (mm)', value: '14' },
      { key: 'L (mm)', value: '31' },
      { key: 'A (mm)', value: '42.5' },
      { key: 'Button Material', value: 'Steel Sheet Metal' },
      { key: 'Body Material', value: 'Aluminium Extrusion' },
      { key: 'Bolt', value: 'SS304 Button Head M6 x 16mm' },
      { key: 'Springs', value: 'Zinc-plated' },
    ],
    order: 4,
  },
  {
    name: '14X34MM CORNER CLEAT',
    productCode: 'AC1434P',
    shortDescription: 'Premium series 14mm corner cleat for 45° corner joints in aluminium frames',
    technicalSpecifications: [
      { specification: 'Corner connector equipped with external Ø10mm buttons' },
      { specification: 'Each button is spring-loaded to ensure fast and secure assembly' },
      { specification: 'Engineered for 45° corner joints in aluminium frames' },
      { specification: 'Delivers secure fitting and consistent performance' },
    ],
    detailedSpecifications: [
      { key: 'H (mm)', value: '14' },
      { key: 'L (mm)', value: '34' },
      { key: 'A (mm)', value: '42.5' },
      { key: 'Button Material', value: 'Steel Sheet Metal' },
      { key: 'Body Material', value: 'Aluminium Extrusion' },
      { key: 'Bolt', value: 'SS304 Button Head M6 x 16mm' },
      { key: 'Springs', value: 'Zinc-plated' },
    ],
    order: 5,
  },
  {
    name: '14X36MM CORNER CLEAT',
    productCode: 'AC1436P',
    shortDescription: 'Premium series 14mm corner cleat for 45° corner joints in aluminium frames',
    technicalSpecifications: [
      { specification: 'Corner connector equipped with external Ø10mm buttons' },
      { specification: 'Each button is spring-loaded to ensure fast and secure assembly' },
      { specification: 'Engineered for 45° corner joints in aluminium frames' },
      { specification: 'Delivers secure fitting and consistent performance' },
    ],
    detailedSpecifications: [
      { key: 'H (mm)', value: '14' },
      { key: 'L (mm)', value: '36' },
      { key: 'A (mm)', value: '42.5' },
      { key: 'Button Material', value: 'Steel Sheet Metal' },
      { key: 'Body Material', value: 'Aluminium Extrusion' },
      { key: 'Bolt', value: 'SS304 Button Head M6 x 16mm' },
      { key: 'Springs', value: 'Zinc-plated' },
    ],
    order: 6,
  },
]

// Standard Corner Cleats
const standardCornerCleats: ProductData[] = [
  {
    name: '10X22MM CORNER CLEAT',
    productCode: 'PAL209',
    shortDescription: 'Standard corner cleat for aluminium profile sections',
    detailedSpecifications: [
      { key: 'Size', value: '10x22mm' },
      { key: 'Type', value: 'Corner Cleat' },
    ],
    order: 1,
  },
  {
    name: '10X24MM CORNER CLEAT',
    productCode: 'PAL206',
    shortDescription: 'Standard corner cleat for aluminium profile sections',
    detailedSpecifications: [
      { key: 'Size', value: '10x24mm' },
      { key: 'Type', value: 'Corner Cleat' },
    ],
    order: 2,
  },
  {
    name: '10X27MM CORNER CLEAT',
    productCode: 'PAL227',
    shortDescription: 'Standard corner cleat for aluminium profile sections',
    detailedSpecifications: [
      { key: 'Size', value: '10x27mm' },
      { key: 'Type', value: 'Corner Cleat' },
    ],
    order: 3,
  },
  {
    name: '10X31MM CORNER CLEAT',
    productCode: 'PAL228',
    shortDescription: 'Standard corner cleat for aluminium profile sections',
    detailedSpecifications: [
      { key: 'Size', value: '10x31mm' },
      { key: 'Type', value: 'Corner Cleat' },
    ],
    order: 4,
  },
  {
    name: '10X36MM CORNER CLEAT',
    productCode: 'PAL229',
    shortDescription: 'Standard corner cleat for aluminium profile sections',
    detailedSpecifications: [
      { key: 'Size', value: '10x36mm' },
      { key: 'Type', value: 'Corner Cleat' },
    ],
    order: 5,
  },
  {
    name: '10X41MM CORNER CLEAT',
    productCode: 'PAL208',
    shortDescription: 'Standard corner cleat for aluminium profile sections',
    detailedSpecifications: [
      { key: 'Size', value: '10x41mm' },
      { key: 'Type', value: 'Corner Cleat' },
    ],
    order: 6,
  },
]

// Casting Corner Cleats
const castingCornerCleats: ProductData[] = [
  {
    name: '90° CORNER CLEAT (24MM)',
    productCode: 'PAL215',
    shortDescription: 'Die-cast corner cleat for 90° corner joints',
    detailedSpecifications: [
      { key: 'Size', value: '24mm' },
      { key: 'Angle', value: '90°' },
      { key: 'Type', value: 'Casting Corner Cleat' },
    ],
    order: 1,
  },
  {
    name: '10X22MM CASTING CORNER CLEAT',
    productCode: 'AC1022(C)',
    shortDescription: 'Die-cast corner cleat for aluminium frames',
    detailedSpecifications: [
      { key: 'Size', value: '10x22mm' },
      { key: 'Type', value: 'Casting Corner Cleat' },
    ],
    order: 2,
  },
  {
    name: '10X24MM CASTING CORNER CLEAT',
    productCode: 'AC1024',
    shortDescription: 'Die-cast corner cleat for aluminium frames',
    detailedSpecifications: [
      { key: 'Size', value: '10x24mm' },
      { key: 'Type', value: 'Casting Corner Cleat' },
    ],
    order: 3,
  },
  {
    name: '14X36MM CASTING CORNER CLEAT',
    productCode: 'AC1436(C)',
    shortDescription: 'Die-cast corner cleat for aluminium frames',
    detailedSpecifications: [
      { key: 'Size', value: '14x36mm' },
      { key: 'Type', value: 'Casting Corner Cleat' },
    ],
    order: 4,
  },
  {
    name: '27X35MM CASTING CORNER CLEAT',
    productCode: 'AC2735(C)',
    shortDescription: 'Die-cast corner cleat for aluminium frames',
    detailedSpecifications: [
      { key: 'Size', value: '27x35mm' },
      { key: 'Type', value: 'Casting Corner Cleat' },
    ],
    order: 5,
  },
]

// Single-Point Casement Window Handles
const casementWindowHandles: ProductData[] = [
  {
    name: '200MM COCKSPAR SINGLE POINT LOCK (LEFT)',
    productCode: 'PAL47(L)',
    shortDescription: 'Left-hand single-point casement window handle with powder-coated finish',
    technicalSpecifications: [
      { specification: 'Designed for single-point casement windows and doors' },
      { specification: 'Available in white and black powder-coated finish' },
      { specification: 'Handle, base, receiver hook made from aluminium die-cast' },
      { specification: 'Durable powder-coating finish' },
      { specification: 'Packers made from Polyamide-6' },
      { specification: 'Fitted with zinc-plated CSK head steel bolts' },
    ],
    detailedSpecifications: [
      { key: 'Length', value: '200mm' },
      { key: 'Width', value: '50mm' },
      { key: 'Height', value: '50.5mm' },
      { key: 'Type', value: 'Left Hand' },
      { key: 'Handle Material', value: 'Aluminium Die-cast' },
      { key: 'Finish', value: 'Powder Coated (White/Black)' },
      { key: 'Bolts', value: 'Zinc-plated CSK Head Steel' },
    ],
    order: 1,
  },
  {
    name: '200MM COCKSPAR SINGLE POINT LOCK (RIGHT)',
    productCode: 'PAL47(R)',
    shortDescription: 'Right-hand single-point casement window handle with powder-coated finish',
    technicalSpecifications: [
      { specification: 'Designed for single-point casement windows and doors' },
      { specification: 'Available in white and black powder-coated finish' },
      { specification: 'Handle, base, receiver hook made from aluminium die-cast' },
      { specification: 'Durable powder-coating finish' },
      { specification: 'Packers made from Polyamide-6' },
      { specification: 'Fitted with zinc-plated CSK head steel bolts' },
    ],
    detailedSpecifications: [
      { key: 'Length', value: '200mm' },
      { key: 'Width', value: '50mm' },
      { key: 'Height', value: '50.5mm' },
      { key: 'Type', value: 'Right Hand' },
      { key: 'Handle Material', value: 'Aluminium Die-cast' },
      { key: 'Finish', value: 'Powder Coated (White/Black)' },
      { key: 'Bolts', value: 'Zinc-plated CSK Head Steel' },
    ],
    order: 2,
  },
]

async function seedProducts() {
  console.log('Starting product seeding...')

  const payload = await getPayloadClient()

  // 1. Create or get the main category
  const category = await payload.find({
    collection: 'categories',
    where: { slug: { equals: 'aluminium-window-door-hardware' } },
  })

  let categoryId: string

  if (category.docs.length === 0) {
    console.log('Creating main category...')
    const newCategory = await payload.create({
      collection: 'categories',
      data: {
        name: 'Aluminium Window & Door Hardware',
        slug: 'aluminium-window-door-hardware',
        shortDescription: 'Premium quality hardware for aluminium windows and doors',
        featured: true,
        order: 1,
      },
    })
    categoryId = newCategory.id
  } else {
    categoryId = category.docs[0].id
  }

  console.log('Category ID:', categoryId)

  // 2. Create subcategories
  const subcategories = [
    {
      name: 'Premium Series Corner Cleats (10mm)',
      slug: 'premium-corner-cleats-10mm',
      shortDescription: 'Premium 10mm corner cleats with spring-loaded buttons for secure 45° corner joints',
      products: premiumCornerCleats10mm,
    },
    {
      name: 'Premium Series Corner Cleats (14mm)',
      slug: 'premium-corner-cleats-14mm',
      shortDescription: 'Premium 14mm corner cleats with spring-loaded buttons for secure 45° corner joints',
      products: premiumCornerCleats14mm,
    },
    {
      name: 'Standard Corner Cleats',
      slug: 'standard-corner-cleats',
      shortDescription: 'Standard corner cleats for aluminium profile sections',
      products: standardCornerCleats,
    },
    {
      name: 'Casting Corner Cleats',
      slug: 'casting-corner-cleats',
      shortDescription: 'Die-cast corner cleats for durable 90° corner joints',
      products: castingCornerCleats,
    },
    {
      name: 'Single-Point Casement Window Handles',
      slug: 'single-point-casement-handles',
      shortDescription: 'Locking handles for single-point casement windows and doors',
      products: casementWindowHandles,
    },
  ]

  for (const subcat of subcategories) {
    console.log(`\nProcessing subcategory: ${subcat.name}`)

    // Check if subcategory exists
    const existingSubcat = await payload.find({
      collection: 'subcategories',
      where: { slug: { equals: subcat.slug } },
    })

    let subcategoryId: string

    if (existingSubcat.docs.length === 0) {
      console.log('Creating subcategory...')
      const newSubcat = await payload.create({
        collection: 'subcategories',
        data: {
          name: subcat.name,
          slug: subcat.slug,
          category: categoryId,
          shortDescription: subcat.shortDescription,
          order: subcategories.indexOf(subcat) + 1,
        },
      })
      subcategoryId = newSubcat.id
    } else {
      subcategoryId = existingSubcat.docs[0].id
      console.log('Subcategory already exists')
    }

    // Create products
    for (const product of subcat.products) {
      // Check if product exists
      const existingProduct = await payload.find({
        collection: 'products',
        where: { productCode: { equals: product.productCode } },
      })

      if (existingProduct.docs.length === 0) {
        console.log(`Creating product: ${product.productCode}`)
        await payload.create({
          collection: 'products',
          data: {
            name: product.name,
            slug: product.productCode.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            productCode: product.productCode,
            subcategory: subcategoryId,
            shortDescription: product.shortDescription,
            technicalSpecifications: product.technicalSpecifications,
            detailedSpecifications: product.detailedSpecifications,
            order: product.order,
            status: 'active',
            images: [], // Images need to be uploaded separately
          },
        })
      } else {
        console.log(`Product ${product.productCode} already exists`)
      }
    }
  }

  console.log('\nProduct seeding completed!')
}

// Run the seed function
seedProducts()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Error seeding products:', error)
    process.exit(1)
  })
