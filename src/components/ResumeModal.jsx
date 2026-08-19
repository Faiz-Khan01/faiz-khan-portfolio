import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, skills, experience, projects, education, certifications, achievements } = resumeData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#0b1120] text-slate-200 border border-slate-700 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden relative animate-fadeIn">
        
        {/* Modal Top Controls Bar */}
        <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-white text-base">Curriculum Vitae</span>
            <span className="text-xs font-mono text-emerald-400">• Official Document</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-emerald-400" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Scrollable Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-0 print:space-y-6">
          
          {/* Header */}
          <div className="text-center border-b border-slate-800 pb-6 print:border-black">
            <h1 className="text-3xl font-bold tracking-tight text-white print:text-black">
              {personal.name}
            </h1>
            <h2 className="text-sm font-semibold text-emerald-400 print:text-gray-800 mt-1 font-mono">
              {personal.title}
            </h2>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 print:text-gray-600 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {personal.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                {personal.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                {personal.email}
              </span>
              <span>•</span>
              <a 
                href={personal.github} 
                target="_blank" 
                rel="noreferrer" 
                className="text-emerald-400 hover:underline print:text-black font-semibold"
              >
                GitHub: @Faiz-Khan01
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 print:text-black mb-2 border-b border-slate-800 pb-1">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed">
              {personal.bio}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 print:text-black mb-3 border-b border-slate-800 pb-1">
              Technical Skills
            </h3>
            <div className="space-y-1.5 text-xs text-slate-300 print:text-gray-800">
              <div>
                <strong className="text-white print:text-black font-semibold">Programming Languages: </strong>
                <span>Java, SQL, JavaScript, HTML5, CSS3</span>
              </div>
              <div>
                <strong className="text-white print:text-black font-semibold">Backend Technologies: </strong>
                <span>Spring Boot, Spring MVC, Spring Security, Hibernate / JPA, RESTful APIs, Microservices Architecture, JWT Authentication, OAuth 2.0</span>
              </div>
              <div>
                <strong className="text-white print:text-black font-semibold">Frontend Technologies: </strong>
                <span>React.js, Tailwind CSS, Bootstrap, Axios</span>
              </div>
              <div>
                <strong className="text-white print:text-black font-semibold">Databases &amp; Cloud: </strong>
                <span>MySQL, Docker, Git, GitHub, Maven, Postman</span>
              </div>
              <div>
                <strong className="text-white print:text-black font-semibold">Core Concepts: </strong>
                <span>Object-Oriented Programming (OOP), Data Structures &amp; Algorithms (DSA), System Design Fundamentals, MVC Architecture</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 print:text-black mb-3 border-b border-slate-800 pb-1">
              Work &amp; Virtual Internship Experience
            </h3>
            {experience.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-sm font-bold text-white print:text-black">
                    {exp.role} <span className="font-normal text-slate-400 print:text-gray-700">| {exp.organization}</span>
                  </h4>
                  <span className="text-xs font-mono text-slate-400 print:text-gray-600 font-medium">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-1 text-xs text-slate-300 print:text-gray-800 list-disc pl-4">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 print:text-black mb-3 border-b border-slate-800 pb-1">
              Projects
            </h3>
            <div className="space-y-4">
              {projects.map((proj, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-wrap justify-between items-baseline">
                    <h4 className="text-sm font-bold text-white print:text-black">
                      {proj.title}
                    </h4>
                  </div>
                  <div className="text-[11px] font-mono text-cyan-400 print:text-gray-700">
                    <strong>Tech Stack: </strong> {proj.techStack.join(', ')}
                  </div>
                  <ul className="space-y-1 text-xs text-slate-300 print:text-gray-800 list-disc pl-4">
                    {proj.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 print:text-black mb-3 border-b border-slate-800 pb-1">
              Education
            </h3>
            <div className="space-y-3">
              {education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start text-xs">
                  <div>
                    <h4 className="font-bold text-white print:text-black">
                      {edu.degree}
                    </h4>
                    <p className="text-slate-400 print:text-gray-700">{edu.institution}, {edu.location}</p>
                  </div>
                  <div className="text-right font-mono">
                    <span className="font-bold text-emerald-400 print:text-gray-800">{edu.grade}</span>
                    <p className="text-slate-400 print:text-gray-600">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 print:text-black mb-3 border-b border-slate-800 pb-1">
              Certifications &amp; Credentials
            </h3>
            <div className="space-y-2 text-xs">
              {certifications.map((c, idx) => (
                <div key={idx} className="flex justify-between items-start">
                  <div>
                    <span className="font-bold text-white print:text-black">{c.title}</span>
                    <span className="text-slate-400 print:text-gray-700"> — {c.issuer} ({c.date})</span>
                  </div>
                  {c.credentialId && (
                    <span className="font-mono text-cyan-400 text-[11px]">
                      ID: {c.credentialId}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 print:text-black mb-2 border-b border-slate-800 pb-1">
              Achievements &amp; Key Highlights
            </h3>
            <ul className="space-y-1 text-xs text-slate-300 print:text-gray-800 list-disc pl-4">
              {achievements.map((ach, idx) => (
                <li key={idx}>
                  <strong className="text-white print:text-black">{ach.title}: </strong>
                  <span>{ach.desc}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
