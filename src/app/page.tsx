'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Heart, 
  Shield, 
  Users, 
  Clock, 
  Award, 
  Phone, 
  ArrowRight,
  CheckCircle,
  Star,
  Home
} from 'lucide-react'
import { siteData } from '@/data/site'
import { formatPhoneNumber } from '@/lib/utils'

// Metadata is handled in layout.tsx for client components

const services = [
  {
    icon: Heart,
    title: 'Personal Care',
    description: 'Assistance with daily activities like bathing, dressing, and grooming.',
  },
  {
    icon: Shield,
    title: 'Medication Management',
    description: 'Help with medication reminders and administration.',
  },
  {
    icon: Users,
    title: 'Companionship',
    description: 'Friendly companionship and social interaction.',
  },
  {
    icon: Clock,
    title: '24/7 Care',
    description: 'Round-the-clock care and support when needed.',
  },
]

const trustBadges = [
  {
    icon: Award,
    title: 'Licensed & Insured',
    description: 'Fully licensed by the State of Oregon',
  },
  {
    icon: Shield,
    title: 'Background Checked',
    description: 'All caregivers thoroughly vetted',
  },
  {
    icon: Star,
    title: 'Highly Rated',
    description: '5-star reviews from families',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="/images/hero-pattern.svg"
          >
            <source src="/images/Dani Care vedio.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-dani-900/80 via-dani-800/70 to-warm-900/60"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-dani-400/20 rounded-full blur-xl floating-element"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-warm-400/20 rounded-full blur-xl floating-element-delay-1"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-dani-300/30 rounded-full blur-lg floating-element-delay-2"></div>
            <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-warm-300/25 rounded-full blur-lg floating-element"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="hero-content">
            {/* Animated Title */}
            <div className="mb-8">
              <h1 className="hero-title">
                <span className="bg-gradient-to-r from-dani-300 to-warm-300 bg-clip-text text-transparent animate-pulse">
                  Dani Care Inc
                </span>{' '}
                in{' '}
                <span className="bg-gradient-to-r from-dani-300 to-warm-300 bg-clip-text text-transparent animate-pulse">
                  Oregon
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-dani-400 to-warm-400 mx-auto rounded-full floating-element"></div>
            </div>

            {/* Subtitle */}
            <div className="hero-subtitle">
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-white/95 mb-6 leading-relaxed">
                <span className="bg-gradient-to-r from-white via-dani-100 to-warm-100 bg-clip-text text-transparent">
                  Compassionate Care for Adults with Intellectual and Developmental Disabilities.
                </span>
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed font-light">
                We provide personalized, professional care services to help adults with intellectual 
                and developmental disabilities live independently and comfortably in their own homes.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta">
              <Button 
                size="lg" 
                asChild
                className="text-lg px-8 py-4 bg-white text-dani-900 hover:bg-dani-50 border-2 border-white shadow-2xl hover:shadow-white/50 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                asChild
                className="text-lg px-8 py-4 bg-dani-600 text-white hover:bg-dani-700 border-2 border-dani-500 shadow-2xl hover:shadow-dani-500/50 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                <Link href={`tel:${siteData.branches[0].phone}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {formatPhoneNumber(siteData.branches[0].phone)}
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 floating-element-delay-1">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/20">
                <CheckCircle className="h-5 w-5 text-dani-600" />
                <span className="text-sm font-semibold text-dani-900">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/20">
                <CheckCircle className="h-5 w-5 text-dani-600" />
                <span className="text-sm font-semibold text-dani-900">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/20">
                <CheckCircle className="h-5 w-5 text-dani-600" />
                <span className="text-sm font-semibold text-dani-900">Person-Centered Care</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Overview - Enhanced */}
      <section className="py-32 bg-gradient-to-br from-white via-gray-50 to-dani-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-dani-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-warm-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-dani-100 to-warm-100 px-4 py-2 rounded-full text-sm font-medium text-dani-700 mb-6">
              <span className="w-2 h-2 bg-dani-500 rounded-full animate-pulse"></span>
              Comprehensive Care Services
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-dani-600 to-warm-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We offer a comprehensive range of services for adults with intellectual and developmental 
              disabilities, designed to meet your unique needs and help you maintain independence and dignity.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
            {services.map((service, index) => (
              <div key={service.title} className="group">
                <Card className="h-full text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm hover:bg-white">
                  <CardHeader className="pb-4">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-dani-100 to-dani-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <service.icon className="h-8 w-8 text-dani-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Direct Nursing Services & Safety Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Direct Nursing Services */}
            <div className="group">
              <Card className="h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm hover:bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-dani-100 to-dani-200 rounded-xl flex items-center justify-center shadow-lg">
                      <Heart className="h-6 w-6 text-dani-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">Direct Nursing Services</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-gray-700">
                    <p className="flex items-start space-x-3">
                      <span className="text-dani-600 font-bold mt-1">💉</span>
                      <span><strong>IV therapy</strong> and medication management</span>
                    </p>
                    <p className="flex items-start space-x-3">
                      <span className="text-dani-600 font-bold mt-1">🩹</span>
                      <span><strong>Wound care</strong> and treatment</span>
                    </p>
                    <p className="flex items-start space-x-3">
                      <span className="text-dani-600 font-bold mt-1">🫁</span>
                      <span><strong>Ventilator support</strong> for respiratory needs</span>
                    </p>
                    <p className="flex items-start space-x-3">
                      <span className="text-dani-600 font-bold mt-1">🍽️</span>
                      <span><strong>Feeding tube</strong> management and care</span>
                    </p>
                    <p className="flex items-start space-x-3">
                      <span className="text-dani-600 font-bold mt-1">🩺</span>
                      <span><strong>Tracheostomy care</strong> and monitoring</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Safety & Security Features */}
            <div className="group">
              <Card className="h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm hover:bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-dani-100 to-dani-200 rounded-xl flex items-center justify-center shadow-lg">
                      <Shield className="h-6 w-6 text-dani-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">Safety & Security Features</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-gray-700">
                    <p className="flex items-start space-x-3">
                      <span className="text-dani-600 font-bold mt-1">🔥</span>
                      <span><strong>Fire sprinkler system</strong> for complete fire protection</span>
                    </p>
                    <p className="flex items-start space-x-3">
                      <span className="text-dani-600 font-bold mt-1">⚡</span>
                      <span><strong>Backup generator</strong> for power outage protection</span>
                    </p>
                    <p className="flex items-start space-x-3">
                      <span className="text-dani-600 font-bold mt-1">🏠</span>
                      <span><strong>Clean, loving environment</strong> with quality care</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <Button 
              variant="dani" 
              size="lg" 
              asChild
              className="text-lg px-8 py-4 shadow-2xl hover:shadow-dani-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Dani Care - Ultra Advanced */}
      <section className="py-32 bg-gradient-to-br from-dani-50 via-white to-warm-50 relative overflow-hidden">
        {/* Advanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-dani-300/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-warm-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-dani-200/15 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-warm-200/20 rounded-full blur-xl animate-pulse delay-1500"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-2 h-2 bg-dani-400/60 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-40 right-1/3 w-1 h-1 bg-warm-400/60 rounded-full animate-bounce delay-700"></div>
          <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-dani-500/50 rounded-full animate-bounce delay-1200"></div>
          <div className="absolute bottom-20 right-1/4 w-1 h-1 bg-warm-500/50 rounded-full animate-bounce delay-900"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Mobile Layout */}
          <div className="lg:hidden space-y-16">
            {/* Header Section */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full text-sm font-semibold text-dani-700 mb-8 shadow-xl border border-white/20">
                <span className="w-3 h-3 bg-gradient-to-r from-dani-500 to-warm-500 rounded-full animate-pulse"></span>
                <span className="animate-pulse">Trusted Care Provider</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8 leading-tight">
                Why Choose{' '}
                <span className="bg-gradient-to-r from-dani-600 via-dani-700 to-warm-600 bg-clip-text text-transparent animate-pulse">
                  Dani Care Inc?
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We believe every individual with intellectual and developmental disabilities deserves 
                to live with dignity and independence. Our person-centered approach focuses on your 
                unique needs, preferences, and goals.
              </p>
            </div>

            {/* Mobile Image Section */}
            <div className="relative group">
              <div className="w-full max-w-2xl mx-auto">
                <div className="relative w-full h-96 transform group-hover:scale-105 transition-transform duration-700">
                  {/* Enhanced Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-dani-200/30 via-warm-200/20 to-dani-300/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-warm-200/20 to-dani-200/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                  
                  {/* Image Container with Advanced Effects */}
                  <div className="relative w-full h-full bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl group-hover:shadow-3xl transition-all duration-700 overflow-hidden">
                    <Image
                      src="/images/why choose us.png"
                      alt="Why choose Dani Care - professional care services"
                      fill
                      className="object-contain rounded-3xl group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Floating Elements Around Image */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-dani-400 to-warm-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-warm-400 to-dani-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse delay-300"></div>
                </div>
              </div>
            </div>

            {/* Mobile Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="group">
                  <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/30 hover:bg-white/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                    <div className="w-14 h-14 bg-gradient-to-br from-dani-100 to-dani-200 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <CheckCircle className="h-7 w-7 text-dani-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Licensed & Insured</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Professional caregivers with full certification</p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/30 hover:bg-white/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                    <div className="w-14 h-14 bg-gradient-to-br from-dani-100 to-dani-200 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <CheckCircle className="h-7 w-7 text-dani-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Direct Nursing Services</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Specialized care for complex medical needs</p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/30 hover:bg-white/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                    <div className="w-14 h-14 bg-gradient-to-br from-dani-100 to-dani-200 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <CheckCircle className="h-7 w-7 text-dani-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">ADA Accessible</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Fully wheelchair accessible facilities</p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/30 hover:bg-white/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                    <div className="w-14 h-14 bg-gradient-to-br from-dani-100 to-dani-200 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <CheckCircle className="h-7 w-7 text-dani-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Modern Amenities</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Spacious private rooms with luxury features</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="group">
                  <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/30 hover:bg-white/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                    <div className="w-14 h-14 bg-gradient-to-br from-dani-100 to-dani-200 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <CheckCircle className="h-7 w-7 text-dani-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Safety First</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Advanced fire protection & backup systems</p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/30 hover:bg-white/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                    <div className="w-14 h-14 bg-gradient-to-br from-dani-100 to-dani-200 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <CheckCircle className="h-7 w-7 text-dani-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Expert Team</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Highly qualified professionals</p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/30 hover:bg-white/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                    <div className="w-14 h-14 bg-gradient-to-br from-dani-100 to-dani-200 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <CheckCircle className="h-7 w-7 text-dani-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Quality Care</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Premium nutritious meals included</p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/30 hover:bg-white/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                    <div className="w-14 h-14 bg-gradient-to-br from-dani-100 to-dani-200 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <CheckCircle className="h-7 w-7 text-dani-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">24/7 Support</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Round-the-clock emergency response</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Button */}
            <div className="pt-4">
              <Button 
                variant="dani" 
                size="lg" 
                asChild
                className="text-lg px-10 py-5 shadow-2xl hover:shadow-dani-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 bg-gradient-to-r from-dani-600 to-dani-700 hover:from-dani-700 hover:to-dani-800"
              >
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Desktop Content Section */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full text-sm font-semibold text-dani-700 mb-8 shadow-xl border border-white/20">
                  <span className="w-3 h-3 bg-gradient-to-r from-dani-500 to-warm-500 rounded-full animate-pulse"></span>
                  <span className="animate-pulse">Trusted Care Provider</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-8 leading-tight">
                  Why Choose{' '}
                  <span className="bg-gradient-to-r from-dani-600 via-dani-700 to-warm-600 bg-clip-text text-transparent animate-pulse">
                    Dani Care Inc?
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  We believe every individual with intellectual and developmental disabilities deserves 
                  to live with dignity and independence. Our person-centered approach focuses on your 
                  unique needs, preferences, and goals.
                </p>
              </div>
              
              {/* Desktop Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="group">
                    <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/30 hover:bg-white/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                      <div className="w-14 h-14 bg-gradient-to-br from-dani-100 to-dani-200 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                        <CheckCircle className="h-7 w-7 text-dani-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Licensed & Insured</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">Professional caregivers with full certification</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/30 hover:bg-white/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                      <div className="w-14 h-14 bg-gradient-to-br from-dani-100 to-dani-200 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                        <CheckCircle className="h-7 w-7 text-dani-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Direct Nursing Services</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">Specialized care for complex medical needs</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/30 hover:bg-white/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                      <div className="w-14 h-14 bg-gradient-to-br from-dani-100 to-dani-200 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                        <CheckCircle className="h-7 w-7 text-dani-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">ADA Accessible</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">Fully wheelchair accessible facilities</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/30 hover:bg-white/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                      <div className="w-14 h-14 bg-gradient-to-br from-dani-100 to-dani-200 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                        <CheckCircle className="h-7 w-7 text-dani-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Modern Amenities</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">Spacious private rooms with luxury features</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="group">
                    <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/30 hover:bg-white/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                      <div className="w-14 h-14 bg-gradient-to-br from-dani-100 to-dani-200 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                        <CheckCircle className="h-7 w-7 text-dani-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Safety First</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">Advanced fire protection & backup systems</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/30 hover:bg-white/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                      <div className="w-14 h-14 bg-gradient-to-br from-dani-100 to-dani-200 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                        <CheckCircle className="h-7 w-7 text-dani-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Expert Team</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">Highly qualified professionals</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/30 hover:bg-white/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                      <div className="w-14 h-14 bg-gradient-to-br from-dani-100 to-dani-200 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                        <CheckCircle className="h-7 w-7 text-dani-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Quality Care</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">Premium nutritious meals included</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/30 hover:bg-white/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                      <div className="w-14 h-14 bg-gradient-to-br from-dani-100 to-dani-200 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                        <CheckCircle className="h-7 w-7 text-dani-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">24/7 Support</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">Round-the-clock emergency response</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button 
                  variant="dani" 
                  size="lg" 
                  asChild
                  className="text-lg px-10 py-5 shadow-2xl hover:shadow-dani-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 bg-gradient-to-r from-dani-600 to-dani-700 hover:from-dani-700 hover:to-dani-800"
                >
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Desktop Image Section - Full screen on right side */}
            <div className="relative group">
              <div className="w-full h-full">
                <div className="relative w-full h-[600px] transform group-hover:scale-105 transition-transform duration-700">
                  {/* Enhanced Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-dani-200/30 via-warm-200/20 to-dani-300/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-warm-200/20 to-dani-200/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                  
                  {/* Image Container with Advanced Effects */}
                  <div className="relative w-full h-full bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl group-hover:shadow-3xl transition-all duration-700 overflow-hidden">
                    <Image
                      src="/images/why choose us.png"
                      alt="Why choose Dani Care - professional care services"
                      fill
                      className="object-contain rounded-3xl group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Floating Elements Around Image */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-dani-400 to-warm-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-warm-400 to-dani-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse delay-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Trust Badges - Enhanced */}
      <section className="py-32 bg-gradient-to-br from-white via-gray-50 to-dani-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-dani-200/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-warm-200/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-dani-100 to-warm-100 px-4 py-2 rounded-full text-sm font-medium text-dani-700 mb-6">
              <span className="w-2 h-2 bg-dani-500 rounded-full animate-pulse"></span>
              Excellence in Care
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Trusted by <span className="bg-gradient-to-r from-dani-600 to-warm-600 bg-clip-text text-transparent">Oregon Families</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our commitment to quality care for adults with intellectual and developmental disabilities 
              and compassionate service has made us a trusted partner for families throughout the Portland metro area.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {trustBadges.map((badge, index) => (
              <div key={badge.title} className="group">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-dani-100 to-dani-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <badge.icon className="h-10 w-10 text-dani-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{badge.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-32 bg-gradient-to-br from-dani-600 via-dani-700 to-dani-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-warm-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-dani-400/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white mb-6">
                <span className="w-2 h-2 bg-warm-400 rounded-full animate-pulse"></span>
                Get Started Today
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                Ready to <span className="bg-gradient-to-r from-warm-300 to-warm-400 bg-clip-text text-transparent">Get Started?</span>
              </h2>
              <p className="text-xl text-dani-100 max-w-4xl mx-auto leading-relaxed">
                Contact us today to learn more about our services for adults with intellectual and 
                developmental disabilities and schedule a free consultation. We're here to help you and your family.
              </p>
            </div>
            
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 justify-center">
              <Button 
                variant="warm" 
                size="lg" 
                asChild
                className="text-lg px-8 py-4 shadow-2xl hover:shadow-warm-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="text-lg px-8 py-4 border-2 border-white/30 text-white hover:bg-white hover:text-dani-600 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              >
                <Link href={`tel:${siteData.branches[0].phone}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-white/80 mt-12">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-warm-300" />
                <span className="text-sm font-medium">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-warm-300" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-warm-300" />
                <span className="text-sm font-medium">Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
