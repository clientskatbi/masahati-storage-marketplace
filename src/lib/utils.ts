import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
export const aed = (value: number) => new Intl.NumberFormat("ar-AE", { style: "currency", currency: "AED", maximumFractionDigits: 0 }).format(value);
export const bookingTotal = (monthlyPrice: number) => { const serviceFee = Math.round(monthlyPrice * 0.05); const optionalProtection = 20; return { serviceFee, optionalProtection, total: monthlyPrice + serviceFee + optionalProtection }; };
