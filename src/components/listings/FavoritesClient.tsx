"use client";
import { listings } from "@/lib/mockData";
import { useAppStore } from "@/components/layout/AppStore";
import { ListingCard } from "./ListingCard";
import { Button } from "@/components/ui/Button";
import { SafeImage } from "@/components/ui/SafeImage";
export function FavoritesClient(){const {favorites}=useAppStore();const data=listings.filter(l=>favorites.includes(l.id));return data.length?<div className="grid gap-4 md:grid-cols-2">{data.map(l=><ListingCard key={l.id} listing={l}/>)}</div>:<div className="premium-card rounded-3xl p-6 text-center"><div className="relative mx-auto mb-4 aspect-[16/10] max-w-xs overflow-hidden rounded-2xl"><SafeImage src="/images/listings/empty-state.svg" alt="لا توجد مفضلة في مساحتي" sizes="320px"/></div><b>لا توجد مساحات مفضلة بعد</b><p className="mt-2 text-sm text-slate-500">احفظ أي مساحة من صفحة التفاصيل أو بطاقة المساحة.</p><Button href="/search" className="mt-4">استعرض المساحات</Button></div>}
