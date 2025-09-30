import { Metadata } from 'next'
import { BranchCard } from '@/components/BranchCard'
import { ComplaintInfo } from '@/components/ComplianceCallouts'
import { siteData, getAllBranches } from '@/data/site'
import { generateLocalBusinessJsonLd } from '@/lib/utils'
import { MapPin, Clock, Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Locations',
  description: 'Find Dani Care locations in Gresham, Oregon. Visit our two convenient locations for compassionate adult home care services.',
  openGraph: {
    title: 'Our Locations | Dani Care',
    description: 'Find Dani Care locations in Gresham, Oregon.',
  },
}

export default function LocationsPage() {
  const branches = getAllBranches()

  return (
    <div>
      {/* Advanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dani-50 via-white to-warm-50">
        {/* Fixed Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-dani-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-warm-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-dani-300/15 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-warm-300/20 rounded-full blur-xl animate-pulse delay-1500"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 left-1/4 w-2 h-2 bg-dani-400/60 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-48 right-1/3 w-1 h-1 bg-warm-400/60 rounded-full animate-bounce delay-700"></div>
          <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-dani-500/50 rounded-full animate-bounce delay-1200"></div>
          <div className="absolute bottom-32 right-1/4 w-1 h-1 bg-warm-500/50 rounded-full animate-bounce delay-900"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full text-sm font-semibold text-dani-700 mb-8 shadow-xl border border-white/20">
              <div className="w-3 h-3 bg-gradient-to-r from-dani-500 to-warm-500 rounded-full animate-pulse"></div>
              <span className="animate-pulse">Find Us</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 mb-8 leading-tight animate-slide-in">
              Our{' '}
              <span className="bg-gradient-to-r from-dani-600 via-dani-700 to-warm-600 bg-clip-text text-transparent animate-pulse">
                Locations
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in-delay">
              Visit our two convenient locations in Gresham, Oregon. Each location offers the same 
              high-quality, compassionate adult care services.
            </p>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-delay-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/30">
                <div className="w-12 h-12 bg-gradient-to-br from-dani-100 to-dani-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-dani-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2 Locations</h3>
                <p className="text-gray-800 text-sm">Conveniently located in Gresham, Oregon</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/30">
                <div className="w-12 h-12 bg-gradient-to-br from-dani-100 to-dani-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-dani-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Care</h3>
                <p className="text-gray-800 text-sm">Round-the-clock support and monitoring</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/30">
                <div className="w-12 h-12 bg-gradient-to-br from-dani-100 to-dani-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-dani-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Contact</h3>
                <p className="text-gray-800 text-sm">Direct phone lines for each location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {branches.map((branch) => (
              <BranchCard key={branch.slug} branch={branch} />
            ))}
          </div>
        </div>
      </section>

      {/* Complaint Information */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ComplaintInfo />
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Dani Care Locations",
            "description": "Dani Care adult home care service locations in Gresham, Oregon",
            "itemListElement": branches.map((branch, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": generateLocalBusinessJsonLd(branch)
            }))
          })
        }}
      />
    </div>
  )
}
