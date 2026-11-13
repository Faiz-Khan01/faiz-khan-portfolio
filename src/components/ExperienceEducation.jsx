import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  Check, 
  ShieldCheck,
  Sparkles,
  Trophy
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function ExperienceEducation() {
  const { experience, education, certifications, achievements } = resumeData;

  return (
    <section id="experience" className="py-24 relative bg-[#070102]/90 border-t border-red-950/40">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-mono font-semibold mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>06. Experience &amp; Education</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience, Education &amp; <span className="gradient-text-red">Certifications</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Verified academic milestones, full-stack industrial training, and global certifications from Oracle, Meta, IBM, and AICTE.
          </p>
        </div>

        {/* 2-Column Grid: Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          
          {/* Left Column: Work & Virtual Internship */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-red-950/70 border border-red-500/30 flex items-center justify-center text-red-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-xl">
                  Work &amp; Virtual Internship
                </h3>
                <p className="text-xs text-rose-300 font-mono">Industry Experience</p>
              </div>
            </div>

            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-6 sm:p-7 rounded-3xl bg-[#0e0305] border border-red-950/80 shadow-xl glass-card-hover relative"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-red-950 text-red-300 border border-red-500/30">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-rose-400" />
                      {exp.period}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-white text-lg mt-2">
                    {exp.role}
                  </h4>
                  <p className="text-sm font-semibold text-rose-400 mt-0.5">
                    {exp.organization}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {exp.summary}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-red-950/60 pt-4">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-normal">
                        <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {exp.skillsLearned.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#140306] text-rose-200 border border-red-950"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Education Pathway */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-amber-950/70 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-xl">
                  Academic Background
                </h3>
                <p className="text-xs text-amber-300 font-mono">Formal Education</p>
              </div>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-6 rounded-3xl bg-[#0e0305] border border-red-950/80 shadow-xl glass-card-hover"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-950 text-amber-300 border border-amber-500/30">
                      {edu.grade}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-white text-base sm:text-lg mt-2">
                    {edu.degree}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span>{edu.institution}, {edu.location}</span>
                  </p>

                  <div className="mt-3 pt-3 border-t border-red-950/60">
                    <span className="text-[11px] font-mono text-red-400 font-medium">
                      Status: {edu.status}
                    </span>
                    {edu.highlights && (
                      <ul className="mt-2 space-y-1">
                        {edu.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="text-xs text-slate-400 flex items-start gap-2">
                            <span className="text-red-400">•</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Global Certifications Grid */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-rose-950/70 border border-rose-500/30 flex items-center justify-center text-rose-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-xl">
                Global Professional Certifications
              </h3>
              <p className="text-xs text-rose-300 font-mono">1-Click Verifiable Credentials</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 rounded-3xl bg-[#0e0305] border border-red-950/80 shadow-xl flex flex-col justify-between glass-card-hover group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-950 text-amber-300 border border-amber-500/30">
                      {cert.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">{cert.date}</span>
                  </div>

                  <h4 className="font-display font-bold text-white text-base group-hover:text-red-400 transition-colors leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-rose-300 font-mono mt-1 font-semibold">
                    {cert.issuer}
                  </p>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {cert.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-red-950/60 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500">
                    {cert.credentialId ? `ID: ${cert.credentialId}` : 'AICTE Verified'}
                  </span>
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-red-400 hover:text-red-300 transition-colors"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Certified</span>
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Academic Achievements & Key Milestones */}
        <div data-aos="fade-up" className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#140306] to-[#0a0204] border border-red-950/80 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-xl">
                Key Engineering Milestones
              </h3>
              <p className="text-xs text-amber-300 font-mono">Recognized Engineering Excellence</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((ach, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-[#080103]/80 border border-red-950/80 hover:border-amber-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-950/80 text-amber-300 border border-amber-500/30">
                      Milestone 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-white text-sm">
                    {ach.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {ach.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}