import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Scene from './components/Scene';
import ProjectCard from './components/ProjectCard';
import { ExternalLink, Github, Mail, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import './styles.css';

const PROJECTS = [
  { title: "Nexus OS", desc: "A cloud-based operating system built with React and WebAssembly.", tech: ["Rust", "React", "WASM"] },
  { title: "Aether Engine", desc: "Real-time raytracing engine for the web using WebGPU.", tech: ["TypeScript", "WebGPU", "Math"] },
  { title: "Cipher Vault", desc: "End-to-end encrypted password manager with biometric auth.", tech: ["Node.js", "Cryptography", "Redis"] }
];

export default function App() {
  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen selection:bg-indigo-500/30">
      <Scene />
      
      <div className="relative z-10">
        <Navbar />
        
        <main className="container mx-auto px-6">
          <Hero />

          {/* Projects Section */}
          <section id="projects" className="py-32">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-light mb-4 flex items-center gap-4">
                <Terminal className="text-indigo-400" /> Selected Works
              </h2>
              <div className="h-px w-24 bg-indigo-500"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project, idx) => (
                <ProjectCard key={idx} {...project} index={idx} />
              ))}
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-32 border-t border-neutral-900">
            <div className="max-w-3xl">
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-4xl font-light mb-8"
              >
                Building digital experiences that <span className="text-indigo-400">matter</span>.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-neutral-400 leading-relaxed mb-8"
              >
                I'm a Staff Software Engineer focused on the intersection of design and complex engineering. 
                I specialize in high-performance web applications and interactive 3D graphics.
              </motion.p>
              <div className="flex gap-6">
                <a href="#" className="text-neutral-400 hover:text-white transition-colors"><Github size={24} /></a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors"><Mail size={24} /></a>
              </div>
            </div>
          </section>
        </main>

        <footer className="py-12 border-t border-neutral-900 text-center text-neutral-500 text-sm">
          <p>© {new Date().getFullYear()} — Designed & Built with Precision</p>
        </footer>
      </div>
    </div>
  );
}