import Link from 'next/link'
import { Phone, Mail, MapPin, Heart } from 'lucide-react'
import { siteData } from '@/data/site'
import { formatPhoneNumber } from '@/lib/utils'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-dani-600 to-dani-800"></div>
              <span className="text-xl font-serif font-bold text-white">
                {siteData.brand.name}
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {siteData.brand.tagline}. Providing compassionate, person-centered care 
              to help seniors live independently in their homes.
            </p>
            <div className="flex space-x-4">
              <Link 
                href={`tel:${siteData.branches[0].phone}`}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>{formatPhoneNumber(siteData.branches[0].phone)}</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-gray-300 hover:text-white transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery & Amenities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Compliance Notice */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-2">
              Complaints & Concerns
            </h4>
            <p className="text-sm text-gray-300">
              For complaints about our services, contact the Oregon Health Authority: 
              <br />
              <a 
                href={`tel:${siteData.complaints.phone}`}
                className="text-dani-400 hover:text-dani-300 transition-colors"
              >
                {siteData.complaints.phone}
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-800">
              © {new Date().getFullYear()} {siteData.brand.name}. All rights reserved.
            </p>
            <p className="text-sm text-gray-800 flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>in Oregon</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
