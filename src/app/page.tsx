import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SafeImage } from "@/components/ui/SafeImage";
import { listings } from "@/lib/mockData";
import { ListingCard } from "@/components/listings/ListingCard";
import { Search, ShieldCheck, WalletCards } from "lucide-react";

export default function Home() {
  return (
    <AppShell>
      <section className="relative overflow-hidden rounded-[2.2rem] bg-gradient-to-br from-primary via-[#214866] to-secondary p-6 text-white shadow-xl">
        <div className="relative z-10 max-w-xl">
          <Badge className="bg-white/15 text-white ring-white/20">مساحتي Prototype</Badge>
          <h1 className="mobile-title mt-5 text-4xl font-black leading-tight">مساحة تخزين قريبة منك… أو دخل إضافي من مساحتك الفارغة</h1>
          <p className="mt-3 text-white/85">سوق تجريبي للتخزين والمواقف الشهرية في الإمارات، بدون دفع حقيقي وبدون تسجيل إلزامي.</p>
          <div className="mt-6 grid grid-cols-2 gap-3"><Button href="/search" className="bg-white text-primary">أبحث عن مساحة</Button><Button href="/host/new" variant="secondary">أضف مساحتك</Button></div>
        </div>
        <div className="pointer-events-none relative z-0 mt-6 aspect-[16/9] overflow-hidden rounded-[1.7rem] border border-white/15 shadow-2xl md:absolute md:left-6 md:top-6 md:mt-0 md:w-[42%]">
          <SafeImage src="/images/listings/hero-storage.svg" alt="رسم توضيحي لتطبيق مساحتي ومساحات التخزين" priority sizes="(max-width: 768px) 100vw, 420px" />
        </div>
      </section>

      <section className="mt-5 grid gap-3 sm:grid-cols-3">{[[Search, "أقرب وأرخص من التخزين التقليدي"], [ShieldCheck, "مساحات موثوقة بتقييمات"], [WalletCards, "حجز شهري مرن"]].map(([Icon, t]) => <div key={t as string} className="premium-card rounded-[1.5rem] p-4"><Icon className="mb-3 h-7 w-7 text-primary" /><b>{t as string}</b></div>)}</section>

      <section className="mt-8"><h2 className="mb-3 text-2xl font-black">كيف يعمل التطبيق؟</h2><div className="grid gap-3 sm:grid-cols-3">{["ابحث عن مساحة قريبة", "قارن الأسعار والمزايا", "احجز وتواصل مع المضيف"].map((x, i) => <div key={x} className="premium-card overflow-hidden rounded-[1.5rem]"><div className="relative h-24"><SafeImage src={["/images/listings/storage-room.svg", "/images/listings/car-parking.svg", "/images/listings/boxes-storage.svg"][i]} alt={x} sizes="33vw" /></div><div className="p-4"><span className="text-3xl font-black text-blue-100">0{i + 1}</span><p className="font-black">{x}</p></div></div>)}</div></section>

      <section className="mt-8 grid gap-4 overflow-hidden rounded-[2rem] bg-primary p-5 text-white shadow-xl md:grid-cols-[1fr_280px]"><div><h2 className="text-2xl font-black">حوّل مساحتك الفارغة إلى دخل شهري</h2><p className="mt-2 text-white/75">أضف كراج، موقف، غرفة أو مستودع وحدد السعر وأوقات الوصول.</p><Button href="/host" variant="secondary" className="mt-4">لوحة المضيف</Button></div><div className="relative min-h-40 overflow-hidden rounded-[1.5rem]"><SafeImage src="/images/listings/garage-dubai.svg" alt="رسم كراج ومساحة فارغة يمكن تأجيرها" sizes="280px" /></div></section>

      <section className="mt-8"><h2 className="mb-3 text-2xl font-black">مساحات مقترحة</h2><div className="grid gap-4 md:grid-cols-2">{listings.slice(0, 4).map((l, i) => <ListingCard key={l.id} listing={l} priority={i < 2} />)}</div></section>
    </AppShell>
  );
}
