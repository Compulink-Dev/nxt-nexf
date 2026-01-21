'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

// Define links data
const links = [
  {
    id: 1,
    name: 'Home',
    href: '/',
  },
  {
    id: 2,
    name: 'What We Do?',
    href: '/about',
  },
  {
    id: 3,
    name: 'Downloads',
    href: '/downloads',
  },
  {
    id: 4,
    name: 'Programmes',
    href: '/programs',
    submenu: [
      { name: 'Programme List', href: '/programs' },
      { name: 'Gallery', href: '/programs/gallery' },
      { name: 'News Letter', href: '/programs/news-letter' },
    ],
  },
  {
    id: 5,
    name: 'Our Team',
    href: '/team',
  },
  {
    id: 6,
    name: 'Contact',
    href: '/contact',
  },
  {
    id: 7,
    name: 'Vacancies',
    href: '/vacancy',
  },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 text-gray-600',
        scrolled
          ? 'border-b border-slate-200/50 bg-white/98 backdrop-blur-md shadow-sm'
          : 'border-b border-slate-100 bg-white/95 backdrop-blur-md',
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
          <Link
            href="/"
            className="group flex items-center gap-2 md:gap-3 transition-all duration-200"
          >
            <div className="relative rounded-lg overflow-hidden  p-2 group-hover:shadow-md transition-shadow">
              <Image
                src="/necf-logo.png"
                alt="NECF Logo"
                width={100}
                height={200}
                className="w-auto h-auto"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList>
              {links.map((link) =>
                link.submenu ? (
                  <NavigationMenuItem key={link.id}>
                    <NavigationMenuTrigger className="text-slate-900 hover:text-green-700 data-[state=open]:text-green-700 font-medium transition-colors duration-200 text-sm">
                      {link.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="border border-slate-200/50">
                      <ul className="grid w-[240px] gap-2 p-4">
                        {link.submenu.map((subItem) => (
                          <li key={subItem.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={subItem.href}
                                className="flex items-center justify-between select-none rounded-lg p-3 text-sm font-medium leading-none no-underline outline-none transition-all duration-200 text-slate-800 hover:bg-green-50 hover:text-green-700 focus:bg-green-50 group"
                              >
                                <span>{subItem.name}</span>
                                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-200" />
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={link.id}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          'inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors',
                          'text-slate-900 hover:text-green-700 hover:bg-green-50/50 focus:bg-green-50/50 focus:text-green-700',
                          'focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2',
                          'disabled:pointer-events-none disabled:opacity-50',
                        )}
                      >
                        {link.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-900 hover:text-green-700 hover:bg-green-50/50 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[350px] p-0">
            <SheetHeader className="border-b border-slate-100 px-6 py-4">
              <SheetTitle className="flex items-center gap-3">
                <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-green-50 to-green-100/50 p-1.5">
                  <Image
                    src="/necf-logo.png"
                    alt="NECF Logo"
                    width={40}
                    height={40}
                    className="w-auto h-auto"
                  />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900">NECF</h2>
                  <p className="text-xs text-slate-700 font-medium">
                    National Economic Consultative Forum
                  </p>
                </div>
              </SheetTitle>
            </SheetHeader>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col gap-1 py-6 px-3">
              {links.map((link) => (
                <div key={link.id}>
                  {link.submenu ? (
                    <details className="group">
                      <summary className="flex items-center justify-between text-sm font-semibold text-slate-900 hover:text-green-700 cursor-pointer list-none py-2.5 px-3 rounded-lg hover:bg-slate-50 transition-colors">
                        {link.name}
                        <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="mt-1 ml-2 space-y-1 border-l-2 border-green-200 pl-3">
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-2 px-3 text-sm text-slate-800 hover:text-green-700 hover:bg-green-50 rounded-md transition-all font-medium"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-sm font-semibold text-slate-900 hover:text-green-700 py-2.5 px-3 block rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Footer Info */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-slate-100 bg-slate-50/50 px-6 py-4">
              <p className="text-xs text-slate-800 font-medium">Together we make Zimbabwe Great</p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Header
