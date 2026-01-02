import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 bg-[#020617]">
      
      {/* Badge */}
      <span className="mb-4 px-4 py-1 text-sm bg-slate-800 text-blue-400 rounded-full">
        🎤 AI Powered Voice Interviews
      </span>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-4xl">
        Practice Interviews with an  
        <span className="text-blue-500"> AI Interviewer</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-lg text-slate-400 max-w-2xl">
        Speak your answers, get real-time feedback, improve confidence, and crack your next interview with voice-based AI interviews.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-col md:flex-row gap-4">
        <button 
        onClick={() => navigate("/setup")}
        className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
          🎙 Start Mock Interview
        </button>
        <button className="border border-slate-600 text-slate-300 px-8 py-3 rounded-lg hover:bg-slate-800 transition">
          📊 View Demo
        </button>
      </div>

    </section>
    </div>
  )
}

export default Hero
