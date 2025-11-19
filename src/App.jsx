import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-blue-100 selection:bg-blue-500/30 selection:text-white">
      {/* subtle stars background */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(200px_200px_at_10%_10%,rgba(59,130,246,0.08),transparent_60%),radial-gradient(300px_300px_at_90%_20%,rgba(168,85,247,0.06),transparent_60%),radial-gradient(250px_250px_at_50%_90%,rgba(99,102,241,0.05),transparent_60%)]" />

      <Navbar />

      <main className="relative">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="relative py-10">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 text-center text-sm text-blue-200/70">
          © {new Date().getFullYear()} Your Name • Crafted with love and motion
        </div>
      </footer>
    </div>
  )
}

export default App
