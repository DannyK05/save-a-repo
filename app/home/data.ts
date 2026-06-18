import type {TProjectRank } from "./types";

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


