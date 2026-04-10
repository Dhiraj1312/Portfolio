import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Brain, Bot, PenTool } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const projectData = [
  {
    title: "Next Word Prediction",
    subtitle: "LSTM & GRU Deep Learning",
    icon: <Brain size={20} />,
    description: "Trained deep learning models with 1.2M+ parameters on Shakespeare's Hamlet. Achieved 85% validation accuracy using LSTM. Deployed a Streamlit app for real-time predictions across 4.8K+ vocabulary words.",
    tech: ["Python", "TensorFlow", "Keras", "Scikit-Learn", "Streamlit"],
    github: "https://github.com/Dhiraj1312/Word_Prediction",
    live: null,
  },
  {
    title: "Multi-Agent AI Chatbot",
    subtitle: "Agentic Workflow System",
    icon: <Bot size={20} />,
    description: "Built a multi-mode chatbot system with Streamlit UI, integrating Tavily API, LLMs, agent workflows, and prompt engineering for context-aware conversations.",
    tech: ["Python", "LangGraph", "LangChain", "Groq LLM", "Tavily API", "Streamlit"],
    github: "https://github.com/Dhiraj1312/Agentic-Chatbot",
    live: null,
  },
  {
    title: "Blog Generator",
    subtitle: "Agentic AI + FastAPI",
    icon: <PenTool size={20} />,
    description: "AI-powered application using LangGraph and Groq LLM to generate SEO-friendly blog content with multi-language translation, exposed via FastAPI endpoints.",
    tech: ["Python", "FastAPI", "LangGraph", "LangChain", "Groq LLM"],
    github: "https://github.com/Dhiraj1312/Agentic-Chatbot",
    live: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full">
      <div className="text-center mb-14">
        <p className="section-label">Portfolio</p>
        <h2 className="section-heading">
          Featured <span className="accent">Projects</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="h-full"
          >
            <div className="glass-card p-7 h-full flex flex-col group">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-primary/8 border border-primary/12 text-primary">
                    {project.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white group-hover:text-primary transition-colors duration-300">{project.title}</h4>
                    <p className="text-[11px] text-gray-500 font-mono">{project.subtitle}</p>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-white/5 text-gray-500 hover:text-white hover:border-white/15 transition-all duration-300">
                      <FiGithub size={14} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-white/5 text-gray-500 hover:text-primary hover:border-primary/20 transition-all duration-300">
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-grow">{project.description}</p>

              {/* Tech */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
                {project.tech.map((t, i) => (
                  <span key={i} className="tag-pill text-[10px]">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
