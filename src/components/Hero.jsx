import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden flex items-center">
      {/* Background gradient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_70%_20%,rgba(59,130,246,0.25)_0%,transparent_60%)]" />

      {/* Spline 3D Scene */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh]">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Headline overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 ring-1 ring-inset ring-blue-400/30 mb-4">
              Tech • Portfolio • Interactive
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
              Playful, Modern, and Deeply Interactive
            </h1>
            <p className="mt-4 text-blue-100/90 text-lg md:text-xl">
              I build engaging web experiences that blend delightful motion, crisp design, and performant engineering.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#projects" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-500 text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 text-white font-semibold ring-1 ring-white/20 hover:bg-white/15 transition">
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
