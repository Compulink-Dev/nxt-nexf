//@ts-nocheck
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Download as DownloadIcon,
  FileText,
  FileUp,
  Calendar,
  Search,
  Filter,
  ExternalLink,
} from 'lucide-react'
import { Input } from '@/components/ui/input'

// Sample documents data
const documents = [
  {
    id: 1,
    title: 'National Development Strategy Report 2024',
    category: 'Reports',
    date: '2024-12-15',
    size: '2.4 MB',
    format: 'PDF',
    description: 'Comprehensive report on national economic development strategies and initiatives',
    url: '#',
  },
  {
    id: 2,
    title: 'Transitional Stabilisation Programme Implementation',
    category: 'Reports',
    date: '2024-11-20',
    size: '3.1 MB',
    format: 'PDF',
    description: 'Detailed analysis of TSP implementation progress and outcomes',
    url: '#',
  },
  {
    id: 3,
    title: 'Economic Dialogue Recommendations 2024',
    category: 'Recommendations',
    date: '2024-10-05',
    size: '1.8 MB',
    format: 'PDF',
    description: 'Key recommendations from national economic dialogues',
    url: '#',
  },
  {
    id: 4,
    title: 'Annual Report 2023-2024',
    category: 'Reports',
    date: '2024-09-30',
    size: '4.2 MB',
    format: 'PDF',
    description: 'NECF annual performance and activities report',
    url: '#',
  },
  {
    id: 5,
    title: 'Policy Brief: Industrial Development',
    category: 'Policy Briefs',
    date: '2024-08-15',
    size: '1.2 MB',
    format: 'PDF',
    description: 'Strategic policy recommendations for industrial sector growth',
    url: '#',
  },
  {
    id: 6,
    title: 'Research Paper: Labour Market Trends',
    category: 'Research Papers',
    date: '2024-07-20',
    size: '2.7 MB',
    format: 'PDF',
    description: 'Comprehensive analysis of Zimbabwe labour market dynamics',
    url: '#',
  },
  {
    id: 7,
    title: 'Financial Services Dialogue Summary',
    category: 'Dialogues',
    date: '2024-06-10',
    size: '1.5 MB',
    format: 'PDF',
    description: 'Summary of stakeholder engagements on financial sector reforms',
    url: '#',
  },
  {
    id: 8,
    title: 'Agricultural Sector Development Framework',
    category: 'Frameworks',
    date: '2024-05-25',
    size: '3.5 MB',
    format: 'PDF',
    description: 'Comprehensive framework for agricultural sector modernisation',
    url: '#',
  },
  {
    id: 9,
    title: 'Trade and Investment Opportunities Guide',
    category: 'Guides',
    date: '2024-04-18',
    size: '2.1 MB',
    format: 'PDF',
    description: 'Strategic guide for investors and traders',
    url: '#',
  },
]

const categories = ['All', ...new Set(documents.map((doc) => doc.category))]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

function DownloadPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredDocuments = documents.filter((doc) => {
    const matchesCategory = activeCategory === 'All' || doc.category === activeCategory
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
              <DownloadIcon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Resources &{' '}
              <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                Downloads
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300">
              Access reports, policy briefs, research papers, and other resources from NECF
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 lg:py-12 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Search className="absolute left-4 top-2.5 h-5 w-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search documents by title or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              />
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 flex-wrap"
            >
              <Filter className="h-5 w-5 text-slate-600" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-3 py-1 rounded-lg font-medium transition-all duration-200 ${
                      activeCategory === category
                        ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Results count */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm text-slate-600"
            >
              Showing {filteredDocuments.length} document{filteredDocuments.length !== 1 ? 's' : ''}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          {filteredDocuments.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {filteredDocuments.map((doc) => (
                <motion.div
                  key={doc.id}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Background accent */}
                  <div className="absolute -right-12 -top-12 w-24 h-24 bg-gradient-to-br from-green-100 to-green-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="relative space-y-4">
                    {/* Category Badge */}
                    <div className="inline-flex items-center gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                        {doc.category}
                      </span>
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                        {doc.format}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-green-600 transition-colors">
                      {doc.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600">{doc.description}</p>

                    {/* Metadata */}
                    <div className="flex items-center gap-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(doc.date).toLocaleDateString()}
                      </div>
                      <div>{doc.size}</div>
                    </div>

                    {/* Download Button */}
                    <motion.a
                      href={doc.url}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 mt-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 group/btn"
                    >
                      <DownloadIcon className="h-4 w-4 group-hover/btn:translate-y-0.5 transition-transform" />
                      Download
                    </motion.a>
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
              <FileText className="h-16 w-16 text-slate-300 mx-auto" />
              <h3 className="text-xl font-semibold text-slate-900">No documents found</h3>
              <p className="text-slate-600">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-slate-900">About Our Resources</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {` NECF provides comprehensive resources including research reports, policy briefs,
                dialogue summaries, and strategic frameworks to support evidence-based
                decision-making in Zimbabwe's economic development.`}
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                All documents are freely available for download and can be used for research,
                policy-making, and educational purposes. For more information about specific
                resources or to request additional documents, please contact us.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3 mt-6 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
              >
                Request a Resource
                <ExternalLink className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DownloadPage
