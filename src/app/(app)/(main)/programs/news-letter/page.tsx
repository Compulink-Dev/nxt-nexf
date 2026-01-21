//@ts-nocheck
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  ArrowRight,
  Check,
  Zap,
  Calendar,
  Users,
  FileText,
  Search,
  Eye,
  Download,
} from 'lucide-react'

// Newsletter editions data
const newsletters = [
  {
    id: 1,
    title: 'NECF Newsletter - January 2025',
    edition: 'Vol. 12, No. 1',
    date: '2025-01-15',
    month: 'January 2025',
    highlights: [
      'International Business Conference 2025 Announcement',
      'Economic Policy Update',
      'New Research Findings Released',
    ],
    preview:
      "Kicking off 2025 with major announcements and insights on Zimbabwe's economic direction.",
    subscribers: 2450,
    readTime: '5 min read',
    url: '#',
    pdf: '#',
  },
  {
    id: 2,
    title: 'NECF Newsletter - December 2024',
    edition: 'Vol. 11, No. 12',
    date: '2024-12-10',
    month: 'December 2024',
    highlights: [
      'Year-End Economic Review',
      'Upcoming Dialogues Schedule',
      'Research Paper Summary',
    ],
    preview: "A comprehensive review of 2024's economic activities and what to expect in 2025.",
    subscribers: 2180,
    readTime: '7 min read',
    url: '#',
    pdf: '#',
  },
  {
    id: 3,
    title: 'NECF Newsletter - November 2024',
    edition: 'Vol. 11, No. 11',
    date: '2024-11-12',
    month: 'November 2024',
    highlights: [
      'Provincial Dialogue Updates',
      'Industry Partnership News',
      'Policy Brief Highlights',
    ],
    preview: "Updates from November's provincial dialogues and industry partnerships.",
    subscribers: 2050,
    readTime: '6 min read',
    url: '#',
    pdf: '#',
  },
  {
    id: 4,
    title: 'NECF Newsletter - October 2024',
    edition: 'Vol. 11, No. 10',
    date: '2024-10-08',
    month: 'October 2024',
    highlights: [
      'Trade & Investment Forum',
      'Capacity Building Initiative',
      'Research Collaboration',
    ],
    preview: "Highlights from October's trade forum and capacity building workshops.",
    subscribers: 1920,
    readTime: '6 min read',
    url: '#',
    pdf: '#',
  },
  {
    id: 5,
    title: 'NECF Newsletter - September 2024',
    edition: 'Vol. 11, No. 9',
    date: '2024-09-10',
    month: 'September 2024',
    highlights: ['Economic Outlook Report', 'Stakeholder Forum Results', 'New Research Projects'],
    preview: 'September insights into economic trends and stakeholder engagement outcomes.',
    subscribers: 1850,
    readTime: '5 min read',
    url: '#',
    pdf: '#',
  },
  {
    id: 6,
    title: 'NECF Newsletter - August 2024',
    edition: 'Vol. 11, No. 8',
    date: '2024-08-13',
    month: 'August 2024',
    highlights: ['Policy Recommendations', 'Industry Updates', 'Dialogue Summary'],
    preview: 'August edition featuring policy recommendations and industry sector updates.',
    subscribers: 1720,
    readTime: '6 min read',
    url: '#',
    pdf: '#',
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

type SubscriptionStatus = 'idle' | 'loading' | 'success' | 'error'

function NewsletterPage() {
  const [email, setEmail] = useState('')
  const [subscriptionStatus, setSubscriptionStatus] = useState<SubscriptionStatus>('idle')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredNewsletters = newsletters.filter(
    (nl) =>
      nl.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      nl.month.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setSubscriptionStatus('loading')
    // Simulate API call
    setTimeout(() => {
      setSubscriptionStatus('success')
      setEmail('')
      setTimeout(() => setSubscriptionStatus('idle'), 5000)
    }, 1500)
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-500">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              NECF{' '}
              <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                Newsletter
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300">
              Stay informed with monthly updates on economic developments, dialogues, and research
              from NECF
            </p>
          </motion.div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl p-8 lg:p-12 text-white space-y-8 border border-green-500/20">
              <div className="space-y-3">
                <h2 className="text-3xl lg:text-4xl font-bold">Subscribe to Our Newsletter</h2>
                <p className="text-slate-300 text-lg">
                  Get monthly insights on economic policy, research findings, and NECF activities
                  delivered to your inbox.
                </p>
              </div>

              {/* Subscribe Form */}
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={subscriptionStatus === 'loading'}
                    className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all disabled:opacity-50"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={subscriptionStatus === 'loading'}
                    className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    {subscriptionStatus === 'loading' ? (
                      <>
                        <span className="inline-block animate-spin">⌛</span>
                        Subscribing...
                      </>
                    ) : subscriptionStatus === 'success' ? (
                      <>
                        <Check className="h-5 w-5" />
                        Subscribed!
                      </>
                    ) : (
                      <>
                        <Mail className="h-5 w-5" />
                        Subscribe
                      </>
                    )}
                  </motion.button>
                </div>
                <p className="text-xs text-slate-400">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-700">
                {[
                  { icon: Zap, label: 'Monthly Updates' },
                  { icon: FileText, label: 'Research & Insights' },
                  { icon: Users, label: 'Event Announcements' },
                ].map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <div key={idx} className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{item.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Archive Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Newsletter Archive</h2>
              <p className="text-lg text-slate-600">Access all past editions and stay caught up</p>
            </div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative max-w-md"
            >
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search newsletters..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              />
            </motion.div>
          </motion.div>

          {/* Newsletter List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 mt-12"
          >
            {filteredNewsletters.length > 0 ? (
              filteredNewsletters.map((newsletter) => (
                <motion.div
                  key={newsletter.id}
                  variants={itemVariants}
                  className="group bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-2xl p-6 lg:p-8 hover:shadow-lg hover:border-green-300 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
                    {/* Left Section */}
                    <div className="lg:col-span-2 space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                            {newsletter.edition}
                          </span>
                          <span className="text-sm text-slate-600 flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(newsletter.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </span>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                          {newsletter.title}
                        </h3>
                      </div>

                      <p className="text-slate-600 text-base">{newsletter.preview}</p>

                      {/* Highlights */}
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-slate-700">In this edition:</p>
                        <ul className="space-y-1">
                          {newsletter.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                              <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Section */}
                    <div className="lg:col-span-2 flex flex-col justify-between">
                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-white rounded-lg p-4 border border-slate-200">
                          <p className="text-2xl font-bold text-slate-900">
                            {newsletter.subscribers}
                          </p>
                          <p className="text-xs text-slate-600">Subscribers</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-slate-200">
                          <p className="text-sm font-semibold text-slate-900">
                            {newsletter.readTime}
                          </p>
                          <p className="text-xs text-slate-600">Reading time</p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3">
                        <motion.a
                          href={newsletter.url}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 px-4 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                        >
                          <Eye className="h-4 w-4" />
                          Read
                        </motion.a>
                        <motion.a
                          href={newsletter.pdf}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 px-4 py-3 bg-white border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                        >
                          <Download className="h-4 w-4" />
                          PDF
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16 space-y-4"
              >
                <FileText className="h-16 w-16 text-slate-300 mx-auto" />
                <h3 className="text-xl font-semibold text-slate-900">No newsletters found</h3>
                <p className="text-slate-600">Try adjusting your search query</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-slate-900">About Our Newsletter</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {`   The NECF Newsletter is published monthly and provides subscribers with curated
                content on Zimbabwe's economic developments, policy recommendations, research
                findings, and updates on NECF activities.`}
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                {`     Each edition features highlights from our dialogues, insights from our research
                teams, announcements of upcoming events, and policy recommendations aimed at
                supporting Zimbabwe's sustainable economic development.`}
              </p>
              <div className="pt-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">{`What You'll Receive:`}</h3>
                <ul className="space-y-2">
                  {[
                    'Monthly economic analysis and policy briefs',
                    'Highlights from NECF dialogues and events',
                    'Research findings and insights',
                    'Upcoming event announcements',
                    'Resources and downloadable reports',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsletterPage
