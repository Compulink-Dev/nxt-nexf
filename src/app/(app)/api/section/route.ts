// app/api/sections/route.ts
import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise })

    const sections = await payload.find({
      collection: 'sections',
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
      sections: sections.docs,
      total: sections.totalDocs,
    })
  } catch (error) {
    console.error('Error fetching sections:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch sections',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}
