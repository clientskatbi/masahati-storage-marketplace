import type { Metadata, Viewport } from "next";import { Tajawal } from "next/font/google";import "./globals.css";import { ToastHost } from "@/components/layout/ToastHost";
const tajawal=Tajawal({subsets:["arabic"],weight:["400","500","700","800","900"],variable:"--font-tajawal"});
export const metadata:Metadata={title:"Masahati | مساحة تخزين قريبة منك",description:"Prototype PWA عربي لسوق التخزين والمواقف الشهرية في الإمارات",applicationName:"Masahati"};
export const viewport:Viewport={themeColor:"#1d4ed8",width:"device-width",initialScale:1};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ar" dir="rtl" className={tajawal.variable}><body className="min-h-screen bg-slate-50 text-slate-900 antialiased"><ToastHost/>{children}</body></html>}
