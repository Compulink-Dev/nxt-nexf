'use client'

import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingSkeleton from '@/components/loading-skeleton'
import { usePathname, useSearchParams } from 'next/navigation'

function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 600)

    return () => clearTimeout(timer)
  }, [pathname, searchParams])

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingSkeleton key="loading" />
      ) : (
        <main key="content" className="">
          {children}
        </main>
      )}
    </AnimatePresence>
  )
}

export default ClientLayout
