// app/api/services/route.ts
import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise })

    const services = await payload.find({
      collection: 'services',
      where: {
        status: {
          equals: 'published',
        },
      },
      sort: 'order',
      limit: 3,
    })

    return NextResponse.json({
      success: true,
      services: services.docs,
      total: services.totalDocs,
    })
  } catch (error) {
    console.error('Error fetching services:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch services',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}
