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
      { label: "Architecture", value: "100%", detail: "Distributed & Containerized" }
    ]
  },

  skills: {
    languages: [
      { name: "Java", level: 90, category: "Backend Core", icon: "Coffee", badge: "Primary" },
      { name: "SQL (MySQL)", level: 88, category: "Databases", icon: "Database", badge: "Core" },
      { name: "JavaScript (ES6+)", level: 82, category: "Web", icon: "FileCode2" },
      { name: "HTML5 & CSS3", level: 90, category: "Markup", icon: "Layout" }
    ],
    backend: [
      { name: "Spring Boot", level: 92, badge: "Expertise", desc: "Enterprise application development & configuration" },
      { name: "Spring MVC", level: 88, badge: "Framework", desc: "Model-View-Controller architecture & dispatcher servlets" },
      { name: "Spring Security", level: 86, badge: "Security", desc: "Filters, JWT authorization, OAuth 2.0 flows, RBAC" },
      { name: "Hibernate / JPA", level: 85, badge: "ORM", desc: "Entity mapping, HQL queries, caching & relations" },
      { name: "Microservices Architecture", level: 88, badge: "Architecture", desc: "Decoupled domain services, independent scaling" },
      { name: "Spring Cloud Gateway", level: 84, badge: "Cloud", desc: "Dynamic reverse proxy, filter chains & rate limiting" },
      { name: "Netflix Eureka", level: 85, badge: "Cloud", desc: "Service registration, heartbeat discovery" },
      { name: "OpenFeign", level: 86, badge: "Cloud", desc: "Declarative inter-service HTTP client" },
      { name: "RESTful API Design", level: 92, badge: "APIs", desc: "Resource modeling, HTTP status codes, error schemas" },
      { name: "JWT & OAuth 2.0", level: 90, badge: "Auth", desc: "Stateless token authentication & Google SSO" }
    ],
    frontend: [
      { name: "React.js", level: 85, badge: "Frontend", desc: "Hooks, component lifecycles, state management" },
      { name: "Tailwind CSS", level: 90, badge: "UI Design", desc: "Modern utility-first styling, glassmorphism & responsive layouts" },
      { name: "Bootstrap", level: 85, badge: "CSS", desc: "Grid systems and responsive component kits" },
      { name: "Axios", level: 90, badge: "HTTP", desc: "Interceptors, async API calls & global error handlers" }
    ],
    devopsAndTools: [
      { name: "Docker", level: 80, badge: "Containerization", desc: "Dockerfile creation, container lifecycle, networking" },
      { name: "Git & GitHub", level: 88, badge: "VCS", desc: "Branching strategies, PR reviews, CI-ready repos" },
      { name: "Maven", level: 86, badge: "Build Tool", desc: "Dependency management, multi-module POMs, plugins" },
      { name: "Postman", level: 92, badge: "API Testing", desc: "Automated test scripts, environment variables, mock servers" },
      { name: "Razorpay Gateway", level: 88, badge: "Payment", desc: "Order creation, webhooks, signature verification" },
      { name: "IntelliJ IDEA & VS Code", level: 90, badge: "IDE", desc: "Debugging, profilers, Spring tooling" }
    ],
    coreConcepts: [
      { name: "Object-Oriented Programming (OOP)", desc: "Inheritance, Polymorphism, Encapsulation, Abstraction, Design Patterns" },
      { name: "Data Structures & Algorithms (DSA)", desc: "Arrays, LinkedLists, Trees, HashMaps, Binary Search, Sorting" },
      { name: "System Design Fundamentals", desc: "Load balancing, stateless sessions, API gateway patterns, caching" },
      { name: "Database Design & Normalization", desc: "Schema design, relational indexes, foreign keys, transaction ACID" }
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
      id: "hospital-management-microservices",
      title: "Hospital Management System",
      tagline: "Scalable Microservices Architecture with Spring Cloud & JWT",
      featured: true,
      category: "Microservices",
      stats: {
        services: "6 Microservices",
        architecture: "Spring Cloud + Eureka",
        security: "Centralized JWT + RBAC",
        status: "Production Architecture"
      },
      techStack: [
        "Java",
        "Spring Boot",
        "Spring Cloud Gateway",
        "Netflix Eureka",
        "OpenFeign",
        "Spring Security",
        "JWT",
        "MySQL",
        "React.js"
      ],
      description: "A resilient distributed healthcare ecosystem engineered with independent, loosely-coupled microservices handling authentication, patient records, doctor scheduling, appointments, prescriptions, and automated billing.",
      bullets: [
        "Designed and deployed a scalable microservices architecture consisting of independent services for authentication, patients, doctors, appointments, prescriptions, and billing.",
        "Implemented Spring Cloud Gateway for centralized API routing, rate limiting, and Netflix Eureka Server for dynamic service discovery.",
        "Established resilient inter-service communication using OpenFeign declarative clients with failover strategies.",
        "Secured all external and internal endpoints via centralized JWT Authentication and fine-grained Role-Based Access Control (Admin, Doctor, Patient)."
      ],
      architectureDetails: {
        gateway: "Spring Cloud Gateway (Port 8080) - Central entry point with token inspection filters",
        discovery: "Netflix Eureka Service Registry (Port 8761) - Dynamic heartbeat registration",
        services: [
          { name: "Auth & Security Service", port: "8081", desc: "Issues signed JWTs, validates credentials, RBAC" },
          { name: "Patient Service", port: "8082", desc: "CRUD patient demographics, medical history" },
          { name: "Doctor & Schedule Service", port: "8083", desc: "Specialty management, availability slots" },
          { name: "Appointment Service", port: "8084", desc: "Booking lifecycle, status workflows" },
          { name: "Billing & Prescription Service", port: "8085", desc: "Invoices, pharmacy records, calculations" }
        ],
        database: "Isolated MySQL Database instances per domain service to ensure bounded contexts"
      },
      github: "https://github.com/Faiz-Khan01",
      liveDemo: null
    },
    {
      id: "techstore-ecommerce",
      title: "TechStore E-Commerce Platform",
      tagline: "Full-Stack Online Store with Razorpay Payment Gateway & Docker",
      featured: true,
      category: "Full-Stack",
      stats: {
        apis: "20+ Secure Endpoints",
        perf: "~30% Faster Page Loads",
        payments: "Razorpay Signature Verified",
        deployment: "Docker Containerized"
      },
      techStack: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "React.js",
        "MySQL",
        "Docker",
        "Razorpay API",
        "OAuth 2.0",
        "JWT"
      ],
      description: "A high-performance full-stack electronic commerce platform featuring dynamic catalog filtering, real-time cart synchronization, authenticated product reviews, and secure monetary checkout.",
      bullets: [
        "Developed a production-ready eCommerce application with catalog filtering, category search, cart management, and product review features.",
        "Designed 20+ secure REST APIs and integrated the Razorpay Payment Gateway with cryptographic signature verification for transaction integrity.",
        "Implemented dual authentication via JWT and Google OAuth 2.0, allowing seamless and secure single sign-on (SSO).",
        "Optimized backend Hibernate queries and frontend bundle delivery, achieving a ~30% reduction in page load latency.",
        "Containerized backend services using Docker to ensure seamless environment parity and cloud deployment readiness."
      ],
      architectureDetails: {
        security: "Stateless JWT authentication combined with Spring Security OAuth2 client for Google SSO",
        payments: "Server-side Razorpay order generation with HMAC-SHA256 signature verification upon checkout webhook",
        containerization: "Multi-stage Dockerfile packaging OpenJDK 17 runtime for minimal image footprint",
        database: "Normalized MySQL schema with index-tuned queries for lightning-fast product search"
      },
      github: "https://github.com/Faiz-Khan01",
      liveDemo: null
    },
    {
      id: "myteachingapp-lms",
      title: "MyTeachingApp LMS",
      tagline: "Interactive Learning Management System with RBAC & Payment Processing",
      featured: true,
      category: "Full-Stack",
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
      description: "A comprehensive Learning Management System bridging instructors and learners, complete with curriculum creation, video/content access, automated course enrollment, and student progress tracking.",
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
      },
      github: "https://github.com/Faiz-Khan01",
      liveDemo: null
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
      degree: "B.Tech in Computer Science & Engineering (CSE)",
      institution: "Anjuman College of Engineering and Technology",
      location: "Nagpur, Maharashtra, India",
      period: "2023 – 2026",
      grade: "SGPA: 7.00",
      status: "Final Year Undergraduate",
      highlights: [
        "Core Coursework: Data Structures & Algorithms, Object-Oriented Software Design, Operating Systems, Database Management Systems, Computer Networks.",
        "Focus on distributed systems, enterprise Java architectures, and scalable web services."
      ]
    },
    {
      degree: "Diploma in Electronics & Telecommunication Engineering",
      institution: "Anjuman Polytechnic",
      location: "Nagpur, Maharashtra, India",
      period: "2020 – 2023",
      grade: "85.00%",
      status: "Graduated with Distinction",
      highlights: [
        "Strong foundation in digital logic, circuit design, microprocessors, and mathematical foundations."
      ]
    },
    {
      degree: "Secondary School Certificate (SSC 10th)",
      institution: "Unique English School",
      location: "Patur, Dist. Akola, Maharashtra, India",
      period: "2020",
      grade: "88.00%",
      status: "Academic Excellence",
      highlights: [
        "Distinction in Mathematics, Science, and English."
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
      desc: "Engineered and deployed three full-scale systems showcasing microservices architecture, Docker containerization, and responsive frontend design."
    },
    {
      title: "50+ RESTful APIs Developed & Documented",
      desc: "Designed robust REST endpoints with global exception handling (@ControllerAdvice), DTO validation, and clean Swagger/Postman specifications."
    },
    {
      title: "FinTech & Security Integration",
      desc: "Implemented Razorpay payment checkout with cryptographic HMAC-SHA256 signature verification and dual JWT/OAuth2 authentication pipelines."
    },
    {
      title: "Performance & Query Optimization",
      desc: "Achieved ~30% page load acceleration and ~25% lower API response latencies through JPA indexing, query tuning, and asynchronous loading."
    }
  ],

  // Interactive Live REST API Sandbox definitions for the portfolio demo
  apiEndpoints: [
    {
      id: "auth-login",
      name: "User Authentication",
      method: "POST",
      path: "/api/v1/auth/login",
      service: "Auth Microservice (Port 8081)",
      description: "Authenticates credentials and generates a signed HMAC-SHA256 JSON Web Token (JWT) with role permissions.",
      requestBody: {
        email: "faizkhan966563@gmail.com",
        password: "••••••••••••",
        roleRequested: "DEVELOPER"
      },
      responseStatus: 200,
      responseTime: "24ms",
      responseBody: {
        status: "SUCCESS",
        timestamp: "2026-08-19T12:54:00Z",
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
      id: "eureka-health",
      name: "Service Discovery Registry",
      method: "GET",
      path: "/eureka/apps",
      service: "Eureka Discovery (Port 8761)",
      description: "Fetches live health status and instances registered dynamically across the microservice cluster.",
      requestBody: null,
      responseStatus: 200,
      responseTime: "18ms",
      responseBody: {
        applications: {
          application: [
            { name: "API-GATEWAY", instanceCount: 2, status: "UP", port: 8080 },
            { name: "AUTH-SERVICE", instanceCount: 2, status: "UP", port: 8081 },
            { name: "PATIENT-SERVICE", instanceCount: 3, status: "UP", port: 8082 },
            { name: "DOCTOR-SERVICE", instanceCount: 2, status: "UP", port: 8083 },
            { name: "BILLING-SERVICE", instanceCount: 2, status: "UP", port: 8085 }
          ]
        },
        clusterHealth: "HEALTHY",
        uptimeSeconds: 529420
      }
    },
    {
      id: "razorpay-checkout",
      name: "Razorpay Payment Verify",
      method: "POST",
      path: "/api/v1/payments/razorpay/verify",
      service: "Payment Gateway Service",
      description: "Validates HMAC-SHA256 signature against Razorpay secret to confirm transaction security.",
      requestBody: {
        razorpay_order_id: "order_Kz8271nBxQ91",
        razorpay_payment_id: "pay_98b1a37c442",
        razorpay_signature: "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3"
      },
      responseStatus: 200,
      responseTime: "42ms",
      responseBody: {
        paymentStatus: "VERIFIED",
        transactionId: "TXN-2026-94821",
        currency: "INR",
        amountCaptured: 4999.00,
        signatureMatch: true,
        message: "Payment successfully verified and enrollment unlocked."
      }
    },
    {
      id: "query-doctor-slot",
      name: "OpenFeign Inter-Service Query",
      method: "GET",
      path: "/api/v1/appointments/available-slots?doctorId=DOC-102",
      service: "Appointment Service (OpenFeign -> Doctor Service)",
      description: "Inter-service RPC communication via OpenFeign client to query availability in real-time.",
      requestBody: null,
      responseStatus: 200,
      responseTime: "31ms",
      responseBody: {
        doctorId: "DOC-102",
        doctorName: "Dr. Sarah Jenkins",
        specialty: "Cardiology",
        availableSlots: [
          { time: "10:00 AM", slotId: "SLOT-01", status: "AVAILABLE" },
          { time: "11:30 AM", slotId: "SLOT-02", status: "AVAILABLE" },
          { time: "03:00 PM", slotId: "SLOT-03", status: "AVAILABLE" }
        ],
        feignResponseHeader: "X-Feign-Client: DOCTOR-SERVICE-ROUTED"
      }
    }
  ]
};
