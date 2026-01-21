// components/Sponsors.tsx
'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Building2, Handshake, Star } from 'lucide-react'
import Image from 'next/image'

interface Sponsor {
  id: string
  name: string
  logo: string
  website?: string
  tier?: 'platinum' | 'gold' | 'silver' | 'bronze' | 'partner'
  description?: string
}

export default function Sponsors() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await fetch('/api/sponsors?status=published')
        const data = await response.json()
        setSponsors(data.docs || [])
      } catch (error) {
        console.error('Failed to fetch sponsors:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchSponsors()
  }, [])

  const getTierColor = (tier?: string) => {
    switch (tier) {
      case 'platinum':
        return 'bg-gradient-to-r from-gray-200 to-gray-300'
      case 'gold':
        return 'bg-gradient-to-r from-amber-50 to-amber-100'
      case 'silver':
        return 'bg-gradient-to-r from-slate-50 to-slate-100'
      case 'bronze':
        return 'bg-gradient-to-r from-amber-800/10 to-amber-900/10'
      default:
        return 'bg-gradient-to-r from-green-50 to-emerald-100'
    }
  }

  if (isLoading) {
    return (
      <div className="py-16 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading sponsors...</p>
      </div>
    )
  }

  if (!sponsors.length) {
    return (
      <Card className="border-dashed border-2">
        <CardContent className="py-12 text-center">
          <Handshake className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-600 mb-2">No Sponsors Yet</h3>
          <p className="text-gray-500">Be the first to sponsor us!</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">
            <Star className="h-3 w-3 mr-1" />
            Partnerships
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Partners & Sponsors
          </h2>
          <Separator className="w-24 h-1 bg-green-600 mx-auto" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {`  We're proud to collaborate with industry leaders who share our vision
            for economic development and sustainable growth.`}
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {sponsors.map((sponsor) => (
            <Card
              key={sponsor.id}
              className={`border-none overflow-hidden ${getTierColor(sponsor.tier)} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <CardContent className="p-6">
                <div className="relative h-24 w-full">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100px, 160px"
                  />
                </div>
                <h3 className="text-center font-semibold text-gray-800 mt-4">{sponsor.name}</h3>
                {sponsor.tier && (
                  <Badge variant="outline" className="mt-2 mx-auto text-xs">
                    {sponsor.tier.charAt(0).toUpperCase() + sponsor.tier.slice(1)} Tier
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Animated Scroll */}
        <div className="relative overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex gap-8 md:gap-16 items-center"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
          >
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div key={`${sponsor.id}-${index}`} className="flex-shrink-0">
                <div className="h-16 w-32 md:h-20 md:w-40 relative opacity-80 hover:opacity-100 transition-opacity">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100px, 160px"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Interested in becoming a sponsor?</p>
          <a
            href="/contact"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            <Building2 className="inline h-5 w-5 mr-2" />
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  )
}
