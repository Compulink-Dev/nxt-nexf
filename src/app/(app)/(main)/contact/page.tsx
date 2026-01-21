//@ts-nocheck
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Linkedin,
  Twitter,
  Globe,
  MessageSquare,
} from 'lucide-react'

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

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error')
      return
    }

    setFormStatus('loading')
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setTimeout(() => setFormStatus('idle'), 5000)
    }, 1500)
  }

  const officeLocations = [
    {
      name: 'Head Office',
      address: '34 Elizabeth Windsor Road, Marlborough, Harare',
      phone: '+263 242 700 000',
      email: 'info@necf.org.zw',
      hours: 'Mon - Fri: 8:00 AM - 5:00 PM',
      mapUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.8220877644346!2d31.00916862346899!3d-17.825383283173098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a5c5c5c5c5c5%3A0x0!2s34%20Elizabeth%20Windsor%20Road!5e0!3m2!1sen!2szw!4v1234567890',
    },
    {
      name: 'Research Department',
      address: 'Economic Research Centre, Harare',
      phone: '+263 242 700 001',
      email: 'research@necf.org.zw',
      hours: 'Mon - Fri: 8:00 AM - 5:00 PM',
    },
    {
      name: 'Capacity Building',
      address: 'Training Centre, Harare',
      phone: '+263 242 700 002',
      email: 'training@necf.org.zw',
      hours: 'Mon - Fri: 8:00 AM - 5:00 PM',
    },
  ]

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: "Send us an email and we'll respond within 24 hours",
      details: ['info@necf.org.zw', 'support@necf.org.zw'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Reach us by phone during business hours',
      details: ['+263 242 700 000', '+263 242 700 001'],
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Stop by our head office in Marlborough',
      details: ['34 Elizabeth Windsor Road', 'Harare, Zimbabwe'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      description: 'We are available during these times',
      details: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Saturday & Sunday: Closed'],
    },
  ]

  const faqItems = [
    {
      question: 'What services does NECF offer?',
      answer:
        "NECF provides economic research, policy dialogue platforms, capacity building programs, and stakeholder engagement services to support Zimbabwe's economic development.",
    },
    {
      question: 'How can I attend NECF dialogues?',
      answer:
        'You can register for our dialogues through our website or by contacting our engagement team directly. Check our events page for upcoming dialogues.',
    },
    {
      question: 'How long does it take to respond to inquiries?',
      answer:
        'We typically respond to all inquiries within 24 business hours. Urgent matters may be prioritized accordingly.',
    },
    {
      question: 'Can I request a custom research project?',
      answer:
        'Yes, we offer custom research services. Please contact our research department to discuss your specific requirements and budget.',
    },
  ]

  return (
    <div className="w-full text-slate-800">
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
              <MessageSquare className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Get In{' '}
              <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300">
              {`          Have a question or want to collaborate? We'd love to hear from you. Contact us today and let's work together.`}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactMethods.map((method, idx) => {
              const Icon = method.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:border-green-300 transition-all group"
                >
                  <div className="mb-4 p-3 bg-gradient-to-br from-green-100 to-green-50 rounded-lg w-fit group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{method.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{method.description}</p>
                  <div className="space-y-1">
                    {method.details.map((detail, i) => (
                      <p key={i} className="text-sm font-semibold text-slate-900">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Send us a Message</h2>
                <p className="text-lg text-slate-600">
                  {`                  Fill out the form below and we'll get back to you as soon as possible.`}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    disabled={formStatus === 'loading'}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all disabled:opacity-50"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    disabled={formStatus === 'loading'}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all disabled:opacity-50"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+263 242 000 000"
                    disabled={formStatus === 'loading'}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all disabled:opacity-50"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    disabled={formStatus === 'loading'}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all disabled:opacity-50 bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="research">Research Services</option>
                    <option value="training">Training Programs</option>
                    <option value="dialogue">Dialogue Events</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us how we can help..."
                    rows={5}
                    disabled={formStatus === 'loading'}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all disabled:opacity-50 resize-none"
                  />
                </div>

                {/* Status Messages */}
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <p className="text-sm font-semibold text-green-800">
                      Thank you! Your message has been sent successfully.
                    </p>
                  </motion.div>
                )}

                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <p className="text-sm font-semibold text-red-800">
                      Please fill in all required fields.
                    </p>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {formStatus === 'loading' ? (
                    <>
                      <span className="inline-block animate-spin">⌛</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Locations</h2>
                <p className="text-lg text-slate-600">Visit us at any of our offices.</p>
              </div>

              <div className="space-y-4">
                {officeLocations.map((location, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-green-300 transition-all"
                  >
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{location.name}</h3>
                    <div className="space-y-2">
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 text-slate-600 hover:text-green-600 transition-colors"
                      >
                        <MapPin className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{location.address}</span>
                      </a>
                      <a
                        href={`tel:${location.phone}`}
                        className="flex items-center gap-3 text-slate-600 hover:text-green-600 transition-colors"
                      >
                        <Phone className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span>{location.phone}</span>
                      </a>
                      <a
                        href={`mailto:${location.email}`}
                        className="flex items-center gap-3 text-slate-600 hover:text-green-600 transition-colors"
                      >
                        <Mail className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span>{location.email}</span>
                      </a>
                      <div className="flex items-center gap-3 text-slate-600">
                        <Clock className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span>{location.hours}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Find Us On The Map</h2>
              <p className="text-lg text-slate-600">Located in the heart of Harare</p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg h-[400px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.8220877644346!2d31.00916862346899!3d-17.825383283173098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a5c5c5c5c5c5%3A0x0!2s34%20Elizabeth%20Windsor%20Road%2C%20Marlborough!5e0!3m2!1sen!2szw!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-600">
                Find answers to common questions about NECF and our services.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {faqItems.map((item, idx) => (
                <motion.details
                  key={idx}
                  variants={itemVariants}
                  className="group border border-slate-200 rounded-xl overflow-hidden hover:border-green-300 transition-all"
                >
                  <summary className="px-6 py-4 cursor-pointer bg-slate-50 hover:bg-slate-100 transition-all font-semibold text-slate-900 flex items-center justify-between">
                    {item.question}
                    <span className="transform group-open:rotate-180 transition-transform text-green-600">
                      ▼
                    </span>
                  </summary>
                  <div className="px-6 py-4 bg-white text-slate-600 border-t border-slate-200">
                    {item.answer}
                  </div>
                </motion.details>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-green-800 to-green-700 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Collaborate?</h2>
            <p className="text-lg text-slate-300">
              {`              Whether you're interested in our research, want to participate in our dialogues, or explore partnership opportunities, we're here to help.`}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all inline-flex items-center gap-2"
            >
              <Mail className="h-5 w-5" />
              Start A Conversation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
