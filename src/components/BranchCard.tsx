import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Phone, MapPin, Clock, FileText, ExternalLink, Navigation } from 'lucide-react'
import { Branch } from '@/data/site'
import { formatPhoneNumber, getGoogleMapsDirectionsUrl, getGoogleMapsUrl, getGoogleMapsEmbedUrl } from '@/lib/utils'
import Link from 'next/link'

interface BranchCardProps {
  branch: Branch
  showMap?: boolean
}

export function BranchCard({ branch, showMap = true }: BranchCardProps) {
  return (
    <Card className="h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="bg-gradient-to-r from-dani-50 to-warm-50">
        <CardTitle className="text-xl font-serif text-gray-900">
          {branch.name}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-6 space-y-4">
        {/* Address */}
        <div className="flex items-start space-x-3">
          <MapPin className="h-5 w-5 text-dani-600 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm text-gray-600 leading-relaxed">
              {branch.address}
            </p>
            <a 
              href={getGoogleMapsUrl(branch.address)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-dani-600 hover:text-dani-700 transition-colors inline-flex items-center mt-1"
            >
              <MapPin className="h-3 w-3 mr-1" />
              View on Map
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-3">
          <Phone className="h-5 w-5 text-dani-600 flex-shrink-0" />
          <Link 
            href={`tel:${branch.phone}`}
            className="text-sm text-gray-900 hover:text-dani-600 transition-colors font-medium"
          >
            {formatPhoneNumber(branch.phone)}
          </Link>
        </div>

        {/* Hours */}
        <div className="flex items-start space-x-3">
          <Clock className="h-5 w-5 text-dani-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Hours:</span> {branch.hours}
            </p>
          </div>
        </div>

        {/* License */}
        <div className="flex items-start space-x-3">
          <FileText className="h-5 w-5 text-dani-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-gray-600">
              <span className="font-medium">License:</span> {branch.licenseNumber}
            </p>
          </div>
        </div>

        {/* Map */}
        {showMap && (
          <div className="mt-6">
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                src={getGoogleMapsEmbedUrl(branch.address)}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${branch.name}`}
                className="w-full h-full"
              />
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col space-y-2 pt-4">
          <Button variant="dani" asChild className="w-full">
            <a 
              href={getGoogleMapsDirectionsUrl(branch.address)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Navigation className="mr-2 h-4 w-4" />
              Get Directions
            </a>
          </Button>
          
          <Button variant="outline" asChild className="w-full">
            <Link href={`/gallery?branch=${branch.slug}`}>
              View Gallery
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
