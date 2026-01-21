// components/home/event-section.tsx (with dummy data option)
'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Calendar, Download, FileText, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import RegisterDialog from '@/components/dialogs/register-dialog'
import { Skeleton } from '@/components/ui/skeleton'

interface Event {
  id: string
  title: string
  image: string
  date: string
  document: string
  link: string
}

// Dummy data for development
const DUMMY_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Economic Dialogue Forum 2024',
    image: '/images/event1.jpg',
    date: '2024-02-15T09:00:00.000Z',
    document: '/documents/forum-resolutions.pdf',
    link: '/events/economic-dialogue-forum-2024',
  },
  {
    id: '2',
    title: 'Policy Research Workshop',
    image: '/images/event2.jpg',
    date: '2024-03-10T10:00:00.000Z',
    document: '/documents/workshop-materials.pdf',
    link: '/events/policy-research-workshop',
  },
  {
    id: '3',
    title: 'Stakeholder Engagement Meeting',
    image: '/images/event3.jpg',
    date: '2024-01-20T14:00:00.000Z',
    document: '/documents/meeting-minutes.pdf',
    link: '/events/stakeholder-meeting',
  },
  {
    id: '4',
    title: 'Annual General Meeting',
    image: '/images/event4.jpg',
    date: '2024-04-05T09:00:00.000Z',
    document: '/documents/agm-resolutions.pdf',
    link: '/events/annual-general-meeting',
  },
]

export default function EventPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const eventsPerPage = 4
  const [useDummyData, setUseDummyData] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events')

        if (response.ok) {
          const data = await response.json()

          if (data.success && data.events) {
            setEvents(data.events)
          } else {
            // If API returns error or no data, use dummy data
            console.log('Using dummy data for events')
            setEvents(DUMMY_EVENTS)
            setUseDummyData(true)
          }
        } else {
          // If API fails, use dummy data
          console.log('API failed, using dummy data for events')
          setEvents(DUMMY_EVENTS)
          setUseDummyData(true)
        }
      } catch (err) {
        console.log('Fetch error, using dummy data for events:', err)
        // Use dummy data on error
        setEvents(DUMMY_EVENTS)
        setUseDummyData(true)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const EventCard = ({ event }: { event: Event }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })

    // Use placeholder image if needed
    const imageUrl = event.image || '/placeholder-event.jpg'

    return (
      <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-0">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="lg:w-2/5 relative h-48 lg:h-auto">
              <Image
                src={imageUrl}
                alt={event.title}
                fill
                className="object-cover"
                onError={(e) => {
                  // Fallback to placeholder on error
                  const target = e.target as HTMLImageElement
                  target.src = '/placeholder-event.jpg'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">
                <Calendar className="h-3 w-3 mr-1" />
                {formattedDate}
              </Badge>
            </div>

            {/* Content Section */}
            <div className="lg:w-3/5 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>

              {/* Document Buttons */}
              {event.document && (
                <div className="flex gap-2 mb-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-green-200 hover:bg-green-50"
                    onClick={() => {
                      if (event.document.startsWith('/')) {
                        // For dummy data, show alert instead
                        alert(`Viewing document for: ${event.title}`)
                      } else {
                        window.open(event.document, '_blank')
                      }
                    }}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    View Resolutions
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600"
                    onClick={() => {
                      if (event.document.startsWith('/')) {
                        // For dummy data, show alert instead
                        alert(`Downloading document for: ${event.title}`)
                      } else {
                        const link = document.createElement('a')
                        link.href = event.document
                        link.download = `${event.title.replace(/\s+/g, '-')}.pdf`
                        link.click()
                      }
                    }}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-between mt-6">
                <Button
                  onClick={() => setIsDialogOpen(true)}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Register Now
                </Button>

                <Link
                  href={event.link}
                  className="flex items-center text-sm text-green-600 hover:text-green-800"
                >
                  View Details
                  <ExternalLink className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </CardContent>

        <RegisterDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          eventTitle={event.title}
        />
      </Card>
    )
  }

  if (loading) {
    return (
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Skeleton className="h-6 w-24 mx-auto mb-4" />
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-1 w-24 mx-auto" />
          </div>
          <div className="grid gap-6 mb-8">
            {[1, 2].map((i) => (
              <Card key={i} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    <Skeleton className="lg:w-2/5 h-48" />
                    <div className="lg:w-3/5 p-6 space-y-4">
                      <Skeleton className="h-6 w-48" />
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-10 w-32" />
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

  const paginatedEvents = events.slice(
    currentPage * eventsPerPage,
    (currentPage + 1) * eventsPerPage,
  )

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">
            Events
            {useDummyData && <span className="ml-2 text-xs">(Demo Data)</span>}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Calendar of Events</h2>
          <Separator className="w-24 h-1 bg-green-600 mx-auto" />
          {useDummyData && (
            <p className="text-sm text-gray-500 mt-2">
              Showing sample events. Create real events in the admin panel.
            </p>
          )}
        </div>

        {/* Events Grid */}
        <div className="grid gap-6 mb-8">
          {paginatedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Pagination */}
        {events.length > eventsPerPage && (
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
              disabled={currentPage === 0}
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>

            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(events.length / eventsPerPage) }).map((_, idx) => (
                <Button
                  key={idx}
                  variant={currentPage === idx ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCurrentPage(idx)}
                  className={currentPage === idx ? 'bg-green-600' : ''}
                >
                  {idx + 1}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(Math.ceil(events.length / eventsPerPage) - 1, prev + 1),
                )
              }
              disabled={currentPage >= Math.ceil(events.length / eventsPerPage) - 1}
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        )}

        {/* View More */}
        <div className="text-center mt-8">
          <Link href="/programs">
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
