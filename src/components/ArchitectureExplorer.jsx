import React, { useState, useEffect } from 'react';
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
  Sparkles
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
    tech: ['Spring Cloud Gateway', 'Spring WebFlux', 'Netty', 'JWT'],
    sampleCode: `@Bean
public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
    return builder.routes()
        .route("patient-service", r -> r.path("/api/v1/patients/**")
            .filters(f -> f.filter(jwtAuthFilter))
            .uri("lb://PATIENT-SERVICE"))
        .route("appointment-service", r -> r.path("/api/v1/appointments/**")
            .filters(f -> f.filter(jwtAuthFilter))
            .uri("lb://APPOINTMENT-SERVICE"))
        .build();
}`
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
    tech: ['Netflix Eureka Server', 'Spring Cloud Netflix', 'Actuator'],
    sampleCode: `@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(EurekaServerApplication.class, args);
    }
}
// Active Instances: GATEWAY, AUTH, PATIENT, DOCTOR, APPOINTMENT, BILLING`
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
    tech: ['Spring Security 6', 'JJWT', 'OAuth2 Client', 'MySQL'],
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
    tech: ['Spring Boot', 'Spring Data JPA', 'Hibernate', 'MySQL'],
    sampleCode: `@Entity
@Table(name = "patients", indexes = {@Index(name = "idx_patient_email", columnList = "email")})
public class Patient {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullName;
    private String medicalHistoryHash;
    private String bloodGroup;
}`
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
    tech: ['Spring Boot', 'OpenFeign Client', 'MySQL', 'JPA'],
    sampleCode: `@GetMapping("/{id}/slots")
public ResponseEntity<List<TimeSlotDTO>> getAvailableSlots(
        @PathVariable Long id, 
        @RequestParam @DateTimeFormat(iso = ISO.DATE) LocalDate date) {
    return ResponseEntity.ok(scheduleService.findAvailableSlots(id, date));
}`
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
    tech: ['Spring Boot', 'OpenFeign', 'Spring Events', 'MySQL'],
    sampleCode: `@FeignClient(name = "DOCTOR-SERVICE")
public interface DoctorFeignClient {
    @PostMapping("/api/v1/doctors/{id}/reserve-slot")
    SlotBookingResponse reserveSlot(@PathVariable("id") Long doctorId, @RequestBody SlotRequest req);
}`
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
    tech: ['Spring Boot', 'Razorpay SDK', 'iText PDF', 'MySQL'],
    sampleCode: `public PaymentVerificationResponse verifyRazorpaySignature(PaymentDTO dto) {
    boolean isValid = SignatureVerifier.verify(
        dto.getOrderId() + "|" + dto.getPaymentId(), 
        dto.getSignature(), 
        razorpaySecret
    );
    return new PaymentVerificationResponse(isValid ? "VERIFIED" : "FAILED");
}`
  }
];

// Pre-defined interactive simulations
const simulationScenarios = [
  {
    id: 'appointment-flow',
    title: 'Patient Appointment Booking Flow',
    description: 'Traces an end-to-end booking: Gateway token check -> Eureka discovery -> Feign RPC doctor reserve -> MySQL ACID transaction commit.',
    steps: [
      { node: 'gateway', log: 'POST /api/v1/appointments - Gateway validating JWT Bearer token claims & rate limits' },
      { node: 'eureka', log: 'Querying Eureka Registry: Resolving virtual host APPOINTMENT-SERVICE -> 10.0.1.14:8084' },
      { node: 'appointment', log: 'Appointment Service receives request. Invoking DoctorFeignClient for slot availability' },
      { node: 'doctor', log: 'Doctor Service confirms Dr. Jenkins slot 10:30 AM available. Applying temporary pessimistic lock' },
      { node: 'appointment', log: 'Appointment confirmed! MySQL transaction committed (Isolation: READ_COMMITTED). HTTP 201 Created' },
    ]
  },
  {
    id: 'billing-flow',
    title: 'Consultation Billing & Razorpay Checkout',
    description: 'Traces invoice generation, prescription issuance, and Razorpay HMAC-SHA256 signature verification.',
    steps: [
      { node: 'doctor', log: 'Doctor marks consultation #9421 as COMPLETED with digital prescription data' },
      { node: 'billing', log: 'Billing Service generates invoice #INV-2026-88. Order total: ₹1,500' },
      { node: 'billing', log: 'Razorpay Gateway API: Created order order_Hsp9281. Awaiting patient payment' },
      { node: 'gateway', log: 'Patient webhook arrives: POST /api/v1/payments/razorpay/verify' },
      { node: 'billing', log: 'HMAC-SHA256 signature verified against Razorpay secret. PDF receipt dispatched!' }
    ]
  },
  {
    id: 'discovery-flow',
    title: 'Eureka Discovery Heartbeat & High Availability',
    description: 'Demonstrates microservice auto-registration, Actuator health pings, and dynamic load balancing.',
    steps: [
      { node: 'patient', log: 'Patient Service instance #2 boots up. Emits PUT /eureka/apps/PATIENT-SERVICE' },
      { node: 'eureka', log: 'Eureka Server registers new instance with lease renewal interval of 30s' },
      { node: 'gateway', log: 'Gateway local route cache refreshed via Eureka heartbeat delta (Cluster: Healthy)' },
      { node: 'gateway', log: 'Incoming patient traffic load-balanced 50/50 across active instances' }
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
            setSimLogs(prev => [...prev, `[SUCCESS] Transaction finalized with 0 packet drops (Total Time: ~${(idx + 1) * 35 + 20}ms)`]);
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
    <section id="architecture" className="py-24 relative bg-[#070103]/90 border-t border-b border-red-950/40">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-rose-900/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold mb-4">
            <Network className="w-3.5 h-3.5" />
            <span>Distributed Healthcare Ecosystem</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hospital Management <span className="gradient-text-emerald">Microservices Architecture</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Faiz's complete distributed enterprise healthcare platform engineered with 6 independent Spring Boot services, Spring Cloud Gateway, Netflix Eureka discovery, and OpenFeign inter-service RPC.
          </p>
        </div>

        {/* Live Simulation Controls Ribbon */}
        <div className="mb-10 p-5 rounded-3xl bg-[#0b1120] border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-sm">
                Interactive Transaction Flow Simulator
              </h4>
              <p className="text-xs text-slate-400">
                Trigger real-time simulated packet flows across Gateway, Eureka, and microservices
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {simulationScenarios.map((scen) => (
              <button
                key={scen.id}
                onClick={() => runSimulation(scen)}
                disabled={isSimulating}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                  activeScenario.id === scen.id && isSimulating
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30 animate-pulse'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700/80 hover:text-white'
                }`}
              >
                <Play className="w-3 h-3 text-emerald-400" />
                <span>{scen.title.split(' ')[0]} Flow</span>
              </button>
            ))}

            {isSimulating && (
              <button
                onClick={resetSimulation}
                className="p-2 rounded-xl bg-slate-850 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700"
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
          <div className="lg:col-span-7 bg-[#0b1120] p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
            
            {/* Background Cyber Grid */}
            <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col gap-6">
              
              {/* Level 1: Client Application Layer */}
              <div className="flex flex-col items-center">
                <div className="w-full max-w-md p-3.5 rounded-2xl bg-slate-900/90 border border-slate-700 text-center shadow-lg flex items-center justify-between px-5">
                  <div className="flex items-center gap-2.5 text-xs font-mono text-slate-300 font-semibold">
                    <Activity className="w-4 h-4 text-cyan-400" />
                    <span>Client Layer (React.js Frontend / Doctor &amp; Patient Portal)</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                </div>
                
                {/* Flow Wire down to Gateway */}
                <div className="h-6 w-0.5 bg-gradient-to-b from-cyan-500 to-emerald-500 my-1 relative">
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400 ${isSimulating ? 'animate-ping' : ''}`}></div>
                </div>
              </div>

              {/* Level 2: Spring Cloud Gateway & Netflix Eureka */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Gateway Node */}
                <button
                  onClick={() => setSelectedNode(architectureNodes[0])}
                  className={`p-4 rounded-2xl text-left border transition-all relative group cursor-pointer ${
                    selectedNode.id === 'gateway'
                      ? 'bg-emerald-950/40 border-emerald-400 shadow-lg shadow-emerald-500/20'
                      : 'bg-slate-900/80 border-slate-800 hover:border-emerald-500/50'
                  } ${isSimulating && activeScenario.steps[currentStepIndex]?.node === 'gateway' ? 'ring-2 ring-emerald-400 ring-offset-2 ring-offset-slate-900' : ''}`}
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
                  } ${isSimulating && activeScenario.steps[currentStepIndex]?.node === 'eureka' ? 'ring-2 ring-amber-400 ring-offset-2 ring-offset-slate-900' : ''}`}
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
              <div className="flex items-center justify-center my-0.5">
                <span className="px-3.5 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-[10px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-sm">
                  <Zap className="w-3 h-3 text-cyan-400" />
                  <span>OpenFeign Declarative RPC • JSON Payloads • JWT Headers</span>
                </span>
              </div>

              {/* Level 3: Microservices Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {architectureNodes.slice(2).map((node) => {
                  const isSelected = selectedNode.id === node.id;
                  const isStepActive = isSimulating && activeScenario.steps[currentStepIndex]?.node === node.id;

                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNode(node)}
                      className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                        isSelected
                          ? `bg-slate-800/90 ${node.borderColor} shadow-md`
                          : 'bg-slate-900/70 border-slate-800 hover:bg-slate-800/40 hover:border-slate-700'
                      } ${isStepActive ? 'ring-2 ring-cyan-400 ring-offset-2 ring-offset-slate-900 scale-102 bg-cyan-950/40' : ''}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-emerald-400 font-bold bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                          :{node.port}
                        </span>
                        <span className="text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
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

              {/* Level 4: Database Layer */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono px-2">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-emerald-400" />
                  <span>Database Isolation: Bounded Contexts (Isolated MySQL DBs)</span>
                </div>
                <span className="text-emerald-400 font-semibold">ACID Ready</span>
              </div>

              {/* Telemetry Console during simulation */}
              {simLogs.length > 0 && (
                <div className="mt-2 p-3.5 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1 max-h-36 overflow-y-auto">
                  <div className="flex items-center gap-2 text-slate-500 pb-1 border-b border-slate-900">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Real-time Telemetry Trace:</span>
                  </div>
                  {simLogs.map((log, i) => (
                    <div key={i} className="text-emerald-400/90 leading-relaxed">
                      {log}
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>

          {/* Right: Selected Node Detail Card & Tabs */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0b1120] border border-slate-800 shadow-2xl relative">
              
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

              {/* Navigation Tabs for Details */}
              <div className="flex items-center gap-2 mt-4 pb-2 border-b border-slate-800/80">
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-colors ${
                    activeTab === 'specs'
                      ? 'bg-slate-800 text-white border border-slate-700'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Architecture Specs
                </button>
                <button
                  onClick={() => setActiveTab('code')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-colors ${
                    activeTab === 'code'
                      ? 'bg-slate-800 text-emerald-400 border border-slate-700'
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
                      <Info className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Key Architectural Features</span>
                    </h4>
                    <ul className="space-y-1.5">
                      {selectedNode.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="mt-5 pt-4 border-t border-slate-800/80">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Underlying Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedNode.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 text-emerald-300 border border-emerald-500/20"
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
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-300 overflow-x-auto max-h-64 leading-relaxed">
                    <pre><code>{selectedNode.sampleCode}</code></pre>
                  </div>
                  <span className="mt-2 block text-[11px] font-mono text-slate-400">
                    Production pattern implemented in Faiz's repository
                  </span>
                </div>
              )}

              {/* Call to Sandbox */}
              <div className="mt-6 pt-4 border-t border-slate-800/60">
                <a
                  href="#sandbox"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center gap-2 transition-all group"
                >
                  <span>Test Live Microservices in REST Sandbox</span>
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
