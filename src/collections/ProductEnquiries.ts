import type { CollectionConfig } from 'payload'

export const ProductEnquiries: CollectionConfig = {
  slug: 'product-enquiries',
  labels: {
    singular: 'Product Enquiry',
    plural: 'Product Enquiries',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'productName', 'productCode', 'status', 'createdAt'],
    group: 'Inquiries',
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Full Name',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email Address',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      label: 'Phone Number',
    },
    {
      name: 'company',
      type: 'text',
      label: 'Company Name',
    },
    {
      name: 'productName',
      type: 'text',
      required: true,
      label: 'Product Name',
    },
    {
      name: 'productCode',
      type: 'text',
      required: true,
      label: 'Product Code',
    },
    {
      name: 'quantity',
      type: 'text',
      label: 'Quantity Required',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      label: 'Message',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Read', value: 'read' },
        { label: 'Replied', value: 'replied' },
        { label: 'Quoted', value: 'quoted' },
        { label: 'Closed', value: 'closed' },
      ],
      admin: {
        description: 'Track the status of this inquiry',
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'Admin Notes',
      admin: {
        description: 'Internal notes about this inquiry',
      },
    },
  ],
}
