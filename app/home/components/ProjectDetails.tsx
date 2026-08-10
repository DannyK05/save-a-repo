import { TRepo } from "@/api/types";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function ProjectDetails({ project }: { project: TRepo | null }) {
  return (
    <div className="flex flex-col items-center space-y-2 pt-3 pb-4 px-2">
      <h1 className="text-6xl">{project?.name}</h1>
      <p className="border-b text-xs lg:text-sm">{project?.description}</p>
      <p>
        <span className="text-sm lg:text-base">Default Branch:</span>
        <span className="bg-orange-400 border-2 rounded-md p-1 ml-2 text-xs lg:text-sm">
          {project?.default_branch}
        </span>
      </p>
      {/* New fields to consider: Last pushed, creator */}
      <div className="w-full grid grid-cols-2 text-sm lg:w-1/2">
        <div className="w-full flex flex-col items-start space-y-1">
          <p className="flex items-center space-x-1">
            <span className="p-1 bg-blue-600 rotate-45 border-2"></span>
            <span>{project?.language}</span>
          </p>
          <p className="flex items-center space-x-1">
            <span className="p-1 bg-red-600 rotate-45 border-2"></span>
            <span>{project?.license?.name}</span>
          </p>
        </div>

        <div className="w-full flex flex-col items-center space-y-1">
          <p className="flex items-center space-x-1">
            <span className="p-1 bg-green-300 rotate-45 border-2"></span>
            <span>{project?.stargazers_count.toLocaleString()} stars</span>
          </p>
          <p className="flex items-center space-x-1">
            <span className="p-1 bg-purple-400 rotate-45 border-2"></span>
            <span>{project?.open_issues_count.toLocaleString()} issues</span>
          </p>
        </div>
      </div>

      {project?.topics && project?.topics.length > 0 && (
        <div className="flex flex-col items-center">
          <p className="uppercase text-sm font-semibold lg:text-base">
            Topics:
          </p>
          <div className="w-full flex items-center justify-center flex-wrap gap-y-1 gap-x-2 border-2 rounded-lg  py-1 px-2">
            {project?.topics.map((topic, key) => (
              <span
                key={key}
                className="p-1 rounded-lg border-2 text-xs bg-green-400"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center flex-wrap gap-1 pt-3">
        {project?.homepage && (
          <Button>
            <Link
              className="text-sm lg:text-base"
              href={project?.homepage}
              target="_blank"
              rel="noopener noreferer"
            >
              Visit Site
            </Link>
          </Button>
        )}
        {project?.html_url && (
          <Button>
            <Link
              className="text-sm lg:text-base"
              href={project?.html_url}
              target="_blank"
              rel="noopener noreferer"
            >
              Visit Github
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
