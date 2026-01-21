'use client'

import React, { useEffect, useState, useTransition, Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingSkeleton from '@/components/loading-skeleton'
import { usePathname } from 'next/navigation'

function ClientLayoutContent({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 600)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <AnimatePresence mode="wait">
      {isLoading || isPending ? (
        <LoadingSkeleton key="loading" />
      ) : (
        <main key="content" className="">
          {children}
        </main>
      )}
    </AnimatePresence>
  )
}

function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <ClientLayoutContent>{children}</ClientLayoutContent>
    </Suspense>
  )
}

export default ClientLayout
