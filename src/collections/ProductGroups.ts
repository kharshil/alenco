import type { CollectionConfig } from 'payload'

export const ProductGroups: CollectionConfig = {
  slug: 'product-groups',
  labels: {
    singular: 'Product Group',
    plural: 'Product Groups',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'subcategory', 'order'],
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
      label: 'Group Name',
      admin: {
        description: 'e.g., HIVIK MULTI LOCKING',
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
      name: 'subcategory',
      type: 'relationship',
      relationTo: 'subcategories',
      required: true,
      label: 'Parent Subcategory',
      admin: {
        description: 'The subcategory this product group belongs to',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Group Image',
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
  ],
}
