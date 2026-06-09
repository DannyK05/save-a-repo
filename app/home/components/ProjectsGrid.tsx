"use client";
import { useState } from "react";
import { projectRanks, projects } from "../data";
import { TProjectRankLevel } from "../types";
import { twJoin, twMerge } from "tailwind-merge";
import Image from "next/image";

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
            <div
              className={twJoin(
                "flex flex-col items-center space-y-1 py-2 px-3 border border-black border-2 cursor-pointer bg-[#7F2C4A] text-[#FAFFFF] active:-translate-x-4 lg:hover:ml-1 lg:items-start",
                (index + 1) % 5 == 1 && "lg:col-[2/4] z-10",
                (index + 1) % 5 == 2 && "lg:col-[3/5] z-20",
                (index + 1) % 5 == 3 && "lg:col-[4/6] z-30",
                (index + 1) % 5 == 4 && "lg:col-[5/7] z-40",
                (index + 1) % 5 == 0 && "lg:items-center lg:col-[6/8] z-50",
                index < 5 && "lg:row-[1/2]",
                index >= 5 && index < 10 && "lg:row-[2/3]",
                index === topics.length - 1 && "lg:items-center",
              )}
              key={name}
            >
              {" "}
              <Image
                src={
                  "https://i.pinimg.com/736x/41/ca/ea/41caea8c7118a40863691703dfe22e1f.jpg"
                }
                alt="Cover Image"
                width={200}
                height={200}
              />{" "}
              <div
                className={twJoin(
                  "flex flex-col items-center space-y-1 lg:items-start",
                  index === topics.length - 1 && "lg:items-center",
                  (index + 1) % 5 == 0 && "lg:items-center",
                )}
              >
                <h3 className="text-xl font-extrabold uppercase">{name}</h3>
                <p className="text-sm">{description.slice(0, 60) + "..."}</p>
                <div className="w-full grid grid-cols-2 text-xs">
                  <div className="w-full flex flex-col items-center space-y-1">
                    <p className="flex items-center space-x-1">
                      <span className="p-1 bg-yellow-300 rotate-45"></span>
                      <span>{stars} stars</span>
                    </p>
                    <p className="flex items-center space-x-1">
                      <span className="p-1 bg-orange-400 rotate-45"></span>{" "}
                      <span>{forks} forks</span>
                    </p>
                  </div>
                  <div className="w-full flex flex-col items-start space-y-1">
                    <p className="flex items-center space-x-1">
                      <span className="p-1 bg-blue-600 rotate-45"></span>{" "}
                      <span>{language}</span>
                    </p>
                    <p className="flex items-center space-x-1">
                      <span className="p-1 bg-red-600 rotate-45"></span>{" "}
                      <span>{license}</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-xs border border-black border-2 rounded-lg p-1 text-[#7F2C4A] bg-[#FAC542]">
                  {topics.map((topic, index) => (
                    <span key={topic} className="capitalize text-">
                      {topic}{" "}
                      {index !== topics.length - 1 && (
                        <span className="font-bold">&middot;</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
