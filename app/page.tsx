import { ProjectsGrid } from "@/app/home/components/ProjectsGrid";

export default function Home() {
  return (
    <main>
      <div className="h-80 flex items-center justify-center border-b-4 shadow-sm">
        <h1 className="text-8xl">Save A Repo Today</h1>
      </div>
      <div className="flex flex-col items-center space-y-4 py-4">
        <h1 className="text-3xl underline">Available Projects</h1>
        <ProjectsGrid />
      </div>
    </main>
  );
}
