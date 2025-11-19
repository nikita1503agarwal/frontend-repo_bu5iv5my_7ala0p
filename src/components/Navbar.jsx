import React from 'react'
import { Menu, Github, Linkedin } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="mt-4 backdrop-blur-md bg-slate-900/40 border border-white/10 rounded-2xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="text-white font-semibold tracking-tight">Your Name</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-blue-100">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10 text-blue-100 hover:text-white transition">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10 text-blue-100 hover:text-white transition">
              <Linkedin size={18} />
            </a>
            <button className="md:hidden p-2 rounded-lg hover:bg-white/10 text-blue-100 hover:text-white transition" aria-label="Menu">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
