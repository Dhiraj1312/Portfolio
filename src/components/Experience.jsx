import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="w-full">
      <div className="text-center mb-14">
        <p className="section-label">Career</p>
        <h2 className="section-heading">
          Professional <span className="accent">Experience</span>
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="glass-card p-8 group">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-5">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-primary/8 border border-primary/12 text-primary shrink-0 mt-0.5">
                <Briefcase size={20} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Artificial Intelligence Intern</h4>
                <p className="text-primary/80 text-sm mt-0.5">Vedantu</p>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end gap-1.5 shrink-0">
              <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/15">Current</span>
              <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                <Calendar size={12} />
                <span>Feb 2026 – Present</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                <MapPin size={12} />
                <span>Bengaluru, India</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-[15px] leading-relaxed mt-3 ml-[52px] mb-5">
            AI-powered system that analyzes classroom transcripts to evaluate teaching quality using structured, research-based metrics.
          </p>

          {/* Bullet points */}
          <div className="ml-[52px] space-y-3">
            {[
              "Designed and optimized prompts for Large Language Models (LLMs) to generate structured outputs for educational content.",
              "Built AI-driven workflows using NotebookLM to generate structured curriculum-aligned educational content from textbook chapters.",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0"></div>
                <p className="text-gray-400 leading-relaxed text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
