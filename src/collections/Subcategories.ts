import type { CollectionConfig } from 'payload'

export const Subcategories: CollectionConfig = {
  slug: 'subcategories',
  labels: {
    singular: 'Subcategory',
    plural: 'Subcategories',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'slug', 'order'],
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
      label: 'Subcategory Name',
      admin: {
        description: 'e.g., ALENCO - CREMONE HANDLES FINISH, 27MM NON-EURO SERIES SLIDING WINDOW',
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
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
      label: 'Parent Category',
      admin: {
        description: 'The main category this subcategory belongs to',
      },
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Description',
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      label: 'Short Description',
      admin: {
        description: 'Brief description for subcategory cards',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Subcategory Image',
    },
    {
      name: 'bannerImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Banner Image',
      admin: {
        description: 'Large banner image shown at the top of the subcategory page',
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
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      label: 'Featured',
      admin: {
        description: 'Show this subcategory prominently in listings',
      },
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
  ],
}
