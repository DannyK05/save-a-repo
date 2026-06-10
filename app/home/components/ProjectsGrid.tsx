"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { ProjectCard } from "./ProjectCard";
import { projectRanks, projects } from "../data";
import type { TProjectRankLevel } from "../types";

export function ProjectsGrid() {
  const [activeRanks, setActiveRank] = useState<TProjectRankLevel>("All");
  return (
    <section className="w-full flex flex-col items-center space-y-2 px-4">
      <div className="flex items-center gap-3 flex-wrap">
        {projectRanks.map(({ level }) => (
          <div
            key={level}
            onClick={() => setActiveRank(level)}
            className={twMerge(
              "w-40 p-1 border-2 bg-orange-500 font-bold text-center cursor-pointer active:bg-yellow-400 active:scale-90 lg:hover:bg-yellow-400 lg:hover:rotate-6 lg:hover:shadow-lg",
              activeRanks == level && "bg-yellow-400",
            )}
          >
            <span>{level}</span>
          </div>
        ))}
      </div>
      <div className="w-full grid grid-cols-1 gap-y-2 lg:grid-cols-8">
        {projects.map(
          (
            { name, description, language, stars, forks, topics, license },
            index,
          ) => (
            <ProjectCard
              className={index === projects.length - 1 ? "lg:items-center" : ""}
              key={index}
              index={index}
              name={name}
              description={description}
              language={language}
              stars={stars}
              forks={forks}
              topics={topics}
              license={license}
            />
          ),
        )}
      </div>
    </section>
  );
}
