import React from 'react';
import { 
  Server, 
  Database, 
  Container, 
  Code2, 
  ShieldCheck, 
  CreditCard, 
  Network,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';

// Skills floating around the central avatar circle (inspired by the video reference)
const floatingSkills = [
  {
    name: 'Java',
    icon: Code2,
    color: 'text-amber-400',
    bg: 'bg-gradient-to-br from-amber-950/90 to-red-950/90',
    border: 'border-amber-500/50',
    glow: 'shadow-amber-500/30',
    position: 'top-2 left-6 sm:top-4 sm:left-4',
    animation: 'animate-float-skill-1',
    badge: 'Core'
  },
  {
    name: 'Spring Boot',
    icon: Server,
    color: 'text-rose-400',
    bg: 'bg-gradient-to-br from-red-950/95 to-rose-950/90',
    border: 'border-rose-500/60',
    glow: 'shadow-red-500/40',
    position: 'top-4 right-4 sm:top-6 sm:right-6',
    animation: 'animate-float-skill-2',
    badge: 'Expert'
  },
  {
    name: 'Microservices',
    icon: Network,
    color: 'text-red-400',
    bg: 'bg-gradient-to-br from-red-950/90 to-black',
    border: 'border-red-500/50',
    glow: 'shadow-red-600/30',
    position: 'bottom-24 -left-4 sm:bottom-28 sm:-left-6',
    animation: 'animate-float-skill-3',
    badge: 'Cloud'
  },
  {
    name: 'Docker',
    icon: Container,
    color: 'text-sky-400',
    bg: 'bg-gradient-to-br from-slate-950/90 to-red-950/80',
    border: 'border-sky-500/50',
    glow: 'shadow-sky-500/30',
    position: 'bottom-20 -right-2 sm:bottom-24 sm:-right-4',
    animation: 'animate-float-skill-4',
    badge: 'DevOps'
  },
  {
    name: 'MySQL',
    icon: Database,
    color: 'text-amber-300',
    bg: 'bg-gradient-to-br from-amber-950/90 to-slate-950/90',
    border: 'border-amber-400/50',
    glow: 'shadow-amber-400/30',
    position: '-bottom-4 left-1/4 sm:-bottom-6 sm:left-1/3',
    animation: 'animate-float-skill-5',
    badge: 'DB'
  },
  {
    name: 'React.js',
    icon: Cpu,
    color: 'text-cyan-300',
    bg: 'bg-gradient-to-br from-cyan-950/90 to-red-950/80',
    border: 'border-cyan-400/50',
    glow: 'shadow-cyan-400/30',
    position: '-top-6 left-1/2 -translate-x-1/2',
    animation: 'animate-float-skill-6',
    badge: 'UI'
  },
  {
    name: 'JWT & Security',
    icon: ShieldCheck,
    color: 'text-rose-300',
    bg: 'bg-gradient-to-br from-red-950 to-stone-950',
    border: 'border-rose-400/50',
    glow: 'shadow-rose-400/30',
    position: 'top-1/2 -right-8 -translate-y-1/2 hidden md:flex',
    animation: 'animate-float-skill-2',
    badge: 'Auth'
  },
  {
    name: 'Razorpay',
    icon: CreditCard,
    color: 'text-red-300',
    bg: 'bg-gradient-to-br from-red-950 to-stone-950',
    border: 'border-red-400/50',
    glow: 'shadow-red-400/30',
    position: 'top-1/2 -left-8 -translate-y-1/2 hidden md:flex',
    animation: 'animate-float-skill-4',
    badge: 'Pay'
  }
];

export default function HeroAvatarOrbit() {
  return (
    <div className="relative w-full max-w-[480px] mx-auto aspect-square flex items-center justify-center select-none py-6">
      
      {/* Decorative concentric orbit rings (as seen in video motion) */}
      <div className="absolute inset-4 rounded-full border border-dashed border-red-500/20 animate-spin-slow pointer-events-none"></div>
      <div className="absolute inset-12 rounded-full border border-dashed border-amber-500/20 animate-spin-reverse pointer-events-none"></div>
      <div className="absolute inset-20 rounded-full border border-red-500/10 pointer-events-none"></div>

      {/* Radiant ambient glow behind avatar */}
      <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-amber-500/30 via-red-600/35 to-rose-600/25 blur-3xl pointer-events-none animate-pulse-slow"></div>

      {/* Central Circular Avatar (From User Photo with Golden/Amber Neon Halo) */}
      <div className="relative z-10 group">
        
        {/* Pulsing neon halo border ring (Exact look from video) */}
        <div className="relative p-1.5 sm:p-2 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-500 avatar-halo transition-all duration-500 group-hover:scale-105">
          
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden bg-[#070102] ring-4 ring-amber-400/90 shadow-2xl">
            <img
              src="/faiz-khan.jpg"
              alt="Faiz Khan"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                // Fallback to relative asset path if /faiz-khan.jpg is not ready
                e.currentTarget.src = './src/assets/faiz-khan.jpg';
              }}
            />

            {/* Subtle inner shadow overlay */}
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 pointer-events-none"></div>
          </div>

        </div>

        {/* Status indicator on avatar border */}
        <div className="absolute bottom-2 right-4 sm:bottom-3 sm:right-6 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0a0204]/95 border border-amber-500/60 shadow-lg text-[10px] font-mono text-amber-300 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
          <span className="font-bold">Faiz Khan</span>
        </div>

      </div>

      {/* Orbiting / Flying Skill Badges around the Avatar */}
      {floatingSkills.map((skill, index) => {
        const Icon = skill.icon;
        return (
          <div
            key={skill.name}
            className={`absolute z-20 flex items-center gap-2 px-3 py-1.5 rounded-2xl ${skill.bg} border ${skill.border} shadow-xl ${skill.glow} backdrop-blur-md transition-all duration-300 hover:scale-115 hover:z-30 cursor-pointer ${skill.position} ${skill.animation}`}
          >
            <div className={`w-6 h-6 rounded-lg bg-black/60 flex items-center justify-center shrink-0`}>
              <Icon className={`w-3.5 h-3.5 ${skill.color}`} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono font-bold text-white leading-tight">
                {skill.name}
              </span>
              <span className="text-[9px] font-mono text-slate-300">
                {skill.badge}
              </span>
            </div>
          </div>
        );
      })}

    </div>
  );
}
