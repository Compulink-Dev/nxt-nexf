// components/Statistic.tsx
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Target, Users, Award, Shield, TrendingUp, CheckCircle } from 'lucide-react'
import { getPayloadClient } from '@/lib/payloadClient'

async function getMilestones() {
  try {
    const payload = await getPayloadClient()

    if (!payload) {
      console.warn('Payload client not available')
      return []
    }

    const milestones = await payload.find({
      collection: 'milestones',
      where: {
        status: {
          equals: 'published',
        },
      },
      sort: 'order',
      limit: 4,
    })

    return milestones.docs || []
  } catch (error) {
    console.error('Error fetching milestones:', error)
    return []
  }
}

const iconMap: Record<string, any> = {
  target: Target,
  users: Users,
  award: Award,
  shield: Shield,
  'trending-up': TrendingUp,
  'check-circle': CheckCircle,
}

const defaultMilestones = [
  {
    id: '1',
    number: '50+',
    suffix: '',
    title: 'Economic Dialogues',
    description: 'Stakeholder engagement sessions held',
    icon: 'target',
  },
  {
    id: '2',
    number: '200+',
    suffix: '',
    title: 'Professionals Trained',
    description: 'Through our capacity building programs',
    icon: 'users',
  },
  {
    id: '3',
    number: '30+',
    suffix: '',
    title: 'Research Publications',
    description: 'Policy briefs and working papers',
    icon: 'award',
  },
  {
    id: '4',
    number: '100+',
    suffix: '',
    title: 'Stakeholders Engaged',
    description: 'From public and private sectors',
    icon: 'shield',
  },
]

export default async function Statistic() {
  const milestones = await getMilestones()
  const dataToDisplay = milestones.length > 0 ? milestones : defaultMilestones

  const defaultIcons = [
    { icon: Target, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { icon: Users, color: 'text-green-600', bgColor: 'bg-green-100' },
    { icon: Award, color: 'text-purple-600', bgColor: 'bg-purple-100' },
    { icon: Shield, color: 'text-amber-600', bgColor: 'bg-amber-100' },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-green-50 to-emerald-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Separator className="w-8 bg-green-600" />
            <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">
              Our Achievements
            </span>
            <Separator className="w-8 bg-green-600" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">NECF Milestones</h2>
          <p className="text-gray-600">
            Milestones are used in project planning to indicate important dates on the timeline,
            such as when one project phase ends and another one begins.
          </p>
        </div>

        {/* Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dataToDisplay.map((milestone: any, index: any) => {
            const IconComponent =
              milestone.icon && iconMap[milestone.icon]
                ? iconMap[milestone.icon]
                : defaultIcons[index]?.icon || TrendingUp

            const iconColor = defaultIcons[index]?.color || 'text-gray-600'
            const bgColor = defaultIcons[index]?.bgColor || 'bg-gray-100'

            return (
              <Card
                key={milestone.id}
                className="border-none shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`${bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <IconComponent className={`h-8 w-8 ${iconColor}`} />
                  </div>

                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {milestone.number}
                    {milestone.suffix && <span className="text-green-600">{milestone.suffix}</span>}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{milestone.title}</h3>

                  {milestone.description && (
                    <p className="text-sm text-gray-600 mt-2">{milestone.description}</p>
                  )}

                  <div className="flex items-center justify-center gap-2 mt-4">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-600">Milestone Achieved</span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Progress Bar */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Overall Progress</h3>
              <span className="text-green-600 font-bold">85% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-green-600 h-3 rounded-full transition-all duration-500"
                style={{ width: '85%' }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {`  We're continuously working towards achieving more milestones`}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
