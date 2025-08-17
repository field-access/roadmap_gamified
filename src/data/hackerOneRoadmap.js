export const islandsData = [ 
  {
    id: 1,
    name: "Beginner Shores",
    level: "0-10",
    emoji: "🏖️",
    color: "from-blue-400 to-cyan-400",
    topics: [
      "HTML, CSS (💅 Style Bay)",
      "Bash & Terminal (🖥️ Shell Sands)", 
      "Git & GitHub (🌐 Version Control Cove)",
      "JS Basics (⚙️ JavaScript Jungle)",
      "DOM Manipulation (🌴 DOM Lagoon)",
      "Pure Frontend TODO App (🧪 First Boss Battle)"
    ],
    unlock: "Access to JS async mechanics",
    goal: "Learn the basics and build muscle memory"
  },
  {
    id: 2,
    name: "Async Archipelago", 
    level: "11-20",
    emoji: "⚡",
    color: "from-purple-400 to-pink-400",
    topics: [
      "Callbacks, Promises, Async/Await",
      "JS Runtimes (Node, Bun, CF Workers)",
      "HTTP Servers, REST",
      "Node.js Core (fs, streams, clusters)",
      "Express.js Basics",
      "Postman + REST Client Practice"
    ],
    unlock: "Build your own backend API",
    goal: "Master JS async behavior & runtimes"
  },
  {
    id: 3,
    name: "Database Dunes",
    level: "21-30", 
    emoji: "🏜️",
    color: "from-orange-400 to-red-400",
    topics: [
      "PostgreSQL Basics (Schemas, Types, Joins)",
      "Indexes, Transactions, EXPLAIN (🔎 Query Oasis)",
      "SQL vs NoSQL, MongoDB CRUD",
      "ORM Basics: Prisma & Drizzle",
      "Migrations & Seed Scripts"
    ],
    unlock: "Build a Course Selling API (Postgres + Express)",
    goal: "Store & retrieve data like a boss",
    sideQuest: "Secret Scroll: Isolation levels, locking"
  },
  {
    id: 4,
    name: "React Reef",
    level: "31-40",
    emoji: "🪸",
    color: "from-teal-400 to-green-400", 
    topics: [
      "React Core (JSX, Components, useState, useEffect)",
      "Routing (React Router)",
      "Context API & Custom Hooks",
      "State Management (Recoil/Zustand)",
      "Styling: Tailwind, Shadcn, MUI",
      "Basic Security: CSP, Escaping, Sanitization"
    ],
    unlock: "Convert DOM App to React",
    goal: "Build interactive frontends"
  },
  {
    id: 5,
    name: "TypeScript Tundra",
    level: "41-50",
    emoji: "🧊",
    color: "from-blue-500 to-indigo-500",
    topics: [
      "TS Basics, Types, Interfaces",
      "Generics, Utility Types (Partial, Exclude)",
      "TS in React + Custom Hooks",
      "Runtime Validation with Zod",
      "Type-safe API clients"
    ],
    unlock: "Build a TS + React UI Library",
    goal: "Type-safe your universe"
  },
  {
    id: 6,
    name: "Fullstack Fjord", 
    level: "51-60",
    emoji: "🏔️",
    color: "from-indigo-500 to-purple-600",
    topics: [
      "Connecting FE ↔ BE (API Contracts)",
      "Auth (JWT, Cookies, NextAuth/OAuth2)",
      "Next.js (SSR, ISR, SSG, API Routes)",
      "GraphQL Basics (Apollo/urql)",
      "Monorepos (Turborepo, PNPM Workspaces)"
    ],
    unlock: "Build Paytm Clone (End-to-End)",
    goal: "Connect everything end-to-end"
  },
  {
    id: 7,
    name: "Rails Range",
    level: "61-70",
    emoji: "🛤️",
    color: "from-rose-500 to-red-600",
    topics: [
      "Ruby Language Essentials (🧩 Blocks, Modules, OOP)",
      "Ruby on Rails (MVC, Routing, ActiveRecord)",
      "AuthZ/AuthN (Devise, Pundit/CanCanCan)",
      "Background Jobs (Sidekiq) & Caching",
      "GraphQL Ruby + Postgres",
      "RSpec & FactoryBot (Testing)"
    ],
    unlock: "Build a Rails API + React Dashboard",
    goal: "Ship secure, maintainable services with Rails"
  },
  {
    id: 8,
    name: "Security Sands",
    level: "71-80",
    emoji: "🛡️",
    color: "from-pink-500 to-rose-500",
    topics: [
      "OWASP Top 10 (XSS, SQLi, CSRF, SSRF, IDOR)",
      "Recon & Burp Suite Workflow",
      "Secrets Management, HTTPS/TLS, Headers (CSP/HSTS)",
      "OAuth2/OIDC, SSO Flows & Pitfalls",
      "Secure Coding: Input Validation, Output Encoding",
      "Cloud Security Basics (IAM, Least Privilege)"
    ],
    unlock: "Exploit + patch a demo app; write first vuln report",
    goal: "Think like attacker & defender"
  },
  {
    id: 9,
    name: "Cloud & Scale Summit",
    level: "81-90",
    emoji: "☁️",
    color: "from-gray-500 to-slate-600", 
    topics: [
      "AWS Core (EC2, S3, RDS, IAM, VPC)",
      "IaC (Terraform/CloudFormation), CICD",
      "Queues & Streams (SQS/Kafka), Redis Caching",
      "Observability (Prometheus, Grafana, OpenTelemetry)",
      "Rate Limiting, WAF, DDoS Basics",
      "GraphQL at Scale (N+1, Caching, Federation)"
    ],
    unlock: "Deploy a multi-tenant SaaS on AWS",
    goal: "Operate reliably at scale"
  },
  {
    id: 10,
    name: "Staff Engineer Summit",
    level: "91-100", 
    emoji: "🏆",
    color: "from-yellow-400 to-orange-500",
    topics: [
      "System Design (capstone: Bug Bounty/Triage Platform)",
      "AI Red Teaming & LLM Security (Prompt Injection, Exfiltration)",
      "Automated Triage: AI-assisted dedup & severity scoring",
      "Cross-squad Leadership, RFCs, Tech Strategy",
      "Public Work: Bug writeups, OSS, Talks",
      "Interview Prep: Coding, Design, Security Case Studies"
    ],
    unlock: "Ship portfolio + Rails/React/Postgres capstone and apply",
    goal: "Operate at Staff-level impact in offensive security SaaS"
  }
];
