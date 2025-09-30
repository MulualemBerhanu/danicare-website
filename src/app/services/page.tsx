import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Heart, 
  Shield, 
  Users, 
  Clock, 
  Utensils, 
  Home, 
  Pill, 
  Activity,
  CheckCircle,
  Star,
  Award,
  Zap
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive services for adults with intellectual and developmental disabilities including personal care, medication management, companionship, and specialized care in Oregon.',
  openGraph: {
    title: 'Our Services | Dani Care',
    description: 'Comprehensive services for adults with intellectual and developmental disabilities in Oregon.',
  },
}

const coreServices = [
  {
    icon: Heart,
    title: 'Personal Care',
    description: 'Assistance with Activities of daily living(ADLs).',
    details: [
      'Bathing and personal hygiene',
      'Dressing and grooming',
      'Mobility assistance',
      'Toileting and incontinence care',
      'Skin care and prevention'
    ],
    gradient: 'from-red-400 to-pink-500',
    bgGradient: 'from-red-50 to-pink-50'
  },
  {
    icon: Shield,
    title: 'Medication Management',
    description: 'Safe and reliable medication assistance and reminders.',
    details: [
      'Medication reminders',
      'Medication administration',
      'Prescription pickup',
      'Medication organization',
      'Communication with healthcare providers'
    ],
    gradient: 'from-blue-400 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50'
  },
  {
    icon: Users,
    title: 'Companionship',
    description: 'Friendly companionship and social interaction to combat loneliness.',
    details: [
      'Conversation and social interaction',
      'Reading and entertainment',
      'Accompaniment to appointments',
      'Family communication support',
      'Emotional support and encouragement'
    ],
    gradient: 'from-green-400 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50'
  },
  {
    icon: Utensils,
    title: 'Meal Preparation',
    description: 'Nutritious meal planning and preparation tailored to dietary needs.',
    details: [
      'Meal planning and grocery shopping',
      'Healthy meal preparation',
      'Special dietary accommodations',
      'Hydration monitoring',
      'Cleanup and kitchen maintenance'
    ],
    gradient: 'from-yellow-400 to-orange-500',
    bgGradient: 'from-yellow-50 to-orange-50'
  }
]

const specializedServices = [
  {
    icon: Home,
    title: 'Home Management',
    description: 'Light housekeeping and home organization to maintain a safe, comfortable environment.',
    details: [
      'Light housekeeping',
      'Laundry and linen care',
      'Home organization',
      'Safety monitoring',
      'Emergency response coordination'
    ],
    gradient: 'from-purple-400 to-indigo-500',
    bgGradient: 'from-purple-50 to-indigo-50'
  },
  {
    icon: Activity,
    title: 'Activity Support',
    description: 'Encouraging engagement in meaningful activities and hobbies.',
    details: [
      'Exercise and physical activity',
      'Hobby and interest support',
      'Community event participation',
      'Technology assistance'
    ],
    gradient: 'from-teal-400 to-cyan-500',
    bgGradient: 'from-teal-50 to-cyan-50'
  },
  {
    icon: Clock,
    title: '24/7 Care',
    description: 'Round-the-clock care and support for those who need constant assistance.',
    details: [
      'Overnight care and monitoring',
      'Emergency response',
      'Continuous supervision',
      'Care coordination',
      'Family respite support'
    ],
    gradient: 'from-indigo-400 to-blue-500',
    bgGradient: 'from-indigo-50 to-blue-50'
  },
  {
    icon: Pill,
    title: 'Specialized Care',
    description: 'Specialized care for specific conditions and needs.',
    details: [
      'Post-surgery recovery',
      'Chronic condition management',
      'Palliative care support',
      'Respite care services'
    ],
    gradient: 'from-rose-400 to-pink-500',
    bgGradient: 'from-rose-50 to-pink-50'
  }
]

const approachValues = [
  {
    icon: Heart,
    title: 'Autonomy',
    description: 'Respecting individual choices and promoting independence',
    gradient: 'from-dani-500 to-dani-600'
  },
  {
    icon: Users,
    title: 'Dignity',
    description: 'Treating every person with respect and compassion',
    gradient: 'from-warm-500 to-warm-600'
  },
  {
    icon: Home,
    title: 'Community',
    description: 'Supporting social connections and community integration',
    gradient: 'from-dani-600 to-warm-500'
  }
]

export default function ServicesPage() {
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
              <span>Comprehensive Care</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-gray-900 mb-8 leading-tight animate-slide-in">
              Our{' '}
              <span className="bg-gradient-to-r from-dani-600 via-dani-700 to-warm-600 bg-clip-text text-transparent animate-pulse">
                Services
              </span>
            </h1>
            
            {/* Subtitle */}
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-800 mb-8 animate-fade-in-delay">
                Comprehensive services for adults with intellectual and developmental disabilities, designed to support independence, dignity, and quality of life.
              </p>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-gradient-to-br from-dani-400/30 to-warm-400/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-10 right-10 w-16 h-16 bg-gradient-to-br from-warm-400/30 to-dani-400/30 rounded-full blur-lg animate-pulse delay-500"></div>
      </section>

      {/* Core Services - Enhanced */}
      <section className="relative py-32 bg-gradient-to-br from-white via-gray-50/50 to-white">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-dani-200/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-warm-200/20 rounded-full blur-xl animate-pulse delay-700"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-dani-100 to-warm-100 px-6 py-3 rounded-full text-sm font-semibold text-dani-700 shadow-lg border border-dani-200/50 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-dani-500 to-warm-500 rounded-full animate-pulse"></div>
              <span>Essential Care</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-8 leading-tight">
              Core{' '}
              <span className="bg-gradient-to-r from-dani-600 via-dani-700 to-warm-600 bg-clip-text text-transparent">
                Care Services
              </span>
            </h2>
            
            <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
              Our fundamental services focus on maintaining independence and dignity while providing 
              the support needed for daily living activities for adults with intellectual and developmental disabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {coreServices.map((service, index) => (
              <div key={service.title} className="group">
                <div className="absolute inset-0 bg-gradient-to-br from-dani-200/20 via-warm-200/15 to-dani-300/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-white/30 shadow-xl group-hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8 h-full">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.bgGradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <service.icon className={`h-8 w-8 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-800 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-dani-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-800">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services - Enhanced */}
      <section className="relative py-32 bg-gradient-to-br from-dani-50 via-white to-warm-50">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-dani-300/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-warm-300/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-dani-100 to-warm-100 px-6 py-3 rounded-full text-sm font-semibold text-dani-700 shadow-lg border border-dani-200/50 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-dani-500 to-warm-500 rounded-full animate-pulse"></div>
              <span>Advanced Support</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-8 leading-tight">
              Specialized{' '}
              <span className="bg-gradient-to-r from-dani-600 via-dani-700 to-warm-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            
            <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
              Additional services designed to enhance quality of life and support specific needs 
              and preferences for adults with intellectual and developmental disabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {specializedServices.map((service, index) => (
              <div key={service.title} className="group">
                <div className="absolute inset-0 bg-gradient-to-br from-dani-200/20 via-warm-200/15 to-dani-300/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-white/30 shadow-xl group-hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8 h-full">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.bgGradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <service.icon className={`h-8 w-8 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-800 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-warm-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-800">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Direct Nursing Services & Safety Features */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mt-16">
            {/* Direct Nursing Services */}
            <div className="group">
              <div className="absolute inset-0 bg-gradient-to-br from-dani-200/20 via-warm-200/15 to-dani-300/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-white/30 shadow-xl group-hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8 h-full">
                <div className="flex items-start space-x-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-dani-100 to-dani-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Heart className="h-8 w-8 text-dani-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Direct Nursing Services</h3>
                    <p className="text-gray-800 leading-relaxed">Comprehensive medical care and support for complex health needs.</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-warm-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800"><strong>IV therapy</strong> and medication management</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-warm-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800"><strong>Wound care</strong> and treatment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-warm-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800"><strong>Ventilator support</strong> for respiratory needs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-warm-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800"><strong>Feeding tube</strong> management and care</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-warm-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800"><strong>Tracheostomy care</strong> and monitoring</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Safety & Security Features */}
            <div className="group">
              <div className="absolute inset-0 bg-gradient-to-br from-dani-200/20 via-warm-200/15 to-dani-300/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-white/30 shadow-xl group-hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8 h-full">
                <div className="flex items-start space-x-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-dani-100 to-dani-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Shield className="h-8 w-8 text-dani-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Safety & Security Features</h3>
                    <p className="text-gray-800 leading-relaxed">Advanced safety systems and security measures for complete protection.</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-warm-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800"><strong>Fire sprinkler system</strong> for complete fire protection</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-warm-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800"><strong>Backup generator</strong> for power outage protection</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-warm-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800"><strong>Clean, loving environment</strong> with quality care</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licensed & Endorsed Care - New Section */}
      <section className="relative py-32 bg-gradient-to-br from-dani-50 via-white to-warm-50">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-dani-300/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-warm-300/10 rounded-full blur-2xl animate-pulse delay-700"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="max-w-2xl mx-auto">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-white/30 shadow-xl p-12 text-center">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-dani-200/20 via-warm-200/15 to-dani-300/20 rounded-3xl blur-2xl"></div>
                
                <div className="relative">
                  {/* Icon and heading */}
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-dani-100 to-dani-200 rounded-2xl flex items-center justify-center shadow-lg">
                      <Shield className="h-8 w-8 text-dani-600" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-dani-700">
                      Licensed & Endorsed Care
                    </h2>
                  </div>
                  
                  {/* Main content */}
                  <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                    Dani Care, Inc. is proudly endorsed and licensed by the Oregon Department of Human Services (DHS), Developmental Disability Services.
                  </p>
                  
                  {/* Checkmarked bullet points */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3">
                      <CheckCircle className="h-6 w-6 text-warm-600 flex-shrink-0" />
                      <span className="text-lg font-semibold text-gray-800">24-Hour Residential Services</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <CheckCircle className="h-6 w-6 text-warm-600 flex-shrink-0" />
                      <span className="text-lg font-semibold text-gray-800">Direct Nursing Services (effective Dec 20, 2024)</span>
                    </div>
                  </div>
                  
                  {/* Optional certificate preview */}
                  <div className="mt-8 pt-6 border-t border-gray-200/50">
                    <div className="inline-flex items-center gap-2 text-dani-600 hover:text-dani-700 transition-colors cursor-pointer">
                      <Award className="h-5 w-5" />
                      <span className="text-sm font-medium">View Official Certificate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Person-Centered Approach - Enhanced */}
      <section className="relative py-32 bg-gradient-to-br from-white via-gray-50/50 to-white">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-dani-300/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-warm-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-dani-100 to-warm-100 px-6 py-3 rounded-full text-sm font-semibold text-dani-700 shadow-lg border border-dani-200/50 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-dani-500 to-warm-500 rounded-full animate-pulse"></div>
              <span>Our Philosophy</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-8 leading-tight">
              Our Person-Centered{' '}
              <span className="bg-gradient-to-r from-dani-600 via-dani-700 to-warm-600 bg-clip-text text-transparent">
                Approach
              </span>
            </h2>
            
            <div className="max-w-5xl mx-auto mb-16">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-dani-200/20 via-warm-200/15 to-dani-300/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                <div className="relative bg-white/80 backdrop-blur-md rounded-3xl border border-white/30 shadow-2xl group-hover:shadow-3xl transition-all duration-700 p-12">
                  <p className="text-xl text-gray-800 leading-relaxed">
                    Every care plan is uniquely tailored to respect individual preferences, promote autonomy, 
                    and support community integration. We believe in empowering our clients with intellectual 
                    and developmental disabilities to make choices about their care while providing the support 
                    they need to live independently.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {approachValues.map((value, index) => (
                <div key={value.title} className="group">
                  <div className="absolute inset-0 bg-gradient-to-br from-dani-200/20 via-warm-200/15 to-dani-300/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-white/30 shadow-xl group-hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-dani-100 to-warm-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <value.icon className={`h-10 w-10 bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-800 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
