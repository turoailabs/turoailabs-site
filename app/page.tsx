"use client"
import type React from "react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col px-4 py-6 sm:px-8 md:px-12 lg:px-24 
      bg-gradient-to-br from-indigo-950 via-violet-700 to-purple-800 text-gray-100 overflow-hidden">

      {/* HEADER */}
      <header className="w-full max-w-6xl mb-8 sm:mb-12 flex justify-between items-start relative z-10">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-100 flex items-center">
            Turo AI Labs
            <span className="text-xs bg-white/10 text-indigo-100 ml-2 sm:ml-3 px-2 py-1 rounded-full border border-white/20">
              beta
            </span>
          </h1>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-4xl flex-1 relative z-10">
        <h2 className="font-extrabold leading-tight text-center sm:text-left">
          <span className="block text-3xl sm:text-4xl md:text-5xl text-indigo-200">We are</span>
          <span className="block text-4xl sm:text-5xl md:text-6xl text-violet-400">
            Launching <span className="text-purple-300">Soon </span>
          </span>
        </h2>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white leading-relaxed">
          At Turo AI Labs, we turn <span className="italic text-fuchsia-200 font-bold">"what if"</span> into{" "}
          <span className="italic text-purple-200 font-bold">"what's next"</span> — crafting AI-powered
          solutions that work across every sector, from bustling startups to enterprise giants.
          <br className="hidden sm:block" />
          <span className="mt-2 block">
            Our mission is simple: help businesses work smarter, scale faster, and innovate without limits.
          </span>
        </p>

        <p className="mt-8 text-base sm:text-lg md:text-xl text-white leading-relaxed text-center sm:text-left">
            Building tomorrow’s AI, one workflow at a time
          {/* Currently in the lab cooking up some seriously powerful AI tools in */}
        </p>

        <div className="mt-6 flex flex-wrap gap-3 justify-center sm:justify-start">
          <span className="bg-purple-900/30 text-purple-100 px-4 py-2 rounded-full text-sm sm:text-base md:text-lg font-semibold border border-purple-200/30">
            AI Automation
          </span>
          <span className="bg-pink-900/30 text-pink-100 px-4 py-2 rounded-full text-sm sm:text-base md:text-lg font-semibold border border-pink-200/30">
            Agentic AI
          </span>
          <span className="bg-fuchsia-900/30 text-fuchsia-100 px-4 py-2 rounded-full text-sm sm:text-base md:text-lg font-semibold border border-pink-200/30">
            Smart Workflows
          </span>
          <span className="bg-purple-800/30 text-purple-100 px-4 py-2 rounded-full text-sm sm:text-base md:text-lg font-semibold border border-purple-200/30">
            Business Solutions
          </span>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full mt-8 sm:mt-12 relative z-10">
        <div className="flex flex-col items-center space-y-4 p-4 sm:p-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">Contact Us</h3>
          <div className="flex items-center space-x-2 backdrop-blur-sm bg-white/10 px-4 py-2 sm:px-6 sm:py-3 rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5 text-white"
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
              className="text-sm sm:text-base md:text-lg text-white hover:text-fuchsia-200 hover:underline transition-colors duration-200"
            >
              hello@turoailabs.com
            </a>
          </div>
          <p className="text-center text-xs sm:text-sm text-white">
            © 2025 Turo AI Labs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
