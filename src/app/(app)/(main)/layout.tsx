import Footer from '@/components/footer'
import Header from '@/components/header'
import MainHero from '@/components/main/main-hero'
import React from 'react'
import ClientLayout from './client-layout'

export const metadata = {
  description: 'NECF',
  title: 'National Economic Consultative Forum',
}

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <MainHero />
      <ClientLayout>{children}</ClientLayout>
      <Footer />
    </div>
  )
}

export default MainLayout
