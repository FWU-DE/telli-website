import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classNames: Array<ClassValue>) {
  return twMerge(clsx(classNames));
}
