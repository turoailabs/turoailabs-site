import type React from "react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-blue-200 text-gray-900 flex flex-col px-4 py-6 sm:px-8 md:px-12 lg:px-24">
      <header className="w-full max-w-6xl mb-8 sm:mb-12 flex justify-between items-start">
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* <Image
            src="/images/turo-logo.png"
            alt="Turo AI Labs Logo"
            width={60}
            height={60}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
          /> */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-700 flex items-center">
            Turo AI Labs
            <span className="text-xs bg-indigo-100 text-indigo-500 ml-2 sm:ml-3 px-2 py-1 rounded-full">beta</span>
          </h1>
        </div>
        <div className="flex-shrink-0">{/* Additional content or adjustments can be made here */}</div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl flex-1">
        <h2 className="font-extrabold leading-tight text-center sm:text-left">
          <span className="block text-3xl sm:text-4xl md:text-5xl text-indigo-600">We are</span>
          <span className="block text-4xl sm:text-5xl md:text-6xl text-blue-500">
            Launching <span className="text-purple-600">Soon</span>
          </span>
        </h2>

        {/* <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              At Turo AI Labs, we transform challenges into opportunities — from solving everyday problems for small businesses to delivering cutting-edge AI automation tools. Our mission is simple: empower businesses to work smarter, scale faster, and innovate without limits
        </p> */}

          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
          {/* At Turo AI Labs, we transform challenges into opportunities — from solving everyday problems for small businesses to delivering cutting-edge AI automation tools. */}
          At Turo AI Labs, we turn “what if” into “what’s next.” From streamlining small business operations to crafting cutting-edge AI automation tools for enterprises in all sectors.
          
          <br className="hidden sm:block" />
          <span className="mt-2 block">
            Our mission is simple: empower businesses to work smarter, scale faster, and innovate without limits.
          </span>
        </p>


        {/* <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
          <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm sm:text-base md:text-lg font-semibold">
            AI Automation
          </span>
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm sm:text-base md:text-lg font-semibold">
            Business Solutions
          </span>
        </div> */}
        <div className="mt-6 flex flex-wrap gap-3 justify-center text-xs sm:text-sm md:text-base text-gray-600">
          <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm sm:text-base md:text-lg font-semibold">
            AI Automation
          </span>
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm sm:text-base md:text-lg font-semibold">
            Agentic AI 
          </span>
          <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm sm:text-base md:text-lg font-semibold">
            Smart Workflows
          </span>
          <span className="bg-violet-100 text-violet-600 px-4 py-2 rounded-full text-sm sm:text-base md:text-lg font-semibold">
            Business Solutions 
          </span>
        </div>

      </main>

      <footer className="w-full mt-12 sm:mt-16">
        <div className="flex flex-col items-center space-y-4 p-4 sm:p-6">
          {/* Contact Email */}
          <div className="flex items-center space-x-2 backdrop-blur-sm bg-white/80 px-4 py-2 sm:px-6 sm:py-3 rounded-2xl border border-indigo-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.5a2.25 2.25 0 01-2.36 0l-7.5-4.5A2.25 2.25 0 012.25 6.993V6.75"
              />
            </svg>
            <a
              href="mailto:hello@turoailabs.com"
              className="text-sm sm:text-base md:text-lg text-gray-700 hover:text-indigo-600 hover:underline transition-colors duration-200"
            >
              hello@turoailabs.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <SocialLink href="#" label="LinkedIn" borderColor="border-indigo-200">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </SocialLink>

            <SocialLink href="#" label="Twitter/X" borderColor="border-blue-200">
              {/* <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308L7.084 4.126H5.117z" />
              </svg> */}
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-sm border shadow-lg transition-all duration-300"
                  style={{
                    // backgroundColor: "rgba(255, 255, 255, 0.8)",
                    borderColor: "rgba(0, 191, 255, 0.2)",
                    color: "#2D2D2D",
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
            </SocialLink>

            <SocialLink href="#" label="GitHub" borderColor="border-indigo-200">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </SocialLink>
          </div>

          {/* Copyright */}
          <p className="text-center text-xs sm:text-sm text-gray-700">© 2025 Turo AI Labs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

// Reusable Social Link Component
function SocialLink({
  href,
  label,
  borderColor,
  children,
}: {
  href: string
  label: string
  borderColor: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full backdrop-blur-sm bg-white/80 border ${borderColor} shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-indigo-600`}
    >
      {children}
    </a>
  )
}
