import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-bold tracking-tighter"
        >
          PORTFOLIO<span className="text-indigo-500">.</span>
        </motion.div>
        
        <div className="flex gap-8 text-sm font-medium text-neutral-400">
          {['Projects', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="hover:text-white transition-colors uppercase tracking-widest"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}