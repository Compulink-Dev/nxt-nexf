// components/AboutImage.tsx
'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { MessageSquare, Users, Megaphone, CheckCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Skeleton } from '@/components/ui/skeleton'
import Link from 'next/link'

interface Service {
  id: string
  title: string
  title2?: string
  title3?: string
  description: string
  description2?: string
  description3?: string
  image: {
    url: string
    alt?: string
  }
}

export default function AboutImage() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/services')
        const data = await response.json()

        if (data.success && data.services) {
          const formattedServices = data.services.map((service: any) => ({
            id: service.id,
            title: service.title,
            title2: service.title2,
            title3: service.title3,
            description: service.description,
            description2: service.description2,
            description3: service.description3,
            image: {
              url: typeof service.image === 'object' ? service.image.url : service.image,
              alt: service.title || 'NECF Service',
            },
          }))
          setServices(formattedServices)
        } else {
          setError(data.error || 'Failed to load services')
        }
      } catch (err) {
        setError('Failed to connect to server')
        console.error('Fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  if (loading) {
    return (
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Skeleton className="h-6 w-24 mx-auto mb-4" />
              <Skeleton className="h-10 w-64 mx-auto mb-4" />
              <Skeleton className="h-1 w-24 mx-auto" />
            </div>
            <Card className="border-none shadow-lg mb-12 overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row items-center gap-8 p-6 lg:p-10">
                  <div className="lg:w-1/2 space-y-8">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-start gap-4">
                        <Skeleton className="h-12 w-12 rounded-lg" />
                        <div className="flex-1 space-y-2">
                          <Skeleton className="h-4 w-32" />
                          <Skeleton className="h-12 w-full" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <Skeleton className="lg:w-1/2 h-64 rounded-2xl" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  if (error || !services.length) {
    return (
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">
                Our Services
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Explore Our Awesome Services
              </h2>
              <Separator className="w-24 h-1 bg-green-600 mx-auto" />
              <p className="text-gray-600 mt-4">
                We provide comprehensive economic consultation and policy development services.
              </p>
            </div>
            <div className="text-center py-12">
              <p className="text-gray-500">No services available at the moment.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Awesome Services
            </h2>
            <Separator className="w-24 h-1 bg-green-600 mx-auto" />
          </div>

          {services.map((service) => (
            <Card key={service.id} className="border-none shadow-lg mb-12 overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row items-center gap-8 p-6 lg:p-10">
                  {/* Left Column - Services */}
                  <div className="lg:w-1/2 space-y-8">
                    {[
                      {
                        icon: MessageSquare,
                        title: service.title,
                        description: service.description,
                      },
                      {
                        icon: Users,
                        title: service.title2,
                        description: service.description2,
                      },
                      {
                        icon: Megaphone,
                        title: service.title3,
                        description: service.description3,
                      },
                    ].map(
                      (item, idx) =>
                        item.title && (
                          <div key={idx} className="flex items-start gap-4 group">
                            <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-200 transition-colors">
                              <item.icon className="h-6 w-6 text-green-700" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {item.title}
                              </h3>
                              <p className="text-gray-600">{item.description}</p>
                            </div>
                          </div>
                        ),
                    )}
                  </div>

                  {/* Right Column - Image */}
                  <div className="lg:w-1/2 relative">
                    <div className="relative w-full h-64 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={service.image.url}
                        alt={service.image.alt || service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-green-600/10 to-transparent" />
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="bg-green-50 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm text-gray-600">Quality Guaranteed</span>
                    </div>
                    <Link
                      href="/services"
                      className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium"
                    >
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
