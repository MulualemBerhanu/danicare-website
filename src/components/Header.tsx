'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteData } from '@/data/site'
import { formatPhoneNumber } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery & Amenities', href: '/gallery' },
  { name: 'Locations', href: '/locations' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu()
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isMobileMenuOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">{siteData.brand.name}</span>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-dani-600 to-dani-800"></div>
              <span className="text-xl font-serif font-bold gradient-text">
                {siteData.brand.name}
              </span>
            </div>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-dani-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href={`tel:${siteData.branches[0].phone}`} className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">{formatPhoneNumber(siteData.branches[0].phone)}</span>
            </Link>
          </Button>
          <Button variant="dani" size="sm" asChild>
            <Link href="/contact">
              Get Started
            </Link>
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-dani-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dani-500 transition-colors"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
      
      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-25 z-40"
            onClick={closeMobileMenu}
          />
          
          {/* Menu panel */}
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white/95 backdrop-blur-md shadow-2xl border-l border-gray-200/50">
            <div className="flex flex-col h-full min-h-screen">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-300/50 flex-shrink-0 bg-gradient-to-r from-dani-50/80 to-warm-50/80">
                <Link href="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-dani-600 to-dani-800 shadow-lg"></div>
                  <span className="text-xl font-serif font-bold text-gray-900">
                    {siteData.brand.name}
                  </span>
                </Link>
                <button
                  type="button"
                  className="rounded-lg p-2 text-gray-600 hover:text-dani-600 hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dani-500 transition-all duration-200 shadow-sm"
                  onClick={closeMobileMenu}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              
              {/* Navigation */}
              <div className="flex-1 px-6 py-8 overflow-y-auto bg-gradient-to-b from-white/90 to-gray-50/90">
                <nav className="space-y-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 rounded-xl text-lg font-semibold text-gray-800 hover:text-white hover:bg-gradient-to-r hover:from-dani-600 hover:to-dani-700 transition-all duration-300 shadow-sm hover:shadow-lg transform hover:-translate-y-0.5"
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
              
              {/* Footer */}
              <div className="p-6 border-t border-gray-300/50 space-y-4 flex-shrink-0 bg-gradient-to-r from-dani-50/80 to-warm-50/80">
                <Button variant="ghost" size="sm" asChild className="w-full justify-start hover:bg-white/80 transition-all duration-200">
                  <Link href={`tel:${siteData.branches[0].phone}`} className="flex items-center gap-2 text-gray-700 hover:text-dani-600" onClick={closeMobileMenu}>
                    <Phone className="h-4 w-4" />
                    {formatPhoneNumber(siteData.branches[0].phone)}
                  </Link>
                </Button>
                <Button variant="dani" size="sm" asChild className="w-full shadow-lg hover:shadow-xl transition-all duration-200">
                  <Link href="/contact" onClick={closeMobileMenu}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
