import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';

gsap.registerPlugin(ScrollTrigger);

import ThreeBackground from './components/ThreeBackground';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechTicker from './components/TechTicker';
import ArchitectureExplorer from './components/ArchitectureExplorer';
import Projects from './components/Projects';
import ApiSandbox from './components/ApiSandbox';
import Skills from './components/Skills';
import ExperienceEducation from './components/ExperienceEducation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Initialize Lenis Smooth Scrolling & AOS Scroll Animations
  useEffect(() => {
    // 1. Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const tickerCb = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    // 2. AOS Scroll Reveal Initialization
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 60,
    });

    // Refresh triggers after elements mount and images load
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
      AOS.refresh();
    }, 600);

    return () => {
      gsap.ticker.remove(tickerCb);
      clearTimeout(refreshTimer);
      lenis.destroy();
    };
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <div className="relative min-h-screen bg-[#070102] text-slate-100 selection:bg-red-500/30 selection:text-red-300">
      
      {/* Deep Crimson Ambient Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[950px] h-[650px] bg-red-600/20 rounded-full blur-[140px] animate-pulse-slow"></div>
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[850px] h-[600px] bg-red-800/14 rounded-full blur-[160px]"></div>
        <div className="absolute top-[65%] left-10 w-[550px] h-[550px] bg-rose-950/20 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-10 right-10 w-[650px] h-[650px] bg-red-900/15 rounded-full blur-[160px]"></div>
      </div>

      {/* 3D Three.js Particle Galaxy & Floating Geometry */}
      <ThreeBackground />

      {/* Interactive Particle Constellation Background */}
      <ParticleCanvas />

      {/* Navigation Header */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <TechTicker />
        <ArchitectureExplorer />
        <Projects />
        <ApiSandbox />
        <Skills />
        <ExperienceEducation />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Printable / Interactive Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      {/* Interactive Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900/95 border border-emerald-500/50 shadow-2xl shadow-black/80 text-white text-xs font-mono animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="p-1 hover:text-slate-400 text-slate-500"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

    </div>
  );
}