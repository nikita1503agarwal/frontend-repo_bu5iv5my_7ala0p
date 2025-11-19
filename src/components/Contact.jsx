import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! I\'ll get back to you soon.')
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Let\'s Collaborate</h2>
          <p className="mt-2 text-blue-100/80">Tell me about your project, idea, or team need.</p>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md p-6 grid gap-4 md:grid-cols-2"
        >
          <input placeholder="Your name" required className="px-4 py-3 rounded-xl bg-white/5 text-white ring-1 ring-white/10 focus:outline-none focus:ring-blue-400/40" />
          <input type="email" placeholder="Email" required className="px-4 py-3 rounded-xl bg-white/5 text-white ring-1 ring-white/10 focus:outline-none focus:ring-blue-400/40" />
          <textarea placeholder="What are we building?" rows="5" required className="md:col-span-2 px-4 py-3 rounded-xl bg-white/5 text-white ring-1 ring-white/10 focus:outline-none focus:ring-blue-400/40" />
          <div className="md:col-span-2 flex items-center justify-between">
            <button className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-500 text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition">
              Send Message
            </button>
            <p className="text-blue-200/80 text-sm">{status}</p>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
