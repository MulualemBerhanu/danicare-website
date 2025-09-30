import { AlertTriangle, Languages, Shield } from 'lucide-react'
import { siteData } from '@/data/site'

export function ComplaintInfo() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
      <div className="flex items-start space-x-3">
        <AlertTriangle className="h-6 w-6 text-amber-600 mt-0.5 flex-shrink-0" />
        <div>
          <h3 className="text-lg font-semibold text-amber-900 mb-2">
            Complaints & Concerns
          </h3>
          <p className="text-amber-800 mb-4">
            If you have concerns about our services, you may file a complaint with the Oregon Health Authority.
          </p>
          <div className="space-y-2 text-sm text-amber-800">
            <p>
              <strong>Phone:</strong>{' '}
              <a 
                href={`tel:${siteData.complaints.phone}`}
                className="text-amber-900 hover:text-amber-700 underline"
              >
                {siteData.complaints.phone}
              </a>
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a 
                href={`mailto:${siteData.complaints.email}`}
                className="text-amber-900 hover:text-amber-700 underline"
              >
                {siteData.complaints.email}
              </a>
            </p>
            <p>
              <strong>Address:</strong> {siteData.complaints.address}
            </p>
            <p>
              <strong>Web:</strong>{' '}
              <a 
                href={siteData.complaints.web}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-900 hover:text-amber-700 underline"
              >
                Oregon Health Authority
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


export function NoPHINotice() {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
      <div className="flex items-start space-x-3">
        <Shield className="h-6 w-6 text-gray-700 mt-0.5 flex-shrink-0" />
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Privacy Notice
          </h3>
          <p className="text-gray-700 mb-4">
            This contact form is for general inquiries only. Please do not include any personal health information (PHI) 
            or sensitive medical details in your message.
          </p>
          <p className="text-sm text-gray-700">
            For questions about your privacy rights or to request a copy of our Notice of Privacy Practices, 
            contact us at{' '}
            <a 
              href={`mailto:${siteData.privacy.contactEmail}`}
              className="text-dani-600 hover:text-dani-700 underline"
            >
              {siteData.privacy.contactEmail}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export function AbuseReportingNotice() {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
      <div className="flex items-start space-x-3">
        <AlertTriangle className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />
        <div>
          <h3 className="text-lg font-semibold text-red-900 mb-2">
            Mandatory Abuse Reporting
          </h3>
          <p className="text-red-800 mb-4">
            Dani Care staff are mandatory reporters of suspected abuse, neglect, or exploitation of vulnerable adults.
          </p>
          <p className="text-sm text-red-700">
            If you suspect abuse, neglect, or exploitation, please contact Adult Protective Services immediately 
            at <strong>1-855-503-SAFE (7233)</strong> or your local law enforcement.
          </p>
        </div>
      </div>
    </div>
  )
}
