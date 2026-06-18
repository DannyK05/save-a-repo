export type TProjectRankLabel =
  | "All"
  | "Street-Level"
  | "Global"
  | "Cosmic"
  | "Multiversal";

export type TProjectRankValue =
  | "all"
  | "street"
  | "global"
  | "cosmic"
  | "multiversal";

export type TProjectRank = {
  label: TProjectRankLabel;
  value: TProjectRankValue;
  description: string;
  image: string;
};


