import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-yellow-400">Big Aussie Chance</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Your trusted platform for Oz Lotto information and ticket purchases in Victoria.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-yellow-400 text-sm sm:text-base transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-yellow-400 text-sm sm:text-base transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-gray-300 hover:text-yellow-400 text-sm sm:text-base transition-colors duration-200"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Responsible Gambling</h4>
            <div className="space-y-3 sm:space-y-4 text-sm">
              <div className="flex justify-center sm:justify-start">
                <div className="bg-red-600 text-white px-3 py-1 rounded font-bold inline-block">18+</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8"> <div className="flex flex-wrap justify-center items-center gap-8"> {/* 18+ Badge */} <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-xl font-bold text-lg shadow-lg"> 18+ </div>
          {/* Gambler's Help */}
          <Link
            href="https://gamblershelp.com.au/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gambler's Help"
            className="hover:opacity-80 transition-opacity group"
          >
            <Image src="/gamblershelp.svg" alt="Gambler's Help" width={100} height={100} />
          </Link>

          {/* Victoria Government */}
          <Link
            href="https://www.vic.gov.au/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Victoria Government"
            className="hover:opacity-80 transition-opacity group bg-white/70 p-2 rounded-lg"
          >
            <Image src="/victoria.svg" alt="Victoria Government" width={100} height={100} />
          </Link>

          {/* Reset App */}
          <Link
            href="https://resetapp.com.au/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Reset App"
            className="hover:opacity-80 transition-opacity group"
          >
            <Image src="/reset.svg" alt="Victoria Government" width={100} height={100} />
          </Link>

          {/* BeGambleAware */}
          <Link
            href="https://www.gambleaware.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Be Gamble Aware"
            className="hover:opacity-80 transition-opacity group"
          >
            <Image src="/bgambleaware.svg" alt="Victoria Government" width={100} height={100} />
          </Link>
        </div>
        </div>

        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-xs sm:text-sm">
            &copy; 2025 Big Aussie Chance. All rights reserved. | Licensed in Victoria, Australia
          </p>
        </div>
      </div>
    </footer>
  )
}
