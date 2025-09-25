import { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { siteData } from '@/data/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Dani Care\'s Notice of Privacy Practices - how we use and protect your personal health information.',
  openGraph: {
    title: 'Privacy Policy | Dani Care',
    description: 'Dani Care\'s Notice of Privacy Practices.',
  },
}

export default function PrivacyPage() {
  return (
    <div>
      <PageHero
        title="Notice of Privacy Practices"
        subtitle="How we use and protect your personal health information."
      />

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-blue-900 mb-3">
                Effective Date: January 1, 2024
              </h2>
              <p className="text-blue-800">
                This notice describes how medical information about you may be used and disclosed 
                and how you can get access to this information. Please review it carefully.
              </p>
            </div>

            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
              Your Rights
            </h2>
            <p className="text-gray-700 mb-6">
              When it comes to your health information, you have certain rights. This section 
              explains your rights and some of our responsibilities to help you.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Get an electronic or paper copy of your medical record
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>You can ask to see or get an electronic or paper copy of your medical record and other health information we have about you.</li>
              <li>We will provide a copy or a summary of your health information, usually within 30 days of your request.</li>
              <li>We may charge a reasonable, cost-based fee.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Ask us to correct your medical record
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>You can ask us to correct health information about you that you think is incorrect or incomplete.</li>
              <li>We may say "no" to your request, but we'll tell you why in writing within 60 days.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Request confidential communications
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>You can ask us to contact you in a specific way (for example, home or office phone) or to send mail to a different address.</li>
              <li>We will say "yes" to all reasonable requests.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Ask us to limit what we use or share
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>You can ask us not to use or share certain health information for treatment, payment, or our operations.</li>
              <li>We are not required to agree to your request, and we may say "no" if it would affect your care.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Get a list of those with whom we've shared information
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>You can ask for a list (accounting) of the times we've shared your health information for six years prior to the date you ask.</li>
              <li>We will include all the disclosures except for those about treatment, payment, and health care operations, and certain other disclosures.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Get a copy of this privacy notice
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>You can ask for a paper copy of this notice at any time, even if you have agreed to receive the notice electronically.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Choose someone to act for you
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>If you have given someone medical power of attorney or if someone is your legal guardian, that person can exercise your rights and make choices about your health information.</li>
              <li>We will make sure the person has this authority and can act for you before we take any action.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              File a complaint if you feel your rights are violated
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>You can complain if you feel we have violated your rights by contacting us using the information on page 1.</li>
              <li>You can file a complaint with the U.S. Department of Health and Human Services Office for Civil Rights by sending a letter to 200 Independence Avenue, S.W., Washington, D.C. 20201, calling 1-877-696-6775, or visiting <a href="https://www.hhs.gov/ocr/privacy/hipaa/complaints/" className="text-dani-600 hover:text-dani-700 underline">www.hhs.gov/ocr/privacy/hipaa/complaints/</a>.</li>
              <li>We will not retaliate against you for filing a complaint.</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 mt-12">
              Your Choices
            </h2>
            <p className="text-gray-700 mb-6">
              For certain health information, you can tell us your choices about what we share. 
              If you have a clear preference for how we share your information in the situations 
              described below, talk to us. Tell us what you want us to do, and we will follow 
              your instructions.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              In these cases, you have both the right and choice to tell us to:
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Share information with your family, close friends, or others involved in your care</li>
              <li>Share information in a disaster relief situation</li>
              <li>Include your information in a hospital directory</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 mt-12">
              Our Uses and Disclosures
            </h2>
            <p className="text-gray-700 mb-6">
              How do we typically use or share your health information? We typically use or share 
              your health information in the following ways.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Treat you
            </h3>
            <p className="text-gray-700 mb-6">
              We can use your health information and share it with other professionals who are treating you.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Run our organization
            </h3>
            <p className="text-gray-700 mb-6">
              We can use and share your health information to run our practice, improve your care, 
              and contact you when necessary.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Bill for your services
            </h3>
            <p className="text-gray-700 mb-6">
              We can use and share your health information to bill and get payment from health plans 
              or other entities.
            </p>

            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 mt-12">
              How else can we use or share your health information?
            </h2>
            <p className="text-gray-700 mb-6">
              We are allowed or required to share your information in other ways – usually in ways 
              that contribute to the public good, such as public health and research. We have to 
              meet many conditions in the law before we can share your information for these purposes.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Help with public health and safety issues
            </h3>
            <p className="text-gray-700 mb-6">
              We can share health information about you for certain situations such as:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Preventing disease</li>
              <li>Helping with product recalls</li>
              <li>Reporting adverse reactions to medications</li>
              <li>Reporting suspected abuse, neglect, or domestic violence</li>
              <li>Preventing or reducing a serious threat to anyone's health or safety</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Do research
            </h3>
            <p className="text-gray-700 mb-6">
              We can use or share your information for health research.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Comply with the law
            </h3>
            <p className="text-gray-700 mb-6">
              We will share information about you if state or federal laws require it, including 
              with the Department of Health and Human Services if it wants to see that we're 
              complying with federal privacy law.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Respond to organ and tissue donation requests
            </h3>
            <p className="text-gray-700 mb-6">
              We can share health information about you with organ procurement organizations.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Work with a medical examiner or funeral director
            </h3>
            <p className="text-gray-700 mb-6">
              We can share health information with a coroner, medical examiner, or funeral director 
              when an individual dies.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Address workers' compensation, law enforcement, and other government requests
            </h3>
            <p className="text-gray-700 mb-6">
              We can use or share health information about you:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>For workers' compensation claims</li>
              <li>For law enforcement purposes or with a law enforcement official</li>
              <li>With health oversight agencies for activities authorized by law</li>
              <li>For special government functions such as military, national security, and presidential protective services</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Respond to lawsuits and legal actions
            </h3>
            <p className="text-gray-700 mb-6">
              We can share health information about you in response to a court or administrative 
              order, or in response to a subpoena.
            </p>

            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 mt-12">
              Our Responsibilities
            </h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>We are required by law to maintain the privacy and security of your protected health information.</li>
              <li>We will let you know promptly if a breach occurs that may have compromised the privacy or security of your information.</li>
              <li>We must follow the duties and privacy practices described in this notice and give you a copy of it.</li>
              <li>We will not use or share your information other than as described here unless you tell us we can in writing. If you tell us we can, you may change your mind at any time. Let us know in writing if you change your mind.</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 mt-12">
              Contact Information
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-2">
                <strong>For more information about this notice or our privacy practices, contact:</strong>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Dani Care Privacy Officer</strong>
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

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
              <h4 className="text-lg font-semibold text-yellow-900 mb-3">
                Changes to the Terms of This Notice
              </h4>
              <p className="text-yellow-800">
                We can change the terms of this notice, and the changes will apply to all information 
                we have about you. The new notice will be available upon request, in our office, and 
                on our web site.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
