import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles, Terminal } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Footer({ onOpenResume }) {
  const { personal } = resumeData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060910] border-t border-slate-800/80 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center font-mono font-bold text-emerald-400">
              FK
            </div>
            <div>
              <span className="font-display font-bold text-white text-sm">
                Faiz Khan
              </span>
              <span className="text-slate-500 text-[11px] block">
                Java Backend &amp; Full Stack Developer
              </span>
            </div>
          </div>

          {/* Quick Links & Socials */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-medium">
            <a href="#hero" className="hover:text-emerald-400 transition-colors">Home</a>
            <a href="#architecture" className="hover:text-emerald-400 transition-colors">Architecture</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#sandbox" className="hover:text-emerald-400 transition-colors">API Sandbox</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <button onClick={onOpenResume} className="hover:text-emerald-400 transition-colors cursor-pointer">
              Resume View
            </button>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
            <a 
              href={personal.github} 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-400 hover:text-white flex items-center gap-1 text-xs"
            >
              <Github className="w-3.5 h-3.5" />
              <span>@Faiz-Khan01</span>
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all flex items-center gap-1.5 cursor-pointer"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4 text-emerald-400" />
            <span className="text-[11px] font-mono">Top</span>
          </button>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-center sm:text-left">
          <p className="font-mono text-[11px]">
            © {new Date().getFullYear()} Faiz Khan. All rights reserved. • Nagpur, Maharashtra, India.
          </p>
          <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
            <span>Built with React &amp; Tailwind CSS</span>
            <span>•</span>
            <span className="text-emerald-400">Enterprise Backend Ready</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
