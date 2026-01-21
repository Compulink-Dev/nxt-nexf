'use client'

import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Briefcase,
  BookOpen,
  Users,
  CheckCircle,
  Search,
  Filter,
  Clock,
  MapPin,
  DollarSign,
  ArrowRight,
  X,
  Send,
} from 'lucide-react'
import { Input } from '@/components/ui/input'

const defaultVacancies = [
  {
    id: 1,
    title: 'Research Associate',
    department: 'Research & Policy',
    type: 'Full-time',
    experience: 'Entry-level (0-2 years)',
    location: 'Harare, Zimbabwe',
    salary: '$7,000 - $10,000',
    posted: '2024-01-10',
    deadline: '2024-02-10',
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
  },
  {
    id: 2,
    title: 'Senior Policy Advisor',
    department: 'Research & Policy',
    type: 'Full-time',
    experience: 'Senior (5+ years)',
    location: 'Harare, Zimbabwe',
    salary: '$18,000 - $25,000',
    posted: '2024-01-08',
    deadline: '2024-02-08',
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
  },
  {
    id: 3,
    title: 'Training Specialist',
    department: 'Training & Development',
    type: 'Full-time',
    experience: 'Mid-level (2-4 years)',
    location: 'Harare, Zimbabwe',
    salary: '$8,500 - $12,000',
    posted: '2024-01-11',
    deadline: '2024-02-11',
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
  },
  {
    id: 4,
    title: 'Communications Manager',
    department: 'Communications',
    type: 'Full-time',
    experience: 'Mid-level (3-5 years)',
    location: 'Harare, Zimbabwe',
    salary: '$9,000 - $13,000',
    posted: '2024-01-12',
    deadline: '2024-02-12',
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
  },
  {
    id: 5,
    title: 'Finance Officer',
    department: 'Finance & Administration',
    type: 'Full-time',
    experience: 'Entry-level (0-2 years)',
    location: 'Harare, Zimbabwe',
    salary: '$6,000 - $8,500',
    posted: '2024-01-16',
    deadline: '2024-02-16',
    description:
      'Support financial operations and administrative functions. Ideal role for graduates seeking experience in organizational finance and accounting.',
    responsibilities: [
      'Process accounts payable and receivable',
      'Maintain financial records and databases',
      'Prepare financial reports and statements',
      'Support budget development and monitoring',
      'General administrative support',
    ],
    requirements: [
      "Bachelor's degree in Accounting, Finance, or Business",
      'Strong numerical and analytical skills',
      'Proficiency in MS Excel and accounting software',
      'Attention to detail and organizational skills',
      'Willingness to learn and grow',
    ],
    benefits: [
      'Entry-level competitive salary',
      'On-the-job training',
      'Health insurance',
      'Career development support',
    ],
  },
  {
    id: 6,
    title: 'Dialogue Coordinator',
    department: 'Engagement',
    type: 'Full-time',
    experience: 'Entry to Mid-level (1-3 years)',
    location: 'Harare, Zimbabwe',
    salary: '$6,500 - $9,000',
    posted: '2024-01-14',
    deadline: '2024-02-14',
    description:
      'Manage logistics and coordination of stakeholder dialogues, forums, and engagement events promoting economic policy discussion.',
    responsibilities: [
      'Plan and coordinate dialogue events and forums',
      'Liaise with stakeholders and participants',
      'Manage event logistics and documentation',
      'Prepare dialogue briefs and summaries',
      'Support media coverage and publicity',
    ],
    requirements: [
      "Bachelor's degree in any discipline",
      '1-3 years of event management or coordination experience',
      'Excellent interpersonal and communication skills',
      'Strong organizational abilities',
      'Ability to work under pressure and meet deadlines',
    ],
    benefits: [
      'Competitive salary',
      'Event management experience',
      'Professional networking opportunities',
      'Health insurance coverage',
    ],
  },
]

const departments = [
  'All',
  'Research & Policy',
  'Training & Development',
  'Communications',
  'Finance & Administration',
  'Engagement',
]
const jobTypes = ['All', 'Full-time', 'Part-time', 'Contract']
const experienceLevels = [
  'All',
  'Entry-level (0-2 years)',
  'Mid-level (2-4 years)',
  'Senior (5+ years)',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

type SelectedJob = {
  id: string
} | null

export default function VacancyPageClient({ vacancies = [] }: { vacancies?: any[] }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('All')
  const [selectedJobType, setSelectedJobType] = useState('All')
  const [selectedExperience, setSelectedExperience] = useState('All')
  const [selectedJob, setSelectedJob] = useState<SelectedJob>(null)
  const [showFilters, setShowFilters] = useState(false)
  const [isDesktop, setIsDesktop] = useState(true)

  // Track desktop/mobile state
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const jobListings = vacancies.length > 0 ? vacancies : defaultVacancies

  const filteredJobs = useMemo(
    () =>
      jobListings.filter((job) => {
        const matchesSearch =
          job.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.description?.toLowerCase().includes(searchQuery.toLowerCase())

        const matchesDepartment =
          selectedDepartment === 'All' || job.department === selectedDepartment
        const matchesType = selectedJobType === 'All' || job.type === selectedJobType
        const matchesExperience =
          selectedExperience === 'All' || job.experience === selectedExperience

        return matchesSearch && matchesDepartment && matchesType && matchesExperience
      }),
    [searchQuery, selectedDepartment, selectedJobType, selectedExperience, jobListings],
  )

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-900 via-green-900 to-green-800 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-500">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Join Our{' '}
              <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300">
              {`Explore career opportunities at NECF and be part of shaping Zimbabwe's economic future`}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: BookOpen,
                title: 'Professional Growth',
                description: 'Continuous learning and development opportunities',
              },
              {
                icon: Users,
                title: 'Collaborative Culture',
                description: 'Work with talented professionals and thought leaders',
              },
              {
                icon: CheckCircle,
                title: 'Impact',
                description: 'Make a real difference in economic policy and development',
              },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200 text-center hover:shadow-lg hover:border-green-300 transition-all"
                >
                  <div className="mb-4 p-3 bg-gradient-to-br from-green-100 to-green-50 rounded-lg w-fit mx-auto">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 space-y-6"
          >
            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1.5 h-5 w-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search positions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Filter Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-900 rounded-lg hover:bg-slate-200 transition-all font-semibold"
            >
              <Filter className="h-5 w-5" />
              Filters
            </motion.button>

            {/* Filters */}
            <AnimatePresence>
              {(showFilters || isDesktop) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-4"
                >
                  {/* Department Filter */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Department
                    </label>
                    <select
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                    >
                      {departments.map((dept) => (
                        <option key={dept} value={dept}>
                          {dept}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Job Type Filter */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Job Type
                    </label>
                    <select
                      value={selectedJobType}
                      onChange={(e) => setSelectedJobType(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                    >
                      {jobTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Experience Level Filter */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Experience Level
                    </label>
                    <select
                      value={selectedExperience}
                      onChange={(e) => setSelectedExperience(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                    >
                      {experienceLevels.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Results Count */}
            <p className="text-sm text-slate-600">
              Showing <span className="font-semibold text-slate-900">{filteredJobs.length}</span> of{' '}
              <span className="font-semibold text-slate-900">{jobListings.length}</span> position
              {filteredJobs.length !== 1 ? 's' : ''}
            </p>
          </motion.div>

          {/* Job Listings */}
          {filteredJobs.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  variants={itemVariants}
                  onClick={() => setSelectedJob({ id: job.id })}
                  className="group cursor-pointer bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-green-300 transition-all"
                >
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex-grow">
                          <h3 className="text-lg lg:text-xl font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                            {job.title}
                          </h3>
                          <p className="text-sm text-slate-600">{job.department}</p>
                        </div>
                      </div>
                    </div>

                    {/* Job Details */}
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Clock className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <MapPin className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Users className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <DollarSign className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>{job.salary}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 line-clamp-2">{job.description}</p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <span className="text-xs text-slate-500">
                        Deadline:{' '}
                        {new Date(job.deadline).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="text-green-600 font-semibold flex items-center gap-1"
                      >
                        View Details
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16 space-y-4"
            >
              <Briefcase className="h-16 w-16 text-slate-300 mx-auto" />
              <h3 className="text-xl font-semibold text-slate-900">No positions found</h3>
              <p className="text-slate-600">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Job Detail Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedJob(null)}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto py-8"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {(() => {
                const job = jobListings.find((j) => j.id === selectedJob.id)
                if (!job) return null

                return (
                  <div>
                    {/* Header */}
                    <div className="sticky top-0 flex justify-between items-start p-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white border-b border-slate-700 z-10">
                      <div>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-2">{job.title}</h2>
                        <p className="text-slate-300">{job.department}</p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedJob(null)}
                        className="p-2 hover:bg-slate-700 rounded-lg transition-all"
                      >
                        <X className="h-6 w-6" />
                      </motion.button>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-6">
                      {/* Quick Info */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                          { icon: Clock, label: 'Type', value: job.type },
                          { icon: MapPin, label: 'Location', value: job.location },
                          { icon: Users, label: 'Experience', value: job.experience },
                          { icon: DollarSign, label: 'Salary', value: job.salary },
                        ].map((item, idx) => {
                          const Icon = item.icon
                          return (
                            <div key={idx} className="bg-slate-50 rounded-lg p-3">
                              <p className="text-xs text-slate-600 mb-1 flex items-center gap-1">
                                <Icon className="h-4 w-4" />
                                {item.label}
                              </p>
                              <p className="font-semibold text-slate-900">{item.value}</p>
                            </div>
                          )
                        })}
                      </div>

                      {/* Description */}
                      <div className="space-y-2 border-t border-slate-200 pt-6">
                        <h3 className="text-lg font-bold text-slate-900">About the Role</h3>
                        <p className="text-slate-600 leading-relaxed">{job.description}</p>
                      </div>

                      {/* Responsibilities */}
                      <div className="space-y-3 border-t border-slate-200 pt-6">
                        <h3 className="text-lg font-bold text-slate-900">Responsibilities</h3>
                        <ul className="space-y-2">
                          {job.responsibilities?.map((resp: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-600">
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Requirements */}
                      <div className="space-y-3 border-t border-slate-200 pt-6">
                        <h3 className="text-lg font-bold text-slate-900">Requirements</h3>
                        <ul className="space-y-2">
                          {job.requirements?.map((req: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-600">
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div className="space-y-3 border-t border-slate-200 pt-6">
                        <h3 className="text-lg font-bold text-slate-900">Benefits</h3>
                        <ul className="space-y-2">
                          {job.benefits?.map((benefit: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-600">
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Dates */}
                      <div className="grid grid-cols-2 gap-4 border-t border-slate-200 pt-6 text-sm">
                        <div>
                          <p className="text-slate-600">Posted</p>
                          <p className="font-semibold text-slate-900">
                            {new Date(job.posted).toLocaleDateString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-slate-600">Deadline</p>
                          <p className="font-semibold text-slate-900">
                            {new Date(job.deadline).toLocaleDateString()}
                          </p>
                        </div>
                      </div>

                      {/* Apply Button */}
                      <motion.a
                        href={`mailto:careers@necf.org.zw?subject=Application for ${job.title}`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="block w-full px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all text-center flex items-center justify-center gap-2"
                      >
                        <Send className="h-5 w-5" />
                        Apply Now
                      </motion.a>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
