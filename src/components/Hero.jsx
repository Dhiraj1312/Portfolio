import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Sparkles, ChevronDown } from 'lucide-react';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const socialLinks = [
  { icon: <FiLinkedin size={18} />, href: "https://www.linkedin.com/in/dhiraj-bhagat-116534257/", name: "LinkedIn" },
  { icon: <FiGithub size={18} />, href: "https://github.com/Dhiraj1312", name: "GitHub" },
  { icon: <SiLeetcode size={18} />, href: "https://leetcode.com/u/Dhiraj_Bhagat1312/", name: "LeetCode" },
  { icon: <FiInstagram size={18} />, href: "https://www.instagram.com/_nameis_dhiraj/", name: "Instagram" },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative pt-20 pb-10">
      <div className="grid md:grid-cols-2 items-center gap-8 w-full">

        {/* Left: Content */}
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-primary/20 bg-primary/5"
          >
            <Sparkles size={13} className="text-primary" />
            <span className="text-primary font-mono text-[11px] tracking-widest uppercase">Available for Opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-5"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="text-gradient">Dhiraj Bhagat</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-400 mb-5"
          >
            I build{' '}
            <span className="text-primary font-semibold">
              <Typewriter
                words={['AI Systems', 'ML Pipelines', 'Agentic Workflows', 'Intelligent Apps']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={2200}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-500 max-w-lg text-[15px] leading-relaxed mb-10"
          >
            Final-year AI & Data Science student passionate about deep learning, LLM-driven architectures, and building production-ready intelligent systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-secondary">Get in Touch</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                title={link.name}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-white/8 text-gray-500 hover:text-primary hover:border-primary/25 hover:bg-primary/5 transition-all duration-300"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: Subtle animated visual — hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden md:flex justify-center items-center relative h-[400px]"
        >
          {/* Outer soft glow */}
          <div className="absolute w-72 h-72 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.1), transparent 65%)' }} />
          <div className="absolute w-56 h-56 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.08), transparent 60%)' }} />

          {/* Rotating rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-64 h-64 rounded-full"
            style={{ border: '1px solid rgba(139,92,246,0.1)', borderTopColor: 'rgba(139,92,246,0.3)' }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-48 h-48 rounded-full"
            style={{ border: '1px dashed rgba(99,102,241,0.08)', borderRightColor: 'rgba(99,102,241,0.25)' }}
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute w-32 h-32 rounded-full"
            style={{ border: '1px solid rgba(236,72,153,0.06)', borderBottomColor: 'rgba(236,72,153,0.2)' }}
          />

          {/* Core pulse */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-14 h-14 rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(139,92,246,0.25), rgba(99,102,241,0.2))',
              boxShadow: '0 0 30px rgba(139,92,246,0.2), 0 0 60px rgba(99,102,241,0.08)'
            }}
          />

          {/* Orbiting dots */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-64 h-64"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary/50 shadow-[0_0_6px_rgba(139,92,246,0.5)]" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-48 h-48"
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-secondary/40 shadow-[0_0_6px_rgba(99,102,241,0.4)]" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 hover:text-primary transition-colors duration-300"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
