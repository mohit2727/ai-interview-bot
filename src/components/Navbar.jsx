import React from 'react'

const Navbar = () => {
  return (
       <nav className="w-full top-0 left-0 fixed px-6 py-4 flex items-center justify-between border-b border-slate-800 bg-transparent backdrop-blur-sm z-50">
      {/* Logo */}
      <h1 className="text-xl font-bold text-white">
        Interview<span className="text-blue-500">AI</span>
      </h1>

      {/* Links */}
      <div className="hidden md:flex gap-8 text-slate-300">
        <a href="#" className="hover:text-white">Features</a>
        <a href="#" className="hover:text-white">How it Works</a>
        <a href="#" className="hover:text-white">Pricing</a>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <button className="text-slate-300 hover:text-white">
          Login
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Start Interview
        </button>
      </div>
    </nav>
    
  )
}

export default Navbar
