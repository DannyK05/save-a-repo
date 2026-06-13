import { twMerge } from "tailwind-merge";

type DialogProps = {
  className?: string;
  isVisible: boolean;
  toggleVisibility: () => void;
  children: React.ReactNode;
};

export function Dialog({
  children,
  className,
  isVisible,
  toggleVisibility,
}: DialogProps) {
  return (
    <div
      className={twMerge(
        "w-screen h-screen fixed z-100 top-0 left-0 flex items-center justify-center bg-black/20 transition-all transition-300 ease-in-out translate-x-full",
        isVisible && "translate-x-0",
      )}
    >
      <div className={twMerge("w-1/2 h-4/5 bg-[#EEC046]", className)}>
        {children}
        <button onClick={toggleVisibility}>Close</button>
      </div>
    </div>
  );
}
