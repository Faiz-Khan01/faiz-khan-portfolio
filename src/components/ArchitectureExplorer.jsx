import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
  ChevronRight,
  Play,
  RotateCcw,
  Terminal,
  Code2,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  HeartPulse,
  Pill,
  FileText,
  CreditCard,
  Bell
} from 'lucide-react';

const architectureNodes = [
  {
    id: 'gateway',
    name: 'Spring Cloud API Gateway',
    type: 'Edge Router & Non-blocking Filter',
    port: '8080',
    color: 'from-red-600 to-rose-600',
    borderColor: 'border-red-500',
    bgGlow: 'shadow-red-500/30',
    tag: 'Edge Ingress',
    category: 'Edge & Infrastructure',
    desc: 'Single unified edge ingress on Netty non-blocking I/O. Enforces centralized JWT validation, global CORS, path-based routing, and resilient rate limiting across all 16 domain microservices.',
    features: [
      'Stateless bearer JWT inspection filter',
      'Dynamic routing via Eureka service discovery',
      'Global CORS configuration & Netty non-blocking I/O',
      'Resilience4j circuit breakers and fail-safe fallbacks'
    ],
    tech: ['Spring Cloud Gateway 2024', 'Spring WebFlux', 'Netty', 'JJWT 0.12.6'],
    sampleCode: `@Bean
public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
    return builder.routes()
        .route("patient-service", r -> r.path("/api/v1/patients/**")
            .filters(f -> f.filter(jwtAuthFilter))
            .uri("lb://PATIENT-SERVICE"))
        .route("appointment-service", r -> r.path("/api/v1/appointments/**")
            .filters(f -> f.filter(jwtAuthFilter))
            .uri("lb://APPOINTMENT-SERVICE"))
        .route("billing-service", r -> r.path("/api/v1/billing/**")
            .filters(f -> f.filter(jwtAuthFilter))
            .uri("lb://BILLING-SERVICE"))
        .build();
}`
  },
  {
    id: 'eureka',
    name: 'Eureka Naming Server',
    type: 'Service Discovery Registry',
    port: '8761',
    color: 'from-amber-500 to-red-500',
    borderColor: 'border-amber-500',
    bgGlow: 'shadow-amber-500/30',
    tag: 'Discovery',
    category: 'Edge & Infrastructure',
    desc: 'Centralized discovery cluster tracking 18 independent services with 30s heartbeat health checks, dynamic client-side load balancing, and self-preservation mechanisms.',
    features: [
      'Heartbeat monitoring (30s intervals) & /actuator/health',
      'Client-side load balancing via Spring Cloud LoadBalancer',
      'Self-preservation mode during transient network partitions',
      'Zero-downtime microservice registration & failover'
    ],
    tech: ['Netflix Eureka Server', 'Spring Cloud Netflix', 'Spring Boot Actuator'],
    sampleCode: `@SpringBootApplication
@EnableEurekaServer
public class NamingServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(NamingServerApplication.class, args);
    }
}
// Registered: GATEWAY, AUTH, USER, ROLE, DEPT, PATIENT, DOCTOR, APPT, ADMISSION, RX, EHR, MED, LAB, BILL, PAY, NOTIF`
  },
  {
    id: 'auth',
    name: 'Auth & User Identity Service',
    type: 'Identity & RBAC Provider',
    port: '8086 / 8087',
    color: 'from-rose-600 to-red-600',
    borderColor: 'border-rose-500',
    bgGlow: 'shadow-rose-500/30',
    tag: 'Identity & RBAC',
    category: 'Identity',
    desc: 'Issues cryptographically signed HMAC-SHA256/512 JWT tokens. Enforces fine-grained 7-role RBAC matrices (Admin, Doctor, Receptionist, Nurse, Lab Tech, Pharmacist, Patient) with BCrypt salt hashing.',
    features: [
      'BCrypt credential encryption & stateless session management',
      'Signed JWT issuance with role claims & token refresh',
      '7-role granular RBAC security matrix',
      'Redis 7 caching for sub-millisecond user profile lookups'
    ],
    tech: ['Spring Security 6', 'JJWT 0.12.6', 'Redis 7', 'MySQL 8.0'],
    sampleCode: `public String generateToken(UserDetails userDetails, List<String> roles) {
    return Jwts.builder()
        .setSubject(userDetails.getUsername())
        .claim("roles", roles)
        .setIssuedAt(new Date())
        .setExpiration(new Date(System.currentTimeMillis() + 86400000))
        .signWith(getSigningKey(), SignatureAlgorithm.HS256)
        .compact();
}`
  },
  {
    id: 'patient',
    name: 'Patient & Clinical Ops Service',
    type: 'Clinical Domain Microservice',
    port: '8081',
    color: 'from-red-500 to-amber-500',
    borderColor: 'border-red-500',
    bgGlow: 'shadow-red-500/30',
    tag: 'Clinical Ops',
    category: 'Clinical',
    desc: 'Maintains comprehensive patient intake demographics, emergency contacts, blood group, medical history, and longitudinal EHR records with strict HIPAA compliance.',
    features: [
      'Patient demographic registry & intake forms',
      'Relational integration with EHR, Doctor & Admission modules',
      'Redis cached lookups for emergency triage',
      'Encrypted health history and blood group classification'
    ],
    tech: ['Spring Boot 3.4', 'Spring Data JPA', 'Redis 7', 'MySQL 8.0'],
    sampleCode: `@Entity
@Table(name = "patients", indexes = {@Index(name = "idx_patient_email", columnList = "email")})
public class Patient {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullName;
    private String bloodGroup;
    private String emergencyContact;
}`
  },
  {
    id: 'doctor',
    name: 'Doctor & Appointment Service',
    type: 'Scheduling & Consultation Microservice',
    port: '8082 / 8083',
    color: 'from-rose-500 to-red-500',
    borderColor: 'border-rose-500',
    bgGlow: 'shadow-rose-500/30',
    tag: 'Consultation',
    category: 'Clinical',
    desc: 'Manages physician specialty directories, weekly shift calendars, dynamic slot reservation locking, and multi-status appointment workflows (SCHEDULED, COMPLETED, CANCELLED).',
    features: [
      'Real-time slot reservation concurrency locking',
      'Clinical department & physician specialization bindings',
      'Declarative OpenFeign booking event triggers to notification-service',
      'Non-blocking try/catch resilience preventing transactional rollbacks'
    ],
    tech: ['Spring Boot 3.4', 'Spring Cloud OpenFeign', 'MySQL 8.0', 'Redis 7'],
    sampleCode: `@FeignClient(name = "NOTIFICATION-SERVICE")
public interface NotificationClient {
    @PostMapping("/api/v1/notifications/dispatch")
    void sendBookingConfirmation(@RequestBody NotificationDTO dto);
}`
  },
  {
    id: 'admission',
    name: 'Admission & Bed Matrix Service',
    type: 'Inpatient Care Microservice',
    port: '8096',
    color: 'from-red-600 to-amber-600',
    borderColor: 'border-red-500',
    bgGlow: 'shadow-red-500/30',
    tag: 'Inpatient Beds',
    category: 'Inpatient',
    desc: 'Orchestrates live inpatient admissions, ward allocations (General, ICU, NICU, Maternity, Isolation), real-time bed state tracking (AVAILABLE, OCCUPIED, RESERVED), and discharge summaries.',
    features: [
      'Visual real-time bed occupancy grid & ward distribution',
      'Admission intake and automated discharge summary logs',
      'Direct inter-service line item emission to billing-service',
      'Emergency room priority triage workflow'
    ],
    tech: ['Spring Boot 3.4', 'Spring Data JPA', 'MySQL 8.0'],
    sampleCode: `@PutMapping("/beds/{bedId}/allocate")
public ResponseEntity<BedAllocationDTO> allocateBed(
        @PathVariable Long bedId, 
        @RequestParam Long patientId, 
        @RequestParam WardType ward) {
    return ResponseEntity.ok(admissionService.allocate(bedId, patientId, ward));
}`
  },
  {
    id: 'pharmacy',
    name: 'Pharmacy & Lab Diagnostics Service',
    type: 'Inventory & Diagnostics Microservice',
    port: '8091 / 8092 / 8093',
    color: 'from-amber-600 to-rose-600',
    borderColor: 'border-amber-500',
    bgGlow: 'shadow-amber-500/30',
    tag: 'Diagnostics',
    category: 'Diagnostics',
    desc: 'Full diagnostic lab order management and clinical pharmacy inventory. Tracks drug catalog, batch numbers, 90-day expiry warnings, lab test catalog, and specimen findings.',
    features: [
      'Stock alert tiers: Critical (Red), Low (Yellow), In Stock (Green)',
      'Automated 90-day batch expiry monitoring',
      'Lab test orders and structured specimen result logs',
      'OpenFeign event dispatch upon lab report release'
    ],
    tech: ['Spring Boot 3.4', 'OpenFeign', 'MySQL 8.0 (Schema: 25 Tables)'],
    sampleCode: `@PostMapping("/reports/{orderId}/release")
public ResponseEntity<LabReportDTO> releaseLabReport(@PathVariable Long orderId, @RequestBody ResultDTO result) {
    LabReportDTO report = labReportService.release(orderId, result);
    notificationClient.sendReportNotification(report.getPatientId(), report.getId());
    return ResponseEntity.ok(report);
}`
  },
  {
    id: 'billing',
    name: 'Billing & Razorpay Payment Service',
    type: 'Fintech & Invoicing Microservice',
    port: '8084 / 8094',
    color: 'from-red-600 to-rose-700',
    borderColor: 'border-red-500',
    bgGlow: 'shadow-red-500/30',
    tag: 'Fintech & Invoicing',
    category: 'Finance',
    desc: 'Itemized medical invoice consolidation (consultation, pharmacy, lab, bed fees), Razorpay payment gateway integration with SHA-256 HMAC cryptographic signature validation and receipts.',
    features: [
      'Consolidated ledger across consultation, pharmacy, lab, and ward room charges',
      'Razorpay payment order creation & HMAC-SHA256 signature verification',
      'Multi-channel payment recording (UPI, Cards, Netbanking, Cash, Insurance)',
      'OpenFeign payment confirmation dispatch & automated receipt generation'
    ],
    tech: ['Spring Boot 3.4', 'Razorpay Java SDK', 'OpenFeign', 'MySQL 8.0'],
    sampleCode: `public PaymentVerificationResponse verifyRazorpay(PaymentDTO dto) {
    boolean isValid = SignatureVerifier.verify(
        dto.getOrderId() + "|" + dto.getPaymentId(), 
        dto.getSignature(), 
        razorpaySecret
    );
    if (isValid) {
        billingService.markInvoiceAsPaid(dto.getBillId(), dto.getPaymentId());
        notificationClient.sendPaymentReceipt(dto.getUserId(), dto.getPaymentId());
    }
    return new PaymentVerificationResponse(isValid ? "VERIFIED" : "FAILED");
}`
  }
];

// Pre-defined interactive simulations
const simulationScenarios = [
  {
    id: 'appointment-flow',
    title: 'Outpatient Appointment & OpenFeign Event',
    description: 'Traces Gateway token check -> Eureka discovery -> Feign RPC doctor reserve -> MySQL commit -> Async notification trigger.',
    steps: [
      { node: 'gateway', log: 'POST /api/v1/appointments - Gateway non-blocking Netty filter validates JWT claims' },
      { node: 'eureka', log: 'Eureka Registry: Resolving virtual host APPOINTMENT-SERVICE -> 10.0.1.14:8083' },
      { node: 'doctor', log: 'Doctor Service locks Dr. Sharma 10:30 AM slot. Verifies availability in Redis cache' },
      { node: 'patient', log: 'Patient demographics validated & linked to consultation header #APT-8821' },
      { node: 'billing', log: 'Appointment confirmed! OpenFeign dispatches notification event. HTTP 201 Created' }
    ]
  },
  {
    id: 'admission-flow',
    title: 'Inpatient Admission & Ward Bed Allocation',
    description: 'Traces patient admission, live bed reservation in ICU ward, and automatic itemized billing dispatch.',
    steps: [
      { node: 'gateway', log: 'POST /api/v1/admissions - Gateway validates NURSE / ADMIN RBAC permissions' },
      { node: 'patient', log: 'Patient demographic retrieved. Medical history snapshot indexed' },
      { node: 'admission', log: 'Admission Service reserves ICU Bed #B-104 (Status: AVAILABLE -> OCCUPIED)' },
      { node: 'billing', log: 'Dispatches line item to billing-service: ICU Room Charge ₹3,500/day' },
      { node: 'auth', log: 'Immutable HIPAA audit log entry created: Actor nurse.lead, differential snapshot stored' }
    ]
  },
  {
    id: 'billing-flow',
    title: 'Invoice Settlement & Razorpay Verification',
    description: 'Traces consolidated bill generation, Razorpay order generation, HMAC verification, and PDF receipt release.',
    steps: [
      { node: 'billing', log: 'Billing Service consolidates invoice #INV-2026-94: Doctor + Lab + Pharmacy = ₹4,250' },
      { node: 'billing', log: 'Razorpay Gateway API: Generated order_Hsp9281. Patient completes UPI payment' },
      { node: 'gateway', log: 'Webhook callback received: POST /api/v1/payments/verify with HMAC signature' },
      { node: 'billing', log: 'HMAC-SHA256 signature verified against Razorpay secret. Bill marked PAID' },
      { node: 'auth', log: 'Payment confirmation dispatched via notification-service. Audit log finalized' }
    ]
  }
];

export default function ArchitectureExplorer() {
  const [selectedNode, setSelectedNode] = useState(architectureNodes[0]);
  const [activeTab, setActiveTab] = useState('specs'); // 'specs' | 'code' | 'schema'
  const [activeScenario, setActiveScenario] = useState(simulationScenarios[0]);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simLogs, setSimLogs] = useState([]);

  const archRef = useRef(null);
  const servicesGridRef = useRef(null);

  // GSAP ScrollTrigger Entrance Animation for 18 Microservices
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (servicesGridRef.current) {
        gsap.from(servicesGridRef.current.children, {
          scrollTrigger: {
            trigger: servicesGridRef.current,
            start: 'top 85%',
          },
          opacity: 0,
          y: 30,
          scale: 0.95,
          duration: 0.5,
          stagger: 0.04,
          ease: 'power3.out',
        });
      }
    }, archRef);

    return () => ctx.revert();
  }, []);

  const runSimulation = (scenario = activeScenario) => {
    setActiveScenario(scenario);
    setIsSimulating(true);
    setCurrentStepIndex(0);
    setSimLogs([`[00:00] Initiating ${scenario.title}...`]);

    scenario.steps.forEach((step, idx) => {
      setTimeout(() => {
        setCurrentStepIndex(idx);
        const nodeObj = architectureNodes.find(n => n.id === step.node);
        if (nodeObj) setSelectedNode(nodeObj);
        setSimLogs(prev => [...prev, `[+${(idx + 1) * 35}ms] [${step.node.toUpperCase()} :${nodeObj?.port}] ${step.log}`]);

        if (idx === scenario.steps.length - 1) {
          setTimeout(() => {
            setIsSimulating(false);
            setSimLogs(prev => [...prev, `[SUCCESS] Transaction committed with 0 packet drops (Total Time: ~${(idx + 1) * 35 + 20}ms)`]);
          }, 600);
        }
      }, (idx + 1) * 750);
    });
  };

  const resetSimulation = () => {
    setIsSimulating(false);
    setCurrentStepIndex(-1);
    setSimLogs([]);
  };

  return (
    <section ref={archRef} id="architecture" className="py-24 relative bg-[#070103]/90 border-t border-b border-red-950/40">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-rose-900/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-mono font-semibold mb-4">
            <Network className="w-3.5 h-3.5" />
            <span>HospitalSync Pro Suite v2.5 Architecture</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            18 Spring Boot Services <span className="gradient-text-red">Microservices Architecture</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Enterprise-grade distributed hospital operating platform orchestrating 18 Spring Boot services, Spring Cloud Gateway (:8080), Eureka Registry (:8761), resilient OpenFeign inter-service events, Redis 7 caching, 25 normalized MySQL tables, and HIPAA immutable audit logging.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://github.com/Faiz-Khan01/hospital-management-microservices-backend"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-[#160407] hover:bg-[#20050a] border border-red-500/30 text-xs font-mono font-semibold text-rose-300 hover:text-white transition-colors flex items-center gap-2"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Explore Backend Repository on GitHub ➔</span>
            </a>
            <span className="px-3 py-1.5 rounded-xl bg-[#120204] border border-red-950 text-xs font-mono text-zinc-400">
              25 Normalized MySQL Tables &bull; Redis 7 Cache
            </span>
          </div>
        </div>

        {/* Live Simulation Controls Ribbon */}
        <div className="mb-10 p-5 rounded-3xl bg-[#0e0305] border border-red-950/80 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-red-950/80 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-sm">
                Interactive Inter-Service Flow Simulator
              </h4>
              <p className="text-xs text-slate-400">
                Trigger real-time simulated packet flows across Gateway, Eureka, OpenFeign, and Redis/MySQL
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {simulationScenarios.map((scen) => (
              <button
                key={scen.id}
                onClick={() => runSimulation(scen)}
                disabled={isSimulating}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeScenario.id === scen.id && isSimulating
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 animate-pulse'
                    : 'bg-[#160407] hover:bg-[#20050a] text-slate-300 border border-red-950/80 hover:text-white'
                }`}
              >
                <Play className="w-3 h-3 text-red-400" />
                <span>{scen.title.split(' ')[0]} Flow</span>
              </button>
            ))}

            {isSimulating && (
              <button
                onClick={resetSimulation}
                className="p-2 rounded-xl bg-[#160407] hover:bg-[#20050a] text-slate-400 hover:text-white border border-red-950 cursor-pointer"
                title="Reset simulation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Interactive Architecture Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Architecture Diagram Map */}
          <div className="lg:col-span-7 bg-[#0e0305] p-6 sm:p-8 rounded-3xl border border-red-950/80 shadow-2xl relative overflow-hidden">
            
            {/* Background Cyber Grid */}
            <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col gap-5">
              
              {/* Level 1: Client Application Layer */}
              <div className="flex flex-col items-center">
                <div className="w-full max-w-md p-3.5 rounded-2xl bg-[#160407]/90 border border-red-950 text-center shadow-lg flex items-center justify-between px-5">
                  <div className="flex items-center gap-2.5 text-xs font-mono text-slate-300 font-semibold">
                    <Activity className="w-4 h-4 text-rose-400" />
                    <span>Executive Client Layer (React 19 / Bootstrap 5.3 / Aura Mesh)</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-red-400 animate-ping"></span>
                </div>
                
                {/* Flow Wire down to Gateway */}
                <div className="h-5 w-0.5 bg-gradient-to-b from-rose-500 to-red-500 my-1 relative">
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-400 ${isSimulating ? 'animate-ping' : ''}`}></div>
                </div>
              </div>

              {/* Level 2: Spring Cloud Gateway & Eureka Server */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                
                {/* Gateway Node */}
                <button
                  onClick={() => setSelectedNode(architectureNodes[0])}
                  className={`p-4 rounded-2xl text-left border transition-all relative group cursor-pointer ${
                    selectedNode.id === 'gateway'
                      ? 'bg-red-950/50 border-red-500 shadow-lg shadow-red-600/20'
                      : 'bg-[#130306]/90 border-red-950 hover:border-red-500/50'
                  } ${isSimulating && activeScenario.steps[currentStepIndex]?.node === 'gateway' ? 'ring-2 ring-red-400 ring-offset-2 ring-offset-black' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-red-950 text-red-300 border border-red-500/40">
                      Port 8080
                    </span>
                    <ShieldCheck className="w-4 h-4 text-red-400" />
                  </div>
                  <h4 className="mt-2 font-display font-bold text-white text-sm">Spring Cloud API Gateway</h4>
                  <p className="text-[11px] text-slate-400 mt-1">Non-blocking Netty I/O, JWT filters &amp; centralized ingress</p>
                </button>

                {/* Eureka Node */}
                <button
                  onClick={() => setSelectedNode(architectureNodes[1])}
                  className={`p-4 rounded-2xl text-left border transition-all relative group cursor-pointer ${
                    selectedNode.id === 'eureka'
                      ? 'bg-amber-950/40 border-amber-400 shadow-lg shadow-amber-500/20'
                      : 'bg-[#130306]/90 border-red-950 hover:border-amber-500/50'
                  } ${isSimulating && activeScenario.steps[currentStepIndex]?.node === 'eureka' ? 'ring-2 ring-amber-400 ring-offset-2 ring-offset-black' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-950 text-amber-300 border border-amber-500/40">
                      Port 8761
                    </span>
                    <Radio className="w-4 h-4 text-amber-400" />
                  </div>
                  <h4 className="mt-2 font-display font-bold text-white text-sm">Eureka Discovery Server</h4>
                  <p className="text-[11px] text-slate-400 mt-1">Heartbeat registration (30s) &amp; client-side load balancing</p>
                </button>

              </div>

              {/* Protocol separator */}
              <div className="flex items-center justify-center my-0.5">
                <span className="px-3.5 py-1 rounded-full bg-[#130306] border border-red-950/80 text-[10px] font-mono text-rose-300 flex items-center gap-1.5 shadow-sm">
                  <Zap className="w-3 h-3 text-red-400" />
                  <span>OpenFeign Resilient RPC &bull; Non-Blocking Try/Catch &bull; JJWT Headers</span>
                </span>
              </div>

              {/* Level 3: Microservices Grid (16 Domain Services) */}
              <div ref={servicesGridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {architectureNodes.slice(2).map((node) => {
                  const isSelected = selectedNode.id === node.id;
                  const isStepActive = isSimulating && activeScenario.steps[currentStepIndex]?.node === node.id;

                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNode(node)}
                      className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                        isSelected
                          ? `bg-[#1c0509] ${node.borderColor} shadow-md`
                          : 'bg-[#130306]/80 border-red-950 hover:bg-[#1a0408] hover:border-red-900'
                      } ${isStepActive ? 'ring-2 ring-red-400 ring-offset-2 ring-offset-black scale-102 bg-red-950/50' : ''}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-red-400 font-bold bg-black/60 px-2 py-0.5 rounded border border-red-950">
                          :{node.port}
                        </span>
                        <span className="text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded bg-red-950/80 text-rose-300">
                          {node.tag}
                        </span>
                      </div>
                      <h5 className="mt-2 font-semibold text-slate-100 text-xs">
                        {node.name}
                      </h5>
                    </button>
                  );
                })}
              </div>

              {/* Level 4: Persistence & Caching Layer */}
              <div className="pt-3 border-t border-red-950/60 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400 font-mono">
                <div className="p-2.5 rounded-xl bg-[#120204] border border-red-950 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-red-400" />
                    <span>MySQL 8.0 (25 Tables)</span>
                  </div>
                  <span className="text-rose-300 text-[10px] font-bold">ACID</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#120204] border border-red-950 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span>Redis 7 Distributed Cache</span>
                  </div>
                  <span className="text-amber-300 text-[10px] font-bold">&lt;1ms</span>
                </div>
              </div>

              {/* Telemetry Console during simulation */}
              {simLogs.length > 0 && (
                <div className="mt-2 p-3.5 rounded-2xl bg-[#080103] border border-red-950 font-mono text-[11px] text-slate-300 space-y-1 max-h-36 overflow-y-auto">
                  <div className="flex items-center gap-2 text-rose-400 pb-1 border-b border-red-950/50">
                    <Terminal className="w-3.5 h-3.5 text-red-400" />
                    <span>Real-time Inter-Service Event Trace:</span>
                  </div>
                  {simLogs.map((log, i) => (
                    <div key={i} className="text-rose-300/90 leading-relaxed">
                      {log}
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>

          {/* Right: Selected Node Detail Card & Tabs */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0e0305] border border-red-950/80 shadow-2xl relative">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-red-950/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 via-rose-600 to-amber-500 p-0.5">
                    <div className="w-full h-full bg-[#0e0305] rounded-[10px] flex items-center justify-center">
                      <Server className="w-5 h-5 text-red-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg leading-tight">
                      {selectedNode.name}
                    </h3>
                    <p className="text-xs text-red-400 font-mono">
                      {selectedNode.type}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-[#160407] text-rose-200 border border-red-950">
                    Port: {selectedNode.port}
                  </span>
                </div>
              </div>

              {/* Navigation Tabs for Details */}
              <div className="flex items-center gap-2 mt-4 pb-2 border-b border-red-950/60">
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-colors cursor-pointer ${
                    activeTab === 'specs'
                      ? 'bg-red-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Architecture Specs
                </button>
                <button
                  onClick={() => setActiveTab('code')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-colors cursor-pointer ${
                    activeTab === 'code'
                      ? 'bg-red-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Spring Boot Code
                </button>
              </div>

              {/* Tab 1: Specs */}
              {activeTab === 'specs' && (
                <div>
                  <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedNode.desc}
                  </p>

                  <div className="mt-5">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
                      <Info className="w-3.5 h-3.5 text-red-400" />
                      <span>Key Architectural Features</span>
                    </h4>
                    <ul className="space-y-1.5">
                      {selectedNode.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="mt-5 pt-4 border-t border-red-950/60">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Underlying Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedNode.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#160407] text-rose-300 border border-red-950"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Code Preview */}
              {activeTab === 'code' && (
                <div className="mt-4">
                  <div className="p-3 rounded-xl bg-[#070102] border border-red-950 font-mono text-[11px] text-rose-200 overflow-x-auto max-h-64 leading-relaxed">
                    <pre><code>{selectedNode.sampleCode}</code></pre>
                  </div>
                  <span className="mt-2 block text-[11px] font-mono text-slate-400">
                    Production code pattern implemented in Faiz's HospitalSync repository
                  </span>
                </div>
              )}

              {/* Call to Sandbox & Github */}
              <div className="mt-6 pt-4 border-t border-red-950/60 space-y-2">
                <a
                  href="https://github.com/Faiz-Khan01/hospital-management-microservices-backend"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-red-600 hover:bg-red-500 shadow-md shadow-red-600/30 flex items-center justify-center gap-2 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View HospitalSync Repository (@Faiz-Khan01)</span>
                </a>
                <a
                  href="#sandbox"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-300 bg-[#160407] hover:bg-[#22060b] border border-red-950 flex items-center justify-center gap-2 transition-all group"
                >
                  <span>Test Endpoints in Live REST Sandbox</span>
                  <ChevronRight className="w-4 h-4 text-red-400 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
