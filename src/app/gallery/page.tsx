import { Metadata } from 'next'
import { GalleryTabs } from '@/components/GalleryTabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Wifi, 
  Coffee, 
  Car, 
  Phone, 
  Shield, 
  Users, 
  Clock, 
  Heart,
  ArrowRight,
  Camera,
  Home,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'
import { siteData } from '@/data/site'

export const metadata: Metadata = {
  title: 'Photo Gallery & Amenities',
  description: 'Take a virtual tour of our Dani Care adult care facilities in Gresham, Oregon. See our comfortable, welcoming environments and amenities.',
  openGraph: {
    title: 'Photo Gallery & Amenities | Dani Care',
    description: 'Take a virtual tour of our Dani Care adult care facilities in Gresham, Oregon.',
  },
}

const amenities = [
  {
    icon: Wifi,
    title: 'Free Wi-Fi',
    description: 'High-speed internet access for staying connected with family and friends.',
    gradient: 'from-dani-600 to-warm-600',
    bgGradient: 'from-dani-100 to-warm-100',
  },
  {
    icon: Coffee,
    title: 'Comfortable Lounges',
    description: 'Welcoming common areas for relaxation and social interaction.',
    gradient: 'from-dani-600 to-warm-600',
    bgGradient: 'from-dani-100 to-warm-100',
  },
  {
    icon: Car,
    title: 'Accessible Parking',
    description: 'Convenient parking with accessible spaces for visitors and clients.',
    gradient: 'from-dani-600 to-warm-600',
    bgGradient: 'from-dani-100 to-warm-100',
  },
  {
    icon: Phone,
    title: '24/7 Communication',
    description: 'Round-the-clock phone support and emergency response system.',
    gradient: 'from-dani-600 to-warm-600',
    bgGradient: 'from-dani-100 to-warm-100',
  },
  {
    icon: Shield,
    title: 'Security & Safety',
    description: 'Comprehensive security measures and safety monitoring systems.',
    gradient: 'from-dani-600 to-warm-600',
    bgGradient: 'from-dani-100 to-warm-100',
  },
  {
    icon: Users,
    title: 'Family Support',
    description: 'Dedicated spaces for family meetings and support group sessions.',
    gradient: 'from-dani-600 to-warm-600',
    bgGradient: 'from-dani-100 to-warm-100',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Care services available 24/7 to meet your schedule and needs.',
    gradient: 'from-dani-600 to-warm-600',
    bgGradient: 'from-dani-100 to-warm-100',
  },
  {
    icon: Heart,
    title: 'Compassionate Staff',
    description: 'Experienced, caring professionals committed to your well-being.',
    gradient: 'from-dani-600 to-warm-600',
    bgGradient: 'from-dani-100 to-warm-100',
  },
]

export default function GalleryPage() {
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
              <span className="animate-pulse">Virtual Tour</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 mb-8 leading-tight animate-slide-in">
              Photo{' '}
              <span className="bg-gradient-to-r from-dani-600 via-dani-700 to-warm-600 bg-clip-text text-transparent animate-pulse">
                Gallery
              </span>
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl">
                & Amenities
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in-delay">
              Take a virtual tour of our adult care facilities and discover the comfortable, 
              welcoming environments and amenities where we provide compassionate care.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery - Enhanced */}
      <section className="relative py-32 bg-gradient-to-br from-white via-gray-50/50 to-white">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-dani-300/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-warm-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-dani-100 to-warm-100 px-6 py-3 rounded-full text-sm font-semibold text-dani-700 shadow-lg border border-dani-200/50 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-dani-500 to-warm-500 rounded-full animate-pulse"></div>
              <span>Visual Experience</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-8 leading-tight">
              Explore Our{' '}
              <span className="bg-gradient-to-r from-dani-600 via-dani-700 to-warm-600 bg-clip-text text-transparent">
                Facilities
              </span>
            </h2>
            
            <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
              Discover the warm, welcoming environments where we provide exceptional care for adults 
              with intellectual and developmental disabilities.
            </p>
          </div>

          <GalleryTabs />
        </div>
      </section>

      {/* Amenities Grid - Ultra Advanced */}
      <section className="relative py-32 bg-gradient-to-br from-dani-50 via-white to-warm-50">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-dani-300/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-warm-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-dani-200/15 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-dani-100 to-warm-100 px-6 py-3 rounded-full text-sm font-semibold text-dani-700 shadow-lg border border-dani-200/50 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-dani-500 to-warm-500 rounded-full animate-pulse"></div>
              <span>Premium Amenities</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-8 leading-tight">
              Our Amenities &{' '}
              <span className="bg-gradient-to-r from-dani-600 via-dani-700 to-warm-600 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            
            <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
              Our facilities are designed with your comfort and convenience in mind, featuring 
              modern amenities that enhance your experience and support your independence.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map((amenity, index) => (
              <div key={amenity.title} className="group">
                <div className="absolute inset-0 bg-gradient-to-br from-dani-200/20 via-warm-200/15 to-dani-300/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-white/30 shadow-xl group-hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8 h-full">
                  <div className="text-center">
                    <div className={`mx-auto w-16 h-16 bg-gradient-to-br ${amenity.bgGradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <amenity.icon className={`h-8 w-8 bg-gradient-to-r ${amenity.gradient} bg-clip-text text-transparent`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{amenity.title}</h3>
                    <p className="text-gray-800 leading-relaxed">{amenity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features - Enhanced */}
      <section className="relative py-32 bg-gradient-to-br from-white via-gray-50/50 to-white">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-dani-300/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-warm-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-dani-100 to-warm-100 px-6 py-3 rounded-full text-sm font-semibold text-dani-700 shadow-lg border border-dani-200/50 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-dani-500 to-warm-500 rounded-full animate-pulse"></div>
              <span>Designed for You</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-8 leading-tight">
              Designed for Your{' '}
              <span className="bg-gradient-to-r from-dani-600 via-dani-700 to-warm-600 bg-clip-text text-transparent">
                Comfort
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="group">
                <div className="absolute inset-0 bg-gradient-to-br from-dani-200/20 via-warm-200/15 to-dani-300/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-white/30 shadow-xl group-hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8">
                  <p className="text-lg text-gray-800 leading-relaxed mb-6">
                    Every aspect of our facilities has been thoughtfully designed to create a warm, 
                    welcoming environment where you can feel comfortable and supported.
                  </p>
                  <p className="text-lg text-gray-800 leading-relaxed mb-6">
                    From our accessible design features to our comfortable common areas, we've created 
                    spaces that promote independence, social connection, and overall well-being.
                  </p>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    Our amenities are regularly updated and maintained to ensure they meet the highest 
                    standards of comfort, safety, and accessibility.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="group">
                <div className="absolute inset-0 bg-gradient-to-br from-dani-200/20 via-warm-200/15 to-dani-300/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-white/30 shadow-xl group-hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-dani-100 to-dani-200 rounded-xl flex items-center justify-center shadow-lg">
                      <Home className="h-6 w-6 text-dani-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Accessibility Features</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-warm-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800">Wheelchair accessible entrances and pathways</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-warm-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800">Handrails and grab bars in key areas</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-warm-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800">Accessible restrooms and facilities</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-warm-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800">Emergency call systems throughout</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="group">
                <div className="absolute inset-0 bg-gradient-to-br from-dani-200/20 via-warm-200/15 to-dani-300/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-white/30 shadow-xl group-hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-dani-100 to-dani-200 rounded-xl flex items-center justify-center shadow-lg">
                      <Shield className="h-6 w-6 text-dani-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Safety & Security</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-warm-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800">24/7 monitoring and security</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-warm-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800">Emergency response systems</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-warm-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800">Well-lit common areas</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-warm-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800">Secure entry systems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="relative py-32 bg-gradient-to-br from-dani-600 via-dani-700 to-warm-600">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl group-hover:shadow-3xl transition-all duration-700 p-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                Experience Our Facilities
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
                Schedule a tour of our facilities to see our amenities firsthand and learn more 
                about how we can support you or your loved ones.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  variant="warm" 
                  size="lg" 
                  asChild
                  className="text-lg px-8 py-4 shadow-2xl hover:shadow-warm-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  <Link href="/contact">
                    Schedule a Tour
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  variant="dani" 
                  size="lg" 
                  asChild 
                  className="text-lg px-8 py-4 shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
