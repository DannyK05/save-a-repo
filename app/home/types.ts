export type TProjectRankLevel =
  | "All"
  | "Street-Level"
  | "Global"
  | "Cosmic"
  | "Multiversal";

export type TProjectRankLabel =
  | "All"
  | "Local"
  | "Enterprise"
  | "Infrastructure"
  | "Foundational";

export type TProjectRank = {
  level: TProjectRankLevel;
  label: TProjectRankLabel;
  description: string;
  image: string;
};

export type TProject = {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  topics: string[];
  license: string;
  updatedAt: string;
};