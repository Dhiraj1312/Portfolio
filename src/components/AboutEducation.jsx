import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const AboutEducation = () => {
  return (
    <section id="about" className="w-full">
      <div className="text-center mb-14">
        <p className="section-label">Introduction</p>
        <h2 className="section-heading">
          About <span className="accent">Me</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: About */}
        <div className="glass-card p-8">
          <div className="space-y-4 text-gray-400 text-[15px] leading-relaxed">
            <p>
              I'm <span className="text-white font-medium">Dhiraj Bhagat</span>, a final-year B.Tech student specializing in{' '}
              <span className="text-primary font-medium">Artificial Intelligence and Data Science</span>{' '}
              at Madhav Institute of Technology and Science.
            </p>
            <p>
              I'm passionate about building intelligent systems, training deep learning models, and crafting Agentic AI workflows that solve real-world problems.
            </p>
            <p>
              My experience spans designing optimized prompts for LLMs, building multi-agent chatbot systems with LangGraph and Groq, and creating automated educational content pipelines.
            </p>
          </div>
        </div>

        {/* Right: Education */}
        <div className="flex flex-col gap-5">
          {/* B.Tech */}
          <div className="glass-card p-7">
            <div className="flex items-start gap-4 mb-3">
              <div className="p-2.5 rounded-xl bg-primary/8 border border-primary/12 text-primary shrink-0 mt-0.5">
                <GraduationCap size={20} />
              </div>
              <div className="flex-1">
                <h4 className="text-base font-semibold text-white">B.Tech – AI & Data Science</h4>
                <p className="text-primary/80 text-sm mt-0.5">Madhav Institute of Technology and Science</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-500 text-xs ml-[52px]">
              <span className="flex items-center gap-1"><Calendar size={12} /> Nov 2022 – Present</span>
              <span className="flex items-center gap-1"><MapPin size={12} /> Gwalior, India</span>
              <span className="text-white/70 font-medium">CGPA: 8.10</span>
            </div>
            <div className="mt-4 ml-[52px] flex flex-wrap gap-1.5">
              {['DBMS', 'OS', 'DSA', 'OOP', 'Networking'].map((c, i) => (
                <span key={i} className="tag-pill text-[10px]">{c}</span>
              ))}
            </div>
          </div>

          {/* Senior Secondary */}
          <div className="glass-card p-7">
            <div className="flex items-start gap-4 mb-3">
              <div className="p-2.5 rounded-xl bg-accent/8 border border-accent/12 text-accent shrink-0 mt-0.5">
                <GraduationCap size={20} />
              </div>
              <div className="flex-1">
                <h4 className="text-base font-semibold text-white">Senior Secondary</h4>
                <p className="text-accent/80 text-sm mt-0.5">Nehru Montessori Senior Secondary School</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-500 text-xs ml-[52px]">
              <span className="flex items-center gap-1"><Calendar size={12} /> 2021 – 2022</span>
              <span className="flex items-center gap-1"><MapPin size={12} /> Burhanpur, India</span>
              <span className="text-white/70 font-medium">83%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEducation;
