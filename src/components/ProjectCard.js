import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function ProjectCard({ title, desc, tech, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="group p-8 bg-neutral-900/50 border border-neutral-800 rounded-2xl hover:border-indigo-500/50 transition-colors"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="h-12 w-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
          <ExternalLink size={20} />
        </div>
        <div className="flex gap-2">
          {tech.map(t => (
            <span key={t} className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
              {t}
            </span>
          ))}
        </div>
      </div>
      <h3 className="text-2xl font-semibold mb-3 group-hover:text-indigo-400 transition-colors">{title}</h3>
      <p className="text-neutral-400 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}