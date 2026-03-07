import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  labels: {
    singular: 'Category',
    plural: 'Categories',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'featured', 'order'],
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
      label: 'Category Name',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier (e.g., aluminium-window-door-hardware)',
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
      name: 'description',
      type: 'richText',
      label: 'Category Description',
      admin: {
        description: 'Detailed description shown on the category page',
      },
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      label: 'Short Description',
      admin: {
        description: 'Brief description for category cards on homepage',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Category Image',
    },
    {
      name: 'bannerImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Banner Image',
      admin: {
        description: 'Large banner image shown at the top of the category page',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: true,
      label: 'Featured on Homepage',
      admin: {
        description: 'Show this category on the homepage',
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
      name: 'productionProcedure',
      type: 'richText',
      label: 'Production Procedure',
      admin: {
        description: 'Steps involved in product customization (shown on category page)',
      },
    },
    {
      name: 'technicalSpecifications',
      type: 'richText',
      label: 'Technical Specifications',
      admin: {
        description: 'General technical specifications for this category',
      },
    },
    {
      name: 'whyChooseUs',
      type: 'richText',
      label: 'Why Choose Us',
      admin: {
        description: 'Reasons to choose this category of products',
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
