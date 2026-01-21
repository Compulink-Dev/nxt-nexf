'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  Globe,
  MapPin,
  ExternalLink,
  Heart,
  ArrowRight,
} from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-gradient-to-b from-green-400 via-green-600 to-green-800 text-green-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-4">
              <div className="relative w-40 h-auto">
                <Image
                  src="/necf_new.png"
                  width={200}
                  height={80}
                  alt="National Economic Consultative Forum"
                  className="w-full h-auto object-contain filter brightness-90"
                />
              </div>
              <p className="text-sm text-slate-400 font-medium leading-relaxed">
                Together we make Zimbabwe Great
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-400 hover:text-green-500 hover:bg-green-500/10 transition-all duration-200 rounded-lg"
                asChild
              >
                <Link
                  href="https://www.facebook.com/necfpage"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-400 hover:text-green-500 hover:bg-green-500/10 transition-all duration-200 rounded-lg"
                asChild
              >
                <Link href="https://x.com/FofficialNec" target="_blank" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-400 hover:text-green-500 hover:bg-green-500/10 transition-all duration-200 rounded-lg"
                asChild
              >
                <Link
                  href="https://www.linkedin.com/in/necf-national-economic-consultative-forum"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-2.5">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-slate-400 hover:text-green-500 transition-colors duration-200 text-sm font-medium"
              >
                <span>Home</span>
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
              </Link>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-slate-400 hover:text-green-500 transition-colors duration-200 text-sm font-medium"
              >
                <span>About Us</span>
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-slate-400 hover:text-green-500 transition-colors duration-200 text-sm font-medium"
              >
                <span>Contact</span>
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
              </Link>
            </nav>
          </div>

          {/* Resources Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-white">Resources</h3>
            <nav className="flex flex-col space-y-2.5">
              {[
                { href: 'https://rbz.co.zw/', label: 'Reserve Bank of Zimbabwe' },
                { href: 'https://czi.co.zw/', label: 'Confederation of Zimbabwe Industries' },
                { href: 'https://zncc.co.zw/', label: 'Zimbabwe National Chamber of Commerce' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  className="group inline-flex items-center gap-2 text-slate-400 hover:text-green-500 transition-colors duration-200 text-sm font-medium"
                >
                  <span className="line-clamp-2">{link.label}</span>
                  <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <div className="flex flex-col space-y-3.5">
              <a
                href="mailto:info@necf.org.zw"
                className="group flex items-start gap-3 text-slate-400 hover:text-green-500 transition-colors duration-200"
              >
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium group-hover:underline">info@necf.org.zw</span>
              </a>
              <a
                href="tel:+263861270109"
                className="group flex items-start gap-3 text-slate-400 hover:text-green-500 transition-colors duration-200"
              >
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium group-hover:underline">+263 8612 701 094</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-slate-400" />
                <p className="text-sm font-medium text-slate-400">
                  34 Elizabeth Windsor Road
                  <br />
                  Marlborough, Zimbabwe
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <Separator className="my-12 bg-slate-700" />

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <span>© {currentYear} NECF —</span>
            <Link
              href="http://compulink.co.zw/"
              target="_blank"
              className="inline-flex items-center gap-1 hover:text-green-500 font-medium transition-colors duration-200 group"
            >
              <Heart className="h-4 w-4 group-hover:scale-110 transition-transform" />
              Compulink
            </Link>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <Link href="/privacy" className="hover:text-green-500 transition-colors duration-200">
              Privacy Policy
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/terms" className="hover:text-green-500 transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
