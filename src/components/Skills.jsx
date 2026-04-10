import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Layers, Wrench, Database, Cloud } from 'lucide-react';

const categories = [
  { title: "Programming", icon: <Code size={18} />, skills: ["C++", "Python", "SQL"] },
  { title: "Techniques", icon: <Cpu size={18} />, skills: ["Data Analysis", "Machine Learning", "Deep Learning", "CNN", "RNN", "LSTM", "GRU", "NLP", "Agentic AI"] },
  { title: "Frameworks", icon: <Layers size={18} />, skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "NLTK", "Scikit-Learn", "TensorFlow", "Keras", "LangChain", "LangGraph", "Streamlit", "Flask", "FastAPI"] },
  { title: "Tools", icon: <Wrench size={18} />, skills: ["Git", "VSCode", "Docker"] },
  { title: "Databases", icon: <Database size={18} />, skills: ["MySQL", "MongoDB"] },
  { title: "MLOps", icon: <Cloud size={18} />, skills: ["GitHub", "DagsHub", "MLflow"] },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full">
      <div className="text-center mb-14">
        <p className="section-label">Expertise</p>
        <h2 className="section-heading">
          Technical <span className="accent">Skills</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.07 }}
          >
            <div className="glass-card p-6 h-full group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-primary/8 border border-primary/12 text-primary">
                  {cat.icon}
                </div>
                <h4 className="text-sm font-semibold text-white tracking-wide">{cat.title}</h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((s, i) => (
                  <span key={i} className="tag-pill text-[11px]">{s}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
