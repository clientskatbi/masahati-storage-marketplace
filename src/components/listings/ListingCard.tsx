import Link from "next/link";
import { Star, MapPin, Ruler, ShieldCheck } from "lucide-react";
import { Listing } from "@/lib/mockData";
import { aed } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { SafeImage } from "@/components/ui/SafeImage";
import { FavoriteButton } from "./FavoriteButton";

function tone(b: string) {
  return b.includes("موث") ? "verified" : b.includes("مكيف") ? "cool" : b.includes("جديد") ? "new" : b.includes("خصم") ? "warning" : "default";
}

export function ListingCard({ listing, priority = false }: { listing: Listing; priority?: boolean }) {
  return (
    <article className="premium-card overflow-hidden rounded-[1.8rem]">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <SafeImage src={listing.images[0]} alt={listing.imageAlt || `صورة ${listing.title}`} priority={priority} className="object-cover transition duration-500 hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-slate-950/10" />
        <div className="absolute right-3 top-3 flex flex-wrap gap-2">
          <Badge tone={tone(listing.badge) as never}>{listing.badge}</Badge>
          {listing.verified && <Badge tone="verified">موثّق</Badge>}
        </div>
        <div className="absolute left-3 top-3"><FavoriteButton id={listing.id} /></div>
      </div>
      <div className="space-y-3 p-4">
        <div>
          <h3 className="text-lg font-black text-foreground">{listing.title}</h3>
          <p className="mt-1 flex items-center gap-1 text-sm text-slate-500"><MapPin className="h-4 w-4" />{listing.city}، {listing.area}</p>
        </div>
        <div className="grid grid-cols-3 gap-2 text-sm">
          <span className="rounded-2xl bg-accent p-2 font-black text-primary">{aed(listing.price)}<small className="block text-slate-500">شهريًا</small></span>
          <span className="rounded-2xl bg-muted p-2"><Ruler className="inline h-4 w-4" /> {listing.sqm} م²</span>
          <span className="rounded-2xl bg-muted p-2"><Star className="inline h-4 w-4 fill-warning text-warning" /> {listing.rating}</span>
        </div>
        <div className="flex flex-wrap gap-2">{listing.features.slice(0, 3).map((f) => <Badge key={f} className="bg-muted text-slate-600 ring-border">{f}</Badge>)}</div>
        <Link href={`/listings/${listing.id}`} className="flex min-h-12 items-center justify-center rounded-2xl bg-primary text-sm font-black text-white"><ShieldCheck className="ml-2 h-4 w-4" />عرض التفاصيل</Link>
      </div>
    </article>
  );
}
