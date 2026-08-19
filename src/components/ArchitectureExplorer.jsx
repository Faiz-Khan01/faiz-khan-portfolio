import React, { useState } from 'react';
import { 
  Layers, 
  Server, 
  ShieldCheck, 
  Database, 
  Radio, 
  Network, 
  ArrowRight, 
  CheckCircle, 
  Lock, 
  Activity, 
  Zap,
  Info,
  ChevronRight
} from 'lucide-react';

const architectureNodes = [
  {
    id: 'gateway',
    name: 'Spring Cloud Gateway',
    type: 'Reverse Proxy & Router',
    port: '8080',
    color: 'from-emerald-500 to-teal-500',
    borderColor: 'border-emerald-500',
    bgGlow: 'shadow-emerald-500/30',
    tag: 'Entrypoint',
    desc: 'Single unified entrypoint for all client traffic. Performs JWT token inspection, global rate limiting, and route forwarding to downstream microservices.',
    features: [
      'Token validation & claim extraction filter',
      'Path-based routing to Eureka discovered services',
      'Global CORS configuration & SSL termination',
      'Circuit breaker with fallback fallbacks'
    ],
    tech: ['Spring Cloud Gateway', 'Spring WebFlux', 'Netty', 'JWT']
  },
  {
    id: 'eureka',
    name: 'Netflix Eureka Registry',
    type: 'Service Discovery',
    port: '8761',
    color: 'from-amber-500 to-orange-500',
    borderColor: 'border-amber-500',
    bgGlow: 'shadow-amber-500/30',
    tag: 'Discovery',
    desc: 'Dynamic registry maintaining live instances and health heartbeats of all active microservices in the cluster, enabling zero-downtime horizontal scaling.',
    features: [
      'Heartbeat monitoring (30s intervals)',
      'Dynamic client-side load balancing',
      'Fault tolerance & self-preservation mode',
      'Automatic instance de-registration on failure'
    ],
    tech: ['Netflix Eureka Server', 'Spring Cloud Netflix', 'Actuator']
  },
  {
    id: 'auth',
    name: 'Auth & Security Service',
    type: 'Security Microservice',
    port: '8081',
    color: 'from-purple-500 to-indigo-500',
    borderColor: 'border-purple-500',
    bgGlow: 'shadow-purple-500/30',
    tag: 'Auth & RBAC',
    desc: 'Issues cryptographically signed HMAC-SHA256 JWT tokens. Manages user roles (Admin, Doctor, Patient) and credentials with BCrypt hashing.',
    features: [
      'BCrypt password encryption (strength 12)',
      'Stateless JWT issuance and signature validation',
      'Role-Based Access Control (RBAC) rules',
      'Google OAuth 2.0 Single Sign-On flow'
    ],
    tech: ['Spring Security 6', 'JJWT', 'OAuth2 Client', 'MySQL']
  },
  {
    id: 'patient',
    name: 'Patient Service',
    type: 'Domain Microservice',
    port: '8082',
    color: 'from-cyan-500 to-blue-500',
    borderColor: 'border-cyan-500',
    bgGlow: 'shadow-cyan-500/30',
    tag: 'Core Domain',
    desc: 'Maintains patient medical records, history, emergency contacts, and personal demographics with strict data privacy.',
    features: [
      'CRUD APIs for patient profiles',
      'Encrypted health history storage',
      'Pagination & filtering for large patient lists',
      'OpenFeign integration with Doctor & Billing'
    ],
    tech: ['Spring Boot', 'Spring Data JPA', 'Hibernate', 'MySQL']
  },
  {
    id: 'doctor',
    name: 'Doctor & Schedule Service',
    type: 'Domain Microservice',
    port: '8083',
    color: 'from-teal-500 to-emerald-500',
    borderColor: 'border-teal-500',
    bgGlow: 'shadow-teal-500/30',
    tag: 'Scheduling',
    desc: 'Handles doctor specializations, shift schedules, vacation leaves, and real-time consultation slot availability.',
    features: [
      'Real-time slot reservation locking',
      'Doctor department & specialization search',
      'Dynamic schedule generation',
      'Inter-service Feign API for appointment booking'
    ],
    tech: ['Spring Boot', 'OpenFeign Client', 'MySQL', 'JPA']
  },
  {
    id: 'appointment',
    name: 'Appointment Service',
    type: 'Workflow Microservice',
    port: '8084',
    color: 'from-blue-500 to-indigo-500',
    borderColor: 'border-blue-500',
    bgGlow: 'shadow-blue-500/30',
    tag: 'Workflows',
    desc: 'Coordinates patient-doctor bookings, consultation status transitions (Scheduled -> Completed -> Cancelled), and reminders.',
    features: [
      'Declarative RPC calls to Doctor & Patient via OpenFeign',
      'Slot conflict prevention logic',
      'Automated email/SMS notification triggers',
      'Status change audit trail'
    ],
    tech: ['Spring Boot', 'OpenFeign', 'Spring Events', 'MySQL']
  },
  {
    id: 'billing',
    name: 'Billing & Prescription Service',
    type: 'Finance Microservice',
    port: '8085',
    color: 'from-rose-500 to-pink-500',
    borderColor: 'border-rose-500',
    bgGlow: 'shadow-rose-500/30',
    tag: 'Payments',
    desc: 'Generates medical prescriptions, calculates invoices, and handles payment gateway checkout with automated receipts.',
    features: [
      'Razorpay payment gateway integration',
      'Automated PDF invoice generation',
      'Medicine catalog and dosage prescription',
      'Transaction integrity verification'
    ],
    tech: ['Spring Boot', 'Razorpay SDK', 'iText PDF', 'MySQL']
  }
];

export default function ArchitectureExplorer() {
  const [selectedNode, setSelectedNode] = useState(architectureNodes[0]);

  return (
    <section id="architecture" className="py-24 relative bg-[#090d16]/80 border-t border-b border-slate-800/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold mb-4">
            <Network className="w-3.5 h-3.5" />
            <span>Interactive System Design Visualizer</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Microservices Architecture <span className="gradient-text-emerald">Deep Dive</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Click on any architectural node in Faiz's Hospital Management ecosystem to inspect its port allocation, communication protocols, database isolation, and security layer.
          </p>
        </div>

        {/* Architecture Interactive Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Architecture Diagram Map */}
          <div className="lg:col-span-7 bg-[#0b1120] p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
            
            {/* Background Cyber Grid */}
            <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col gap-6">
              
              {/* Level 1: Client Layer */}
              <div className="flex flex-col items-center">
                <div className="w-full max-w-md p-3.5 rounded-xl bg-slate-900/90 border border-slate-700 text-center shadow-lg">
                  <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-300 font-semibold">
                    <Activity className="w-4 h-4 text-cyan-400" />
                    <span>Client Apps (React.js Web App / Mobile / Postman API Clients)</span>
                  </div>
                </div>
                
                {/* Arrow down */}
                <div className="h-6 w-0.5 bg-gradient-to-b from-slate-600 to-emerald-500 my-1 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></div>
                </div>
              </div>

              {/* Level 2: Spring Cloud Gateway & Eureka Server */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Gateway Node */}
                <button
                  onClick={() => setSelectedNode(architectureNodes[0])}
                  className={`p-4 rounded-2xl text-left border transition-all relative group cursor-pointer ${
                    selectedNode.id === 'gateway'
                      ? 'bg-emerald-950/40 border-emerald-400 shadow-lg shadow-emerald-500/20'
                      : 'bg-slate-900/80 border-slate-800 hover:border-emerald-500/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      Port 8080
                    </span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h4 className="mt-2 font-display font-bold text-white text-sm">Spring Cloud Gateway</h4>
                  <p className="text-[11px] text-slate-400 mt-1">JWT verification, rate limiting &amp; dynamic routing</p>
                </button>

                {/* Eureka Node */}
                <button
                  onClick={() => setSelectedNode(architectureNodes[1])}
                  className={`p-4 rounded-2xl text-left border transition-all relative group cursor-pointer ${
                    selectedNode.id === 'eureka'
                      ? 'bg-amber-950/40 border-amber-400 shadow-lg shadow-amber-500/20'
                      : 'bg-slate-900/80 border-slate-800 hover:border-amber-500/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      Port 8761
                    </span>
                    <Radio className="w-4 h-4 text-amber-400" />
                  </div>
                  <h4 className="mt-2 font-display font-bold text-white text-sm">Netflix Eureka Registry</h4>
                  <p className="text-[11px] text-slate-400 mt-1">Heartbeat service discovery &amp; load balancing</p>
                </button>

              </div>

              {/* Protocol separator */}
              <div className="flex items-center justify-center my-1">
                <span className="px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-[10px] font-mono text-cyan-400 flex items-center gap-1.5 shadow-sm">
                  <Zap className="w-3 h-3 text-cyan-400" />
                  <span>OpenFeign Declarative RPC &amp; JWT Headers</span>
                </span>
              </div>

              {/* Level 3: Microservices Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {architectureNodes.slice(2).map((node) => {
                  const isSelected = selectedNode.id === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNode(node)}
                      className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                        isSelected
                          ? `bg-slate-800/90 ${node.borderColor} shadow-md`
                          : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/40 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-slate-400 font-semibold">
                          :{node.port}
                        </span>
                        <span className="text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                          {node.tag}
                        </span>
                      </div>
                      <h5 className="mt-1.5 font-semibold text-slate-200 text-xs truncate">
                        {node.name}
                      </h5>
                    </button>
                  );
                })}
              </div>

              {/* Level 4: Database Layer */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono px-2">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-emerald-400" />
                  <span>Database Isolation: Bounded Contexts (MySQL Instances)</span>
                </div>
                <span className="text-emerald-400 font-semibold">ACID Ready</span>
              </div>

            </div>
          </div>

          {/* Right: Selected Node Detail Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0b1120] border border-slate-800 shadow-2xl relative">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 p-0.5">
                    <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                      <Server className="w-5 h-5 text-emerald-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg leading-tight">
                      {selectedNode.name}
                    </h3>
                    <p className="text-xs text-emerald-400 font-mono">
                      {selectedNode.type}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-slate-800 text-slate-200 border border-slate-700">
                    Port: {selectedNode.port}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-5 text-sm text-slate-300 leading-relaxed">
                {selectedNode.desc}
              </p>

              {/* Key Architecture Features */}
              <div className="mt-6">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Info className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Key Architectural Features</span>
                </h4>
                <ul className="space-y-2">
                  {selectedNode.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips */}
              <div className="mt-6 pt-5 border-t border-slate-800/80">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Underlying Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedNode.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-emerald-300 border border-emerald-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Call to Sandbox */}
              <div className="mt-6 pt-4 border-t border-slate-800/60">
                <a
                  href="#sandbox"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center gap-2 transition-all group"
                >
                  <span>Test this in Live API Sandbox</span>
                  <ChevronRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
