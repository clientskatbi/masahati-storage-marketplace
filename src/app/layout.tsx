import type { Metadata, Viewport } from "next";import { Tajawal } from "next/font/google";import "./globals.css";import { ToastHost } from "@/components/layout/ToastHost";import { AppStoreProvider } from "@/components/layout/AppStore";
const tajawal=Tajawal({subsets:["arabic"],weight:["400","500","700","800","900"],variable:"--font-tajawal"});
export const metadata:Metadata={title:"مساحتي | مساحة تخزين قريبة منك",description:"تطبيق تجريبي عربي لسوق التخزين والمواقف الشهرية في الإمارات",applicationName:"مساحتي"};
export const viewport:Viewport={themeColor:"#17324D",width:"device-width",initialScale:1};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ar" dir="rtl" className={tajawal.variable}><body className="min-h-screen bg-background text-foreground antialiased"><AppStoreProvider><ToastHost/>{children}</AppStoreProvider></body></html>}
