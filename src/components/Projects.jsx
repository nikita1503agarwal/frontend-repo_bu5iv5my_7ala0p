import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Realtime Dashboard',
    desc: 'Streaming charts, live data, and collaborative widgets.',
    tags: ['React', 'WebSockets', 'Tailwind'],
  },
  {
    title: '3D Product Explorer',
    desc: 'Immersive product visualization and interactions.',
    tags: ['Spline', 'Three.js', 'Framer Motion'],
  },
  {
    title: 'AI Content Studio',
    desc: 'Creative tooling powered by LLMs and vector search.',
    tags: ['FastAPI', 'Pinecone', 'OpenAI'],
  },
]

const Projects = () => {
  return (
    <section id="projects" className="relative py-24">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Featured Projects</h2>
          <p className="mt-2 text-blue-100/80">A few things I loved building recently.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md p-6 hover:border-blue-400/30"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                <span className="text-xs text-blue-200/70">{String(i+1).padStart(2, '0')}</span>
              </div>
              <p className="text-blue-100/80 text-sm">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/5 ring-1 ring-white/10 text-blue-200/80">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
