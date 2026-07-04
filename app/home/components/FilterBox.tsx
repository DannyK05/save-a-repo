import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { languageFilters } from "../data";

type FilterBoxProps = { handleLanguageChange: (e: string) => void };

export default function FilterBox({ handleLanguageChange }: FilterBoxProps) {
  const [openFilters, setOpenFilters] = useState(false);
  const handleOpenFilters = () => {
    setOpenFilters((prev) => !prev);
  };

  return (
    <aside
      className={twMerge(
        "flex flex-col items-center top-0 bg-orange-500 cursor-pointer active:bg-yellow-400 lg:hover:bg-yellow-400 lg:hover:shadow-lg",
        openFilters
          ? "bg-yellow-400 border-2 p-2"
          : "bg-orange-500 active:scale-90 lg:hover:rotate-6",
      )}
    >
      <button
        className="py-1 px-4 border-2 cursor-pointer bg-orange-500 active:bg-yellow-500 active:scale-90"
        type="button"
        onClick={handleOpenFilters}
      >
        {openFilters ? "Close" : "Other Filters"}
      </button>

      <div
        className={twMerge(
          "flex-col items-center space-y-2 hidden",
          openFilters && "flex",
        )}
      >
        <div className="flex flex-col items-start gap-1">
          <h4 className="bangers text-xl">Filter by languages:</h4>
          <div className="flex items-center gap-x-2">
            {languageFilters.map(({ label, value }) => (
              <label className="flex items-center space-x-1" key={value}>
                <input
                  value={value}
                  name="languages"
                  type="checkbox"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleLanguageChange(e.target.value)
                  }
                />
                {label}
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
