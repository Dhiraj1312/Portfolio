import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const socialLinks = [
  { icon: <FiLinkedin size={16} />, href: "https://www.linkedin.com/in/dhiraj-bhagat-116534257/", name: "LinkedIn" },
  { icon: <FiGithub size={16} />, href: "https://github.com/Dhiraj1312", name: "GitHub" },
  { icon: <SiLeetcode size={16} />, href: "https://leetcode.com/u/Dhiraj_Bhagat1312/", name: "LeetCode" },
  { icon: <FiInstagram size={16} />, href: "https://www.instagram.com/_nameis_dhiraj/", name: "Instagram" },
];

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus('success');
      formRef.current.reset();
      setTimeout(() => setStatus('idle'), 4000);
    })
    .catch(() => {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    });
  };

  return (
    <section id="contact" className="w-full">
      <div className="text-center mb-14">
        <p className="section-label">Contact</p>
        <h2 className="section-heading">
          Get In <span className="accent">Touch</span>
        </h2>
      </div>

      <div className="glass-card p-8 md:p-10 max-w-xl mx-auto">
        <p className="text-gray-500 text-center mb-8 text-sm">
          Have a question, project idea, or just want to connect? Feel free to reach out.
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
          <div>
            <label className="text-[11px] font-mono text-gray-600 uppercase tracking-widest mb-1.5 block">Name</label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your name"
              className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-primary/30 transition-all duration-300"
            />
          </div>

          <div>
            <label className="text-[11px] font-mono text-gray-600 uppercase tracking-widest mb-1.5 block">Email</label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="your@email.com"
              className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-primary/30 transition-all duration-300"
            />
          </div>

          <div>
            <label className="text-[11px] font-mono text-gray-600 uppercase tracking-widest mb-1.5 block">Message</label>
            <textarea
              name="message"
              required
              rows="4"
              placeholder="Tell me about your project..."
              className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-primary/30 transition-all duration-300 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-primary w-full py-3 flex items-center justify-center gap-2 text-sm mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? (
              <><Loader2 size={14} className="animate-spin" /> Sending...</>
            ) : (
              <><Send size={14} /> Send Message</>
            )}
          </button>
        </form>

        {/* Status feedback */}
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 flex items-center gap-2 justify-center text-emerald-400 text-sm"
          >
            <CheckCircle size={16} />
            <span>Message sent successfully!</span>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 flex items-center gap-2 justify-center text-red-400 text-sm"
          >
            <AlertCircle size={16} />
            <span>Failed to send. Please try again.</span>
          </motion.div>
        )}

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col items-center gap-3">
          <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Or find me on</p>
          <div className="flex items-center gap-2.5">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                title={link.name}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-white/6 text-gray-500 hover:text-primary hover:border-primary/20 hover:bg-primary/5 transition-all duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
