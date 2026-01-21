import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Users,
  Shield,
  Target,
  HeartHandshake,
  Eye,
  Sparkles,
  Star,
  Trophy,
  Award,
  CheckCircle2,
  Lock,
  Zap,
} from 'lucide-react'

const coreValues = [
  {
    id: 1,
    name: 'Team Work',
    icon: Users,
    description: 'Collaborative excellence',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
  {
    id: 2,
    name: 'Accountability',
    icon: Shield,
    description: 'Responsibility in action',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
  },
  {
    id: 3,
    name: 'Inclusivity',
    icon: HeartHandshake,
    description: 'Everyone has a voice',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
  },
  {
    id: 4,
    name: 'Transparency',
    icon: Eye,
    description: 'Clear and open communication',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
  },
  {
    id: 5,
    name: 'Integrity',
    icon: CheckCircle2,
    description: 'Ethical and principled',
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
  },
  {
    id: 6,
    name: 'Innovativeness',
    icon: Sparkles,
    description: 'Forward-thinking solutions',
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
  },
]

function TopSection() {
  return (
    <div className="container mx-auto px-4 -translate-y-16 md:-translate-y-24">
      <Card className="overflow-hidden border-none shadow-2xl bg-gradient-to-r from-green-600 to-emerald-600">
        <CardContent className="p-6 md:p-8">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-8">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="relative mb-4">
                <div className="absolute -inset-4 bg-white/10 rounded-full blur-xl" />
                <div className="relative bg-white/20 p-6 rounded-2xl backdrop-blur-sm">
                  <Trophy className="h-16 w-16 text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white hover:bg-white/30 border-none"
                >
                  <Star className="h-3 w-3 mr-1" />
                  Our Foundation
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Core Values</h2>
                <p className="text-white/80 text-sm md:text-base">
                  The principles that guide our mission and define our culture
                </p>
              </div>
            </div>

            <Separator orientation="vertical" className="hidden lg:block h-32 bg-white/30" />
            <Separator className="lg:hidden bg-white/30" />

            <div className="flex-1">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {coreValues.map((value) => {
                  const Icon = value.icon
                  return (
                    <div key={value.id} className="group relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-transparent rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                      <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 group-hover:bg-white/15 group-hover:scale-105">
                        <div
                          className={`${value.bgColor} w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-3`}
                        >
                          <Icon className={`h-7 w-7 ${value.color}`} />
                        </div>
                        <div className="text-center space-y-1">
                          <h3 className="font-semibold text-white text-sm">{value.name}</h3>
                          <p className="text-white/70 text-xs">{value.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/30">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <Lock className="h-4 w-4 text-white/70" />
                <p className="text-white/70 text-sm">Commitment</p>
              </div>
              <p className="text-2xl font-bold text-white mt-1">100%</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <Award className="h-4 w-4 text-white/70" />
                <p className="text-white/70 text-sm">Excellence</p>
              </div>
              <p className="text-2xl font-bold text-white mt-1">24/7</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <Zap className="h-4 w-4 text-white/70" />
                <p className="text-white/70 text-sm">Impact</p>
              </div>
              <p className="text-2xl font-bold text-white mt-1">Nationwide</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default TopSection
