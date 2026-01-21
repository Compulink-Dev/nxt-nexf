//@ts-nocheck
// components/MainHero.tsx
import React from 'react'
import ImageSlider from './image-slider'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'

async function loadHero() {
  const payload = await getPayload({ config: configPromise })

  const heros = await payload.find({
    collection: 'hero',
    where: {
      status: {
        equals: 'published',
      },
    },
    sort: '-date',
    limit: 5,
  })

  return heros.docs
}

async function MainHero() {
  const heros = await loadHero()

  const slides = heros.map((hero) => {
    // Handle image object - Payload returns the full media object
    const imageUrl =
      typeof hero.image === 'object' && hero.image.url
        ? hero.image.url
        : hero.image || '/placeholder-hero.jpg'

    return {
      id: hero.id,
      image: imageUrl,
      title: hero.title,
      description: hero.description,
      content: hero.content,
      author: hero.author,
      date: hero.date,
      ctaText: hero.ctaText,
      ctaLink: hero.ctaLink,
    }
  })

  // If no hero slides, show a fallback
  if (slides.length === 0) {
    return (
      <div className="relative h-[600px] bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center space-y-4 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Welcome to NECF</h1>
            <p className="text-xl text-gray-600">National Economic Consultative Forum</p>
            <p className="text-gray-500">Together we make Zimbabwe Great</p>
            <div className="pt-4">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      <ImageSlider slides={slides} />
    </div>
  )
}

export default MainHero
