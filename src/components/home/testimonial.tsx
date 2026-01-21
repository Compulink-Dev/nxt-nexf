// components/home/Testimonial.tsx
'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Quote, Star, ChevronLeft, ChevronRight, User, Building2, Calendar } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  content: string
  rating: number
  date: string
  image?: string
}

export default function Testimonial() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/api/testimonials?status=published')
        const data = await response.json()
        setTestimonials(data.docs || [])
      } catch (error) {
        console.error('Failed to fetch testimonials:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchTestimonials()
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  if (isLoading) {
    return (
      <div className="py-16 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading testimonials...</p>
      </div>
    )
  }

  if (!testimonials.length) {
    return null
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">
            <Quote className="h-3 w-3 mr-1" />
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What People Say About Us
          </h2>
          <Separator className="w-24 h-1 bg-green-600 mx-auto" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Hear from our partners, stakeholders, and collaborators about their experience working
            with NECF.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-none shadow-xl bg-gradient-to-r from-white to-green-50/30">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Quote Icon or Image */}
                    <div className="lg:w-1/4 flex justify-center">
                      <div className="relative">
                        {currentTestimonial.image ? (
                          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <Image
                              src={currentTestimonial.image}
                              alt={currentTestimonial.name}
                              width={96}
                              height={96}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        ) : (
                          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                            <Quote className="h-12 w-12 text-green-600" />
                          </div>
                        )}
                        <div className="absolute -top-2 -right-2">
                          <Badge className="bg-green-600">
                            {currentIndex + 1}/{testimonials.length}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-3/4">
                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < currentTestimonial.rating
                                ? 'text-yellow-500 fill-yellow-500'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6">
                        {currentTestimonial.content}
                      </blockquote>

                      {/* Author Info */}
                      <div className="border-t pt-6">
                        <div className="flex items-center gap-4">
                          <div className="bg-green-100 p-3 rounded-full">
                            <User className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              {currentTestimonial.name}
                            </h4>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Building2 className="h-4 w-4" />
                              {currentTestimonial.role}, {currentTestimonial.company}
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(currentTestimonial.date).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
              disabled={testimonials.length <= 1}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === idx ? 'bg-green-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
              disabled={testimonials.length <= 1}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
