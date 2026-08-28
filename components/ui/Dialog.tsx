import { twMerge } from "tailwind-merge";
import { Button } from "./Button";

type DialogProps = {
  className?: string;
  title: string;
  isVisible: boolean;
  toggleVisibility: () => void;
  children: React.ReactNode;
};

export function Dialog({
  children,
  title,
  className,
  isVisible,
  toggleVisibility,
}: DialogProps) {
  return (
    <div
      onClick={toggleVisibility}
      className={twMerge(
        "w-screen h-screen fixed z-100 top-0 left-0 flex items-center justify-center bg-black/40 transition-all transition-300 ease-in-out translate-x-full",
        isVisible && "translate-x-0",
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={twMerge(
          "w-9/10 max-h-7/10 flex flex-col space-y-1 bg-[#EEC046] lg:w-3/5 lg:h-4/5",
          className,
        )}
      >
        <div className="w-full flex items-center space-x-8 border-b px-2 py-1">
          <Button className="w-20 text-sm lg:text-base" variant="destructive" onClick={toggleVisibility}>
            Close
          </Button>
          <h2 className="text-lg lg:text-3xl">{title}</h2>
        </div>
        <div className="w-full h-95 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
