import { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'
import { NoPHINotice, ComplaintInfo } from '@/components/ComplianceCallouts'
import { siteData } from '@/data/site'
import { Phone, Mail, MessageCircle, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Dani Care for compassionate adult home care services in Oregon. Schedule a tour today.',
  openGraph: {
    title: 'Contact Us | Dani Care',
    description: 'Get in touch with Dani Care for compassionate adult home care services in Oregon.',
  },
}

export default function ContactPage() {
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
              <span className="animate-pulse">Get in Touch</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 mb-8 leading-tight animate-slide-in">
              Contact{' '}
              <span className="bg-gradient-to-r from-dani-600 via-dani-700 to-warm-600 bg-clip-text text-transparent animate-pulse">
                Us
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in-delay">
              Get in touch with our team to learn more about our services or schedule a tour. 
              We're here to help you and your family.
            </p>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-delay-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/30">
                <div className="w-12 h-12 bg-gradient-to-br from-dani-100 to-dani-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-dani-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-700 text-sm">Direct phone lines for each location</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/30">
                <div className="w-12 h-12 bg-gradient-to-br from-dani-100 to-dani-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-dani-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-700 text-sm">Send us a message anytime</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/30">
                <div className="w-12 h-12 bg-gradient-to-br from-dani-100 to-dani-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-dani-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Response</h3>
                <p className="text-gray-700 text-sm">We respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  We're here to answer your questions and help you find the right adult care solution 
                  for your loved ones. Contact us today to get started.
                </p>
              </div>

              {/* Branch Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Our Locations
                </h3>
                {siteData.branches.map((branch) => (
                  <div key={branch.slug} className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {branch.name}
                    </h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p>{branch.address}</p>
                      <p>Phone: {branch.phone}</p>
                      <p>Email: {branch.email}</p>
                      <p>Hours: {branch.hours}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Compliance Notices */}
              <div className="space-y-6">
                <NoPHINotice />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complaint Information */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ComplaintInfo />
        </div>
      </section>
    </div>
  )
}
