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
  Radio,
  ShieldCheck,
  CreditCard,
  ShoppingCart
} from 'lucide-react';
import { resumeData } from '../data/resumeData';
import TerminalSnippet from './TerminalSnippet';

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
      
      {/* Background radial crimson glow from video reference */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-gradient-to-b from-red-600/25 via-red-900/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10 animate-glow-pulse"></div>
      <div className="absolute top-1/4 right-5 w-[500px] h-[500px] bg-rose-700/15 rounded-full blur-[130px] pointer-events-none -z-10 animate-float-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top availability pill & live deployed announcement */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-emerald-400 text-xs font-mono shadow-lg shadow-emerald-950/40 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-slate-200">{personal.availability}</span>
            <span className="text-slate-500">•</span>
            <span className="text-emerald-400">Nagpur, India</span>
          </div>

          <a 
            href="#projects"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300 hover:text-white transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>TechStore E-Commerce Deployed</span>
            <ArrowRight className="w-3 h-3 text-emerald-400" />
          </a>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Intro */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left">
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
              Engineering Robust <br />
              <span className="gradient-text-emerald">Java Microservices</span> &amp; <br />
              <span className="gradient-text-cyan">Scalable Web Apps</span>
            </h1>

            {/* Cycling Interactive Title */}
            <div className="h-8 mt-3 flex items-center justify-center lg:justify-start">
              <span className={`text-base sm:text-lg font-mono font-bold text-cyan-300 transition-all duration-300 ${
                fadeState ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}>
                &gt; {rotatingTitles[titleIndex]}
                <span className="inline-block w-2 h-4 ml-1 bg-emerald-400 animate-pulse"></span>
              </span>
            </div>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Hi, I'm <strong className="text-white font-semibold">{personal.name}</strong>. A Computer Science engineer specialized in building high-throughput REST APIs, Spring Boot microservice ecosystems, secure JWT &amp; OAuth2 pipelines, and responsive React frontend interfaces.
            </p>

            {/* Quick Skills Badges */}
            <div className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start">
              {['Java 17+', 'Spring Boot 3', 'Microservices', 'Eureka Discovery', 'Spring Security', 'Docker', 'MySQL', 'React.js', 'Razorpay'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800/80 text-slate-200 border border-slate-700/60 shadow-sm hover:border-emerald-500/40 hover:text-emerald-300 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Call to Actions */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-xl shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#architecture"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 transition-all hover:border-emerald-500/40"
              >
                <Layers className="w-4 h-4 text-emerald-400" />
                <span>Hospital Microservices</span>
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 transition-all"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Quick Contact & Socials */}
            <div className="mt-8 pt-6 border-t border-slate-800/70 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-400">
              <a 
                href={`mailto:${personal.email}`} 
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-xs">{personal.email}</span>
              </a>

              <a 
                href={`tel:${personal.phone.replace(/\s+/g, '')}`} 
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-xs">{personal.phone}</span>
              </a>

              <div className="flex items-center gap-3">
                <a 
                  href={personal.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="GitHub Profile (@Faiz-Khan01)"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-colors"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Code Terminal with Floating Telemetry Badges */}
          <div className="lg:col-span-5 flex flex-col justify-center relative">
            
            {/* Floating Telemetry Badge 1: Eureka Discovery */}
            <div className="hidden sm:flex absolute -top-4 -left-6 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/95 border border-amber-500/40 shadow-xl shadow-black/60 text-xs font-mono text-slate-200 backdrop-blur-md animate-float">
              <Radio className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>Eureka: 6/6 Nodes UP</span>
            </div>

            {/* Floating Telemetry Badge 2: Security */}
            <div className="hidden sm:flex absolute -bottom-5 -right-4 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/95 border border-emerald-500/40 shadow-xl shadow-black/60 text-xs font-mono text-slate-200 backdrop-blur-md animate-float-reverse">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>JWT + RBAC: 256-Bit</span>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 rounded-3xl blur-xl opacity-60"></div>
              <div className="relative">
                <TerminalSnippet />
              </div>
            </div>
          </div>

        </div>

        {/* Stats Grid Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {personal.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md glass-card-hover group"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                  {stat.value}
                </span>
                <span className="text-emerald-400 text-xs font-mono font-semibold">Verified</span>
              </div>
              <p className="mt-1 text-sm font-semibold text-slate-200">
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
