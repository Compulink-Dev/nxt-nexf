//@ts-nocheck
import React from 'react'
import { motion } from 'framer-motion'

export function LoadingSkeleton() {
  const skeletonVariants = {
    animate: {
      backgroundPosition: ['200% center', '-200% center'],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      {/* Header Skeleton */}
      <div className="h-20 bg-slate-200 border-b border-slate-300" />

      {/* Hero Skeleton */}
      <div className="h-96 bg-gradient-to-b from-slate-200 to-slate-100" />

      {/* Content Skeleton */}
      <div className="container mx-auto px-4 py-16 space-y-8">
        {/* Section 1 */}
        <div className="space-y-4">
          <motion.div
            variants={skeletonVariants}
            animate="animate"
            className="h-8 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded w-48"
            style={{ backgroundSize: '200% center' }}
          />
          <motion.div
            variants={skeletonVariants}
            animate="animate"
            className="h-4 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded w-full"
            style={{ backgroundSize: '200% center' }}
          />
          <motion.div
            variants={skeletonVariants}
            animate="animate"
            className="h-4 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded w-5/6"
            style={{ backgroundSize: '200% center' }}
          />
        </div>

        {/* Section 2 - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <motion.div key={i} className="space-y-4">
              <motion.div
                variants={skeletonVariants}
                animate="animate"
                className="h-48 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded-lg"
                style={{ backgroundSize: '200% center' }}
              />
              <motion.div
                variants={skeletonVariants}
                animate="animate"
                className="h-4 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded"
                style={{ backgroundSize: '200% center' }}
              />
              <motion.div
                variants={skeletonVariants}
                animate="animate"
                className="h-4 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded w-5/6"
                style={{ backgroundSize: '200% center' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Section 3 */}
        <div className="space-y-4">
          <motion.div
            variants={skeletonVariants}
            animate="animate"
            className="h-8 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded w-48"
            style={{ backgroundSize: '200% center' }}
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                variants={skeletonVariants}
                animate="animate"
                className="h-24 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded-lg"
                style={{ backgroundSize: '200% center' }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer Skeleton */}
      <div className="h-40 bg-slate-200 border-t border-slate-300" />
    </motion.div>
  )
}

export default LoadingSkeleton
