import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  labels: {
    singular: 'Product',
    plural: 'Products',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'productCode', 'subcategory', 'productGroup', 'order'],
    group: 'Products',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Product Name',
      admin: {
        description: 'e.g., ALENCO-1 CREMONE HANDLE CROME FINISH',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.name) {
              return data.name
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '')
            }
            return value
          },
        ],
      },
    },
    {
      name: 'productCode',
      type: 'text',
      required: true,
      label: 'Product Code',
      admin: {
        description: 'Unique product identifier (e.g., PH131CP)',
      },
    },
    {
      name: 'subcategory',
      type: 'relationship',
      relationTo: 'subcategories',
      required: true,
      label: 'Subcategory',
      admin: {
        description: 'The subcategory this product belongs to',
      },
    },
    {
      name: 'productGroup',
      type: 'relationship',
      relationTo: 'product-groups',
      label: 'Product Group',
      admin: {
        description: 'Optional grouping within the subcategory (e.g., ALENCO MULTI LOCKING)',
      },
    },
    {
      name: 'images',
      type: 'array',
      required: true,
      minRows: 1,
      label: 'Product Images',
      admin: {
        description: 'Add multiple images for the product carousel',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
          label: 'Caption',
        },
      ],
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Product Description',
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      label: 'Short Description',
      admin: {
        description: 'Brief description for product cards',
      },
    },
    {
      name: 'technicalSpecifications',
      type: 'array',
      label: 'Technical Specifications',
      admin: {
        description: 'List of technical features and specifications',
      },
      fields: [
        {
          name: 'specification',
          type: 'text',
          required: true,
          label: 'Specification',
          admin: {
            description: 'e.g., Fork Driven Multiple, Locking System',
          },
        },
      ],
    },
    {
      name: 'detailedSpecifications',
      type: 'array',
      label: 'Detailed Specifications',
      admin: {
        description: 'Key-value pairs for detailed specifications',
      },
      fields: [
        {
          name: 'key',
          type: 'text',
          required: true,
          label: 'Property',
          admin: {
            description: 'e.g., Material, Weight, Dimensions',
          },
        },
        {
          name: 'value',
          type: 'text',
          required: true,
          label: 'Value',
          admin: {
            description: 'e.g., Stainless Steel, 500g, 10x5x2 cm',
          },
        },
      ],
    },
    {
      name: 'finishes',
      type: 'array',
      label: 'Available Finishes',
      admin: {
        description: 'List of available finishes for this product',
      },
      fields: [
        {
          name: 'finish',
          type: 'text',
          required: true,
          label: 'Finish Type',
          admin: {
            description: 'e.g., Gold, Chrome, Satin Silver, SS, Bronze',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Finish Image',
        },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      label: 'Featured Product',
      admin: {
        description: 'Show this product prominently in listings',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      label: 'Display Order',
      admin: {
        description: 'Lower numbers appear first',
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'active',
      label: 'Status',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
        { label: 'Out of Stock', value: 'out-of-stock' },
        { label: 'Coming Soon', value: 'coming-soon' },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO Settings',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Title',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
        },
        {
          name: 'metaKeywords',
          type: 'text',
          label: 'Meta Keywords',
        },
      ],
    },
    {
      name: 'relatedProducts',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      label: 'Related Products',
      admin: {
        description: 'Products to show in the related products section',
      },
    },
  ],
}
