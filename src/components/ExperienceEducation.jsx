import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  Calendar, 
  MapPin, 
  Trophy, 
  Check,
  ShieldCheck
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function ExperienceEducation() {
  const { experience, education, certifications, achievements } = resumeData;

  return (
    <section id="experience" className="py-24 relative bg-[#090d16]/70 border-t border-slate-800/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Experience & Education Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Career Journey &amp; Credentials</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience, Education &amp; <span className="gradient-text-cyan">Certifications</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Verified academic milestones, full-stack industrial training, and global certifications from Oracle, Meta, IBM, and AICTE.
          </p>
        </div>

        {/* 2-Column Grid: Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          
          {/* Left Column: Work & Virtual Internship */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-xl">
                  Work &amp; Virtual Internship
                </h3>
                <p className="text-xs text-slate-400 font-mono">Industry Experience</p>
              </div>
            </div>

            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <div 
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl bg-[#0b1120] border border-slate-800 shadow-xl glass-card-hover relative"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {exp.period}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-white text-lg mt-2">
                    {exp.role}
                  </h4>
                  <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                    {exp.organization}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {exp.summary}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-slate-800/80 pt-4">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-normal">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {exp.skillsLearned.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education Pathway */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-xl">
                  Academic Background
                </h3>
                <p className="text-xs text-slate-400 font-mono">Formal Education</p>
              </div>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-3xl bg-[#0b1120] border border-slate-800 shadow-xl glass-card-hover"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      {edu.grade}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-white text-base sm:text-lg mt-2">
                    {edu.degree}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.institution}, {edu.location}</span>
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-800/80">
                    <span className="text-[11px] font-mono text-emerald-400 font-medium">
                      Status: {edu.status}
                    </span>
                    {edu.highlights && (
                      <ul className="mt-2 space-y-1">
                        {edu.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="text-xs text-slate-400 flex items-start gap-2">
                            <span className="text-emerald-400">•</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Global Certifications Grid */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-xl">
                Global Professional Certifications
              </h3>
              <p className="text-xs text-slate-400 font-mono">1-Click Verifiable Credentials</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-[#0b1120] border border-slate-800 shadow-xl flex flex-col justify-between glass-card-hover group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                      {cert.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">{cert.date}</span>
                  </div>

                  <h4 className="font-display font-bold text-white text-base group-hover:text-amber-400 transition-colors leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-mono text-emerald-400 mt-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                    {cert.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80">
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2 px-3 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 flex items-center justify-center gap-1.5 transition-all group-hover:border-amber-500/40"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  ) : (
                    <div className="w-full py-2 px-3 rounded-xl text-xs font-mono text-slate-400 bg-slate-900/60 border border-slate-800 text-center flex items-center justify-center gap-1">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>AICTE Verified</span>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-[#0b1322] to-slate-900 border border-emerald-500/30 shadow-2xl relative overflow-hidden">
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold mb-3">
              <Trophy className="w-4 h-4" />
              <span>KEY ENGINEERING HIGHLIGHTS</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-6">
              Track Record of Delivering Reliable Software
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((ach, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold font-mono mb-2">
                    0{idx + 1}
                  </div>
                  <h4 className="font-display font-bold text-white text-sm mb-1">
                    {ach.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {ach.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
