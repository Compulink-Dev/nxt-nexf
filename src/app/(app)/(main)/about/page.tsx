//@ts-nocheck
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Zap,
  Users,
  Target,
  CheckCircle2,
  Award,
  Lightbulb,
  TrendingUp,
  Eye,
  Globe,
  Shield,
  Heart,
  ArrowRight,
  Sparkles,
  Building2,
  Handshake,
  BarChart,
  Target as TargetIcon,
  Brain,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ScrollArea } from '@/components/ui/scroll-area'
import Link from 'next/link'

const coreValues = [
  {
    icon: Users,
    title: 'Team Work',
    description:
      'Collaborative approach bringing together diverse perspectives for collective success',
    gradient: 'bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-blue-500/0',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100',
  },
  {
    icon: CheckCircle2,
    title: 'Accountability',
    description: 'Responsible and transparent in all our actions with measurable outcomes',
    gradient: 'bg-gradient-to-br from-green-500/10 via-green-500/5 to-green-500/0',
    iconColor: 'text-green-600',
    iconBg: 'bg-green-100',
  },
  {
    icon: Globe,
    title: 'Inclusivity',
    description: 'Ensuring all stakeholders have equal voice and participation opportunities',
    gradient: 'bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-purple-500/0',
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Open communication and clear decision-making processes at every level',
    gradient: 'bg-gradient-to-br from-orange-500/10 via-orange-500/5 to-orange-500/0',
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-100',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Upholding highest ethical standards and principles with unwavering commitment',
    gradient: 'bg-gradient-to-br from-red-500/10 via-red-500/5 to-red-500/0',
    iconColor: 'text-red-600',
    iconBg: 'bg-red-100',
  },
  {
    icon: Lightbulb,
    title: 'Innovativeness',
    description: 'Embracing new ideas and creative solutions for sustainable development',
    gradient: 'bg-gradient-to-br from-yellow-500/10 via-yellow-500/5 to-yellow-500/0',
    iconColor: 'text-yellow-600',
    iconBg: 'bg-yellow-100',
  },
]

const objectives = [
  {
    icon: Handshake,
    title: 'Smart Partnerships',
    description:
      'Creating strategic alliances among government, private sector, labor, civil society, academia, and stakeholders',
    stats: '50+ Partnerships',
  },
  {
    icon: Brain,
    title: 'Policy Formulation',
    description:
      'Providing participatory frameworks for national economic policy through idea interchange and experience sharing',
    stats: '100+ Policies',
  },
  {
    icon: BarChart,
    title: 'Policy Monitoring',
    description:
      'Facilitating coordination, monitoring and evaluation of national economic policy implementation',
    stats: '24/7 Monitoring',
  },
  {
    icon: Zap,
    title: 'Economic Dialogue',
    description:
      'Providing forums for national debate on economic issues with well-considered policy recommendations',
    stats: 'Annual Forums',
  },
]

const achievements = [
  { number: '15+', label: 'Years of Service', icon: Award },
  { number: '200+', label: 'Successful Dialogues', icon: Handshake },
  { number: '50+', label: 'Policy Recommendations', icon: TargetIcon },
  { number: '1000+', label: 'Stakeholders Engaged', icon: Users },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50/20 to-white text-slate-600">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-900 to-green-950 text-white pt-24 pb-32">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-green-900 to-transparent" />
        <div className="container relative mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <Badge className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-none px-4 py-2">
              <Sparkles className="h-3 w-3 mr-2" />
              About Our Organization
            </Badge>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Empowering{' '}
              <span className="bg-gradient-to-r from-green-400 via-green-400 to-emerald-400 bg-clip-text text-transparent">
                Economic
              </span>{' '}
              <br />
              <span className="bg-gradient-to-r from-green-400 via-green-400 to-emerald-400 bg-clip-text text-transparent">
                Transformation
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A premier socio-economic research institution and dialogue convener for equitable,
              sustainable and inclusive development in Zimbabwe.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 rounded-full"
                asChild
              >
                <Link href="/contact">
                  Get Involved
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 rounded-full"
                asChild
              >
                <Link href="/programs">Our Programs</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="container mx-auto px-4 mt-16"
        >
          <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-2xl">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center space-y-2"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Icon className="h-5 w-5 text-green-400" />
                        <h3 className="text-3xl font-bold text-white">{achievement.number}</h3>
                      </div>
                      <p className="text-sm text-slate-300">{achievement.label}</p>
                    </motion.div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-b from-white to-green-50/30">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
              <Card className="relative bg-white border-none shadow-xl rounded-2xl overflow-hidden">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-xl">
                      <Zap className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-2">
                        Our Purpose
                      </Badge>
                      <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
                    </div>
                  </div>
                  <Separator />
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {`   To contribute to Zimbabwe's socio-economic development through innovative
                    research, consultative dialogues, and inclusive smart partnerships that drive
                    sustainable and equitable growth.`}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
              <Card className="relative bg-white border-none shadow-xl rounded-2xl overflow-hidden">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <Target className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-2">
                        Our Aspiration
                      </Badge>
                      <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
                    </div>
                  </div>
                  <Separator />
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {`    To be Zimbabwe's leading socio-economic research institution and premier
                    dialogue convener, driving equitable, sustainable, and inclusive development by
                    2030 through transformative partnerships.`}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About NECF Details */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">
                <Building2 className="h-3 w-3 mr-2" />
                Our Organization
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Driving Economic Excellence Through{' '}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Dialogue
                </span>
              </h2>
            </motion.div>

            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="about">About Us</TabsTrigger>
                <TabsTrigger value="role">Our Role</TabsTrigger>
                <TabsTrigger value="impact">Our Impact</TabsTrigger>
              </TabsList>

              <TabsContent value="about">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6 text-slate-700"
                >
                  <motion.p variants={itemVariants} className="text-lg leading-relaxed">
                    {` The National Economic Consultative Forum (NECF) stands as Zimbabwe's premier
                    platform for economic dialogue and policy development. We are continuously
                    evolving to strengthen our mandate as the nation's leading dialogue convener and
                    economic think tank.`}
                  </motion.p>
                  <motion.p variants={itemVariants} className="text-lg leading-relaxed">
                    {`  Our organization serves as the bridge between diverse economic stakeholders,
                    facilitating constructive conversations that shape Zimbabwe's economic future.
                    We are committed to being the primary source of innovative economic solutions
                    through evidence-based research and inclusive dialogue.`}
                  </motion.p>
                </motion.div>
              </TabsContent>

              <TabsContent value="role">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6 text-slate-700"
                >
                  <motion.p variants={itemVariants} className="text-lg leading-relaxed">
                    NECF plays a crucial role in implementing National Development Plans, including
                    the current Transitional Stabilisation Programme. We ensure economic growth
                    objectives are achieved through systematic monitoring and stakeholder
                    engagement.
                  </motion.p>
                  <motion.p variants={itemVariants} className="text-lg leading-relaxed">
                    We are dedicated to resuscitating the Annual National Dialogue, providing
                    stakeholders with direct engagement opportunities with national leadership. Our
                    platform preserves and strengthens the role of business as the engine of
                    economic growth while fostering tripartite negotiations.
                  </motion.p>
                </motion.div>
              </TabsContent>

              <TabsContent value="impact">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6 text-slate-700"
                >
                  <motion.p variants={itemVariants} className="text-lg leading-relaxed">
                    {`         Through our initiatives, NECF has generated new ideas and policies that directly
                    contribute to Zimbabwe's economic transformation. Our dialogues have resulted in
                    actionable recommendations adopted by both government and private sector.`}
                  </motion.p>
                  <motion.p variants={itemVariants} className="text-lg leading-relaxed">
                    We measure our impact through policy implementation success, stakeholder
                    satisfaction, and tangible economic improvements. Our work continues to
                    influence national economic strategies and foster sustainable development across
                    all sectors.
                  </motion.p>
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">
              <Heart className="h-3 w-3 mr-2" />
              Our Foundation
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Guiding{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Principles
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {`              The values that define our work and shape our impact on Zimbabwe's economic landscape`}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {coreValues.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  <Card
                    className={`${value.gradient} border border-slate-200/50 shadow-sm hover:shadow-xl transition-all duration-300 h-full`}
                  >
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center gap-4">
                        <div
                          className={`${value.iconBg} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className={`h-6 w-6 ${value.iconColor}`} />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
                      </div>
                      <p className="text-sm text-slate-600">{value.description}</p>
                      <div className="pt-4 border-t border-slate-100">
                        <div
                          className={`h-1 w-8 rounded-full ${value.iconColor.replace('text', 'bg')} transition-all duration-300 group-hover:w-16`}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-24 bg-gradient-to-br from-green-900 via-green-900 to-green-950">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-none mb-4">
              <Target className="h-3 w-3 mr-2" />
              Our Strategic Focus
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key{' '}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Objectives
              </span>
            </h2>
            <p className="text-lg text-green-300 max-w-2xl mx-auto">
              {`          Our strategic objectives guide our mission to transform Zimbabwe's economic landscape`}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {objectives.map((objective, index) => {
              const Icon = objective.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-green-500/50 transition-all duration-300">
                    <CardContent className="p-8 space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-3 rounded-xl group-hover:scale-110 transition-transform">
                          <Icon className="h-6 w-6 text-green-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-semibold text-white">{objective.title}</h3>
                            <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30 border-none">
                              {objective.stats}
                            </Badge>
                          </div>
                          <p className="text-slate-300">{objective.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">
                <Lightbulb className="h-3 w-3 mr-2" />
                Learn More
              </Badge>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Frequently Asked{' '}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  What is the primary purpose of NECF?
                </AccordionTrigger>
                <AccordionContent>
                  {`   NECF serves as Zimbabwe's premier platform for economic dialogue and policy
                  development, bringing together government, private sector, labor, civil society,
                  and academia to formulate and implement sustainable economic policies.`}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  How can organizations participate in NECF dialogues?
                </AccordionTrigger>
                <AccordionContent>
                  Organizations can participate by registering for our events through our website,
                  joining stakeholder working groups, or applying to become institutional members.
                  We welcome diverse perspectives from all sectors.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  {` What makes NECF's approach unique?`}
                </AccordionTrigger>
                <AccordionContent>
                  Our unique approach combines evidence-based research with inclusive
                  multi-stakeholder dialogue. We focus on practical, implementable solutions while
                  maintaining complete transparency and neutrality in our facilitation process.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-emerald-50/50 to-blue-50/50">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-20" />
              <Card className="relative bg-white border-none shadow-2xl rounded-2xl p-12">
                <CardContent className="space-y-8">
                  <h2 className="text-4xl font-bold text-slate-900">
                    Join Us in Building a{' '}
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      Prosperous Zimbabwe
                    </span>
                  </h2>

                  <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Together, we can create sustainable economic growth through research, dialogue,
                    and collaborative partnerships that benefit all Zimbabweans.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <Button
                      size="lg"
                      className="bg-green-600 hover:bg-green-700 text-white px-8 rounded-full shadow-lg"
                      asChild
                    >
                      <Link href="/contact">
                        Partner With Us
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-green-600 text-green-600 hover:bg-green-50 rounded-full"
                      asChild
                    >
                      <Link href="/programs">Explore Programs</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
