"use client";
import { FiGithub } from "react-icons/fi";

export default function Page() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-1/2 min-h-1/3 flex flex-col items-center justify-center bg-red-400 border-4 py-2">
        <h1 className="text-3xl mb-4">Sign Up / Sign In</h1>
        <h2 className="font-bold text-xl">Continue with Github</h2>
        <button
          title="Continue with Github"
          type="button"
          className="w-50 flex items-center justify-center bg-yellow-400 border-2 py-2 px-4 cursor-pointer active:border-4"
        >
          <FiGithub size={30} />
        </button>
      </div>
    </div>
  );
}
