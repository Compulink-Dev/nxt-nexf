// components/ImageSlider.tsx
'use client'

import React, { useState, useEffect } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronRight, Calendar, User, Play, Pause, ExternalLink } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import TopSection from './top-section'

interface Slide {
  id: string
  image: string
  title: string
  description: string
  content?: any // Payload richText content
  author?: string
  date?: string
  ctaText?: string
  ctaLink?: string
}

function ImageSlider({ slides }: { slides: Slide[] }) {
  const router = useRouter()
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovering, setIsHovering] = useState(false)

  const navigateToSlide = (slide: Slide) => {
    if (slide.ctaLink) {
      router.push(slide.ctaLink)
    } else {
      // Navigate to hero detail page
      router.push(`/hero/${slide.id}`)
    }
  }

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  useEffect(() => {
    if (!api || !isPlaying || isHovering || slides.length <= 1) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [api, isPlaying, isHovering, slides.length])

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="relative">
      <div
        className="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: 'start',
            loop: slides.length > 1,
          }}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={slide.id}>
                <div
                  className="relative w-full h-[600px] md:h-[700px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent">
                    <div className="container mx-auto px-4 h-full flex items-center">
                      <Card className="max-w-2xl bg-white/90 backdrop-blur-sm border-none shadow-xl ml-auto">
                        <CardContent className="p-6 md:p-8">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {slide.date && (
                              <Badge
                                variant="secondary"
                                className="bg-green-100 text-green-800 hover:bg-green-200"
                              >
                                <Calendar className="h-3 w-3 mr-1" />
                                {new Date(slide.date).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                                })}
                              </Badge>
                            )}
                            {slide.author && (
                              <Badge variant="outline" className="border-green-300">
                                <User className="h-3 w-3 mr-1" />
                                {slide.author}
                              </Badge>
                            )}
                          </div>

                          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            {slide.title}
                          </h1>

                          <p className="text-gray-700 text-lg mb-6 line-clamp-3">
                            {slide.description}
                          </p>

                          <div className="flex flex-col sm:flex-row gap-3">
                            <Button
                              onClick={() => navigateToSlide(slide)}
                              className="bg-green-600 hover:bg-green-700 text-white"
                            >
                              {slide.ctaText || 'Read More'}
                              {slide.ctaLink ? (
                                <ExternalLink className="ml-2 h-4 w-4" />
                              ) : (
                                <ChevronRight className="ml-2 h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Only show navigation if there are multiple slides */}
          {slides.length > 1 && (
            <>
              <CarouselPrevious
                className="left-4 h-12 w-12 border-2 border-white/50 bg-black/30 hover:bg-black/50 hover:border-white"
                variant="ghost"
              />
              <CarouselNext
                className="right-4 h-12 w-12 border-2 border-white/50 bg-black/30 hover:bg-black/50 hover:border-white"
                variant="ghost"
              />
            </>
          )}
        </Carousel>

        {/* Only show controls if there are multiple slides */}
        {slides.length > 1 && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
            {/* Play/Pause Button */}
            <Button
              onClick={toggleAutoplay}
              size="icon"
              variant="outline"
              className="h-10 w-10 rounded-full bg-black/30 backdrop-blur-sm border-white/30 hover:bg-black/50"
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 text-white" />
              ) : (
                <Play className="h-5 w-5 text-white" />
              )}
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={cn(
                    'h-3 w-3 rounded-full transition-all duration-300',
                    current === index ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80',
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="text-white font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
              {current + 1} / {count}
            </div>
          </div>
        )}
      </div>

      {/* Top Section Component */}
      <TopSection />
    </div>
  )
}

export default ImageSlider
