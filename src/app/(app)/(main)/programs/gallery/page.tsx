//@ts-nocheck
'use client'

import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import {
  X,
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  Grid2X2,
  LayoutList,
  Search,
  Filter,
} from 'lucide-react'

// Sample gallery data - will be replaced with Payload CMS data
const galleryImages = [
  {
    id: 1,
    title: 'International Business Conference 2025',
    category: 'Conferences',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    date: '2025-03-15',
    description: 'Opening ceremony of the International Business Conference',
  },
  {
    id: 2,
    title: 'Harare Provincial Dialogue',
    category: 'Dialogues',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    date: '2025-06-19',
    description: 'Provincial stakeholders in discussion',
  },
  {
    id: 3,
    title: 'Economic Policy Workshop',
    category: 'Workshops',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    date: '2025-02-10',
    description: 'Capacity building workshop session',
  },
  {
    id: 4,
    title: 'Panel Discussion on Trade',
    category: 'Dialogues',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    date: '2025-01-20',
    description: 'Expert panel discussing trade opportunities',
  },
  {
    id: 5,
    title: 'Research Presentation',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    date: '2024-12-05',
    description: 'Key findings from economic research',
  },
  {
    id: 6,
    title: 'Stakeholder Meeting',
    category: 'Meetings',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    date: '2024-11-28',
    description: 'Multi-sectoral stakeholder engagement',
  },
  {
    id: 7,
    title: 'Youth Economic Forum',
    category: 'Forums',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    date: '2024-11-10',
    description: 'Young professionals discussing economic challenges',
  },
  {
    id: 8,
    title: 'Industrial Development Meeting',
    category: 'Conferences',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    date: '2024-10-15',
    description: 'Industry leaders collaboration session',
  },
  {
    id: 9,
    title: 'Finance and Investment Dialogue',
    category: 'Dialogues',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    date: '2024-09-22',
    description: 'Discussion on investment opportunities',
  },
]

const categories = ['All', ...new Set(galleryImages.map((img) => img.category))]

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

type GridLayout = 'grid-3' | 'grid-2' | 'list'

function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [gridLayout, setGridLayout] = useState<GridLayout>('grid-3')

  const filteredImages = useMemo(() => {
    return galleryImages.filter((img) => {
      const matchesCategory = activeCategory === 'All' || img.category === activeCategory
      const matchesSearch =
        img.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        img.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  const getGridClass = () => {
    switch (gridLayout) {
      case 'grid-2':
        return 'grid-cols-1 md:grid-cols-2 gap-6'
      case 'list':
        return 'grid-cols-1 gap-4'
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
    }
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Event{' '}
              <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300">
              Moments from NECF events, dialogues, and program activities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 lg:py-12 bg-white border-b border-slate-200 sticky top-16 z-30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="space-y-6">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search gallery by title or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              />
            </motion.div>

            {/* Category Filter and View Options */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
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
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
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

              {/* View Toggle */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg"
              >
                <button
                  onClick={() => setGridLayout('grid-3')}
                  className={`p-2 rounded transition-all ${
                    gridLayout === 'grid-3'
                      ? 'bg-white text-green-600 shadow'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="3-column grid"
                >
                  <Grid3X3 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setGridLayout('grid-2')}
                  className={`p-2 rounded transition-all ${
                    gridLayout === 'grid-2'
                      ? 'bg-white text-green-600 shadow'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="2-column grid"
                >
                  <Grid2X2 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setGridLayout('list')}
                  className={`p-2 rounded transition-all ${
                    gridLayout === 'list'
                      ? 'bg-white text-green-600 shadow'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="List view"
                >
                  <LayoutList className="h-5 w-5" />
                </button>
              </motion.div>
            </div>

            {/* Results count */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm text-slate-600"
            >
              Showing {filteredImages.length} image{filteredImages.length !== 1 ? 's' : ''}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          {filteredImages.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={`grid ${getGridClass()} max-w-7xl mx-auto`}
            >
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  onClick={() => setSelectedImage(image)}
                  className={`group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer ${
                    gridLayout === 'list' ? 'flex' : ''
                  }`}
                >
                  {/* Image Container */}
                  <div
                    className={`relative bg-slate-200 overflow-hidden ${
                      gridLayout === 'list' ? 'w-48 h-40 flex-shrink-0' : 'w-full h-48'
                    }`}
                  >
                    <Image
                      src={image.image}
                      alt={image.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white text-sm font-semibold">View</span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-green-600 text-white rounded-full text-xs font-semibold">
                        {image.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-4 flex-1 flex flex-col ${gridLayout === 'list' ? '' : ''}`}>
                    <h3 className="font-bold text-slate-900 group-hover:text-green-600 transition-colors line-clamp-2">
                      {image.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {new Date(image.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                    {gridLayout === 'list' && (
                      <p className="text-sm text-slate-600 mt-2 line-clamp-2">
                        {image.description}
                      </p>
                    )}
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
              <div className="text-6xl">📷</div>
              <h3 className="text-xl font-semibold text-slate-900">No images found</h3>
              <p className="text-slate-600">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-green-400 transition-colors"
              >
                <X className="h-8 w-8" />
              </motion.button>

              {/* Navigation Buttons */}
              {filteredImages.length > 1 && (
                <>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      const currentIndex = filteredImages.findIndex(
                        (img) => img.id === selectedImage.id,
                      )
                      const prevIndex =
                        currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
                      setSelectedImage(filteredImages[prevIndex])
                    }}
                    className="absolute -left-16 top-1/2 -translate-y-1/2 text-white hover:text-green-400 transition-colors"
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      const currentIndex = filteredImages.findIndex(
                        (img) => img.id === selectedImage.id,
                      )
                      const nextIndex =
                        currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1
                      setSelectedImage(filteredImages[nextIndex])
                    }}
                    className="absolute -right-16 top-1/2 -translate-y-1/2 text-white hover:text-green-400 transition-colors"
                  >
                    <ChevronRight className="h-8 w-8" />
                  </motion.button>
                </>
              )}

              {/* Image Container */}
              <div className="relative w-full h-full bg-black rounded-lg overflow-hidden mb-6">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Image Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900 rounded-lg p-6 text-white space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">{selectedImage.title}</h2>
                    <p className="text-slate-400 mt-1">
                      {new Date(selectedImage.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                  <span className="px-4 py-2 bg-green-600 rounded-lg font-semibold">
                    {selectedImage.category}
                  </span>
                </div>
                <p className="text-slate-300">{selectedImage.description}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default GalleryPage
