import { CollectionConfig } from 'payload'

export const Vacancy: CollectionConfig = {
  slug: 'vacancies',
  labels: {
    singular: 'Vacancy',
    plural: 'Vacancies',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Job Title',
      type: 'text',
      required: true,
    },
    {
      name: 'department',
      label: 'Department',
      type: 'select',
      required: true,
      options: [
        { label: 'Leadership', value: 'Leadership' },
        { label: 'Research & Policy', value: 'Research & Policy' },
        { label: 'Training & Development', value: 'Training & Development' },
        { label: 'Communications', value: 'Communications' },
        { label: 'Finance & Administration', value: 'Finance & Administration' },
        { label: 'Engagement', value: 'Engagement' },
      ],
    },
    {
      name: 'type',
      label: 'Employment Type',
      type: 'select',
      required: true,
      options: [
        { label: 'Full-time', value: 'Full-time' },
        { label: 'Part-time', value: 'Part-time' },
        { label: 'Contract', value: 'Contract' },
        { label: 'Internship', value: 'Internship' },
      ],
    },
    {
      name: 'experience',
      label: 'Experience Level',
      type: 'select',
      required: true,
      options: [
        { label: 'Entry-level (0-2 years)', value: 'Entry-level (0-2 years)' },
        { label: 'Mid-level (2-4 years)', value: 'Mid-level (2-4 years)' },
        { label: 'Senior (5+ years)', value: 'Senior (5+ years)' },
      ],
    },
    {
      name: 'location',
      label: 'Location',
      type: 'text',
      required: true,
    },
    {
      name: 'salary',
      label: 'Salary Range',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Job Description',
      type: 'richText',
      required: true,
    },
    {
      name: 'responsibilities',
      label: 'Responsibilities',
      type: 'array',
      fields: [
        {
          name: 'responsibility',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'requirements',
      label: 'Requirements',
      type: 'array',
      fields: [
        {
          name: 'requirement',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'benefits',
      label: 'Benefits',
      type: 'array',
      fields: [
        {
          name: 'benefit',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'posted',
      label: 'Posted Date',
      type: 'date',
      required: true,
    },
    {
      name: 'deadline',
      label: 'Application Deadline',
      type: 'date',
      required: true,
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Closed', value: 'closed' },
        { label: 'Draft', value: 'draft' },
      ],
      defaultValue: 'active',
    },
  ],
}
