import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  ExternalLink, 
  Github, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight, 
  Sparkles, 
  Activity,
  X,
  Server,
  Zap
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Projects() {
  const { projects } = resumeData;
  const [filter, setFilter] = useState('ALL');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = filter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category.toUpperCase() === filter);

  return (
    <section id="projects" className="py-24 relative bg-[#090d16]/60 border-t border-slate-800/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold mb-4">
              <Code2 className="w-3.5 h-3.5" />
              <span>Production-Ready Engineering</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured <span className="gradient-text-emerald">Projects</span>
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
              Scalable distributed backends, RESTful microservices, and end-to-end full-stack applications with fintech integrations.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-800 self-start">
            {['ALL', 'MICROSERVICES', 'FULL-STACK'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                  filter === cat
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="rounded-3xl bg-[#0b1120] border border-slate-800/90 shadow-xl overflow-hidden flex flex-col justify-between glass-card-hover group relative"
            >
              
              {/* Top Accent Gradient Header */}
              <div className="p-6 sm:p-7 flex-1">
                
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-slate-800/90 text-emerald-400 border border-emerald-500/30">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    0{idx + 1} / 03
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs font-mono text-cyan-400 font-medium">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Metric Badges */}
                <div className="mt-5 grid grid-cols-2 gap-2 bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
                  {Object.entries(project.stats).slice(0, 2).map(([k, v]) => (
                    <div key={k} className="flex flex-col">
                      <span className="text-[10px] uppercase font-mono text-slate-400">{k}</span>
                      <span className="text-xs font-bold text-emerald-300 font-mono truncate">{v}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom Actions */}
              <div className="px-6 py-4 bg-slate-900/70 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Architecture Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="View Source on GitHub (@Faiz-Khan01)"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Deep Dive Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0b1120] border border-slate-700 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-12">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                {activeModalProject.category}
              </span>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-white">
                {activeModalProject.title}
              </h3>
              <p className="text-sm font-mono text-cyan-400 mt-1">
                {activeModalProject.tagline}
              </p>
            </div>

            {/* Key Achievements Bullets */}
            <div className="mt-6">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Key Engineering Highlights</span>
              </h4>
              <ul className="space-y-2.5">
                {activeModalProject.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture Details */}
            {activeModalProject.architectureDetails && (
              <div className="mt-6 p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>Architecture Specifications</span>
                </h4>
                <div className="space-y-2 text-xs font-mono text-slate-300">
                  {Object.entries(activeModalProject.architectureDetails).map(([k, v]) => (
                    <div key={k} className="border-b border-slate-800/80 pb-2 last:border-0 last:pb-0">
                      <span className="text-emerald-400 capitalize">{k}: </span>
                      {typeof v === 'string' ? (
                        <span>{v}</span>
                      ) : Array.isArray(v) ? (
                        <div className="mt-1 pl-3 space-y-1">
                          {v.map((item, iIdx) => (
                            <div key={iIdx} className="text-slate-300">
                              • <strong className="text-white">{item.name}</strong> (:{item.port}) - {item.desc}
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="mt-6">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800 text-slate-200 border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
              <a
                href={activeModalProject.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code (@Faiz-Khan01)</span>
              </a>

              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2.5 rounded-xl font-semibold text-xs text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
              >
                Close Modal
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
