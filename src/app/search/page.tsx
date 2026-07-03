import { AppShell } from "@/components/layout/AppShell";
import { SearchFilters } from "@/components/listings/SearchFilters";

export default function SearchPage() {
  return (
    <AppShell>
      <h1 className="mb-4 text-3xl font-black">البحث عن مساحة</h1>
      <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
        {[
          "مكيف",
          "داخلي",
          "خارجي",
          "موقف سيارة",
          "كراج",
          "مناسب للأثاث",
          "مناسب للسيارات",
        ].map((f) => (
          <span key={f} className="shrink-0 rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm">
            {f}
          </span>
        ))}
      </div>
      <SearchFilters />
    </AppShell>
  );
}
