import { Metadata } from 'next'
import Image from 'next/image'

import { PageHero } from '@/components/PageHero'
import { AbuseReportingNotice } from '@/components/ComplianceCallouts'
import { Heart, Users, Shield, Star, Award, Target } from 'lucide-react'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Dani Care Inc\'s mission to provide compassionate, person-centered care for adults with intellectual and developmental disabilities in Oregon.',
  openGraph: {
    title: 'About Us | Dani Care',
    description: 'Learn about Dani Care Inc\'s mission to provide compassionate, person-centered care for adults with intellectual and developmental disabilities.',
  },
}

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We approach every client with genuine care, empathy, and understanding.',
    gradient: 'from-red-400 to-pink-500',
    bgGradient: 'from-red-50 to-pink-50'
  },
  {
    icon: Users,
    title: 'Person-Centered Care',
    description: 'Every care plan is tailored to the individual\'s unique needs, preferences, and goals.',
    gradient: 'from-blue-400 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50'
  },
  {
    icon: Shield,
    title: 'Safety & Quality',
    description: 'We maintain the highest standards of safety and quality in all our services.',
    gradient: 'from-green-400 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50'
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from caregiver training to client care.',
    gradient: 'from-yellow-400 to-orange-500',
    bgGradient: 'from-yellow-50 to-orange-50'
  },
]



export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-dani-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-warm-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-dani-300/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Advanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dani-50 via-white to-warm-50 py-32 lg:py-40">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-dani-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-warm-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-dani-300/15 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-warm-300/15 rounded-full blur-xl animate-pulse delay-1500"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-2 h-2 bg-dani-400/60 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-40 right-1/3 w-1 h-1 bg-warm-400/60 rounded-full animate-bounce delay-700"></div>
          <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-dani-500/50 rounded-full animate-bounce delay-1200"></div>
          <div className="absolute bottom-20 right-1/4 w-1 h-1 bg-warm-500/50 rounded-full animate-bounce delay-900"></div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dani-600/5 via-transparent to-warm-500/5" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-dani-100 to-warm-100 px-8 py-4 rounded-full text-sm font-semibold text-dani-700 shadow-xl border border-dani-200/50 mb-8 animate-fade-in">
              <div className="w-3 h-3 bg-gradient-to-r from-dani-500 to-warm-500 rounded-full animate-pulse"></div>
              <span>Discover Our Story</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-gray-900 mb-8 leading-tight animate-slide-in">
              About{' '}
              <span className="bg-gradient-to-r from-dani-600 via-dani-700 to-warm-600 bg-clip-text text-transparent animate-pulse">
                Dani Care Inc
              </span>
            </h1>
            
                         {/* Subtitle */}
             <div className="max-w-4xl mx-auto">
               <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-900 mb-8 animate-fade-in-delay">
                 Our story, mission, and commitment to providing exceptional adult home care services in Oregon.
               </p>
             </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-gradient-to-br from-dani-400/30 to-warm-400/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-10 right-10 w-16 h-16 bg-gradient-to-br from-warm-400/30 to-dani-400/30 rounded-full blur-lg animate-pulse delay-500"></div>
      </section>

      {/* Our Story - Enhanced */}
      <section className="relative py-32 bg-gradient-to-br from-white via-gray-50/50 to-white">
        <div className="absolute inset-0 bg-gradient-to-r from-dani-50/30 via-transparent to-warm-50/30"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-dani-100 to-warm-100 px-6 py-3 rounded-full text-sm font-semibold text-dani-700 shadow-lg border border-dani-200/50">
                <div className="w-2 h-2 bg-gradient-to-r from-dani-500 to-warm-500 rounded-full animate-pulse"></div>
                <span>Our Journey</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
                Our{' '}
                <span className="bg-gradient-to-r from-dani-600 via-dani-700 to-warm-600 bg-clip-text text-transparent">
                  Story
                </span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-900 leading-relaxed">
                <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <p>
                    Dani Care Inc was founded with a clear mission: to build lasting relationships with individuals, families, and communities, while improving the quality of life for those we serve through extraordinary service and compassionate care.
                  </p>
                </div>
                
                <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <p>
                    As a family-based organization, Dani Care was established by <strong className="text-dani-700">Daniel Zewelde</strong>, Nurse and Co-Founder, and <strong className="text-dani-700">Selam Assefa</strong>, Respiratory Therapist and Co-Founder. Together, they bring both professional expertise and personal commitment to ensuring that care is delivered with dignity, respect, and compassion.
                  </p>
                </div>
                
                <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <p>
                    Their shared vision was born from firsthand experiences with the challenges of finding quality care for adults with intellectual and developmental disabilities. By combining Daniel's nursing background and Selam's medical expertise in respiratory therapy, they created a care model that is both clinically strong and deeply person-centered treating every individual as if they were part of their own family.
                  </p>
                </div>
                
                <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <p>
                    Today, Dani Care Inc proudly serves adults with intellectual and developmental disabilities across the Portland metro area, staying true to its founding family values, professional standards, and unwavering dedication to empowering individuals to live fulfilling lives.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-dani-200/30 via-warm-200/20 to-dani-300/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
              <div className="relative aspect-square w-full max-w-2xl mx-auto">
                <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl group-hover:shadow-3xl transition-all duration-700 overflow-hidden">
                  <Image
                    src="/images/about us.png"
                    alt="About Dani Care Inc - our story and mission"
                    fill
                    className="object-contain rounded-3xl group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-dani-400 to-warm-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-warm-400 to-dani-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary - Ultra Advanced */}
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
              <span>Executive Overview</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-8 leading-tight">
              Executive{' '}
              <span className="bg-gradient-to-r from-dani-600 via-dani-700 to-warm-600 bg-clip-text text-transparent">
                Summary
              </span>
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-dani-200/20 via-warm-200/15 to-dani-300/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
              <div className="relative bg-white/80 backdrop-blur-md rounded-3xl border border-white/30 shadow-2xl group-hover:shadow-3xl transition-all duration-700 p-12">
                <div className="space-y-8">
                  <div className="p-8 bg-gradient-to-r from-dani-50 to-warm-50 rounded-2xl border border-dani-100/50">
                    <p className="text-xl text-gray-900 leading-relaxed">
                      <strong className="text-dani-700">Dani Care-Inc</strong> is committed to providing continuous care and service to adults with 
                      intellectual and developmental disabilities in a home-like environment created to 
                      further improve the quality of life and strengthen each individual we serve.
                    </p>
                  </div>
                  
                  <div className="p-8 bg-gradient-to-r from-warm-50 to-dani-50 rounded-2xl border border-warm-100/50">
                    <p className="text-xl text-gray-900 leading-relaxed">
                      At Dani Care-Inc, our clients will engage in social interactions as they get support 
                      with personal care, medications, health-related activities, money management, 
                      housekeeping, and transportation to appointments, etc., in order to enhance their 
                      ability-regardless of age or income-to participate as fully as possible in all 
                      aspects of living. Our clients will remain a vital part of the community.
                    </p>
                  </div>
                  
                  <div className="p-8 bg-gradient-to-r from-dani-50 to-warm-50 rounded-2xl border border-dani-100/50">
                    <p className="text-xl text-gray-900 leading-relaxed">
                      Dani Care-Inc, its President/Director <strong className="text-dani-700">Daniel Zewelde</strong> and employees will know and follow the laws 
                      and rules as put into place by the Oregon Administrative Rules (OAR's). At Dani 
                      Care-Inc, we strive to go above and beyond the requirements of the Home and 
                      Community Based Services (HCBS) by providing a person-centered service to enrich 
                      lives for each individual we serve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values - Enhanced */}
      <section className="relative py-32 bg-gradient-to-br from-white via-gray-50/50 to-white">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-dani-200/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-warm-200/20 rounded-full blur-xl animate-pulse delay-700"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-dani-100 to-warm-100 px-6 py-3 rounded-full text-sm font-semibold text-dani-700 shadow-lg border border-dani-200/50 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-dani-500 to-warm-500 rounded-full animate-pulse"></div>
              <span>Our Foundation</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-8 leading-tight">
              Our Mission &{' '}
              <span className="bg-gradient-to-r from-dani-600 via-dani-700 to-warm-600 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-dani-200/20 via-warm-200/15 to-dani-300/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                <div className="relative bg-gradient-to-r from-dani-50 via-white to-warm-50 rounded-3xl border border-white/30 shadow-2xl group-hover:shadow-3xl transition-all duration-700 p-12">
                  <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                    Mission Statement
                  </h3>
                  <p className="text-xl text-gray-900 leading-relaxed">
                    Our mission is to develop a shared relationship with all stakeholders and improve 
                    the quality of life for those we serve, while providing an extraordinary service 
                    and compassionate care.
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-xl text-gray-900 max-w-4xl mx-auto mt-12 leading-relaxed">
              We believe every individual with intellectual and developmental disabilities deserves 
              to live with dignity, independence, and the comfort of familiar surroundings. Our 
              person-centered approach ensures that each client receives care that respects their 
              individuality and promotes their well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-dani-200/20 via-warm-200/15 to-dani-300/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-white/30 shadow-xl group-hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8 text-center">
                  <div className={`mx-auto w-20 h-20 bg-gradient-to-br ${value.bgGradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <value.icon className={`h-10 w-10 bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-900 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Executive Director Section - Ultra Enhanced */}
      <section className="relative py-32 bg-gradient-to-br from-white via-gray-50/50 to-white">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-dani-300/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-warm-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-dani-100 to-warm-100 px-6 py-3 rounded-full text-sm font-semibold text-dani-700 shadow-lg border border-dani-200/50 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-dani-500 to-warm-500 rounded-full animate-pulse"></div>
              <span>Leadership</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-8 leading-tight">
              Executive{' '}
              <span className="bg-gradient-to-r from-dani-600 via-dani-700 to-warm-600 bg-clip-text text-transparent">
                Director
              </span>
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-dani-200/20 via-warm-200/15 to-dani-300/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
              <div className="relative bg-white/80 backdrop-blur-md rounded-3xl border border-white/30 shadow-2xl group-hover:shadow-3xl transition-all duration-700 p-12">
                <div className="text-center mb-12">
                  <h3 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                    Daniel Zewelde
                  </h3>
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-dani-100 to-warm-100 px-8 py-4 rounded-full text-lg font-semibold text-dani-700 shadow-lg border border-dani-200/50">
                    <div className="w-3 h-3 bg-gradient-to-r from-dani-500 to-warm-500 rounded-full animate-pulse"></div>
                    <span>President/Director & Founder</span>
                  </div>
                </div>
                
                <div className="p-8 bg-gradient-to-r from-dani-50 to-warm-50 rounded-2xl border border-dani-100/50 mb-12">
                  <p className="text-xl text-gray-900 leading-relaxed">
                    Daniel Zewelde, Nurse and Co-Founder, serves as the Executive Director of Dani Care Inc. 
                    He brings over a decade of combined nursing and home management experience, with a background 
                    at Legacy Mount Hood Medical Center and Vibra Specialty Hospital.
                  </p>
                  <br />
                  <p className="text-xl text-gray-900 leading-relaxed">
                    Since 2017, Daniel has also operated licensed foster and group homes for adults with 
                    intellectual and developmental disabilities, ensuring compliance with Oregon Administrative 
                    Rules (OAR) and delivering person-centered care. His leadership combines clinical expertise, 
                    regulatory knowledge, and compassion to uphold the highest standards of independence, 
                    dignity, and quality of life for those served.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div className="group">
                      <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                        <h4 className="text-2xl font-bold text-dani-600 mb-6 flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-dani-500 to-warm-500 rounded-lg flex items-center justify-center">
                            <Shield className="h-5 w-5 text-white" />
                          </div>
                          Leadership & Strategic Management
                        </h4>
                        <ul className="space-y-3 text-gray-900">
                          <li className="flex items-start space-x-3">
                            <span className="text-dani-600 font-bold mt-1">•</span>
                            <span>Oversees agency mission, vision, and core values achievement</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <span className="text-dani-600 font-bold mt-1">•</span>
                            <span>Provides strategic leadership and coordination</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <span className="text-dani-600 font-bold mt-1">•</span>
                            <span>Manages Lead Direct Support Professionals</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <span className="text-dani-600 font-bold mt-1">•</span>
                            <span>Develops and cultivates relationships with families and stakeholders</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="group">
                      <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                        <h4 className="text-2xl font-bold text-dani-600 mb-6 flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-dani-500 to-warm-500 rounded-lg flex items-center justify-center">
                            <Award className="h-5 w-5 text-white" />
                          </div>
                          Quality Assurance & Compliance
                        </h4>
                        <ul className="space-y-3 text-gray-900">
                          <li className="flex items-start space-x-3">
                            <span className="text-dani-600 font-bold mt-1">•</span>
                            <span>Ensures compliance with federal, state, and local regulations</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <span className="text-dani-600 font-bold mt-1">•</span>
                            <span>Maintains Oregon Administrative Rules (OAR) compliance</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <span className="text-dani-600 font-bold mt-1">•</span>
                            <span>Implements quality assurance programs</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <span className="text-dani-600 font-bold mt-1">•</span>
                            <span>Monitors Basic Assurances requirements</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="group">
                      <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                        <h4 className="text-2xl font-bold text-dani-600 mb-6 flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-dani-500 to-warm-500 rounded-lg flex items-center justify-center">
                            <Heart className="h-5 w-5 text-white" />
                          </div>
                          Person-Centered Care & Support
                        </h4>
                        <ul className="space-y-3 text-gray-900">
                          <li className="flex items-start space-x-3">
                            <span className="text-dani-600 font-bold mt-1">•</span>
                            <span>Facilitates person-centered planning and implementation</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <span className="text-dani-600 font-bold mt-1">•</span>
                            <span>Coordinates individual service plans and outcomes</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <span className="text-dani-600 font-bold mt-1">•</span>
                            <span>Builds social capital and natural support networks</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <span className="text-dani-600 font-bold mt-1">•</span>
                            <span>Advocates for appropriate treatment and rights protection</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="group">
                      <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                        <h4 className="text-2xl font-bold text-dani-600 mb-6 flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-dani-500 to-warm-500 rounded-lg flex items-center justify-center">
                            <Target className="h-5 w-5 text-white" />
                          </div>
                          Financial & Operational Management
                        </h4>
                        <ul className="space-y-3 text-gray-900">
                          <li className="flex items-start space-x-3">
                            <span className="text-dani-600 font-bold mt-1">•</span>
                            <span>Develops and maintains program budgets</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <span className="text-dani-600 font-bold mt-1">•</span>
                            <span>Manages personnel recruitment and development</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <span className="text-dani-600 font-bold mt-1">•</span>
                            <span>Oversees facility maintenance and management</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <span className="text-dani-600 font-bold mt-1">•</span>
                            <span>Provides 24/7 emergency response coordination</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-gradient-to-r from-dani-50 to-warm-50 rounded-2xl border border-dani-100/50">
                  <p className="text-xl text-gray-900 leading-relaxed">
                    Daniel's comprehensive leadership ensures that Dani Care Inc maintains the highest 
                    standards of care while fostering an environment that promotes the welfare, dignity, 
                    and independence of every individual we serve. His commitment to excellence and 
                    person-centered care continues to drive our mission forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Abuse Reporting Notice */}
      <section className="relative py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-dani-200/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AbuseReportingNotice />
        </div>
      </section>
    </div>
  )
}
