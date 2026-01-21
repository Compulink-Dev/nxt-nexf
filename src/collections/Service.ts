// collections/Service.ts
import type { CollectionConfig } from 'payload'

export const Service: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'title2',
      type: 'text',
    },
    {
      name: 'description2',
      type: 'textarea',
    },
    {
      name: 'title3',
      type: 'text',
    },
    {
      name: 'description3',
      type: 'textarea',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'icon',
      type: 'select',
      options: [
        { label: 'Message Square', value: 'message-square' },
        { label: 'Users', value: 'users' },
        { label: 'Megaphone', value: 'megaphone' },
        { label: 'Target', value: 'target' },
        { label: 'Lightbulb', value: 'lightbulb' },
      ],
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
