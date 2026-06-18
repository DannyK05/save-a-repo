import type {TProjectRank } from "./types";

export const projectRanks: TProjectRank[] = [
  {
    label: "All",
    value: "all",
    description: "All available open source projects.",
    image: "all",
  },

  {
    label: "Street-Level",
    value: "street",
    description:
      "Niche tools, personal scripts, or small utility libraries used by individuals.",
    image: "batman",
  },
  {
    label: "Global",
    value: "global",
    description:
      "Production-grade tools used by companies worldwide, like Docker or FastAPI.",
    image: "cyborg",
  },
  {
    label: "Cosmic",
    value: "cosmic",
    description:
      "Critical, low-level projects that power the internet itself, like Linux or Kubernetes.",
    image: "superman",
  },
  {
    label: "Multiversal",
    value: "multiversal",
    description:
      "Omnipresent languages or protocols that define how software exists, like Git, Python, or HTTP.",
    image: "doctor_fate",
  },
];


