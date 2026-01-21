// app/api/events/route.ts
import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise })

    const events = await payload.find({
      collection: 'events',
      where: {
        status: {
          equals: 'published',
        },
      },
      sort: '-date',
      limit: 10,
    })

    const formattedEvents = events.docs.map((event: any) => ({
      id: event.id,
      title: event.title,
      image: typeof event.image === 'object' ? event.image.url : event.image,
      date: event.date,
      document: event.document,
      link: event.link || `/events/${event.id}`,
    }))

    return NextResponse.json({
      success: true,
      events: formattedEvents,
      total: events.totalDocs,
    })
  } catch (error) {
    console.error('Error fetching events:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch events',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}
