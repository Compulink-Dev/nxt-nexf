//@ts-nocheck
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Lightbulb,
  Target,
  Users,
  TrendingUp,
  Calendar,
  MapPin,
  ArrowRight,
  Zap,
  CheckCircle2,
} from 'lucide-react'

// Program categories
const programCategories = [
  {
    id: 1,
    title: 'Economic Dialogues',
    slug: 'economic-dialogues',
    icon: Users,
    color: 'from-blue-500 to-blue-600',
    description:
      'National and provincial dialogues bringing together government, private sector, labour, civil society and academia to discuss socio-economic issues and policy recommendations.',
    features: [
      'Annual National Dialogue with the President',
      'Provincial Development Dialogues',
      'Stakeholder Consultations',
      'Policy Discussion Forums',
    ],
    details: `The Economic Dialogues programme is at the heart of NECF's mandate. These platforms provide a unique opportunity for diverse stakeholders to engage in meaningful dialogue about Zimbabwe's economic future. From the prestigious Annual National Dialogue with the President to regional Provincial Development Dialogues, we facilitate constructive conversations that inform policy-making.`,
  },
  {
    id: 2,
    title: 'Capacity Building',
    slug: 'capacity-building',
    icon: Lightbulb,
    color: 'from-yellow-500 to-yellow-600',
    description:
      'Training and development programs designed to enhance the skills and knowledge of key economic stakeholders in policy analysis, research, and economic management.',
    features: [
      'Leadership Development Programs',
      'Economic Policy Training',
      'Research Methodology Workshops',
      'Skills Enhancement Initiatives',
    ],
    details: `Our Capacity Building programme focuses on strengthening the capabilities of government officials, business leaders, and civil society representatives. Through targeted training programs and workshops, we build expertise in economic analysis, policy formulation, and strategic planning to drive Zimbabwe's sustainable development.`,
  },
  {
    id: 3,
    title: 'Policy Research',
    slug: 'policy-research',
    icon: Target,
    color: 'from-purple-500 to-purple-600',
    description:
      'Evidence-based research initiatives exploring key economic challenges and opportunities, providing actionable recommendations for policy makers.',
    features: [
      'Sectoral Economic Research',
      'Development Challenge Analysis',
      'Policy Impact Assessments',
      'Strategic Studies',
    ],
    details: `The Policy Research programme generates rigorous, evidence-based analysis on critical economic issues facing Zimbabwe. Our research team conducts in-depth studies on sectoral performance, structural constraints, and development opportunities, producing policy briefs and recommendations that inform national development strategies.`,
  },
  {
    id: 4,
    title: 'Industrialization & Trade',
    slug: 'industrialization-trade',
    icon: TrendingUp,
    color: 'from-green-500 to-green-600',
    description:
      'Initiatives focused on revitalizing industrial development and promoting sustainable trade partnerships for economic growth.',
    features: [
      'Industrial Development Dialogues',
      'Export Enhancement Programs',
      'Trade Partnership Facilitation',
      'Value Chain Development',
    ],
    details: `This programme supports Zimbabwe's industrialization agenda through targeted dialogues and research. We facilitate engagement between government, manufacturers, and trading partners to identify barriers to industrial growth and develop actionable strategies for revitalization and sustainable export growth.`,
  },
]

// Recent events/programs
const recentPrograms = [
  {
    id: 1,
    title: '2025 International Business Conference',
    category: 'Economic Dialogues',
    date: '2025-03-15',
    location: 'Harare, Zimbabwe',
    theme: "Revitalizing Industrialization for Zimbabwe's Economic Resurgence",
    description:
      'A major international conference bringing together business leaders and policymakers to discuss industrial development strategies.',
    status: 'Upcoming',
  },
  {
    id: 2,
    title: '2025 Harare Provincial Development Dialogue',
    category: 'Economic Dialogues',
    date: '2025-06-19',
    location: 'Heritage Village, Harare',
    theme: 'Towards Inclusive Socio-Economic Transformation; Leaving No One and No Place Behind',
    description:
      'Provincial dialogue session addressing inclusive development and regional economic transformation.',
    status: 'Upcoming',
  },
  {
    id: 3,
    title: '2025 Dialogue on Drugs and Substance Abuse',
    category: 'Policy Research',
    date: '2025-07-30',
    location: 'Manna Resorts',
    theme:
      'From Addiction to Action: Addressing the Causes and Building Solutions for Drug Abuse in Zimbabwe',
    description:
      'Specialized dialogue addressing the growing challenge of drugs and substance abuse in Zimbabwe.',
    status: 'Upcoming',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

function ProgramsPage() {
  const [selectedProgram, setSelectedProgram] = useState<(typeof programCategories)[0] | null>(null)

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
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Our{' '}
              <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                Programs
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300">
              Driving socio-economic development through research, dialogue, and strategic
              partnerships
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Categories Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center"
          >
            Our Core{' '}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              Programs
            </span>
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {programCategories.map((program) => {
              const Icon = program.icon
              return (
                <motion.div
                  key={program.id}
                  variants={itemVariants}
                  onClick={() => setSelectedProgram(program)}
                  className="group relative bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-green-300 cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`inline-flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br ${program.color} group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-green-600 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{program.title}</h3>
                  <p className="text-slate-600 mb-6">{program.description}</p>

                  <div className="space-y-2">
                    {program.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Program Details Modal */}
      {selectedProgram && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProgram(null)}
          className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">{selectedProgram.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <span className="text-2xl">×</span>
                </button>
              </div>

              <p className="text-lg text-slate-600 mb-8">{selectedProgram.details}</p>

              <h3 className="text-xl font-bold text-slate-900 mb-4">Key Components</h3>
              <ul className="space-y-3 mb-8">
                {selectedProgram.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedProgram(null)}
                className="w-full px-4 py-1.5 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Recent Programs/Events */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center"
          >
            Upcoming{' '}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              Events
            </span>
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {recentPrograms.map((program) => (
              <motion.div
                key={program.id}
                variants={itemVariants}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6 space-y-4">
                  {/* Status Badge */}
                  <div className="inline-flex items-center gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      {program.status}
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      {program.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-green-600 transition-colors">
                    {program.title}
                  </h3>

                  {/* Theme */}
                  <p className="text-sm text-slate-600 italic">{program.theme}</p>

                  {/* Description */}
                  <p className="text-slate-600">{program.description}</p>

                  {/* Event Details */}
                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Calendar className="h-4 w-4 text-green-600" />
                      <span>
                        {new Date(program.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="h-4 w-4 text-green-600" />
                      <span>{program.location}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-4 py-1.5 mt-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-green-900 to-green-950 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center space-y-8 bg-gradient-to-br from-green-500/10 to-blue-500/10 p-12 rounded-2xl border border-green-500/20"
          >
            <h2 className="text-3xl font-bold">Get Involved</h2>
            <p className="text-lg text-slate-300">
              Join us in building a more inclusive and prosperous Zimbabwe through dialogue,
              research, and collaborative action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-1.5 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
              >
                Participate
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-1.5 border border-green-500 text-white font-semibold rounded-lg hover:bg-green-500/10 transition-all"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProgramsPage
