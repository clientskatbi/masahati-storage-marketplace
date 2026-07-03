"use client";
import Image from "next/image";
import { useState } from "react";

type Props = { src: string; alt: string; className?: string; priority?: boolean; sizes?: string };
export function SafeImage({ src, alt, className, priority = false, sizes = "(max-width: 768px) 100vw, 50vw" }: Props) {
  const [current, setCurrent] = useState(src || "/images/listings/fallback.svg");
  return (
    <Image
      src={current}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      unoptimized
      className={className || "object-cover"}
      onError={() => setCurrent("/images/listings/fallback.svg")}
    />
  );
}
