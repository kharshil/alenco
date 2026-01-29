import type { CollectionConfig } from 'payload'

export const Distributors: CollectionConfig = {
  slug: 'distributors',
  labels: {
    singular: 'Distributor Inquiry',
    plural: 'Distributor Inquiries',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'phone', 'city', 'createdAt'],
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
      name: 'city',
      type: 'text',
      required: true,
      label: 'City',
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
        { label: 'Contacted', value: 'contacted' },
        { label: 'In Progress', value: 'in-progress' },
        { label: 'Approved', value: 'approved' },
        { label: 'Rejected', value: 'rejected' },
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
