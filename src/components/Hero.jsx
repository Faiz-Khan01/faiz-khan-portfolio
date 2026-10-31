import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Layers, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  FileText, 
  Sparkles,
  Coffee,
  Database,
  Cpu
} from 'lucide-react';
import gsap from 'gsap';
import { resumeData } from '../data/resumeData';
import HeroAvatarOrbit from './HeroAvatarOrbit';

const rotatingTitles = [
  'Java Backend Engineer',
  'Spring Boot Microservices Developer',
  'Full Stack Systems Engineer',
  'RESTful API & Security Specialist'
];

export default function Hero({ onOpenResume }) {
  const { personal } = resumeData;
  const [titleIndex, setTitleIndex] = useState(0);
  const [fadeState, setFadeState] = useState(true);
  
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const badgeRef = useRef(null);
  const ctaRef = useRef(null);

  // GSAP Entrance Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Badge pop-in
      gsap.from(badgeRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)'
      });

      // 2. Heading stagger reveal
      if (titleRef.current) {
        gsap.from(titleRef.current.children, {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.2
        });
      }

      // 3. CTA buttons smooth float-up
      if (ctaRef.current) {
        gsap.from(ctaRef.current.children, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          delay: 0.6
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Cycling titles timer
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
    <section 
      ref={heroRef}
      id="hero" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      
      {/* Background radial crimson/ruby glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-b from-red-600/25 via-red-900/15 to-transparent rounded-full blur-[150px] pointer-events-none -z-10 animate-glow-pulse"></div>
      <div className="absolute top-1/4 right-5 w-[500px] h-[500px] bg-rose-700/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-float-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top availability pill & live deployed announcement */}
        <div ref={badgeRef} className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center mb-8">
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
              <span className="px-3 py-1 rounded-md bg-red-950/60 border border-red-500/30">
                Hello, I'm Faiz Khan
              </span>
            </div>

            <div ref={titleRef}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
                Engineering Robust <br />
                <span className="gradient-text-red">Java Microservices</span> &amp; <br />
                <span className="gradient-text-gold">Scalable Web Apps</span>
              </h1>
            </div>

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
              Driven Computer Science undergraduate with hands-on expertise in Java 17, Spring Boot 3, RESTful Microservices, and React.js. Passionate about clean architecture, secure JWT/OAuth authentication, and deploying containerized applications with Docker.
            </p>

            {/* Quick Skills Badges with 3D Float Hover */}
            <div className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start">
              {[
                { name: 'Java 17+', icon: Coffee },
                { name: 'Spring Boot 3', icon: Cpu },
                { name: '18 Microservices', icon: Layers },
                { name: 'Docker', icon: Sparkles },
                { name: 'MySQL', icon: Database },
                { name: 'React.js', icon: Cpu },
                { name: 'Razorpay', icon: Sparkles }
              ].map((tech) => {
                const Icon = tech.icon;
                return (
                  <span 
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#140306] text-rose-200 border border-red-950/80 shadow-sm hover:border-red-500/50 hover:scale-105 hover:text-white transition-all cursor-default"
                  >
                    <Icon className="w-3 h-3 text-red-400" />
                    <span>{tech.name}</span>
                  </span>
                );
              })}
            </div>

            {/* Call to Actions with Magnetic Hover */}
            <div ref={ctaRef} className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-500 hover:from-red-500 hover:to-rose-500 shadow-xl shadow-red-600/35 transition-all transform hover:-translate-y-1 hover:shadow-red-600/60"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#architecture"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-rose-200 bg-[#140306] hover:bg-[#1f0509] border border-red-900/60 transition-all hover:border-red-500/50 hover:-translate-y-0.5 shadow-md"
              >
                <Layers className="w-4 h-4 text-red-400" />
                <span>18 Microservices</span>
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-amber-300 bg-[#120204] hover:bg-[#1a0407] border border-amber-500/40 transition-all hover:border-amber-400 hover:-translate-y-0.5 cursor-pointer"
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
                  className="p-2 rounded-lg bg-[#140306] hover:bg-[#20050a] text-slate-300 hover:text-white border border-red-950/80 hover:scale-110 transition-all"
                  title="GitHub Profile (@Faiz-Khan01)"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 rounded-lg bg-[#140306] hover:bg-[#20050a] text-slate-300 hover:text-red-400 border border-red-950/80 hover:scale-110 transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual - Circular Avatar with Orbiting Skills (As in Video) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative pt-8 pb-4">
            <HeroAvatarOrbit />
          </div>

        </div>

      </div>

    </section>
  );
}