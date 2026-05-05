import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <span className="text-indigo-400 font-mono tracking-widest text-sm uppercase mb-4 block">
          Available for new opportunities
        </span>
        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-8">
          DESIGNER <br />
          <span className="text-neutral-600">&</span> DEVELOPER
        </h1>
        
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
          <p className="max-w-md text-neutral-400 text-lg leading-relaxed">
            Crafting immersive digital experiences through clean code and interactive 3D design.
          </p>
          
          <motion.a 
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 text-xl font-medium border-b border-white/20 pb-2 w-fit"
          >
            View Projects 
            <ArrowDownRight className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}