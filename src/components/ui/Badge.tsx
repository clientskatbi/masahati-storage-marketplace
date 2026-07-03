import { cn } from "@/lib/utils";
export function Badge({children,className}:{children:React.ReactNode;className?:string}){return <span className={cn("inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 ring-1 ring-blue-100",className)}>{children}</span>}
