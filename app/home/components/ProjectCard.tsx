import { REPO_PER_PAGE } from "@/lib/constants";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

type ProjectCardProps = {
  name: string;
  className?: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  topics: string[];
  license: string;
  index: number;
  handleDetails: () => void;
};

export function ProjectCard({
  name,
  description,
  className,
  language,
  stars,
  forks,
  topics,
  license,
  index,
  handleDetails,
}: ProjectCardProps) {
  return (
    <div
      onClick={handleDetails}
      className={twMerge(
        "flex flex-col items-center space-y-1 py-2 px-3 border border-black border-2 cursor-pointer bg-[#EEC046] text-black transition-all duration-300 active:-translate-x-4 lg:hover:ml-1 lg:items-start",
        (index + 1) % 5 == 1 && "lg:col-[2/4] z-10",
        (index + 1) % 5 == 2 && "lg:col-[3/5] z-20",
        (index + 1) % 5 == 3 && "lg:col-[4/6] z-30",
        (index + 1) % 5 == 4 && "lg:col-[5/7] z-40",
        (index + 1) % 5 == 0 && "lg:items-center lg:col-[6/8] z-50",
        index < 5 && "lg:row-[1/2]",
        index >= 5 && index < 10 && "lg:row-[2/3]",
        index >= 10 && index < 15 && "lg:row-[3/4]",
        index >= 15 && index < 20 && "lg:row-[4/5]",
        className,
      )}
    >
      {" "}
      <Image
        src={
          "https://i.pinimg.com/control1/736x/87/d2/39/87d239c65732f941a8f2d9cce9f245f9.jpg"
        }
        alt="Cover Image"
        width={200}
        height={200}
      />
      <div
        className={twMerge(
          "flex flex-col items-center space-y-1 lg:items-start",
          index === REPO_PER_PAGE - 1 && "lg:items-center",
          (index + 1) % 5 == 0 && "lg:items-center",
        )}
      >
        <h4 className="text-3xl uppercase">{name}</h4>
        <p className="text-sm">{description.slice(0, 60) + "..."}</p>

        <div className="w-full grid grid-cols-2 text-xs">
          <div className="w-full flex flex-col items-start space-y-1">
            <p className="flex items-center space-x-1">
              <span className="p-1 bg-blue-600 rotate-45 border-2"></span>{" "}
              <span>{language}</span>
            </p>
            <p className="flex items-center space-x-1">
              <span className="p-1 bg-red-600 rotate-45 border-2"></span>{" "}
              <span>{license}</span>
            </p>
          </div>

          <div className="w-full flex flex-col items-center space-y-1">
            <p className="flex items-center space-x-1">
              <span className="p-1 bg-green-300 rotate-45 border-2"></span>
              <span>{stars} stars</span>
            </p>
            <p className="flex items-center space-x-1">
              <span className="p-1 bg-purple-400 rotate-45 border-2"></span>{" "}
              <span>{forks} forks</span>
            </p>
          </div>
        </div>

        {topics.length > 1 ? (
          <div className="flex flex-wrap gap-1 text-xs border border-black border-2 rounded-lg p-1 text-[#DF5045] bg-[#FAC542]">
            {topics.map((topic, index) => (
              <span key={topic} className="capitalize text-xs">
                {topic}
                {index !== REPO_PER_PAGE - 1 && (
                  <span className="font-bold">&middot;</span>
                )}
              </span>
            ))}
          </div>
        ) : (
          <div className="w-full flex items-center justify-center text-xs border border-black border-2 rounded-lg p-1 text-[#DF5045] bg-[#FAC542]">
            <span className="capitalize text-xs">None</span>
          </div>
        )}
      </div>
    </div>
  );
}
