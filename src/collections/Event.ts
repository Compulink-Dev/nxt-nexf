// collections/Event.ts
import type { CollectionConfig } from 'payload'

export const Event: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'date', 'status'],
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
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'document',
      type: 'upload',
      relationTo: 'media',
      label: 'Event Document/PDF',
    },
    {
      name: 'link',
      type: 'text',
      label: 'External Link',
    },
    {
      name: 'registrationRequired',
      type: 'checkbox',
      defaultValue: true,
      label: 'Registration Required',
    },
    {
      name: 'registrationFee',
      type: 'number',
      label: 'Registration Fee (USD)',
      min: 0,
    },
    {
      name: 'maxAttendees',
      type: 'number',
      label: 'Maximum Attendees',
      min: 0,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Upcoming', value: 'upcoming' },
        { label: 'Ongoing', value: 'ongoing' },
        { label: 'Completed', value: 'completed' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
