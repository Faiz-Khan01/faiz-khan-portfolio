import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  ArrowUpRight, 
  Sparkles, 
  Activity,
  X,
  Zap,
  ShoppingCart,
  Maximize2,
  Eye,
  ZoomIn,
  Server
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import TechStoreLiveModal from './TechStoreLiveModal';

export default function Projects() {
  const { projects } = resumeData;
  const [filter, setFilter] = useState('ALL');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [techStoreModalOpen, setTechStoreModalOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState(null); // { src, title, liveUrl }

  const filteredProjects = filter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category.toUpperCase() === filter);

  return (
    <section id="projects" className="py-24 relative bg-[#070103]/80 border-t border-red-950/40">
      
      {/* Background radial highlights */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-rose-900/12 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with AOS */}
        <div 
          data-aos="fade-up"
          data-aos-duration="800"
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-mono font-semibold mb-4">
              <Code2 className="w-3.5 h-3.5" />
              <span>Production-Ready Engineering</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured <span className="gradient-text-red">Projects</span>
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl">
              Scalable distributed backends, 18 Spring Boot microservices, and live deployed full-stack luxury eCommerce with 3D fitting room &amp; Razorpay payment gateway.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 bg-[#120204] p-1.5 rounded-2xl border border-red-950 self-start">
            {['ALL', 'MICROSERVICES', 'FULL-STACK'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/35'
                    : 'text-slate-400 hover:text-white hover:bg-red-950/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid with Framer Motion Layout & 3D Tilt Hover */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const isTechStore = project.id === 'techstore-ecommerce';
              const isHospital = project.id === 'hospital-management-microservices';
              const isLms = project.id === 'myteachingapp-lms';

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className={`rounded-3xl bg-[#0e0305] border shadow-xl overflow-hidden flex flex-col justify-between group relative ${
                    isTechStore
                      ? 'border-red-500/50 shadow-red-600/10'
                      : isHospital
                      ? 'border-rose-500/40 shadow-rose-600/10'
                      : 'border-red-950/80'
                  }`}
                >
                  
                  {/* Glowing top accent gradient */}
                  <div className={`h-1.5 w-full ${
                    isTechStore
                      ? 'bg-gradient-to-r from-red-600 via-rose-500 to-amber-500'
                      : isHospital
                      ? 'bg-gradient-to-r from-rose-600 via-red-600 to-amber-500'
                      : 'bg-gradient-to-r from-blue-600 via-rose-600 to-amber-500'
                  }`}></div>

                  {/* VISUAL PROJECT THUMBNAIL WITH BROWSER WINDOW MOCKUP */}
                  <div className="relative w-full h-56 sm:h-60 bg-[#070102] overflow-hidden border-b border-red-950/80 group/thumb">
                    
                    {/* Browser Address Bar Header */}
                    <div className="absolute top-0 inset-x-0 z-20 h-7 bg-[#140306]/95 backdrop-blur-md border-b border-red-950/60 px-3 flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500/80"></span>
                        <span className="w-2 h-2 rounded-full bg-amber-500/80"></span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500/80"></span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-[#0a0204] px-2.5 py-0.5 rounded-md border border-red-950/60 text-slate-300">
                        <span className="text-emerald-400 text-[9px]">🔒</span>
                        <span className="text-[10px] font-mono text-rose-200 truncate max-w-[170px]">
                          {isTechStore ? 'techstore-catalog.vercel.app' :
                           isHospital ? 'hospitalsync-pro.internal:8080' :
                           'myteachingapp-lms.vercel.app'}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-[9px] text-emerald-400 font-semibold font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        LIVE
                      </span>
                    </div>

                    {/* Screenshot image container with smooth downward pan on hover */}
                    <div className="w-full h-full pt-7 overflow-hidden relative">
                      <img
                        src={project.image || (isTechStore ? '/techstore-preview.jpg' : isHospital ? '/hospitalsync-preview.svg' : '/myteachingapp-preview.svg')}
                        alt={`${project.title} Preview`}
                        className="w-full h-[520px] object-cover object-top transition-transform duration-[4000ms] ease-in-out group-hover/thumb:-translate-y-64"
                        onError={(e) => {
                          if (isTechStore) e.currentTarget.src = './src/assets/techstore-preview.jpg';
                          else if (isHospital) e.currentTarget.src = './src/assets/hospitalsync-preview.svg';
                          else e.currentTarget.src = './src/assets/myteachingapp-preview.svg';
                        }}
                      />
                      
                      {/* Ambient gradient blend at bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0305] via-transparent to-transparent opacity-90 pointer-events-none"></div>

                      {/* Floating Feature Pills */}
                      <div className="absolute bottom-2.5 left-3 z-10 flex flex-wrap items-center gap-1.5">
                        {isTechStore && (
                          <>
                            <span className="px-2 py-0.5 rounded-md text-[9px] font-mono font-bold bg-[#140306]/90 text-rose-300 border border-red-500/40 backdrop-blur-md shadow-md">
                              🧥 3D Fitting Room
                            </span>
                            <span className="px-2 py-0.5 rounded-md text-[9px] font-mono font-bold bg-[#140306]/90 text-amber-300 border border-amber-500/40 backdrop-blur-md shadow-md">
                              🤖 AI Stylist
                            </span>
                          </>
                        )}
                        {isHospital && (
                          <>
                            <span className="px-2 py-0.5 rounded-md text-[9px] font-mono font-bold bg-[#140306]/90 text-rose-300 border border-red-500/40 backdrop-blur-md shadow-md">
                              🏥 18 Spring Boot Services
                            </span>
                            <span className="px-2 py-0.5 rounded-md text-[9px] font-mono font-bold bg-[#140306]/90 text-amber-300 border border-amber-500/40 backdrop-blur-md shadow-md">
                              🛏️ Bed Matrix &amp; HIPAA
                            </span>
                          </>
                        )}
                        {isLms && (
                          <>
                            <span className="px-2 py-0.5 rounded-md text-[9px] font-mono font-bold bg-[#140306]/90 text-rose-300 border border-red-500/40 backdrop-blur-md shadow-md">
                              🎓 Student &amp; Instructor RBAC
                            </span>
                            <span className="px-2 py-0.5 rounded-md text-[9px] font-mono font-bold bg-[#140306]/90 text-amber-300 border border-amber-500/40 backdrop-blur-md shadow-md">
                              💳 Razorpay Checkout
                            </span>
                          </>
                        )}
                      </div>

                      {/* Lightbox Zoom Trigger */}
                      <button
                        onClick={() => setPreviewImage({
                          src: project.image || (isTechStore ? '/techstore-preview.jpg' : isHospital ? '/hospitalsync-preview.svg' : '/myteachingapp-preview.svg'),
                          title: project.title,
                          liveUrl: project.liveStorefront || (isHospital ? '#architecture' : project.github)
                        })}
                        className="absolute top-9 right-3 z-20 p-1.5 rounded-lg bg-black/75 hover:bg-red-950 text-slate-300 hover:text-white border border-red-950/80 transition-all opacity-0 group-hover/thumb:opacity-100 shadow-lg cursor-pointer"
                        title="Expand Full Website Screenshot"
                      >
                        <Maximize2 className="w-3.5 h-3.5 text-red-400" />
                      </button>

                      {/* Quick Action Overlay on Hover */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2.5 backdrop-blur-[2px] z-15">
                        {isTechStore ? (
                          <>
                            <a
                              href={project.liveStorefront}
                              target="_blank"
                              rel="noreferrer"
                              className="px-3 py-1.5 rounded-xl text-xs font-mono font-bold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 transition-all shadow-lg shadow-red-600/40 flex items-center gap-1.5"
                            >
                              <ExternalLink className="w-3 h-3" />
                              <span>Live Storefront ↗</span>
                            </a>
                            <button
                              onClick={() => setTechStoreModalOpen(true)}
                              className="px-3 py-1.5 rounded-xl text-xs font-mono font-semibold text-rose-200 bg-[#160407] hover:bg-[#20050a] border border-red-500/40 transition-colors flex items-center gap-1 cursor-pointer"
                            >
                              <ShoppingCart className="w-3 h-3 text-amber-400" />
                              <span>3D Studio</span>
                            </button>
                          </>
                        ) : isHospital ? (
                          <>
                            <a
                              href="#architecture"
                              className="px-3 py-1.5 rounded-xl text-xs font-mono font-bold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 transition-all shadow-lg shadow-red-600/40 flex items-center gap-1.5"
                            >
                              <Zap className="w-3 h-3" />
                              <span>18 Services Explorer ➔</span>
                            </a>
                            <a
                              href="#sandbox"
                              className="px-3 py-1.5 rounded-xl text-xs font-mono font-semibold text-rose-200 bg-[#160407] hover:bg-[#20050a] border border-red-500/40 transition-colors flex items-center gap-1 cursor-pointer"
                            >
                              <Server className="w-3 h-3 text-amber-400" />
                              <span>REST Sandbox</span>
                            </a>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => setActiveModalProject(project)}
                              className="px-3 py-1.5 rounded-xl text-xs font-mono font-bold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 transition-all shadow-lg shadow-red-600/40 flex items-center gap-1.5 cursor-pointer"
                            >
                              <Layers className="w-3 h-3" />
                              <span>Deep Dive Specs ➔</span>
                            </button>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="px-3 py-1.5 rounded-xl text-xs font-mono font-semibold text-slate-200 bg-[#160407] hover:bg-[#20050a] border border-red-500/40 transition-colors flex items-center gap-1"
                            >
                              <Github className="w-3 h-3 text-red-400" />
                              <span>GitHub Code</span>
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Main Card Content */}
                  <div className="p-6 sm:p-7 flex-1">
                    
                    {/* Category & Badges */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#160407] text-rose-300 border border-red-950">
                        {project.category}
                      </span>

                      {/* Live Deployed Badge with Pulse */}
                      {isTechStore && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-mono font-bold bg-red-500/20 text-red-300 border border-red-500/40 animate-pulse">
                          <span className="w-2 h-2 rounded-full bg-red-500"></span>
                          LIVE DEPLOYED
                        </span>
                      )}

                      {isHospital && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                          <Zap className="w-3 h-3 text-amber-400" />
                          18 SERVICES
                        </span>
                      )}

                      {!isTechStore && !isHospital && (
                        <span className="text-xs font-mono text-slate-500">
                          03 / 03
                        </span>
                      )}
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs font-mono text-rose-300 font-medium">
                      {project.tagline}
                    </p>

                    {/* Description */}
                    <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Highlights Box */}
                    {isTechStore && (
                      <div className="mt-4 p-3 rounded-2xl bg-[#140306] border border-red-950/70 text-xs text-zinc-300 space-y-1.5">
                        <div className="flex items-center gap-2 text-rose-300 font-medium">
                          <Sparkles className="w-3.5 h-3.5 text-red-400 shrink-0" />
                          <span>3D Fitting Room &bull; AI Stylist &bull; INR Razorpay</span>
                        </div>
                        <div className="text-[11px] text-zinc-400 line-clamp-2">
                          Vercel Edge (React 18) + Render Docker (Spring Boot 3) + Aiven Cloud MySQL 8.0
                        </div>
                      </div>
                    )}

                    {isHospital && (
                      <div className="mt-4 p-3 rounded-2xl bg-[#140306] border border-red-950/70 text-xs text-zinc-300 space-y-1.5">
                        <div className="flex items-center gap-2 text-rose-300 font-medium">
                          <Activity className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>18 Spring Boot Services &bull; Eureka &bull; Redis 7</span>
                        </div>
                        <div className="text-[11px] text-zinc-400 line-clamp-2">
                          OpenFeign Resilience &bull; 25 Normalized Tables &bull; HIPAA Immutable Audit Logs
                        </div>
                      </div>
                    )}

                    {!isTechStore && !isHospital && (
                      <div className="mt-4 p-3 rounded-2xl bg-[#140306] border border-red-950/70 text-xs text-zinc-300 space-y-1.5">
                        <div className="flex items-center gap-2 text-rose-300 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span>Interactive LMS &bull; RBAC &bull; Razorpay</span>
                        </div>
                        <div className="text-[11px] text-zinc-400 line-clamp-2">
                          Student &amp; Instructor Portals &bull; Curriculum Streaming &bull; Automated Enrollment
                        </div>
                      </div>
                    )}

                    {/* Metric Badges */}
                    <div className="mt-4 grid grid-cols-2 gap-2 bg-[#140306] p-3 rounded-2xl border border-red-950">
                      {Object.entries(project.stats).slice(0, 2).map(([k, v]) => (
                        <div key={k} className="flex flex-col">
                          <span className="text-[10px] uppercase font-mono text-slate-400">{k}</span>
                          <span className="text-xs font-bold text-rose-300 font-mono truncate">{v}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills with Motion Stagger */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-[#160407] text-rose-200 border border-red-950 hover:border-red-500/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 6 && (
                        <span className="px-2 py-1 rounded-lg text-[11px] font-mono bg-[#160407] text-slate-400 border border-red-950">
                          +{project.techStack.length - 6} more
                        </span>
                      )}
                    </div>

                  </div>

                  {/* Bottom Actions */}
                  <div className="px-6 py-4 bg-[#120204]/90 border-t border-red-950/80 flex flex-wrap items-center justify-between gap-3">
                    
                    {isTechStore ? (
                      <div className="flex items-center gap-2">
                        <a
                          href={project.liveStorefront}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3.5 py-2 rounded-xl text-xs font-bold font-mono text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 transition-all flex items-center gap-1.5 shadow-md shadow-red-600/30"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Storefront ↗</span>
                        </a>
                        <button
                          onClick={() => setTechStoreModalOpen(true)}
                          className="px-3 py-2 rounded-xl text-xs font-mono font-semibold text-rose-200 bg-[#1a0407] hover:bg-[#25060b] border border-red-900/60 transition-colors flex items-center gap-1 cursor-pointer"
                          title="Interactive Store Simulation"
                        >
                          <ShoppingCart className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">3D Studio</span>
                        </button>
                      </div>
                    ) : isHospital ? (
                      <div className="flex items-center gap-2">
                        <a
                          href="#architecture"
                          className="px-4 py-2 rounded-xl text-xs font-bold font-mono text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 transition-all flex items-center gap-1.5 shadow-md shadow-red-600/30"
                        >
                          <Zap className="w-3.5 h-3.5" />
                          <span>18 Services</span>
                        </a>
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="px-3 py-2 rounded-xl text-xs font-mono font-semibold text-rose-200 bg-[#1a0407] hover:bg-[#25060b] border border-red-900/60 transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <Layers className="w-3.5 h-3.5" />
                          <span>Specs</span>
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="px-3.5 py-2 rounded-xl text-xs font-bold font-mono text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 transition-all flex items-center gap-1.5 shadow-md shadow-red-600/30 cursor-pointer"
                        >
                          <span>Explore LMS</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="p-2 rounded-xl bg-[#160407] hover:bg-[#20050a] text-slate-300 hover:text-white border border-red-950 transition-colors cursor-pointer"
                        title="Architecture Specifications & Tech Highlights"
                      >
                        <Layers className="w-4 h-4" />
                      </button>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-[#160407] hover:bg-[#20050a] text-slate-300 hover:text-white border border-red-950 transition-colors"
                        title="View Source on GitHub (@Faiz-Khan01)"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* TechStore Live Interactive Simulation Modal */}
      <TechStoreLiveModal 
        isOpen={techStoreModalOpen} 
        onClose={() => setTechStoreModalOpen(false)} 
      />

      {/* Project Deep Dive Modal with High-Res Screenshot Preview */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0e0305] border border-red-950 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-[#160407] hover:bg-[#20050a] text-slate-300 transition-colors border border-red-950 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-12">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-red-950/80 text-red-300 border border-red-500/40">
                {activeModalProject.category}
              </span>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-white">
                {activeModalProject.title}
              </h3>
              <p className="text-sm font-mono text-rose-300 mt-1">
                {activeModalProject.tagline}
              </p>
            </div>

            {/* Visual Screenshot / Architecture Banner in Modal */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-red-950/80 bg-[#080103] relative group/modalimg">
              <div className="h-7 bg-[#140306] border-b border-red-950 px-3 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="text-rose-200 font-semibold">{activeModalProject.title} — Live Dashboard Preview</span>
                {activeModalProject.liveStorefront ? (
                  <a
                    href={activeModalProject.liveStorefront}
                    target="_blank"
                    rel="noreferrer"
                    className="text-red-400 hover:text-red-300 flex items-center gap-1 font-mono text-[10px]"
                  >
                    <span>Open Live Storefront</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-emerald-400 font-mono text-[10px]">● Production Architecture</span>
                )}
              </div>
              <div className="max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-red-950 scrollbar-track-black">
                <img
                  src={activeModalProject.image || (activeModalProject.id === 'techstore-ecommerce' ? '/techstore-preview.jpg' : activeModalProject.id === 'hospital-management-microservices' ? '/hospitalsync-preview.svg' : '/myteachingapp-preview.svg')}
                  alt={activeModalProject.title}
                  className="w-full object-cover object-top"
                />
              </div>
            </div>

            {/* Live Deployment Direct Links Banner */}
            {activeModalProject.id === 'techstore-ecommerce' && (
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-red-950/60 via-[#180408] to-red-950/40 border border-red-500/30 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    Live Production Deployment Active
                  </span>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    Frontend deployed on Vercel Edge &bull; Backend containerized on Render Docker
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://techstore-catalog-yw04kw9zf-faiz-khan01s-projects.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-mono text-xs font-bold flex items-center gap-1.5 shadow-md shadow-red-600/30"
                  >
                    <span>Storefront</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://full-stack-ecommerce-catalog.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 rounded-xl bg-[#20050a] hover:bg-[#2e080f] text-rose-300 border border-red-900/60 font-mono text-xs font-medium flex items-center gap-1"
                  >
                    <span>Backend API</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}

            {/* Key Achievements Bullets */}
            <div className="mt-6">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-red-400" />
                <span>Key Engineering Highlights</span>
              </h4>
              <ul className="space-y-2.5">
                {activeModalProject.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture Details */}
            {activeModalProject.architectureDetails && (
              <div className="mt-6 p-4 rounded-2xl bg-[#140306] border border-red-950">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-rose-400" />
                  <span>Architecture Specifications</span>
                </h4>
                <div className="space-y-2 text-xs font-mono text-slate-300">
                  {Object.entries(activeModalProject.architectureDetails).map(([k, v]) => (
                    <div key={k} className="border-b border-red-950/60 pb-2 last:border-0 last:pb-0">
                      <span className="text-red-400 capitalize">{k}: </span>
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
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-[#160407] text-slate-200 border border-red-950"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="mt-8 pt-6 border-t border-red-950/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <a
                  href={activeModalProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-[#160407] hover:bg-[#20050a] border border-red-950 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository (@Faiz-Khan01)</span>
                </a>

                {activeModalProject.id === 'techstore-ecommerce' && (
                  <a
                    href="https://techstore-catalog-yw04kw9zf-faiz-khan01s-projects.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 transition-colors shadow-md shadow-red-600/30"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open Live Storefront</span>
                  </a>
                )}
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2.5 rounded-xl font-semibold text-xs text-slate-300 bg-[#140306] hover:bg-[#1f0509] border border-red-950 transition-colors cursor-pointer"
              >
                Close Modal
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Full-Page Lightbox Screenshot Preview Modal */}
      {previewImage && (
        <div 
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0e0305] border border-red-500/50 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl relative"
          >
            {/* Lightbox Header Bar */}
            <div className="p-4 bg-[#140306] border-b border-red-950 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-xs font-mono font-bold text-white">
                  {previewImage.title || 'Project UI & Architecture Dashboard Preview'}
                </span>
              </div>
              <div className="flex items-center gap-3">
                {previewImage.liveUrl && previewImage.liveUrl.startsWith('http') && (
                  <a
                    href={previewImage.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-mono font-semibold flex items-center gap-1.5 shadow-md shadow-red-600/30"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>Visit Live Storefront</span>
                  </a>
                )}
                <button
                  onClick={() => setPreviewImage(null)}
                  className="p-1.5 rounded-xl bg-[#1c0509] hover:bg-[#28070d] text-slate-300 hover:text-white border border-red-950 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Scrollable Full Screenshot */}
            <div className="flex-1 overflow-y-auto p-4 bg-[#070102]">
              <img
                src={previewImage.src}
                alt={previewImage.title || "Project Screenshot"}
                className="w-full rounded-2xl border border-red-950/80 shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}