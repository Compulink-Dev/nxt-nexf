// app/page.tsx or your home page
import React from 'react'
import HeroSection from '@/components/home/hero-section'
import AboutImage from '@/components/home/about-image'
import EventPageServer from '@/components/home/event-section'
import Statistic from '@/components/home/statistics'
import Sponsors from '@/components/home/sponsors'
import Subscribe from '@/components/home/subscribe'
import Testimonial from '@/components/home/testimonial'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* About & Services */}
      <AboutImage />

      {/* Events */}
      <EventPageServer />

      {/* Statistics */}
      <Statistic />

      {/* Testimonials */}
      <Testimonial />

      {/* Sponsors */}
      <Sponsors />

      {/* Newsletter */}
      <Subscribe />
    </main>
  )
}
