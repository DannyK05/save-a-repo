import type { TProject, TProjectRank } from "./types";

export const projectRanks: TProjectRank[] = [
  {
    level: "All",
    label: "All",
    description: "All available open source projects.",
    image: "all",
  },

  {
    level: "Street-Level",
    label: "Local",
    description:
      "Niche tools, personal scripts, or small utility libraries used by individuals.",
    image: "batman",
  },
  {
    level: "Global",
    label: "Enterprise",
    description:
      "Production-grade tools used by companies worldwide, like Docker or FastAPI.",
    image: "cyborg",
  },
  {
    level: "Cosmic",
    label: "Infrastructure",
    description:
      "Critical, low-level projects that power the internet itself, like Linux or Kubernetes.",
    image: "superman",
  },
  {
    level: "Multiversal",
    label: "Foundational",
    description:
      "Omnipresent languages or protocols that define how software exists, like Git, Python, or HTTP.",
    image: "doctor_fate",
  },
];

export const projects: TProject[] = [
  {
    name: "vectordb-lite",
    description:
      "A lightweight in-process vector database for semantic search and embeddings. No server required.",
    language: "Python",
    languageColor: "#3572A5",
    stars: 4821,
    forks: 312,
    topics: ["embeddings", "vector-search", "ml", "python"],
    license: "MIT",
    updatedAt: "2 days ago",
  },
  {
    name: "hookify",
    description:
      "Zero-dependency React hooks library for common UI patterns — modals, debounce, clipboard, and more.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 2104,
    forks: 178,
    topics: ["react", "hooks", "typescript", "ui"],
    license: "MIT",
    updatedAt: "5 days ago",
  },
  {
    name: "cacheflow",
    description:
      "Distributed caching layer with TTL, LRU eviction, and Redis-compatible API written in Go.",
    language: "Go",
    languageColor: "#00ADD8",
    stars: 3650,
    forks: 241,
    topics: ["caching", "redis", "distributed", "go"],
    license: "Apache-2.0",
    updatedAt: "1 week ago",
  },
  {
    name: "formcraft",
    description:
      "Schema-driven form builder for Vue 3 with validation, multi-step flows, and conditional fields.",
    language: "Vue",
    languageColor: "#41b883",
    stars: 1430,
    forks: 97,
    topics: ["forms", "vue3", "validation", "ui"],
    license: "MIT",
    updatedAt: "3 days ago",
  },
  {
    name: "logpilot",
    description:
      "Structured logging middleware for Node.js with log levels, redaction, and OpenTelemetry support.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 987,
    forks: 64,
    topics: ["logging", "nodejs", "observability", "middleware"],
    license: "ISC",
    updatedAt: "2 weeks ago",
  },
  {
    name: "rustpress",
    description:
      "Blazing fast static site generator built in Rust. Compiles thousands of pages in under a second.",
    language: "Rust",
    languageColor: "#dea584",
    stars: 6310,
    forks: 408,
    topics: ["static-site", "rust", "cli", "ssg"],
    license: "MIT",
    updatedAt: "4 days ago",
  },
];
