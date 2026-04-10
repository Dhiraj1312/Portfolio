import React from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutEducation from './components/AboutEducation';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const sectionVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function App() {
  return (
    <div className="relative w-full min-h-screen">
      <div className="stars"></div>
      <div className="fixed inset-0 bg-grid pointer-events-none z-0"></div>
      <div className="fixed inset-0 bg-noise opacity-[0.012] pointer-events-none z-0 mix-blend-overlay"></div>

      <ParticlesBackground />

      {/* Ambient floating blobs — very subtle, slow movement */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-[8%] left-[12%] w-[450px] h-[450px] rounded-full pointer-events-none z-0 opacity-100"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.07), transparent 65%)' }}
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-[45%] right-[8%] w-[400px] h-[400px] rounded-full pointer-events-none z-0 opacity-100"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.05), transparent 65%)' }}
      />
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-[10%] left-[30%] w-[350px] h-[350px] rounded-full pointer-events-none z-0 opacity-100"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.04), transparent 65%)' }}
      />

      <Navbar />

      <main className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10">
        <Hero />

        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="py-20">
          <AboutEducation />
        </motion.div>

        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="py-20">
          <Experience />
        </motion.div>

        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="py-20">
          <Projects />
        </motion.div>

        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="py-20">
          <Skills />
        </motion.div>

        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="py-20 pb-24">
          <Contact />
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-6">
        <p className="text-center text-gray-600 text-xs font-mono">
          © 2026 Dhiraj Bhagat · Built with React & Tailwind
        </p>
      </footer>
    </div>
  );
}

export default App;
