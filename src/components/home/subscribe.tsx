// components/Subscribe.tsx
'use client'
import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Mail, Bell, CheckCircle, Send, Sparkles } from 'lucide-react'

function Subscribe() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true)
      setIsLoading(false)
      setEmail('')
    }, 1000)
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-green-500 to-emerald-600">
      <div className="container mx-auto px-4">
        <Card className="border-none shadow-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Content */}
              <div className="lg:w-1/2">
                <Badge className="bg-white/20 text-white hover:bg-white/30 border-none mb-4">
                  <Bell className="h-3 w-3 mr-1" />
                  Newsletter
                </Badge>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Stay Updated With Our Latest News
                </h2>

                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center text-white/80">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    <span className="text-sm">Exclusive Content</span>
                  </div>
                  <Separator orientation="vertical" className="h-4 bg-white/30" />
                  <div className="flex items-center text-white/80">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    <span className="text-sm">No Spam</span>
                  </div>
                  <Separator orientation="vertical" className="h-4 bg-white/30" />
                  <div className="flex items-center text-white/80">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    <span className="text-sm">Monthly Updates</span>
                  </div>
                </div>
              </div>

              {/* Right Content - Form */}
              <div className="lg:w-1/2 w-full">
                {isSubscribed ? (
                  <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Welcome to Our Community!</h3>
                    <p className="text-white/80 mb-4">
                      Thank you for subscribing. Check your email for confirmation.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSubscribed(false)}
                      className="border-white text-white hover:bg-white/20"
                    >
                      Subscribe Another Email
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 py-6 bg-white border-0 rounded-lg"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-white text-green-600 hover:bg-gray-100 py-6 rounded-lg font-semibold"
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-green-600 mr-2"></div>
                          Processing...
                        </div>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Subscribe Now
                        </>
                      )}
                    </Button>

                    <p className="text-white/70 text-sm text-center">
                      Join 5,000+ subscribers. Unsubscribe anytime.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Subscribe
