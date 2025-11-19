import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Braces, Rocket, Cpu } from 'lucide-react'

const skills = [
  { icon: Code2, label: 'Frontend', items: ['React', 'Tailwind', 'Framer Motion', 'Spline'] },
  { icon: Braces, label: 'Backend', items: ['FastAPI', 'MongoDB', 'Auth', 'WebSockets'] },
  { icon: Cpu, label: 'AI/ML', items: ['OpenAI', 'Vector DBs', 'RAG', 'Agents'] },
  { icon: Rocket, label: 'DX', items: ['CI/CD', 'Testing', 'Performance', 'A11y'] },
]

const Skills = () => {
  return (
    <section id="skills" className="relative py-24">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Skills & Focus</h2>
          <p className="mt-2 text-blue-100/80">The tools and areas where I bring the most value.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-300 flex items-center justify-center mb-4">
                <s.icon size={18} />
              </div>
              <h3 className="text-white font-semibold mb-2">{s.label}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map(item => (
                  <span key={item} className="text-xs px-2 py-1 rounded-md bg-white/5 ring-1 ring-white/10 text-blue-200/80">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
