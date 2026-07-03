"use client";
import { Heart } from "lucide-react";
import { useState } from "react";

export function FavoriteButton() {
  const [saved, setSaved] = useState(false);
  return (
    <button
      aria-label="حفظ في المفضلة"
      onClick={() => {
        setSaved((v) => !v);
        window.dispatchEvent(new CustomEvent("toast", { detail: saved ? "تمت إزالة المفضلة" : "تم حفظ المساحة في المفضلة" }));
      }}
      className="rounded-full bg-red-50 p-3 text-red-500"
    >
      <Heart className={saved ? "fill-red-500" : ""} />
    </button>
  );
}
