//@ts-nocheck
'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Linkedin, Twitter, Phone, MapPin, Search, X, Users, Briefcase } from 'lucide-react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'

// Team members data
const teamMembers = [
  {
    id: 1,
    name: 'Dr. John Mushayavanhu',
    role: 'Executive Director',
    department: 'Leadership',
    bio: 'Leading the National Economic Consultative Forum with over 15 years of experience in economic policy and development.',
    email: 'john@necf.org.zw',
    phone: '+263 242 700 000',
    location: 'Harare, Zimbabwe',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 2,
    name: 'Ms. Thandeka Zuma',
    role: 'Director of Research',
    department: 'Research & Policy',
    bio: 'Oversees all research initiatives and policy development programs at NECF with expertise in macroeconomics.',
    email: 'thandeka@necf.org.zw',
    phone: '+263 242 700 000',
    location: 'Harare, Zimbabwe',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 3,
    name: 'Mr. Tendai Moyo',
    role: 'Director of Capacity Building',
    department: 'Training & Development',
    bio: 'Leads capacity building initiatives and training programs across the region with a focus on skills development.',
    email: 'tendai@necf.org.zw',
    phone: '+263 242 700 000',
    location: 'Harare, Zimbabwe',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 4,
    name: 'Dr. Faith Munyaradzi',
    role: 'Senior Economist',
    department: 'Research & Policy',
    bio: 'Specializes in monetary policy and financial system analysis with published research across leading journals.',
    email: 'faith@necf.org.zw',
    phone: '+263 242 700 000',
    location: 'Harare, Zimbabwe',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 5,
    name: 'Mr. Simba Ncube',
    role: 'Head of Dialogues',
    department: 'Engagement',
    bio: 'Manages stakeholder engagement and dialogue programs, fostering dialogue between government, industry, and civil society.',
    email: 'simba@necf.org.zw',
    phone: '+263 242 700 000',
    location: 'Harare, Zimbabwe',
    image: 'https://images.unsplash.com/photo-1507539332640-34be94ba1d12?w=400&h=400&fit=crop',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 6,
    name: 'Ms. Chipo Mutori',
    role: 'Communications Manager',
    department: 'Communications',
    bio: 'Oversees all internal and external communications, ensuring consistent messaging and brand representation.',
    email: 'chipo@necf.org.zw',
    phone: '+263 242 700 000',
    location: 'Harare, Zimbabwe',
    image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 7,
    name: 'Mr. Kudakwashe Mhandu',
    role: 'Finance Director',
    department: 'Finance & Administration',
    bio: 'Manages financial operations and ensures efficient resource allocation across all organizational programs.',
    email: 'kudakwashe@necf.org.zw',
    phone: '+263 242 700 000',
    location: 'Harare, Zimbabwe',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 8,
    name: 'Ms. Nomvula Dlamini',
    role: 'Operations Manager',
    department: 'Finance & Administration',
    bio: 'Coordinates operational activities and ensures smooth functioning of organizational processes and systems.',
    email: 'nomvula@necf.org.zw',
    phone: '+263 242 700 000',
    location: 'Harare, Zimbabwe',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 9,
    name: 'Mr. Mandla Khumalo',
    role: 'Research Analyst',
    department: 'Research & Policy',
    bio: 'Contributes to research initiatives focusing on trade policy and industrial development strategies.',
    email: 'mandla@necf.org.zw',
    phone: '+263 242 700 000',
    location: 'Harare, Zimbabwe',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 10,
    name: 'Ms. Patience Muvuti',
    role: 'Capacity Building Officer',
    department: 'Training & Development',
    bio: 'Designs and implements training programs in partnership with industry and educational institutions.',
    email: 'patience@necf.org.zw',
    phone: '+263 242 700 000',
    location: 'Harare, Zimbabwe',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
]

// Group team by department
const departments = [
  'Leadership',
  'Research & Policy',
  'Training & Development',
  'Engagement',
  'Communications',
  'Finance & Administration',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
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

interface SelectedMember {
  id: number
}

function TeamPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All')
  const [selectedMember, setSelectedMember] = useState<SelectedMember | null>(null)

  const filteredMembers = teamMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.department.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesDepartment =
      selectedDepartment === 'All' || member.department === selectedDepartment

    return matchesSearch && matchesDepartment
  })

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-900 via-green-900 to-green-800 text-slate-800 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-500">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              NECF{' '}
              <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300">
              {`Meet the dedicated professionals driving Zimbabwe's economic development through
              research, dialogue, and capacity building`}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1.5 h-5 w-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search team members..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Department Filter */}
            <div className="flex flex-wrap gap-3">
              {['All', ...departments].map((dept) => (
                <motion.button
                  key={dept}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all ${
                    selectedDepartment === dept
                      ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {dept}
                </motion.button>
              ))}
            </div>

            {/* Results Count */}
            <p className="text-sm text-slate-600">
              Showing <span className="font-semibold text-slate-900">{filteredMembers.length}</span>{' '}
              team {filteredMembers.length === 1 ? 'member' : 'members'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          {filteredMembers.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredMembers.map((member) => (
                <motion.div
                  key={member.id}
                  variants={itemVariants}
                  onClick={() => setSelectedMember({ id: member.id })}
                  className="group cursor-pointer"
                >
                  <div className="relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-green-300 transition-all duration-300 h-full flex flex-col">
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow space-y-3">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-green-600 transition-colors line-clamp-2">
                          {member.name}
                        </h3>
                        <p className="text-sm text-green-600 font-semibold">{member.role}</p>
                      </div>

                      <p className="text-xs text-slate-500 bg-slate-100 inline-block px-3 py-1 rounded-full w-fit">
                        {member.department}
                      </p>

                      <p className="text-sm text-slate-600 line-clamp-2 flex-grow">{member.bio}</p>

                      {/* Contact Info */}
                      <div className="pt-4 space-y-2 border-t border-slate-100 text-slate-600">
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-2 text-xs  hover:text-green-600 transition-colors"
                        >
                          <Mail className="h-4 w-4" />
                          <span className="truncate">{member.email}</span>
                        </a>
                        <a
                          href={`tel:${member.phone}`}
                          className="flex items-center gap-2 text-xs  hover:text-green-600 transition-colors"
                        >
                          <Phone className="h-4 w-4" />
                          <span>{member.phone}</span>
                        </a>
                      </div>

                      {/* Social Links */}
                      <div className="flex gap-2 pt-2 text-slate-600">
                        {member.socials.linkedin && (
                          <motion.a
                            href={member.socials.linkedin}
                            whileHover={{ scale: 1.1 }}
                            className="p-2 bg-slate-100 hover:bg-green-100 hover:text-green-600 rounded-lg transition-all"
                          >
                            <Linkedin className="h-4 w-4" />
                          </motion.a>
                        )}
                        {member.socials.twitter && (
                          <motion.a
                            href={member.socials.twitter}
                            whileHover={{ scale: 1.1 }}
                            className="p-2 bg-slate-100 hover:bg-green-100 hover:text-green-600 rounded-lg transition-all"
                          >
                            <Twitter className="h-4 w-4" />
                          </motion.a>
                        )}
                      </div>
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
              <Users className="h-16 w-16 text-slate-300 mx-auto" />
              <h3 className="text-xl font-semibold text-slate-900">No team members found</h3>
              <p className="text-slate-600">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Team Member Detail Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {(() => {
                const member = teamMembers.find((m) => m.id === selectedMember.id)
                if (!member) return null

                return (
                  <div>
                    {/* Close Button */}
                    <div className="sticky top-0 flex justify-end p-4 bg-white border-b border-slate-200 z-10">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedMember(null)}
                        className="p-2 hover:bg-slate-100 rounded-lg transition-all"
                      >
                        <X className="h-6 w-6 text-slate-600" />
                      </motion.button>
                    </div>

                    {/* Modal Content */}
                    <div className="p-8 space-y-6">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row gap-6">
                        {/* Image */}
                        <div className="relative h-32 w-32 rounded-xl overflow-hidden flex-shrink-0">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-grow space-y-2">
                          <h2 className="text-3xl font-bold text-slate-900">{member.name}</h2>
                          <p className="text-lg text-green-600 font-semibold">{member.role}</p>
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                              {member.department}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Bio */}
                      <div className="space-y-2 border-t border-slate-200 pt-6">
                        <h3 className="text-lg font-bold text-slate-900">About</h3>
                        <p className="text-base text-slate-600 leading-relaxed">{member.bio}</p>
                      </div>

                      {/* Contact Section */}
                      <div className="space-y-3 border-t border-slate-200 pt-6">
                        <h3 className="text-lg font-bold text-slate-900">Contact</h3>
                        <div className="space-y-3">
                          <a
                            href={`mailto:${member.email}`}
                            className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-green-50 transition-all"
                          >
                            <Mail className="h-5 w-5 text-green-600 flex-shrink-0" />
                            <div>
                              <p className="text-xs text-slate-500">Email</p>
                              <p className="font-semibold text-slate-900">{member.email}</p>
                            </div>
                          </a>
                          <a
                            href={`tel:${member.phone}`}
                            className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-green-50 transition-all"
                          >
                            <Phone className="h-5 w-5 text-green-600 flex-shrink-0" />
                            <div>
                              <p className="text-xs text-slate-500">Phone</p>
                              <p className="font-semibold text-slate-900">{member.phone}</p>
                            </div>
                          </a>
                          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                            <MapPin className="h-5 w-5 text-green-600 flex-shrink-0" />
                            <div>
                              <p className="text-xs text-slate-500">Location</p>
                              <p className="font-semibold text-slate-900">{member.location}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Social Links */}
                      {(member.socials.linkedin || member.socials.twitter) && (
                        <div className="space-y-3 border-t border-slate-200 pt-6">
                          <h3 className="text-lg font-bold text-slate-900">Connect</h3>
                          <div className="flex gap-3">
                            {member.socials.linkedin && (
                              <motion.a
                                href={member.socials.linkedin}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 px-4 py-3 bg-blue-50 text-blue-700! rounded-lg hover:bg-blue-100 transition-all font-semibold"
                              >
                                <Linkedin className="h-5 w-5" />
                                LinkedIn
                              </motion.a>
                            )}
                            {member.socials.twitter && (
                              <motion.a
                                href={member.socials.twitter}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 px-4 py-3 bg-sky-50 text-sky-700! rounded-lg hover:bg-sky-100 transition-all font-semibold"
                              >
                                <Twitter className="h-5 w-5" />
                                Twitter
                              </motion.a>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Organization Structure Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Organization Structure
              </h2>
              <p className="text-lg text-slate-600">
                NECF is organized into departments focused on delivering our core mission of
                economic development through dialogue, research, and capacity building.
              </p>
            </div>

            {/* Departments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, idx) => {
                const deptMembers = teamMembers.filter((m) => m.department === dept)
                return (
                  <motion.div
                    key={dept}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-green-300 transition-all"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-green-100 to-green-50 rounded-lg">
                        <Briefcase className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{dept}</h3>
                        <p className="text-sm text-slate-600">{deptMembers.length} team members</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">
                      {dept === 'Leadership' &&
                        'Provides strategic direction and organizational oversight'}
                      {dept === 'Research & Policy' &&
                        'Conducts economic research and policy analysis'}
                      {dept === 'Training & Development' &&
                        'Designs and delivers capacity building programs'}
                      {dept === 'Engagement' &&
                        'Manages stakeholder relationships and dialogue initiatives'}
                      {dept === 'Communications' && 'Handles internal and external communications'}
                      {dept === 'Finance & Administration' &&
                        'Manages finances and operational efficiency'}
                    </p>
                    <ul className="space-y-2">
                      {deptMembers.slice(0, 3).map((member) => (
                        <li key={member.id} className="text-sm text-slate-600">
                          <span className="font-semibold text-slate-900">{member.name}</span>
                          <p className="text-xs text-slate-500">{member.role}</p>
                        </li>
                      ))}
                      {deptMembers.length > 3 && (
                        <li className="text-xs text-green-600 font-semibold">
                          +{deptMembers.length - 3} more
                        </li>
                      )}
                    </ul>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TeamPage
