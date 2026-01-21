// collections/Milestone.ts
import type { CollectionConfig } from 'payload'

export const Milestone: CollectionConfig = {
  slug: 'milestones',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'number', 'status', 'order'],
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
      name: 'number',
      type: 'number',
      required: true,
    },
    {
      name: 'suffix',
      type: 'select',
      options: [
        { label: 'None', value: '' },
        { label: 'Plus (+)', value: '+' },
        { label: 'Percent (%)', value: '%' },
        { label: 'K (Thousand)', value: 'K' },
        { label: 'M (Million)', value: 'M' },
      ],
      defaultValue: '',
    },
    {
      name: 'icon',
      type: 'select',
      options: [
        { label: 'Target', value: 'target' },
        { label: 'Users', value: 'users' },
        { label: 'Award', value: 'award' },
        { label: 'Shield', value: 'shield' },
        { label: 'Trending Up', value: 'trending-up' },
        { label: 'Check Circle', value: 'check-circle' },
        { label: 'Star', value: 'star' },
        { label: 'Trophy', value: 'trophy' },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
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
