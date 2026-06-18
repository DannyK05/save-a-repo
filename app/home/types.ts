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


