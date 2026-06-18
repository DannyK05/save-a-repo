"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Dialog } from "@/components/ui/Dialog";
import { ProjectCard } from "./ProjectCard";
import { useFetchRepo } from "@/lib/hooks/useFetchRepo";
import { FILTER_QUERY, REPO_PER_PAGE } from "@/lib/constants";
import { projectRanks } from "../data";
import type { TProjectRank } from "../types";

export function ProjectsGrid() {
  const [activeRank, setActiveRank] = useState<TProjectRank>(projectRanks[0]);
  const [isVisible, setIsVisible] = useState(false);
  const handleIsVisible = () => setIsVisible((prev) => !prev);
  const { data: projects } = useFetchRepo({
    page: 1,
    q: FILTER_QUERY[activeRank.value],
  });

  return (
    <section className="w-full flex flex-col items-center space-y-2 px-4">
      <div className="flex items-center gap-3 flex-wrap">
        {projectRanks.map((rank) => (
          <div
            key={rank.value}
            onClick={() => setActiveRank(rank)}
            className={twMerge(
              "w-40 p-1 border-2 bg-orange-500 font-bold text-center cursor-pointer active:bg-yellow-400 active:scale-90 lg:hover:bg-yellow-400 lg:hover:rotate-6 lg:hover:shadow-lg",
              activeRank == rank && "bg-yellow-400",
            )}
          >
            <span>{rank.label}</span>
          </div>
        ))}
      </div>
      <p className="my-3 font-bold text-xl">{activeRank.description}</p>
      <div className="w-full grid grid-cols-1 gap-y-2 lg:grid-cols-8">
        {projects?.items.map(
          (
            { id, name, description, language, stars, forks, topics, license },
            index,
          ) => (
            <ProjectCard
              handleDetails={handleIsVisible}
              className={index === REPO_PER_PAGE - 1 ? "lg:items-center" : ""}
              key={id}
              index={index}
              name={name}
              description={description ?? ""}
              language={language ?? ""}
              stars={stars}
              forks={forks}
              topics={topics}
              license={license?.name ?? ""}
            />
          ),
        )}
      </div>

      <Dialog isVisible={isVisible} toggleVisibility={handleIsVisible}>
        <h1>Broooo</h1>
      </Dialog>
    </section>
  );
}
