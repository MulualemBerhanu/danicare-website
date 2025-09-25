import { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { siteData } from '@/data/site'

export const metadata: Metadata = {
  title: 'Non-Discrimination Notice',
  description: 'Dani Care\'s commitment to non-discrimination and equal access to care services.',
  openGraph: {
    title: 'Non-Discrimination Notice | Dani Care',
    description: 'Dani Care\'s commitment to non-discrimination and equal access.',
  },
}

export default function NondiscriminationPage() {
  return (
    <div>
      <PageHero
        title="Non-Discrimination Notice"
        subtitle="Our commitment to providing equal access to care services for all individuals."
      />

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
              Section 1557 Non-Discrimination Notice
            </h2>
            
            <p className="text-gray-700 mb-6">
              Dani Care complies with applicable Federal civil rights laws and does not discriminate 
              on the basis of race, color, national origin, age, disability, or sex. Dani Care does 
              not exclude people or treat them differently because of race, color, national origin, 
              age, disability, or sex.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Dani Care Provides Free Aids and Services to People with Disabilities
            </h3>
            <p className="text-gray-700 mb-6">
              Dani Care provides free aids and services to people with disabilities to communicate 
              effectively with us, such as:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Qualified sign language interpreters</li>
              <li>Written information in other formats (large print, audio, accessible electronic formats, other formats)</li>
              <li>Free language services to people whose primary language is not English</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Language Access Services
            </h3>
            <p className="text-gray-700 mb-6">
              {siteData.languageAccess.blurb} Dani Care provides free language services to people 
              whose primary language is not English, such as:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Qualified interpreters</li>
              <li>Information written in other languages</li>
              <li>Translation services</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              How to Request These Services
            </h3>
            <p className="text-gray-700 mb-6">
              If you need these services, contact Dani Care at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> {siteData.branches[0].phone}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> {siteData.branches[0].email}
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> {siteData.branches[0].address}
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              If You Believe That Dani Care Has Failed to Provide These Services
            </h3>
            <p className="text-gray-700 mb-6">
              If you believe that Dani Care has failed to provide these services or discriminated 
              in another way on the basis of race, color, national origin, age, disability, or sex, 
              you can file a grievance with:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-2">
                <strong>Dani Care Compliance Officer</strong>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> {siteData.branches[0].phone}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> {siteData.privacy.contactEmail}
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> {siteData.branches[0].address}
              </p>
            </div>

            <p className="text-gray-700 mb-6">
              You can also file a civil rights complaint with the U.S. Department of Health and 
              Human Services, Office for Civil Rights, electronically through the Office for Civil 
              Rights Complaint Portal, available at{' '}
              <a 
                href="https://ocrportal.hhs.gov/ocr/portal/lobby.jsf"
                className="text-dani-600 hover:text-dani-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ocrportal.hhs.gov/ocr/portal/lobby.jsf
              </a>
              , or by mail or phone at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-2">
                <strong>U.S. Department of Health and Human Services</strong>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>200 Independence Avenue, SW</strong>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Room 509F, HHH Building</strong>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Washington, D.C. 20201</strong>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>1-800-368-1019, 800-537-7697 (TDD)</strong>
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong>{' '}
                <a 
                  href="mailto:OCRComplaint@hhs.gov"
                  className="text-dani-600 hover:text-dani-700 underline"
                >
                  OCRComplaint@hhs.gov
                </a>
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Complaint forms are available at:
            </h3>
            <p className="text-gray-700 mb-6">
              <a 
                href="https://www.hhs.gov/ocr/office/file/index.html"
                className="text-dani-600 hover:text-dani-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.hhs.gov/ocr/office/file/index.html
              </a>
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">
                Important Notice
              </h4>
              <p className="text-blue-800">
                This notice is required by Section 1557 of the Affordable Care Act and its implementing 
                regulations. Dani Care is committed to providing equal access to care services for all 
                individuals, regardless of their background or circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
