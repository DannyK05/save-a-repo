import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps = ComponentProps<"button"> & {
  variant?: "default" | "destructive" | "ghost";
};
export function Button({
  children,
  className,
  variant = "default",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        "w-30 p-1 border-3 font-bold text-center cursor-pointer active:scale-90 lg:hover:shadow-lg",
        className,
        variant === "default" && "bg-blue-400 active:bg-red-400",
        variant === "destructive" && "bg-red-400 active:bg-blue-400",
        variant === "ghost" && "bg-white-400 active:bg-transparent",
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
