import mongoose from 'mongoose'

const MONGO_URI =
  process.env.DATABASE_URI ||
  'mongodb+srv://devcompulink_db_user:compulink@cluster0.s5ysmk6.mongodb.net/national-eco'

const vacanciesData = [
  {
    title: 'Research Associate',
    department: 'Research & Policy',
    type: 'Full-time',
    experience: 'Entry-level (0-2 years)',
    location: 'Harare, Zimbabwe',
    salary: '$7,000 - $10,000',
    description:
      'Support economic research projects and policy analysis. Ideal for recent graduates interested in development economics and policy research.',
    responsibilities: [
      'Conduct literature reviews and data analysis',
      'Support research project coordination',
      'Assist in policy paper preparation',
      'Data collection and database management',
      'Attend research team meetings and seminars',
    ],
    requirements: [
      "Bachelor's degree in Economics, Development Studies, or related field",
      'Strong analytical and writing skills',
      'Familiarity with research methodologies',
      'Proficiency in MS Office and data analysis tools',
      'Passion for economic policy and development',
    ],
    benefits: [
      'Competitive entry-level salary',
      'Research skills development',
      'Exposure to economic policy-making',
      'Health insurance',
      'Opportunities for further education',
    ],
    posted: new Date('2024-01-10'),
    deadline: new Date('2024-02-10'),
    status: 'active',
  },
  {
    title: 'Senior Policy Advisor',
    department: 'Research & Policy',
    type: 'Full-time',
    experience: 'Senior (5+ years)',
    location: 'Harare, Zimbabwe',
    salary: '$18,000 - $25,000',
    description:
      'Lead policy research and provide strategic advisory on economic development issues affecting Zimbabwe. Mentor junior staff and represent NECF in national forums.',
    responsibilities: [
      'Lead economic research initiatives',
      'Advise on policy development and implementation',
      'Mentor research team members',
      'Represent NECF in stakeholder forums',
      'Publish research findings and policy briefs',
      'Liaise with government and international partners',
    ],
    requirements: [
      "Master's degree in Economics, Development Studies, or related field",
      '5+ years of professional experience in policy research',
      'Proven track record of policy influence',
      'Strong publication record',
      'Excellent communication and presentation skills',
      'Knowledge of African economic development',
    ],
    benefits: [
      'Competitive senior-level salary',
      'International conference attendance',
      'Publication opportunities',
      'Comprehensive health and wellness package',
      'Professional development allowance',
      'Flexible working arrangements',
    ],
    posted: new Date('2024-01-08'),
    deadline: new Date('2024-02-08'),
    status: 'active',
  },
  {
    title: 'Training Specialist',
    department: 'Training & Development',
    type: 'Full-time',
    experience: 'Mid-level (2-4 years)',
    location: 'Harare, Zimbabwe',
    salary: '$8,500 - $12,000',
    description:
      "Design and deliver training programs for stakeholders on economic policy, dialogue facilitation, and organizational capacity building. Key role in NECF's training initiatives.",
    responsibilities: [
      'Develop training curriculum and materials',
      'Deliver training workshops and seminars',
      'Coordinate with stakeholders for program implementation',
      'Monitor and evaluate training effectiveness',
      'Manage training budgets and logistics',
    ],
    requirements: [
      "Bachelor's degree in Education, Development, or related field",
      '2-4 years in training or program development',
      'Experience designing and delivering training programs',
      'Excellent presentation and facilitation skills',
      'Knowledge of adult learning principles',
    ],
    benefits: [
      'Competitive salary package',
      'Training and certification opportunities',
      'Health insurance',
      'Performance bonuses',
    ],
    posted: new Date('2024-01-11'),
    deadline: new Date('2024-02-11'),
    status: 'active',
  },
  {
    title: 'Communications Manager',
    department: 'Communications',
    type: 'Full-time',
    experience: 'Mid-level (3-5 years)',
    location: 'Harare, Zimbabwe',
    salary: '$9,000 - $13,000',
    description:
      "Lead internal and external communications strategies to promote NECF's work, research findings, and organizational initiatives.",
    responsibilities: [
      'Develop and execute communication strategies',
      'Create content for website, newsletters, and social media',
      'Manage media relations and public relations',
      'Coordinate publications and marketing materials',
      'Monitor and report on communication metrics',
    ],
    requirements: [
      "Bachelor's degree in Communications, Marketing, or related field",
      '3-5 years of professional communications experience',
      'Strong writing and editing skills',
      'Experience with digital marketing and social media',
      'Project management capabilities',
    ],
    benefits: [
      'Competitive compensation',
      'Creative and collaborative environment',
      'Health and wellness benefits',
      'Flexible work arrangements',
    ],
    posted: new Date('2024-01-12'),
    deadline: new Date('2024-02-12'),
    status: 'active',
  },
]

async function seedVacancies() {
  try {
    await mongoose.connect(MONGO_URI)
    console.log('✓ Connected to MongoDB')

    const db = mongoose.connection.db
    const collection = db.collection('vacancies')

    // Clear existing vacancies
    await collection.deleteMany({})
    console.log('✓ Cleared existing vacancies')

    // Insert new vacancies
    const result = await collection.insertMany(vacanciesData)
    console.log(`✓ Inserted ${result.insertedIds.length} vacancies`)

    console.log('\n✓ Seeding complete! Real data is now available.')
    process.exit(0)
  } catch (error) {
    console.error('✗ Error seeding database:', error)
    process.exit(1)
  }
}

seedVacancies()
