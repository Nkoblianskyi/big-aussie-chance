import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-12 text-blue-800">Privacy Policy</h1>

          <Card className="border-2 border-yellow-200 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We collect information you provide directly to us, such as when you create an account, purchase tickets,
                or contact us for support. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Personal identification information (name, email, phone number)</li>
                <li>Address and location information</li>
                <li>Payment and banking information</li>
                <li>Date of birth and identity verification documents</li>
                <li>Transaction history and lottery preferences</li>
                <li>Communication preferences and marketing opt-ins</li>
                <li>Device information and IP addresses</li>
                <li>Browsing behavior and website interaction data</li>
              </ul>

              <p className="mt-4">
                We may also collect information automatically when you visit our website, including browser type,
                operating system, referring website, pages visited, and time spent on each page. This information helps
                us improve our services and provide a better user experience.
              </p>

              <p>
                For age verification purposes, we may request government-issued identification documents. This is
                necessary to comply with gambling regulations that require participants to be 18 years or older.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-yellow-200 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Process your lottery ticket purchases and manage your account</li>
                <li>Verify your identity and age (18+ requirement)</li>
                <li>Communicate with you about your account and transactions</li>
                <li>Notify you about draw results and prize winnings</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve our services and user experience</li>
                <li>Detect and prevent fraudulent activities</li>
                <li>Analyze usage patterns to optimize our website</li>
                <li>Personalize your experience based on preferences</li>
                <li>Conduct market research and statistical analysis</li>
              </ul>

              <p className="mt-4">
                We process your personal information based on legitimate interests in providing and improving our
                services, fulfilling our contractual obligations to you as a user, complying with legal requirements,
                and with your consent where applicable.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-yellow-200 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Data Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. All sensitive information is encrypted and stored
                securely.
              </p>

              <p>
                Our security measures include encryption protocols, firewalls, secure server infrastructure, regular
                security assessments, and strict access controls. We regularly review and update our security practices
                to ensure the highest level of protection for your data.
              </p>

              <p>
                While we strive to protect your personal information, no method of transmission over the Internet or
                electronic storage is 100% secure. We cannot guarantee absolute security but are committed to
                implementing reasonable security measures to protect your information.
              </p>

              <p>
                In the event of a data breach that affects your personal information, we will notify you in accordance
                with applicable laws and regulations.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-yellow-200 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this
                Privacy Policy, unless a longer retention period is required or permitted by law. The criteria used to
                determine our retention periods include:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The length of time we have an ongoing relationship with you</li>
                <li>Legal obligations to retain data for certain periods</li>
                <li>Statute of limitations under applicable law</li>
                <li>Ongoing or potential legal disputes</li>
                <li>Guidelines from regulatory authorities</li>
              </ul>

              <p className="mt-4">
                When we no longer need to process your personal information, we will securely delete or anonymize it. If
                complete deletion is not possible (for technical reasons or due to legal retention requirements), we
                will implement appropriate measures to prevent any further processing of your data.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-yellow-200 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Depending on your location, you may have certain rights regarding your personal information. These may
                include:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate or incomplete information</li>
                <li>The right to delete your personal information</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>

              <p className="mt-4">
                You can update your account information and preferences at any time by logging into your account on our
                website. You may also contact our customer support team to exercise any of these rights.
              </p>

              <p>
                Please note that some of these rights may be limited where we have compelling legitimate grounds to
                process your information or where we are required to retain certain information for legal compliance.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-yellow-200">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other
                operational, legal, or regulatory reasons. The updated policy will be effective when it is posted on
                this page.
              </p>

              <p>
                We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use,
                and protect your information. Your continued use of our services after any changes to this Privacy
                Policy constitutes your acceptance of the updated policy.
              </p>

              <p>
                If we make material changes to this Privacy Policy that significantly affect how we use your personal
                information, we will make reasonable efforts to notify you of these changes. This may include sending an
                email to the address associated with your account or displaying a prominent notice on our website.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
