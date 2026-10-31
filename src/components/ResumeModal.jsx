import React, { useState } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, CheckCircle2, ShieldCheck, Github, FileText, Check } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function ResumeModal({ isOpen, onClose }) {
  const [isPrinting, setIsPrinting] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const { personal, skills, experience, projects, education, certifications, achievements } = resumeData;

  // Generate clean, professional printable HTML matching Faiz's 2-page resume
  const generatePrintableHtml = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Faiz_Khan_Resume</title>
  <style>
    @page {
      size: A4;
      margin: 12mm 15mm;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      color: #111827;
      background: #ffffff;
      line-height: 1.4;
      font-size: 10pt;
    }
    .header {
      text-align: center;
      border-bottom: 1.5px solid #1f2937;
      padding-bottom: 6px;
      margin-bottom: 12px;
    }
    .name {
      font-size: 21pt;
      font-weight: 800;
      letter-spacing: -0.5px;
      color: #000000;
    }
    .title {
      font-size: 11pt;
      font-weight: 700;
      color: #b91c1c;
      margin-top: 2px;
    }
    .contact-line {
      font-size: 9pt;
      color: #4b5563;
      margin-top: 4px;
      font-family: monospace;
    }
    .contact-line a {
      color: #b91c1c;
      text-decoration: none;
      font-weight: 600;
    }
    .section {
      margin-bottom: 11px;
    }
    .section-title {
      font-size: 10pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #000000;
      border-bottom: 1px solid #d1d5db;
      padding-bottom: 2px;
      margin-bottom: 5px;
    }
    p, li {
      font-size: 9pt;
      color: #1f2937;
      line-height: 1.35;
    }
    ul {
      padding-left: 16px;
    }
    li {
      margin-bottom: 2px;
    }
    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 1px;
    }
    .item-title {
      font-size: 9.5pt;
      font-weight: 700;
      color: #000000;
    }
    .item-date {
      font-size: 8.5pt;
      font-weight: 600;
      color: #4b5563;
      font-family: monospace;
    }
    .item-tech {
      font-size: 8.5pt;
      color: #6b7280;
      font-family: monospace;
      margin-bottom: 2px;
    }
    .skill-category {
      font-size: 8.8pt;
      margin-bottom: 2.5px;
      line-height: 1.35;
    }
    .skill-category strong {
      color: #000000;
    }
    .page-break {
      page-break-before: always;
    }
    @media print {
      body {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
    }
  </style>
</head>
<body>
  
  <!-- Header -->
  <div class="header">
    <div class="name">${personal.name}</div>
    <div class="title">${personal.title}</div>
    <div class="contact-line">
      ${personal.location} &nbsp;|&nbsp; 
      ${personal.phone} &nbsp;|&nbsp; 
      ${personal.email} &nbsp;|&nbsp; 
      <a href="${personal.github}">GitHub: @Faiz-Khan01</a>
    </div>
  </div>

  <!-- Professional Summary -->
  <div class="section">
    <div class="section-title">Professional Summary</div>
    <p>${personal.bio}</p>
  </div>

  <!-- Technical Skills -->
  <div class="section">
    <div class="section-title">Technical Skills</div>
    <div class="skill-category"><strong>Programming Languages:</strong> Java, SQL, JavaScript, HTML5, CSS3</div>
    <div class="skill-category"><strong>Backend Technologies:</strong> Spring Boot, Spring MVC, Spring Security, Hibernate / JPA, RESTful APIs, Microservices Architecture, JWT Authentication, OAuth 2.0</div>
    <div class="skill-category"><strong>Frontend Technologies:</strong> React.js, Tailwind CSS, Bootstrap, Axios</div>
    <div class="skill-category"><strong>Databases:</strong> MySQL</div>
    <div class="skill-category"><strong>Cloud & DevOps Tools:</strong> Docker, Git, GitHub, Maven, Postman</div>
    <div class="skill-category"><strong>Developer Tools:</strong> IntelliJ IDEA, Eclipse, VS Code</div>
    <div class="skill-category"><strong>Core Concepts:</strong> Object-Oriented Programming (OOP), Data Structures & Algorithms (DSA), System Design Fundamentals, MVC Architecture</div>
    <div class="skill-category"><strong>Soft Skills:</strong> Problem Solving, Team Collaboration, Time Management, Adaptability, Attention to Detail</div>
  </div>

  <!-- Work & Virtual Internship -->
  <div class="section">
    <div class="section-title">Work & Virtual Internship Experience</div>
    ${experience.map(exp => `
      <div style="margin-bottom: 6px;">
        <div class="item-header">
          <span class="item-title">• ${exp.role} : ${exp.organization}</span>
          <span class="item-date">${exp.period}</span>
        </div>
        <ul>
          ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    `).join('')}
  </div>

  <!-- Projects -->
  <div class="section">
    <div class="section-title">Projects</div>
    ${projects.map(proj => `
      <div style="margin-bottom: 7px;">
        <div class="item-header">
          <span class="item-title">• ${proj.title}</span>
          ${proj.liveStorefront ? `<span class="item-date" style="color: #b91c1c;">[Live Deployed on Vercel]</span>` : ''}
        </div>
        <div class="item-tech"><strong>Tech Stack:</strong> ${proj.techStack.join(', ')}</div>
        <ul>
          ${proj.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    `).join('')}
  </div>

  <!-- Education -->
  <div class="section">
    <div class="section-title">Education</div>
    ${education.map(edu => `
      <div style="margin-bottom: 5px;">
        <div class="item-header">
          <span class="item-title">${edu.degree}</span>
          <span class="item-date">${edu.period}</span>
        </div>
        <div class="item-header">
          <span style="font-size: 8.5pt; color: #4b5563;">${edu.institution}, ${edu.location}</span>
          <span style="font-size: 8.5pt; font-weight: 700; color: #b91c1c;">${edu.grade}</span>
        </div>
      </div>
    `).join('')}
  </div>

  <!-- Certifications -->
  <div class="section">
    <div class="section-title">Certifications</div>
    ${certifications.map(c => `
      <div style="margin-bottom: 3px;">
        <span style="font-weight: 700;">• ${c.title}</span> — 
        <span style="color: #4b5563;">${c.issuer} (${c.date})</span>
        ${c.credentialId ? `<span style="font-size: 8.5pt; color: #6b7280; font-family: monospace;"> [ID: ${c.credentialId}]</span>` : ''}
      </div>
    `).join('')}
  </div>

  <!-- Key Achievements -->
  <div class="section">
    <div class="section-title">Achievements & Key Highlights</div>
    <ul>
      ${achievements.map(ach => `
        <li><strong>${ach.title}:</strong> ${ach.desc}</li>
      `).join('')}
    </ul>
  </div>

</body>
</html>`;
  };

  // High-reliability printing using hidden iframe (100% immune to popup blockers)
  const handlePrint = () => {
    setIsPrinting(true);
    try {
      let printFrame = document.getElementById('resume-print-iframe');
      if (printFrame) {
        document.body.removeChild(printFrame);
      }

      printFrame = document.createElement('iframe');
      printFrame.id = 'resume-print-iframe';
      printFrame.style.position = 'fixed';
      printFrame.style.right = '0';
      printFrame.style.bottom = '0';
      printFrame.style.width = '0';
      printFrame.style.height = '0';
      printFrame.style.border = '0';
      document.body.appendChild(printFrame);

      const frameDoc = printFrame.contentWindow.document;
      frameDoc.open();
      frameDoc.write(generatePrintableHtml());
      frameDoc.close();

      setTimeout(() => {
        setIsPrinting(false);
        printFrame.contentWindow.focus();
        printFrame.contentWindow.print();
      }, 300);
    } catch (e) {
      console.error('Iframe print error, falling back to window.print():', e);
      setIsPrinting(false);
      window.print();
    }
  };

  // Direct HTML / Offline Resume file download
  const handleDownloadOfflineResume = () => {
    const html = generatePrintableHtml();
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Faiz_Khan_Resume.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-md overflow-y-auto resume-modal-overlay">
      <div className="bg-[#0e0305] text-slate-200 border border-red-950 rounded-3xl max-w-4xl w-full max-h-[94vh] flex flex-col shadow-2xl overflow-hidden relative animate-fadeIn resume-modal-card">
        
        {/* Modal Top Controls Bar */}
        <div className="bg-[#120204] px-6 py-4 border-b border-red-950 flex flex-wrap items-center justify-between gap-3 no-print shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-white text-base">Curriculum Vitae</span>
            <span className="text-xs font-mono text-red-400">• Official Resume</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handlePrint}
              disabled={isPrinting}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white text-xs font-mono font-bold flex items-center gap-1.5 transition-all shadow-md shadow-red-600/30 cursor-pointer"
              title="Open Print Dialog to Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-white" />
              <span>{isPrinting ? 'Preparing...' : 'Print / Save PDF'}</span>
            </button>

            <button
              onClick={handleDownloadOfflineResume}
              className="px-3.5 py-2 rounded-xl bg-[#1a0407] hover:bg-[#25060b] text-rose-200 hover:text-white text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors border border-red-950 cursor-pointer"
              title="Download Clean Offline Resume"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Downloaded</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-red-400" />
                  <span>Download HTML</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#1a0407] hover:bg-[#25060b] text-slate-400 hover:text-white transition-colors border border-red-950 cursor-pointer"
              title="Close Resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Scrollable Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-0 print:space-y-6 resume-modal-scroll">
          
          {/* Header */}
          <div className="text-center border-b border-red-950/80 pb-6 print:border-black">
            <h1 className="text-3xl font-bold tracking-tight text-white print:text-black">
              {personal.name}
            </h1>
            <h2 className="text-sm font-semibold text-red-400 print:text-gray-800 mt-1 font-mono">
              {personal.title}
            </h2>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 print:text-gray-600 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                {personal.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-rose-400" />
                {personal.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-rose-400" />
                {personal.email}
              </span>
              <span>•</span>
              <a 
                href={personal.github} 
                target="_blank" 
                rel="noreferrer" 
                className="text-red-400 hover:underline print:text-black font-semibold flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5 text-rose-400" />
                <span>GitHub: @Faiz-Khan01</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-red-400 print:text-black mb-2 border-b border-red-950/80 pb-1">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed">
              {personal.bio}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-red-400 print:text-black mb-3 border-b border-red-950/80 pb-1">
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
                <strong className="text-white print:text-black font-semibold">Databases: </strong>
                <span>MySQL</span>
              </div>
              <div>
                <strong className="text-white print:text-black font-semibold">Cloud &amp; DevOps Tools: </strong>
                <span>Docker, Git, GitHub, Maven, Postman</span>
              </div>
              <div>
                <strong className="text-white print:text-black font-semibold">Developer Tools: </strong>
                <span>IntelliJ IDEA, Eclipse, VS Code</span>
              </div>
              <div>
                <strong className="text-white print:text-black font-semibold">Core Concepts: </strong>
                <span>Object-Oriented Programming (OOP), Data Structures &amp; Algorithms (DSA), System Design Fundamentals, MVC Architecture</span>
              </div>
              <div>
                <strong className="text-white print:text-black font-semibold">Soft Skills: </strong>
                <span>Problem Solving, Team Collaboration, Time Management, Adaptability, Attention to Detail</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-red-400 print:text-black mb-3 border-b border-red-950/80 pb-1">
              Work &amp; Virtual Internship Experience
            </h3>
            {experience.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-sm font-bold text-white print:text-black">
                    • {exp.role} <span className="font-normal text-slate-400 print:text-gray-700">: {exp.organization}</span>
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
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-red-400 print:text-black mb-3 border-b border-red-950/80 pb-1">
              Projects
            </h3>
            <div className="space-y-5">
              {projects.map((proj, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-wrap justify-between items-baseline gap-2">
                    <h4 className="text-sm font-bold text-white print:text-black flex items-center gap-1.5">
                      <span>• {proj.title}</span>
                    </h4>
                    {proj.liveStorefront && (
                      <a
                        href={proj.liveStorefront}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-mono text-red-400 hover:underline flex items-center gap-1 no-print"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Live Storefront ↗</span>
                      </a>
                    )}
                  </div>
                  <div className="text-[11px] font-mono text-rose-300 print:text-gray-700">
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
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-red-400 print:text-black mb-3 border-b border-red-950/80 pb-1">
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
                    <span className="font-bold text-red-400 print:text-gray-800">{edu.grade}</span>
                    <p className="text-slate-400 print:text-gray-600">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-red-400 print:text-black mb-3 border-b border-red-950/80 pb-1">
              Certifications
            </h3>
            <div className="space-y-2 text-xs">
              {certifications.map((c, idx) => (
                <div key={idx} className="flex flex-wrap justify-between items-start gap-1">
                  <div>
                    <span className="font-bold text-white print:text-black">• {c.title}</span>
                    <span className="text-slate-400 print:text-gray-700"> — {c.issuer} ({c.date})</span>
                  </div>
                  {c.link && (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-rose-300 hover:text-red-400 hover:underline text-[11px] flex items-center gap-1 no-print"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Verify Credential ↗</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-red-400 print:text-black mb-2 border-b border-red-950/80 pb-1">
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
