// components/HeroSection.tsx
'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Skeleton } from '@/components/ui/skeleton'

interface Section {
  id: string
  title: string
  title2?: string
  image: {
    url: string
    alt?: string
  }
}

export default function HeroSection() {
  const [sections, setSections] = useState<Section[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const response = await fetch('/api/sections')
        const data = await response.json()

        if (data.success && data.sections) {
          const formattedSections = data.sections.map((section: any) => ({
            id: section.id,
            title: section.title,
            title2: section.title2,
            image: {
              url: typeof section.image === 'object' ? section.image.url : section.image,
              alt: section.title || 'NECF Section',
            },
          }))
          setSections(formattedSections)
        } else {
          setError(data.error || 'Failed to load sections')
        }
      } catch (err) {
        setError('Failed to connect to server')
        console.error('Fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchSections()
  }, [])

  if (loading) {
    return (
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <Card className="border-none shadow-lg overflow-hidden bg-gradient-to-r from-white to-green-50/50">
            <CardContent className="p-0">
              <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-6 lg:p-12">
                <Skeleton className="lg:w-1/2 h-64 rounded-2xl" />
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Separator className="w-12 bg-green-600" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <Skeleton className="h-10 w-48" />
                  <Skeleton className="h-20 w-full" />
                  <Skeleton className="h-12 w-32 mt-4" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  if (error || !sections.length) {
    return (
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <Card className="border-none shadow-lg overflow-hidden bg-gradient-to-r from-white to-green-50/50">
            <CardContent className="p-0">
              <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-6 lg:p-12">
                <div className="lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-green-100 to-green-200 h-64 md:h-80 flex items-center justify-center">
                    <div className="text-center p-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">About NECF</h3>
                      <p className="text-gray-600">National Economic Consultative Forum</p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Separator className="w-12 bg-green-600" />
                      <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wider">
                        About Us
                      </h3>
                    </div>

                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                      BACKGROUND
                    </h1>

                    <div className="space-y-4 text-gray-600">
                      <p className="leading-relaxed">
                        {`                        The National Economic Consultative Forum (NECF) is a platform for dialogue
                        between government, private sector, civil society, and other stakeholders
                        to discuss and formulate economic policies for Zimbabwe's development.`}
                      </p>
                      <p className="leading-relaxed">
                        Our mission is to foster inclusive economic growth and sustainable
                        development through collaborative policy dialogue and consensus building.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link href="/contact">
                      <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        {sections.map((data) => (
          <HeroDetails
            key={data.id}
            image={data.image.url}
            title={data.title}
            title2={data.title2}
          />
        ))}
      </div>
    </section>
  )
}

function HeroDetails({ image, title, title2 }: { image: string; title: string; title2?: string }) {
  return (
    <Card className="border-none shadow-lg overflow-hidden bg-gradient-to-r from-white to-green-50/50 mb-12 last:mb-0">
      <CardContent className="p-0">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-6 lg:p-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={image}
                alt={title || 'NECF Background'}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Separator className="w-12 bg-green-600" />
                <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wider">
                  About Us
                </h3>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">BACKGROUND</h1>

              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">{title}</p>
                {title2 && <p className="leading-relaxed">{title2}</p>}
              </div>
            </div>

            <div className="pt-4">
              <Link href="/contact">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  )
}
