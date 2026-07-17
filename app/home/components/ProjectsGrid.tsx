"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Dialog } from "@/components/ui/Dialog";
import { ProjectCard } from "./ProjectCard";
import { useFetchRepo } from "@/lib/hooks/useFetchRepo";
import { FILTER_QUERY, REPO_PER_PAGE } from "@/lib/constants";
import { projectRanks } from "../data";
import type { TProjectRank } from "../types";
import FilterBox from "./FilterBox";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { EmptyScreen } from "@/components/ui/EmptyScreen";
import { useLanguageQuery } from "@/lib/hooks/useLanguageQuery";
import { Pagination } from "./Pagination";
import ProjectDetails from "./ProjectDetails";
import { TRepo } from "@/api/types";

export function ProjectsGrid() {
  const [activeRank, setActiveRank] = useState<TProjectRank>(projectRanks[0]);
  const { languageQuery, handleLanguageChange } = useLanguageQuery();
  const [isVisible, setIsVisible] = useState(false);
  const [page, setPage] = useState(1);
  const [repoDetails, setRepoDetails] = useState<TRepo | null>(null);

  const { data: projects, isLoading } = useFetchRepo({
    page: page,
    q:
      languageQuery !== ""
        ? FILTER_QUERY[activeRank.value] + languageQuery
        : FILTER_QUERY[activeRank.value],
  });

  const handleIsVisible = () => setIsVisible((prev) => !prev);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handleProjectDetails = (project: TRepo) => {
    if (!isVisible) {
      setRepoDetails(project);
    }

    handleIsVisible();
  };

  return (
    <section className="relative w-full flex flex-col items-center space-y-2 px-4">
      <div className="flex items-center gap-3 flex-wrap">
        {projectRanks.map((rank) => (
          <div
            key={rank.value}
            onClick={() => setActiveRank(rank)}
            className={twMerge(
              "w-2/5 p-1 border-2 bg-orange-500 font-bold text-center cursor-pointer active:bg-yellow-400 active:scale-90 lg:w-40 lg:hover:bg-yellow-400 lg:hover:rotate-6 lg:hover:shadow-lg",
              activeRank == rank && "bg-yellow-400",
            )}
          >
            <span>{rank.label}</span>
          </div>
        ))}
      </div>
      <FilterBox handleLanguageChange={handleLanguageChange} />
      <p className="my-3 font-bold text-xl">{activeRank.description}</p>

      {isLoading ? (
        <LoadingScreen />
      ) : projects?.items && projects?.items.length > 0 ? (
        <>
          <Pagination
            page={page}
            totalPages={Math.ceil(projects.total_count / REPO_PER_PAGE)}
            handlePageChange={handlePageChange}
          />
          <div className="w-full grid grid-cols-2 gap-2 lg:grid-cols-8 lg:gap-x-0">
            {projects?.items.map((project, index) => {
              const {
                id,
                name,
                description,
                language,
                stargazers_count,
                forks_count,
                topics,
                license,
              } = project;
              return (
                <ProjectCard
                  handleDetails={() => handleProjectDetails(project)}
                  className={
                    index === REPO_PER_PAGE - 1 ? "lg:items-center" : ""
                  }
                  key={id}
                  index={index}
                  name={name}
                  description={description ?? ""}
                  language={language ?? ""}
                  stars={stargazers_count}
                  forks={forks_count}
                  topics={topics}
                  license={license?.name ?? ""}
                />
              );
            })}
          </div>
          <Pagination
            page={page}
            totalPages={Math.ceil(projects.total_count / REPO_PER_PAGE)}
            handlePageChange={handlePageChange}
          />
        </>
      ) : (
        <EmptyScreen />
      )}

      <Dialog
        title={`Repo #${repoDetails?.id}`}
        isVisible={isVisible}
        toggleVisibility={handleIsVisible}
      >
        <ProjectDetails project={repoDetails} />
      </Dialog>
    </section>
  );
}
