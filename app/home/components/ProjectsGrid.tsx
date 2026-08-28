"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { FiXCircle } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { useFetchRepo } from "@/lib/hooks/useFetchRepo";
import { useTopicQuery } from "@/lib/hooks/useTopicQuery";
import { useLanguageQuery } from "@/lib/hooks/useLanguageQuery";
import { FILTER_QUERY, REPO_PER_PAGE } from "@/lib/constants";
import { Dialog } from "@/components/ui/Dialog";
import { TextInput } from "@/components/ui/TextInput";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "./ProjectCard";
import { Pagination } from "./Pagination";
import ProjectDetails from "./ProjectDetails";
import FilterBox from "./FilterBox";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { EmptyScreen } from "@/components/ui/EmptyScreen";
import { projectRanks } from "../data";
import type { TProjectRank } from "../types";
import type { TRepo } from "@/api/types";

export function ProjectsGrid() {
  const [activeRank, setActiveRank] = useState<TProjectRank>(projectRanks[0]);
  const { languageQuery, handleLanguageChange } = useLanguageQuery();
  const { topics, topicQuery, addTopic, removeTopic } = useTopicQuery();
  const [trainingWheels, setTrainingWheels] = useState<"on" | "off">("off");

  const [topicValue, setTopicValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [page, setPage] = useState(1);
  const [repoDetails, setRepoDetails] = useState<TRepo | null>(null);

  const { data: projects, isLoading } = useFetchRepo({
    page: page,
    trainingWheels: trainingWheels,
    q: [FILTER_QUERY[activeRank.value], languageQuery, topicQuery]
      .filter(Boolean)
      .join(" "),
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

  const toggleTrainingWheels = (e: "on" | "off") => {
    if (trainingWheels === "off") {
      setTrainingWheels(e);
    } else {
      setTrainingWheels("off");
    }
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
      <FilterBox
        handleLanguageChange={handleLanguageChange}
        toggleTrainingWheels={toggleTrainingWheels}
      />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTopic(topicValue);
          setTopicValue("");
        }}
      >
        <div className="w-full flex flex-wrap items-center gap-1 pb-1">
          {topics.map((topic) => (
            <p
              onClick={() => removeTopic(topic)}
              key={topic}
              className="w-auto flex items-center space-x-1 bg-green-500 border-2 py-1 px-2 cursor-pointer lg:hover:bg-red-500"
            >
              <span>{topic}</span>
              <span>
                <FiXCircle />
              </span>
            </p>
          ))}
        </div>
        <label
          htmlFor="search"
          className="flex items-center space-x-2 px-3 py-2 border-3 bg-orange-500"
        >
          <BiSearch size={20} />
          <TextInput
            id="search"
            value={topicValue}
            onChange={(e) => setTopicValue(e.target.value)}
            type="search"
            placeholder="Search for topics..."
          />
          <Button className="w-auto" type="submit">
            Search
          </Button>
        </label>
      </form>

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
        className="border-3"
        title={`Repo #${repoDetails?.id}`}
        isVisible={isVisible}
        toggleVisibility={handleIsVisible}
      >
        <ProjectDetails project={repoDetails} />
      </Dialog>
    </section>
  );
}
