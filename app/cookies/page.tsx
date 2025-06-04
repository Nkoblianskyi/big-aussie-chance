import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-12 text-blue-800">Cookie Policy</h1>

          <Card className="border-2 border-yellow-200 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">What Are Cookies?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Cookies are small text files that are stored on your computer or mobile device when you visit our
                website. They help us provide you with a better experience by remembering your preferences and improving
                our services.
              </p>

              <p>
                Cookies contain information that is transferred to your device's hard drive. They store information
                about your interactions with our website, such as your login status, preferences, and browsing history.
                This helps us recognize you when you return to our site and provide a more personalized experience.
              </p>

              <p>
                Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device after you
                close your browser until they expire or you delete them. Session cookies are deleted from your device
                when you close your browser. We use both types of cookies on our website.
              </p>

              <p>
                In addition to cookies, we may use other similar technologies, such as web beacons, pixel tags, and
                local storage, to collect information about your browsing activities. These technologies work in a
                similar way to cookies and help us provide you with a tailored experience.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-yellow-200 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Types of Cookies We Use</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Essential Cookies</h4>
                <p>
                  These cookies are necessary for the website to function properly and cannot be disabled. They enable
                  core functionality such as security, network management, account authentication, and remembering your
                  preferences. You can set your browser to block these cookies, but some parts of the site may not work
                  properly.
                </p>
                <p className="mt-2">Essential cookies help us:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-1">
                  <li>Remember information you've entered on forms</li>
                  <li>Authenticate your login and maintain your session</li>
                  <li>Process transactions and verify your eligibility for certain services</li>
                  <li>Ensure the security of your account and transactions</li>
                  <li>Balance server load to ensure website availability</li>
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-blue-700 mb-2">Analytics Cookies</h4>
                <p>
                  These help us understand how visitors interact with our website by collecting anonymous information.
                  Analytics cookies allow us to count visits and traffic sources so we can measure and improve the
                  performance of our site. They show us which pages are the most and least popular, how visitors move
                  around the site, and whether they encounter any errors.
                </p>
                <p className="mt-2">Analytics cookies help us:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-1">
                  <li>Understand how visitors navigate through our website</li>
                  <li>Identify which pages are most frequently visited</li>
                  <li>Determine how long visitors stay on specific pages</li>
                  <li>Recognize where visitors are coming from</li>
                  <li>Identify issues and errors that visitors may encounter</li>
                  <li>Test different designs and features to optimize user experience</li>
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-blue-700 mb-2">Functional Cookies</h4>
                <p>
                  These cookies remember your preferences and provide enhanced features. They may be set by us or by
                  third-party providers whose services we have added to our pages. Functional cookies enable certain
                  parts of the site to work properly and remember your choices to provide enhanced functionality and
                  personalization.
                </p>
                <p className="mt-2">Functional cookies help us:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-1">
                  <li>Remember your preferences and settings</li>
                  <li>Customize content based on your browsing history</li>
                  <li>Remember if you've completed a survey or participated in a poll</li>
                  <li>Show you when you're logged in to our website</li>
                  <li>Share information with our partners to provide a service on our website</li>
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-blue-700 mb-2">Targeting/Advertising Cookies</h4>
                <p>
                  These cookies may be set through our site by our advertising partners. They may be used by those
                  companies to build a profile of your interests and show you relevant advertisements on other sites.
                  They do not directly store personal information but are based on uniquely identifying your browser and
                  internet device.
                </p>
                <p className="mt-2">Targeting cookies help us:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-1">
                  <li>Deliver advertisements relevant to your interests</li>
                  <li>Measure the effectiveness of advertising campaigns</li>
                  <li>Limit the number of times you see an advertisement</li>
                  <li>Understand how users interact with ads</li>
                  <li>Remember that you have visited our website</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-yellow-200 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Managing Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                You can control and manage cookies through your browser settings. However, please note that disabling
                certain cookies may affect the functionality of our website.
              </p>

              <p>Most web browsers allow you to manage your cookie preferences. You can:</p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Delete cookies from your device</li>
                <li>
                  Block cookies by activating the setting on your browser that allows you to refuse all or some cookies
                </li>
                <li>Set your browser to notify you when you receive a cookie</li>
                <li>Use private browsing or incognito mode to browse without storing cookies</li>
              </ul>

              <p className="mt-4">
                Please be aware that if you choose to block or delete cookies, you may not be able to access certain
                areas or features of our website, and some services may not function properly. In particular, you may
                not be able to stay logged in or have your preferences remembered.
              </p>

              <p>
                Different browsers use different methods to manage cookies. You will need to check your specific
                browser's help menu for instructions on how to manage your cookie preferences.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-yellow-200 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Third-Party Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics,
                deliver advertisements, and so on. These cookies may track your browsing habits across different
                websites and online services.
              </p>

              <p>
                Third-party cookies are placed by someone other than us and may gather browsing activity across multiple
                websites and sessions. They are usually used for marketing, tracking, and analytics purposes.
              </p>

              <p>
                We have no access to or control over these cookies. The third parties who set these cookies have their
                own privacy policies and methods for using the information they collect. We encourage you to read their
                privacy policies if you want to learn more about their practices.
              </p>

              <p>Some of the third-party services we may use include:</p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Analytics services to help us understand how users engage with our website</li>
                <li>Advertising networks to deliver targeted advertisements</li>
                <li>Social media platforms to enable social sharing functionality</li>
                <li>Payment processors to facilitate secure transactions</li>
                <li>Customer support tools to provide assistance</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-yellow-200">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Cookie Consent</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                When you first visit our website, you will be shown a cookie banner that allows you to accept or decline
                non-essential cookies. By clicking "Accept All," you consent to the use of all cookies. By clicking
                "Decline," you choose to have only essential cookies placed on your device.
              </p>

              <p>
                You can change your cookie preferences at any time by clearing cookies in your browser settings, which
                will reset the cookie consent banner when you next visit our site.
              </p>

              <p>
                Please note that essential cookies will be placed on your device regardless of your choice, as they are
                necessary for the functioning of our website. However, we will only use non-essential cookies with your
                explicit consent.
              </p>

              <p>
                By continuing to use our website after selecting your cookie preferences, you acknowledge and agree to
                the placement of cookies on your device in accordance with your choices.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
