import React, { useState } from 'react';
import { 
  Cpu, 
  Server, 
  Layers, 
  Database, 
  Terminal, 
  CheckCircle, 
  Code2, 
  ShieldCheck, 
  Sparkles, 
  Zap,
  BookOpen
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Skills() {
  const { skills } = resumeData;
  const [activeCategory, setActiveCategory] = useState('backend');

  const categories = [
    { id: 'backend', label: 'Backend & Microservices', icon: Server, count: skills.backend.length },
    { id: 'languages', label: 'Core Languages', icon: Code2, count: skills.languages.length },
    { id: 'frontend', label: 'Frontend Technologies', icon: Layers, count: skills.frontend.length },
    { id: 'devops', label: 'DevOps & Tooling', icon: Terminal, count: skills.devopsAndTools.length },
    { id: 'concepts', label: 'Core CS & System Design', icon: Cpu, count: skills.coreConcepts.length },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills &amp; Technology <span className="gradient-text-emerald">Matrix</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Enterprise backend development with Java &amp; Spring Boot, microservice choreography, modern frontends, and containerized deployment workflows.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-lg shadow-emerald-500/25 scale-105'
                    : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                  isActive ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="bg-[#0b1120] p-6 sm:p-10 rounded-3xl border border-slate-800/90 shadow-2xl">
          
          {/* Backend View */}
          {activeCategory === 'backend' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
              {skills.backend.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all group glass-card-hover"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display font-bold text-white text-base group-hover:text-emerald-400 transition-colors">
                      {item.name}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      {item.badge}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-800/70 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400">Proficiency</span>
                    <span className="text-xs font-mono font-bold text-emerald-400">{item.level}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5 mt-1 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-1000"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Languages View */}
          {activeCategory === 'languages' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
              {skills.languages.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center glass-card-hover group"
                >
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold mb-3 group-hover:scale-110 transition-transform">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-white text-lg group-hover:text-emerald-400 transition-colors">
                    {item.name}
                  </h4>
                  <span className="inline-block mt-1 text-xs font-mono text-cyan-400">
                    {item.category}
                  </span>
                  <div className="mt-4 pt-3 border-t border-slate-800/70">
                    <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                      <span>Proficiency</span>
                      <span className="text-emerald-400 font-bold">{item.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-emerald-400 h-full rounded-full"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Frontend View */}
          {activeCategory === 'frontend' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
              {skills.frontend.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 glass-card-hover group"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-display font-bold text-white text-base group-hover:text-cyan-400 transition-colors">
                      {item.name}
                    </h4>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      {item.badge}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-800/70 flex justify-between text-xs font-mono">
                    <span className="text-slate-400">Skill Level</span>
                    <span className="text-cyan-400 font-bold">{item.level}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5 mt-1 overflow-hidden">
                    <div
                      className="bg-cyan-400 h-full rounded-full"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* DevOps & Tooling */}
          {activeCategory === 'devops' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
              {skills.devopsAndTools.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 glass-card-hover group"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-display font-bold text-white text-base group-hover:text-emerald-400 transition-colors">
                      {item.name}
                    </h4>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-400 border border-purple-500/30">
                      {item.badge}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-800/70 flex justify-between text-xs font-mono">
                    <span className="text-slate-400">Mastery</span>
                    <span className="text-emerald-400 font-bold">{item.level}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5 mt-1 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-purple-400 to-emerald-400 h-full rounded-full"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Core CS Concepts */}
          {activeCategory === 'concepts' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fadeIn">
              {skills.coreConcepts.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-4 glass-card-hover"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-base">
                      {item.name}
                    </h4>
                    <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Soft Skills Footer */}
          <div className="mt-10 pt-6 border-t border-slate-800/80">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Professional Soft Skills</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.softSkills.map((soft) => (
                <span
                  key={soft}
                  className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-900 text-slate-300 border border-slate-700/60"
                >
                  ✓ {soft}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
