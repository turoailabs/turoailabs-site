import React from "react";

const ComingSoonPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-blue-200 text-gray-900 flex flex-col items-center justify-center px-4 py-12">
      
      {/* Header */}
      <header className="w-full flex justify-between items-center max-w-6xl mb-12">
        <h1 className="text-2xl font-bold text-indigo-700">
          Turo AI Labs
          <span className="text-xs bg-indigo-100 text-indigo-500 ml-2 px-2 py-1 rounded-full">
            beta
          </span>
        </h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">About</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="text-center max-w-3xl">
        <h2 className="text-5xl font-extrabold leading-tight">
          <span className="text-indigo-600">We are</span>{" "}
          <span className="text-blue-500">Launching</span>{" "}
          <span className="text-purple-600">Soon 🚀</span>
        </h2>
        <p className="mt-6 text-lg text-gray-700">
          We are a focused company building solutions and solving problems for small businesses.  
          With our in-house AI automation tools, we empower businesses to work smarter, faster, and better.
        </p>

        {/* Email Subscription */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 w-64 rounded-lg shadow text-sm placeholder-gray-400"
          />
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 text-white px-6 py-3 rounded-lg shadow font-semibold flex items-center gap-2">
            Notify Me <span role="img" aria-label="sparkles">🪄</span>
          </button>
        </div>

        {/* Highlight Badges */}
        <div className="mt-6 flex flex-wrap gap-3 justify-center text-xs text-gray-600">
          <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full">AI Automation</span>
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">Business Solutions</span>
          <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">Coming Soon</span>
        </div>

        {/* Glass Card */}
        <div className="mt-12 bg-white bg-opacity-60 backdrop-blur-lg rounded-2xl p-6 text-left max-w-md mx-auto shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900">About Us</h3>
          <p className="text-sm text-gray-700">
            At Turo AI Labs, we combine innovation with execution to deliver cutting-edge automation tools 
            that transform small businesses into efficient, scalable operations.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 text-sm text-gray-600">
        © {new Date().getFullYear()} Turo AI Labs. All rights reserved.
      </footer>
    </div>
  );
};

export default ComingSoonPage;
