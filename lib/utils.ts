import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function convertAmountToMiliUnits(amount: number) {
  return amount;
}
export function convertAmountFromMiliUnits(value: number) {
  return value;
}
export function formatCurrency(value: number) {


  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  }).format(value);
}
