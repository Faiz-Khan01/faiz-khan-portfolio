export const resumeData = {
  personal: {
    name: "Faiz Khan",
    title: "Java Backend Developer | Full Stack Developer",
    location: "Nagpur, Maharashtra, India 440001",
    phone: "+91 9665635302",
    email: "faizkhan966563@gmail.com",
    github: "https://github.com/Faiz-Khan01",
    linkedin: "https://linkedin.com",
    availability: "Available for Full-time Roles & Internships",
    bio: "Driven Computer Science undergraduate specializing in Java Backend Development with hands-on experience building scalable full-stack applications and microservices using Java, Spring Boot, Spring Security, React.js, and MySQL. Skilled in designing RESTful APIs, implementing JWT/OAuth 2.0 authentication, integrating Razorpay payment gateways, and containerizing applications with Docker. Passionate about high-performance, production-ready backend architectures.",
    stats: [
      { label: "Production Apps", value: "3+", detail: "Full-stack & Microservices" },
      { label: "REST APIs Engineered", value: "50+", detail: "Validated & Documented" },
      { label: "Perf Optimization", value: "~30%", detail: "Query & Frontend Tuning" },
      { label: "Architecture", value: "18 Services", detail: "Distributed Microservices" }
    ]
  },

  skills: {
    languages: [
      { name: "Java (17 / 21 LTS)", level: 92, category: "Backend Core", icon: "Coffee", badge: "Primary" },
      { name: "SQL (MySQL 8.0)", level: 88, category: "Databases", icon: "Database", badge: "Core" },
      { name: "JavaScript (ES6+)", level: 84, category: "Web", icon: "FileCode2" },
      { name: "HTML5 & CSS3", level: 90, category: "Markup", icon: "Layout" }
    ],
    backend: [
      { name: "Spring Boot 3", level: 94, badge: "Expertise", desc: "Enterprise application development, auto-config, embedded Tomcat/Netty" },
      { name: "Microservices Architecture", level: 92, badge: "Architecture", desc: "Domain-Driven Design (DDD), 18 independent services, Eureka registry" },
      { name: "Spring Cloud Gateway", level: 88, badge: "Cloud", desc: "Dynamic edge routing, rate limiting, global CORS & filter chains" },
      { name: "Netflix Eureka", level: 88, badge: "Cloud", desc: "Dynamic service discovery cluster & 30s heartbeat health checks" },
      { name: "OpenFeign Inter-Service", level: 90, badge: "Cloud", desc: "Declarative synchronous RPC with non-blocking resilience safeguards" },
      { name: "Spring Security 6", level: 88, badge: "Security", desc: "Stateless bearer JWT, BCrypt hashing, 7-role RBAC matrices" },
      { name: "Hibernate / Spring Data JPA", level: 88, badge: "ORM", desc: "25 normalized relational tables, query optimization, ACID transactions" },
      { name: "Redis 7 Caching", level: 84, badge: "Caching", desc: "Distributed caching via Lettuce driver for sub-millisecond lookups" },
      { name: "RESTful API Design", level: 94, badge: "APIs", desc: "50+ endpoints with validation, OpenAPI/Swagger docs, global exception handlers" },
      { name: "OAuth 2.0 & JWT", level: 90, badge: "Auth", desc: "HMAC-SHA256 tokens, Google SSO, sessionless security" }
    ],
    frontend: [
      { name: "React 18 / 19 (Vite)", level: 88, badge: "Frontend", desc: "Hooks, SPA routing, state management, instant HMR bundling" },
      { name: "Tailwind CSS", level: 92, badge: "UI Design", desc: "Aura mesh gradients, dark obsidian & ruby glassmorphic aesthetics" },
      { name: "Three.js & 3D Visuals", level: 80, badge: "3D Graphics", desc: "3D virtual mannequin draping and interactive 360 turntables" },
      { name: "Bootstrap 5.3", level: 86, badge: "CSS", desc: "Responsive component kits, modal drawers, and glass styling" },
      { name: "Axios", level: 90, badge: "HTTP", desc: "Interceptors, async API calls & global error handlers" }
    ],
    devopsAndTools: [
      { name: "Docker & Compose", level: 86, badge: "DevOps", desc: "Multi-stage builds, isolated container bridge networks, cloud parity" },
      { name: "Git & GitHub", level: 90, badge: "VCS", desc: "Feature branching, CI-ready repositories, automated workflows" },
      { name: "Maven 3.9+", level: 88, badge: "Build Tool", desc: "Multi-module POM lifecycle management, plugin pipelines" },
      { name: "Postman", level: 92, badge: "Testing", desc: "Smoke-test runner, environment variables, automated token injection" },
      { name: "Razorpay Gateway", level: 90, badge: "Fintech", desc: "Order creation, UPI/Card checkout, HMAC-SHA256 signature verification" },
      { name: "Aiven & Render Cloud", level: 85, badge: "Cloud", desc: "Managed MySQL SSL clusters & Dockerized container hosting" }
    ],
    coreConcepts: [
      { name: "Object-Oriented Programming (OOP)", desc: "Inheritance, Polymorphism, Encapsulation, Abstraction, SOLID Design Patterns" },
      { name: "Data Structures & Algorithms (DSA)", desc: "Arrays, LinkedLists, Trees, HashMaps, Binary Search, Sorting & Big-O Optimization" },
      { name: "System Design & Microservices", desc: "Edge routing, stateless sessions, circuit breakers, distributed caching, CQRS" },
      { name: "Database Design & Normalization", desc: "25 relational tables, 3NF schema design, indexing, foreign keys, ACID compliance" }
    ],
    softSkills: [
      "Problem Solving",
      "Team Collaboration",
      "Time Management",
      "Adaptability",
      "Attention to Detail",
      "Continuous Learning"
    ]
  },

  projects: [
    {
      id: "techstore-ecommerce",
      title: "TechStore PRO — Luxury E-Commerce & 3D Fitting Room",
      tagline: "Full-Stack Luxury Ecosystem with 3D Fitting Room, AI Stylist, Spring Boot 3 & Razorpay",
      featured: true,
      isDeployed: true,
      category: "Full-Stack",
      image: "/techstore-preview.jpg",
      statusBadge: "🟢 Live Deployed on Vercel",
      liveStorefront: "https://techstore-catalog-yw04kw9zf-faiz-khan01s-projects.vercel.app/",
      liveStorefrontAlt: "https://techstore-catalog.vercel.app/",
      backendApi: "https://full-stack-ecommerce-catalog.onrender.com/",
      github: "https://github.com/Faiz-Khan01/Full-Stack-eCommerce-Catalog",
      deployedUrl: "https://techstore-catalog-yw04kw9zf-faiz-khan01s-projects.vercel.app/",
      stats: {
        storefront: "Live on Vercel",
        backend: "Spring Boot 3 (Docker)",
        database: "Aiven Cloud MySQL 8.0",
        payments: "Razorpay (₹ INR) HMAC"
      },
      techStack: [
        "Java 17 LTS",
        "Spring Boot 3.2.5",
        "React 18 (Vite)",
        "Three.js 3D",
        "Aiven MySQL 8.0",
        "Razorpay SDK",
        "Spring Security 6",
        "Docker (Render)",
        "Tailwind CSS",
        "jsPDF"
      ],
      description: "A production-ready, full-stack luxury eCommerce ecosystem built with Spring Boot 3, React 18 (Vite), Aiven Cloud MySQL, and Razorpay. Features an Interactive 3D Virtual Fitting Room, AI Personal Stylist, Smart Sizing Engine, Executive Admin Analytics, and Logistics Tracking.",
      bullets: [
        "🧥 3D Virtual Fitting Room: Drapes actual catalog product imagery onto an atelier 3D mannequin bust with live size scaling, wardrobe rack, garment removal, and instant 'Add Outfit to Cart'.",
        "🤖 AI Personal Stylist & Fragrance Concierge: Real-time catalog search concierge with interactive product mini-cards, fit recommendations, and direct fitting room transfer.",
        "📏 Smart Sizing Engine: Automatic variant mapping for Apparel (S-XL), Pants (30\"-36\"), Footwear (UK 7-11), and Perfumes (50ml-150ml) integrated across product detail and cart.",
        "💳 Razorpay & Indian Currency (₹ INR): Unified INR formatting with native UPI (GPay/PhonePe), Cards, Netbanking, COD, and SHA-256 HMAC cryptographic signature validation.",
        "🛡️ Executive Admin Management Suite: 100% database-calculated dashboard metrics (live revenue, customer base, weekday sales scrubber, fulfillment rate ring) and category taxonomy manager.",
        "🚚 Courier Tracking & Pincode Resolution: Indian 6-digit Pincode API auto-resolving City/State, multi-courier integration (Delhivery, BlueDart, DTDC, FedEx), and automated jsPDF tax invoices."
      ],
      architectureDetails: {
        frontend: "React 18 SPA (Vite) deployed on Vercel Edge CDN with Tailwind CSS & Three.js Canvas",
        backend: "Spring Boot 3.2.5 REST API running in Render Docker Container with Stateless JWT & Spring Security 6",
        database: "Aiven Cloud MySQL 8.0 (SSL required) persisting Users, Products, Categories, Orders, and Payments",
        payments: "Razorpay Java SDK 1.4.3 with server-side order generation and SHA-256 signature verification",
        invoices: "Automated client-side PDF tax invoice generation with jsPDF and AutoTable"
      }
    },
    {
      id: "hospital-management-microservices",
      title: "HospitalSync Pro Suite v2.5 — Microservices Healthcare Platform",
      tagline: "Enterprise-Grade Distributed Healthcare Platform with 18 Spring Boot Services, Eureka & OpenFeign",
      featured: true,
      category: "Microservices",
      image: "/hospitalsync-preview.svg",
      statusBadge: "18 Microservices Ecosystem",
      hasInteractiveFlow: true,
      github: "https://github.com/Faiz-Khan01/hospital-management-microservices-backend",
      liveDemo: "#architecture",
      stats: {
        services: "18 Microservices",
        gateway: "Spring Cloud Netty (:8080)",
        cache_db: "Redis 7 + MySQL (25 Tables)",
        compliance: "HIPAA Immutable Audit Trail"
      },
      techStack: [
        "Java 17 LTS",
        "Spring Boot 3.4.2",
        "Spring Cloud 2024",
        "Eureka Registry (:8761)",
        "API Gateway (:8080)",
        "OpenFeign",
        "Spring Security & JJWT",
        "Redis 7 Cache",
        "MySQL 8.0 (25 Tables)",
        "React 19",
        "Docker Compose"
      ],
      description: "A full-stack, distributed, cloud-native Hospital Information System (HIS) and Electronic Health Records (EHR) platform orchestrating 18 Spring Boot services behind a reactive API Gateway and Eureka cluster, with resilient OpenFeign events, Redis caching, 25 normalized MySQL tables, and HIPAA audit trails.",
      bullets: [
        "18 Independent Spring Boot Services: Clean separation of bounded domains per Domain-Driven Design (DDD) spanning identity, clinical operations, pharmacy, diagnostics, and finance.",
        "Edge Gateway & Discovery: Centralized ingress via Spring Cloud Gateway (Port 8080) with Netty non-blocking I/O and Eureka Service Discovery cluster (Port 8761) with 30s heartbeats.",
        "Fail-Safe Inter-Service Communication: Declarative OpenFeign clients with non-blocking resilience safeguards preventing cascading rollbacks during appointment booking or payment events.",
        "Real-Time Inpatient & Bed Tracking: Live bed allocation matrix across General, ICU, NICU, Maternity, and Isolation wards with ward-level breakdown.",
        "Relational Persistence & Caching: 25 normalized MySQL tables with foreign key integrity and Redis 7 distributed cache for sub-millisecond user, patient, and doctor lookups.",
        "HIPAA Audit Trail & RBAC Matrix: Immutable audit records capturing actor, differential JSON snapshots, client IP, and timestamp across 7 roles (Admin, Doctor, Nurse, Receptionist, Lab Tech, Pharmacist, Patient)."
      ],
      architectureDetails: {
        infrastructure: "Spring Cloud Gateway (:8080) & Netflix Eureka Service Registry (:8761)",
        identity: "auth-service (:8086), user-service (:8087), role-service (:8088)",
        clinicalOps: "department-service (:8089), patient-service (:8081), doctor-service (:8082), appointment-service (:8083), admission-service (:8096), prescription-service (:8085), medical-record-service (:8090)",
        pharmacyAndLab: "medicine-service (:8091), lab-test-service (:8092), lab-report-service (:8093)",
        financeAndAlerts: "billing-service (:8084), payment-service (:8094), notification-service (:8095)",
        persistence: "MySQL 8.0 (25 Normalized Tables) + Redis 7 Cache on Docker Bridge Network"
      }
    },
    {
      id: "myteachingapp-lms",
      title: "MyTeachingApp — Learning Management System (LMS)",
      tagline: "Interactive Learning Management System with RBAC & Payment Processing",
      featured: true,
      category: "Full-Stack",
      image: "/myteachingapp-preview.svg",
      statusBadge: "LMS Platform",
      github: "https://github.com/Faiz-Khan01",
      liveDemo: null,
      stats: {
        roles: "Student & Instructor RBAC",
        latency: "~25% Lower Response Time",
        enrollment: "Automated Workflows",
        auth: "JWT + Google Sign-In"
      },
      techStack: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "React.js",
        "MySQL",
        "Razorpay API",
        "Tailwind CSS",
        "Axios"
      ],
      description: "An interactive Learning Management System connecting students and instructors with automated course enrollment workflows, curriculum distribution, and payment processing.",
      bullets: [
        "Built an interactive LMS platform connecting students and instructors with automated course enrollment workflows.",
        "Implemented secure authentication with JWT and Google Sign-In, alongside fine-grained Role-Based Access Control (RBAC).",
        "Integrated Razorpay for automated course payment processing and instant unlocking of learning material.",
        "Designed and tuned analytics and tracking modules, reducing backend response latency by ~25%."
      ],
      architectureDetails: {
        rbac: "Role-based route authorization (@PreAuthorize('hasRole(\"INSTRUCTOR\")'))",
        workflows: "Event-driven enrollment triggers upon successful payment callback",
        optimization: "DTO projections and eager/lazy fetching strategy tuning in JPA"
      }
    }
  ],

  experience: [
    {
      role: "Java Full Stack Developer Virtual Intern",
      organization: "AICTE | EduSkills Academy",
      period: "July 2025 – Sep 2025",
      type: "Virtual Internship",
      badge: "Completed & Certified",
      summary: "Completed a 10-week intensive industrial training program focused on Java Full Stack Development and enterprise application architecture.",
      bullets: [
        "Completed a 10-week intensive program focused on Java Full Stack Development and enterprise application architecture.",
        "Engineered robust backend services using Java, Spring Boot, REST APIs, MySQL, and integrated them with a responsive React.js frontend.",
        "Applied industry-standard software development practices, including version control using Git, Maven build management, and modular testing with Postman."
      ],
      skillsLearned: ["Spring Boot", "REST API Design", "React.js", "MySQL", "Maven", "Git & GitHub"]
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech) – Computer Science & Engineering",
      institution: "Anjuman College of Engineering and Technology",
      location: "Nagpur, India",
      period: "2023 – 2026",
      grade: "SGPA: 6.7",
      status: "Final Year Undergraduate (B.Tech CSE)",
      highlights: [
        "Academic Performance: SGPA: 6.7 | Final Year B.Tech CSE",
        "Core Coursework: Data Structures & Algorithms, Object-Oriented Software Design, Operating Systems, Database Management Systems, Computer Networks.",
        "Focus on distributed systems, enterprise Java architectures, and scalable web services."
      ]
    },
    {
      degree: "Diploma in Electronics & Telecommunication Engineering",
      institution: "Anjuman Polytechnic",
      location: "Nagpur, India",
      period: "2020 – 2023",
      grade: "Percentage: 85.00%",
      status: "Graduated with Distinction (85.00%)",
      highlights: [
        "Secured 85.00% aggregate with First Class Distinction.",
        "Strong foundation in digital logic, circuit design, microprocessors, and mathematical foundations."
      ]
    },
    {
      degree: "Secondary School Certificate (SSC - 10th)",
      institution: "Unique English School",
      location: "Patur, Dist. Akola, India",
      period: "2019",
      grade: "Percentage: 88.00%",
      status: "Academic Excellence (88.00%)",
      highlights: [
        "Scored 88.00% aggregate with Distinction in Mathematics, Science, and English."
      ]
    }
  ],

  certifications: [
    {
      title: "Java Full Stack Developer Virtual Internship",
      issuer: "AICTE | EduSkills Academy",
      date: "September 2025",
      badge: "Industry Certified",
      icon: "Award",
      link: null,
      desc: "10-week rigorous industrial immersion in Java, Spring Boot, REST APIs, React, and MySQL application architectures."
    },
    {
      title: "Oracle Java Foundations",
      issuer: "Oracle | Coursera",
      date: "July 2025",
      badge: "Verified Credential",
      icon: "CheckCircle2",
      link: "https://coursera.org/verify/IQM2QQGXMTKY",
      credentialId: "IQM2QQGXMTKY",
      desc: "Comprehensive foundation in Java OOP concepts, control flow, exception handling, data structures, and memory models."
    },
    {
      title: "Programming with JavaScript",
      issuer: "Meta | Coursera",
      date: "July 2025",
      badge: "Verified Credential",
      icon: "CheckCircle2",
      link: "https://coursera.org/verify/BAJGUF4UBB31",
      credentialId: "BAJGUF4UBB31",
      desc: "Advanced JavaScript ES6+ features, asynchronous programming, DOM manipulation, and unit testing."
    },
    {
      title: "Introduction to Web Development (HTML, CSS, JavaScript)",
      issuer: "IBM | Coursera",
      date: "July 2025",
      badge: "Verified Credential",
      icon: "CheckCircle2",
      link: "https://coursera.org/verify/2PCSK2AX2K6J",
      credentialId: "2PCSK2AX2K6J",
      desc: "Core modern web standards, semantic HTML5, responsive layout design, and client-side scripting."
    }
  ],

  achievements: [
    {
      title: "3 Production-Grade Applications",
      desc: "Built 3 production-grade applications highlighting full-stack design, microservices architecture, and backend engineering."
    },
    {
      title: "50+ RESTful APIs Engineered",
      desc: "Developed and documented 50+ RESTful APIs with robust validation, global exception handling, and database integration."
    },
    {
      title: "Real-World Fintech & Cloud Architecture",
      desc: "Applied critical engineering features into real-world projects: Razorpay Payment Integration, OAuth2, JWT Security, Microservices Routing, and Dockerization."
    }
  ],

  apiEndpoints: [
    {
      id: "auth-login",
      name: "JWT Authentication Token Issuance",
      method: "POST",
      path: "/api/v1/auth/login",
      service: "Auth Microservice (:8086)",
      description: "Authenticates credentials and generates a signed HMAC-SHA256 JSON Web Token (JWT) with RBAC claims.",
      requestBody: {
        email: "faizkhan966563@gmail.com",
        password: "••••••••••••",
        roleRequested: "DEVELOPER"
      },
      responseStatus: 200,
      responseTime: "24ms",
      responseBody: {
        status: "SUCCESS",
        timestamp: "2026-10-31T13:50:00Z",
        tokenType: "Bearer",
        accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmYWl6a2hhbiIsInJvbGVzIjpbIlJPTEVfQURNSU4iLCJST0xFX0RFVkVMT1BFUiJdfQ...",
        expiresIn: 86400,
        user: {
          name: "Faiz Khan",
          role: "ROLE_BACKEND_ENGINEER",
          permissions: ["READ_ALL", "WRITE_SERVICES", "EXECUTE_DEPLOYMENTS"]
        }
      }
    },
    {
      id: "techstore-catalog-api",
      name: "TechStore PRO Live Catalog & Sizing",
      method: "GET",
      path: "/api/products?department=Outerwear",
      service: "TechStore Backend (Render Docker :8082)",
      description: "Queries active luxury catalog products with 3D fitting room compatibility and variant sizing from Aiven Cloud MySQL.",
      requestBody: null,
      responseStatus: 200,
      responseTime: "18ms",
      responseBody: {
        status: "SUCCESS",
        database: "Aiven Cloud MySQL 8.0 (SSL)",
        department: "Outerwear",
        products: [
          {
            id: "top-1",
            name: "Milano Double-Breasted Wool Blazer",
            price: 14999,
            currency: "INR",
            sizes: ["S (38\")", "M (40\")", "L (42\")", "XL (44\")"],
            fittingRoomEnabled: true,
            inStock: true
          }
        ],
        cacheHit: true
      }
    },
    {
      id: "razorpay-verify",
      name: "Razorpay Cryptographic HMAC Verification",
      method: "POST",
      path: "/api/payment/verify",
      service: "Razorpay Fintech Service",
      description: "Validates HMAC-SHA256 signature against Razorpay secret key to confirm transaction integrity and generate tax invoice.",
      requestBody: {
        razorpay_order_id: "order_Kz8271nBxQ91",
        razorpay_payment_id: "pay_98b1a37c442",
        razorpay_signature: "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3"
      },
      responseStatus: 200,
      responseTime: "38ms",
      responseBody: {
        paymentStatus: "VERIFIED",
        transactionId: "TXN-2026-99218",
        currency: "INR",
        amountCaptured: 17698.00,
        signatureMatch: true,
        invoiceNumber: "INV-2026-9921",
        message: "Payment successfully verified. PDF tax invoice and BlueDart AWB generated."
      }
    },
    {
      id: "hospital-appointment-feign",
      name: "HospitalSync OpenFeign Slot Reservation",
      method: "POST",
      path: "/api/v1/appointments/reserve",
      service: "appointment-service (:8083) -> doctor-service (:8082)",
      description: "Choreographs synchronous inter-service RPC via OpenFeign declarative client with non-blocking resilience safeguards.",
      requestBody: {
        patientId: 104,
        doctorId: 12,
        consultationDate: "2026-11-01",
        slotTime: "10:30 AM"
      },
      responseStatus: 201,
      responseTime: "29ms",
      responseBody: {
        status: "CONFIRMED",
        appointmentId: "APT-8821",
        doctor: "Dr. Sharma",
        department: "Cardiology",
        feignResponseHeader: "X-Feign-Client: DOCTOR-SERVICE-ROUTED",
        auditRecordId: "AUDIT-2941",
        hipaaCompliant: true
      }
    },
    {
      id: "eureka-registry",
      name: "Eureka Service Discovery Heartbeat Status",
      method: "GET",
      path: "/eureka/apps",
      service: "Eureka Naming Server (:8761)",
      description: "Fetches real-time heartbeat health status across all 18 registered Spring Boot microservices.",
      requestBody: null,
      responseStatus: 200,
      responseTime: "14ms",
      responseBody: {
        clusterStatus: "UP",
        totalRegisteredServices: 18,
        activeInstances: [
          "API-GATEWAY:8080", "AUTH-SERVICE:8086", "USER-SERVICE:8087", "PATIENT-SERVICE:8081",
          "DOCTOR-SERVICE:8082", "APPOINTMENT-SERVICE:8083", "ADMISSION-SERVICE:8096", "BILLING-SERVICE:8084"
        ],
        heartbeatIntervalSeconds: 30,
        selfPreservationMode: "OFF"
      }
    }
  ]
};
