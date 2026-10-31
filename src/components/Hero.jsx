import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Layers, 
  Server, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  FileText, 
  CheckCircle2, 
  Database, 
  Sparkles,
  Zap,
  Code2,
  Terminal,
  User
} from 'lucide-react';
import { resumeData } from '../data/resumeData';
import TerminalSnippet from './TerminalSnippet';
import HeroAvatarOrbit from './HeroAvatarOrbit';

const rotatingTitles = [
  'Java Backend Engineer',
  'Spring Boot Microservices Architect',
  'Full Stack Systems Developer',
  'RESTful API & Security Specialist'
];

export default function Hero({ onOpenResume }) {
  const { personal } = resumeData;
  const [titleIndex, setTitleIndex] = useState(0);
  const [fadeState, setFadeState] = useState(true);
  const [viewMode, setViewMode] = useState('avatar'); // 'avatar' | 'terminal'

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState(false);
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
        setFadeState(true);
      }, 350);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Background radial crimson/ruby glow (matching video reference) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-b from-red-600/25 via-red-900/15 to-transparent rounded-full blur-[150px] pointer-events-none -z-10 animate-glow-pulse"></div>
      <div className="absolute top-1/4 right-5 w-[500px] h-[500px] bg-rose-700/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-float-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top availability pill & live deployed announcement */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#120204]/90 border border-red-500/30 text-red-400 text-xs font-mono shadow-lg shadow-black/70 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            <span className="font-semibold text-rose-200">{personal.availability}</span>
            <span className="text-red-900">•</span>
            <span className="text-amber-400">Nagpur, India</span>
          </div>

          <a 
            href="#projects"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-red-500/15 via-rose-500/15 to-amber-500/15 border border-red-500/40 text-xs font-mono text-red-300 hover:text-white transition-all hover:scale-105 shadow-md shadow-red-950/40"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span>TechStore PRO • Live Deployed (3D Fitting Room)</span>
            <ArrowRight className="w-3 h-3 text-red-400" />
          </a>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Intro */}
          <div className="lg:col-span-6 flex flex-col text-center lg:text-left">
            
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-xs font-mono font-semibold text-rose-400 mb-2">
              <span className="px-2.5 py-1 rounded-md bg-red-950/60 border border-red-500/30">
                Hello, I'm
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              Engineering Robust <br />
              <span className="gradient-text-red">Java Microservices</span> &amp; <br />
              <span className="gradient-text-gold">Scalable Web Apps</span>
            </h1>

            {/* Cycling Interactive Title */}
            <div className="h-8 mt-3 flex items-center justify-center lg:justify-start">
              <span className={`text-base sm:text-lg font-mono font-bold text-red-400 transition-all duration-300 ${
                fadeState ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}>
                &gt; {rotatingTitles[titleIndex]}
                <span className="inline-block w-2 h-4 ml-1 bg-red-500 animate-pulse"></span>
              </span>
            </div>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Driven Computer Science engineer specializing in high-throughput REST APIs, Spring Boot microservices, JWT authentication, and full-stack web platforms with Docker containerization.
            </p>

            {/* Quick Skills Badges */}
            <div className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start">
              {['Java 17+', 'Spring Boot 3', 'Microservices', 'Eureka Discovery', 'Spring Security', 'Docker', 'MySQL', 'React.js', 'Razorpay'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#140306] text-rose-200 border border-red-950/80 shadow-sm hover:border-red-500/50 hover:text-white transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Call to Actions (Styled with glowing red/rose buttons from video) */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-500 hover:from-red-500 hover:to-rose-500 shadow-xl shadow-red-600/35 transition-all transform hover:-translate-y-0.5 hover:shadow-red-600/50"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#architecture"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-rose-200 bg-[#140306] hover:bg-[#1f0509] border border-red-900/60 transition-all hover:border-red-500/50 shadow-md"
              >
                <Layers className="w-4 h-4 text-red-400" />
                <span>Hospital Microservices</span>
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-amber-300 bg-[#120204] hover:bg-[#1a0407] border border-amber-500/40 transition-all hover:border-amber-400"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Quick Contact & Socials */}
            <div className="mt-8 pt-6 border-t border-red-950/60 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-300">
              <a 
                href={`mailto:${personal.email}`} 
                className="flex items-center gap-2 hover:text-red-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-red-400" />
                <span className="font-mono text-xs">{personal.email}</span>
              </a>

              <a 
                href={`tel:${personal.phone.replace(/\s+/g, '')}`} 
                className="flex items-center gap-2 hover:text-rose-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-rose-400" />
                <span className="font-mono text-xs">{personal.phone}</span>
              </a>

              <div className="flex items-center gap-3">
                <a 
                  href={personal.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-[#140306] hover:bg-[#20050a] text-slate-300 hover:text-white border border-red-950/80 transition-colors"
                  title="GitHub Profile (@Faiz-Khan01)"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-[#140306] hover:bg-[#20050a] text-slate-300 hover:text-red-400 border border-red-950/80 transition-colors"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual - Circular Avatar with Orbiting Skills (As in Video) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            
            {/* View Mode Toggle Pill (Avatar with Flying Skills vs Live Terminal) */}
            <div className="mb-3 flex items-center gap-1.5 p-1 rounded-full bg-[#120204] border border-red-950/80 shadow-md">
              <button
                onClick={() => setViewMode('avatar')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold transition-all ${
                  viewMode === 'avatar'
                    ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md shadow-red-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <User className="w-3 h-3" />
                <span>Avatar &amp; Flying Skills</span>
              </button>

              <button
                onClick={() => setViewMode('terminal')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold transition-all ${
                  viewMode === 'terminal'
                    ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md shadow-red-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Terminal className="w-3 h-3" />
                <span>Spring Terminal</span>
              </button>
            </div>

            {viewMode === 'avatar' ? (
              <HeroAvatarOrbit />
            ) : (
              <div className="w-full max-w-lg">
                <TerminalSnippet />
              </div>
            )}

          </div>

        </div>

        {/* Stats Grid Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {personal.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl bg-[#0e0305]/90 border border-red-950/80 backdrop-blur-md glass-card-hover group"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-white group-hover:text-red-400 transition-colors">
                  {stat.value}
                </span>
                <span className="text-red-400 text-xs font-mono font-semibold">Verified</span>
              </div>
              <p className="mt-1 text-sm font-semibold text-rose-100">
                {stat.label}
              </p>
              <p className="mt-0.5 text-xs text-slate-400">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
