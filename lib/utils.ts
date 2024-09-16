import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function convertAmountToMiliUnits(amount: number) {
  return Math.round(amount * 1000);
}
export function convertAmountFromMiliUnits(amount: number) {
  return amount / 1000;
}
