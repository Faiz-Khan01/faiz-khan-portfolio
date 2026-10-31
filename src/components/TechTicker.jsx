import React from 'react';
import { 
  Server, 
  Database, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  Container, 
  Code2, 
  Radio, 
  Zap, 
  CreditCard,
  CloudLightning,
  GitBranch
} from 'lucide-react';

const tickerItems = [
  { name: 'Java 17 / 21', icon: Code2, color: 'text-amber-400' },
  { name: 'Spring Boot 3', icon: Server, color: 'text-emerald-400' },
  { name: 'Microservices Architecture', icon: Layers, color: 'text-cyan-400' },
  { name: 'Netflix Eureka Registry', icon: Radio, color: 'text-yellow-400' },
  { name: 'Spring Cloud Gateway', icon: CloudLightning, color: 'text-teal-400' },
  { name: 'Spring Security & JWT', icon: ShieldCheck, color: 'text-indigo-400' },
  { name: 'OpenFeign Inter-Service', icon: GitBranch, color: 'text-blue-400' },
  { name: 'Docker Containerization', icon: Container, color: 'text-sky-400' },
  { name: 'MySQL Relational DB', icon: Database, color: 'text-blue-400' },
  { name: 'Razorpay Payment Gateway', icon: CreditCard, color: 'text-emerald-400' },
  { name: 'React.js 18', icon: Cpu, color: 'text-cyan-400' },
  { name: 'Tailwind CSS', icon: Zap, color: 'text-teal-400' },
];

export default function TechTicker() {
  return (
    <div className="relative py-6 bg-[#060102]/90 border-y border-red-950/40 overflow-hidden select-none">
      
      {/* Side gradient masks for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#060102] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#060102] to-transparent z-10 pointer-events-none"></div>

      {/* Infinite scrolling ribbon */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...tickerItems, ...tickerItems].map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="inline-flex items-center gap-2.5 px-6 py-2 mx-2 rounded-xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-sm transition-all hover:border-emerald-500/40 hover:scale-105"
            >
              <Icon className={`w-4 h-4 ${item.color} shrink-0`} />
              <span className="font-mono text-xs font-semibold text-slate-300 tracking-wide whitespace-nowrap">
                {item.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
            </div>
          );
        })}
      </div>

    </div>
  );
}
