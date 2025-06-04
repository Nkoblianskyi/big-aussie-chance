import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-12 text-blue-800">About Big Aussie Chance</h1>

          <Card className="border-2 border-yellow-200 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Big Aussie Chance is Victoria's premier platform for lottery information and ticket purchasing. We are
                dedicated to providing Australians with a safe, secure, and exciting way to participate in various
                lottery games, including the popular Oz Lotto.
              </p>

              <p>
                Our mission extends beyond simply facilitating lottery ticket purchases. We strive to create a
                comprehensive ecosystem that educates, informs, and empowers our users to make informed decisions about
                their lottery participation. We believe that everyone deserves the chance to dream big while maintaining
                responsible gambling practices.
              </p>

              <p>
                We are committed to transparency, integrity, and excellence in everything we do. Our platform serves as
                a bridge between the excitement of lottery gaming and the importance of responsible participation,
                ensuring that our users can enjoy the thrill of the game while staying within their means.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-yellow-200 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Our Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Big Aussie Chance was founded with a simple vision: to make lottery participation more accessible,
                transparent, and enjoyable for all Victorians. Our founders recognized that while millions of
                Australians participate in lottery games, many lacked access to comprehensive information about the
                games they were playing.
              </p>

              <p>
                Starting as a small team of lottery enthusiasts and technology professionals, we began by creating
                detailed guides and resources about various lottery games, with a particular focus on Oz Lotto and other
                popular Australian lotteries. We noticed that players often had questions about prize structures, odds,
                claiming procedures, and responsible gambling practices, but struggled to find clear, comprehensive
                answers.
              </p>

              <p>
                Over time, we evolved from an information resource into a full-service platform that combines education
                with convenience. Today, we serve thousands of Victorian lottery players, providing them with the tools,
                information, and services they need to participate in lottery games responsibly and enjoyably.
              </p>

              <p>
                Our growth has been driven by our commitment to our users and our dedication to maintaining the highest
                standards of service, security, and responsible gambling practices. We continue to innovate and improve
                our platform based on user feedback and changing industry standards.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-yellow-200 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Our Values</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">Integrity</h4>
                  <p className="text-sm">
                    We operate with complete honesty and transparency in all our dealings. Our users can trust that we
                    provide accurate information and maintain the highest ethical standards in our business practices.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">Responsibility</h4>
                  <p className="text-sm">
                    We are committed to promoting responsible gambling and ensuring that our platform is used in a way
                    that enhances entertainment without causing harm to individuals or families.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">Innovation</h4>
                  <p className="text-sm">
                    We continuously seek new ways to improve our services and enhance the user experience through
                    technology, design, and customer service innovations.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">Community</h4>
                  <p className="text-sm">
                    We believe in giving back to the Victorian community and supporting the positive impact that lottery
                    proceeds have on local projects and initiatives.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">Excellence</h4>
                  <p className="text-sm">
                    We strive for excellence in every aspect of our service, from the accuracy of our information to the
                    security of our platform and the quality of our customer support.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">Accessibility</h4>
                  <p className="text-sm">
                    We work to make lottery participation accessible to all eligible Victorians, regardless of their
                    technical expertise or physical location within the state.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-yellow-200 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Why Choose Us?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>
                    <strong>Licensed & Regulated:</strong> Fully licensed to operate in Victoria, Australia, ensuring
                    compliance with all state and federal gambling regulations
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>
                    <strong>Secure Platform:</strong> Bank-level security for all transactions, with advanced encryption
                    and fraud protection systems
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>
                    <strong>Responsible Gaming:</strong> Committed to promoting responsible gambling practices with
                    built-in tools and resources for safe play
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>
                    <strong>Customer Support:</strong> Dedicated customer service team available to assist with any
                    questions or concerns
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>
                    <strong>Comprehensive Information:</strong> Detailed guides, statistics, and educational resources
                    about lottery games including Oz Lotto and responsible gambling
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>
                    <strong>User-Friendly Interface:</strong> Intuitive design that makes lottery participation simple
                    and enjoyable for users of all technical skill levels
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>
                    <strong>Mobile Optimized:</strong> Fully responsive platform that works seamlessly across all
                    devices and screen sizes
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>
                    <strong>Transparent Operations:</strong> Clear information about fees, processes, and procedures
                    with no hidden costs or surprises
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-yellow-200 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Our Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Big Aussie Chance offers a comprehensive suite of services designed to enhance your lottery experience:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">Ticket Purchasing</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Standard and system entries for various lottery games</li>
                    <li>QuickPick and manual number selection</li>
                    <li>Multi-week subscriptions</li>
                    <li>Syndicate group play options</li>
                    <li>Gift ticket purchases</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-blue-800 mb-2">Information Resources</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Comprehensive game guides for Oz Lotto and other lotteries</li>
                    <li>Historical results and statistics</li>
                    <li>Winner stories and testimonials</li>
                    <li>Prize claiming procedures</li>
                    <li>Odds and probability explanations</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-blue-800 mb-2">Account Management</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Secure user accounts</li>
                    <li>Transaction history tracking</li>
                    <li>Preference settings</li>
                    <li>Notification management</li>
                    <li>Spending limit controls</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-blue-800 mb-2">Support Services</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Customer service assistance</li>
                    <li>Technical support</li>
                    <li>Responsible gambling resources</li>
                    <li>Educational materials</li>
                    <li>Community forums</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-yellow-200 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Our Commitment to Victoria</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                As a Victorian-based company, we are deeply committed to supporting our local community and contributing
                to the state's economic and social wellbeing. We understand that lottery proceeds play an important role
                in funding community projects, healthcare initiatives, education programs, and infrastructure
                development throughout Victoria.
              </p>

              <p>
                We work closely with Victorian regulatory authorities to ensure that our operations meet the highest
                standards of compliance and contribute positively to the state's gambling landscape. Our platform is
                designed specifically with Victorian players in mind, taking into account local preferences,
                regulations, and community values.
              </p>

              <p>
                Beyond our business operations, we actively support local charities and community organizations. We
                believe that businesses have a responsibility to give back to the communities that support them, and we
                take this responsibility seriously.
              </p>

              <p>
                We also recognize the importance of responsible gambling education and support. We work with local
                organizations to promote awareness about gambling risks and provide resources for those who may need
                assistance with gambling-related issues.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-yellow-200 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Technology and Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Our platform is built on cutting-edge technology designed to provide a secure, reliable, and
                user-friendly experience. We employ industry-leading security measures to protect user data and
                financial transactions, including advanced encryption protocols, secure payment processing, and regular
                security audits.
              </p>

              <p>
                Our development team continuously monitors and updates our systems to ensure optimal performance and
                security. We use cloud-based infrastructure that provides scalability, reliability, and redundancy to
                ensure that our services are always available when you need them.
              </p>

              <p>
                We are committed to staying at the forefront of technological innovation in the lottery industry. This
                includes exploring new features and services that can enhance the user experience while maintaining the
                highest standards of security and compliance.
              </p>

              <p>
                Our mobile-first approach ensures that our platform works seamlessly across all devices, from desktop
                computers to smartphones and tablets. We regularly test our platform on various devices and browsers to
                ensure consistent performance and usability.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-yellow-200">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Looking Forward</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                As we look to the future, Big Aussie Chance remains committed to innovation, growth, and service
                excellence. We are constantly exploring new ways to enhance our platform and expand our services to
                better serve the Victorian lottery community.
              </p>

              <p>
                Our future plans include the development of new features and tools that will make lottery participation
                even more convenient and enjoyable. We are also exploring partnerships with other organizations that
                share our commitment to responsible gambling and community support.
              </p>

              <p>
                We believe that the lottery industry will continue to evolve, and we are positioned to be at the
                forefront of these changes. Our focus on technology, customer service, and responsible gambling
                practices will guide our development as we work to maintain our position as Victoria's leading lottery
                platform.
              </p>

              <p>
                Most importantly, we remain committed to our users and the Victorian community. Your trust and support
                drive everything we do, and we look forward to continuing to serve you for many years to come.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
