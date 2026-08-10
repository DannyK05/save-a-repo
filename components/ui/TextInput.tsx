import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type TextInputProps = ComponentProps<"input"> & {
  className?: string;
  type?: "text" | "number" | "search";
};

export function TextInput({
  className,
  type = "text",
  ...rest
}: TextInputProps) {
  return (
    <input
      className={twMerge("py-2 px-1 border bg-white", className)}
      type={type}
      {...rest}
    />
  );
}
