"use client";
import { createContext, useContext, useState } from "react";
import { bookings as seedBookings, conversations, listings, type Listing } from "@/lib/mockData";

type Role = "guest" | "renter" | "host" | "admin";
type Booking = { id: string; listingId: string; space: string; date: string; price: number; status: string };
type Msgs = Record<string, string[]>;
type Admin = Record<string, string>;
type Ctx = {
  role: Role;
  setRole: (r: Role) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  bookings: Booking[];
  addBooking: (b: Booking) => void;
  hostListings: Listing[];
  addHostListing: (l: Listing) => void;
  messages: Msgs;
  sendMessage: (id: string, m: string) => void;
  admin: Admin;
  setAdminStatus: (id: string, s: string) => void;
  requireRole: (roles: Role[], action: string) => boolean;
  logout: () => void;
};

const C = createContext<Ctx | null>(null);
const initialMessages = Object.fromEntries(conversations.map((c) => [c.id, c.messages]));
const read = <T,>(k: string, d: T): T => {
  if (typeof window === "undefined") return d;
  try {
    const raw = localStorage.getItem(k);
    return raw ? (JSON.parse(raw) as T) : d;
  } catch {
    return d;
  }
};
const save = (k: string, v: unknown) => {
  if (typeof window !== "undefined") localStorage.setItem(k, JSON.stringify(v));
};
const toast = (detail: string) => {
  if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("toast", { detail }));
};

export function AppStoreProvider({ children }: { children: React.ReactNode }) {
  const [role, setRoleState] = useState<Role>(() => read("masahati:role", "guest"));
  const [favorites, setFavorites] = useState<string[]>(() => read("masahati:favorites", []));
  const [bookings, setBookings] = useState<Booking[]>(() => read("masahati:bookings", seedBookings));
  const [hostListings, setHostListings] = useState<Listing[]>(() => read("masahati:hostListings", []));
  const [messages, setMessages] = useState<Msgs>(() => read("masahati:messages", initialMessages));
  const [admin, setAdmin] = useState<Admin>(() => read("masahati:admin", {}));

  const setRole = (r: Role) => {
    setRoleState(r);
    save("masahati:role", r);
    toast(`تم التبديل إلى دور ${r === "guest" ? "زائر" : r === "renter" ? "مستأجر" : r === "host" ? "مضيف" : "مدير"}`);
  };
  const toggleFavorite = (id: string) =>
    setFavorites((f) => {
      const n = f.includes(id) ? f.filter((x) => x !== id) : [...f, id];
      save("masahati:favorites", n);
      toast(f.includes(id) ? "تمت إزالة المساحة من المفضلة" : "تم حفظ المساحة في المفضلة");
      return n;
    });
  const addBooking = (b: Booking) =>
    setBookings((v) => {
      const n = [b, ...v];
      save("masahati:bookings", n);
      save("masahati:lastBooking", b);
      return n;
    });
  const addHostListing = (l: Listing) =>
    setHostListings((v) => {
      const n = [l, ...v];
      save("masahati:hostListings", n);
      return n;
    });
  const sendMessage = (id: string, m: string) =>
    setMessages((v) => {
      const n = { ...v, [id]: [...(v[id] || conversations.find((c) => c.id === id)?.messages || []), m] };
      save("masahati:messages", n);
      return n;
    });
  const setAdminStatus = (id: string, s: string) =>
    setAdmin((a) => {
      const n = { ...a, [id]: s };
      save("masahati:admin", n);
      toast(`تم تحديث الحالة: ${s}`);
      return n;
    });
  const requireRole = (roles: Role[], action: string) => {
    if (roles.includes(role)) return true;
    toast(`يرجى الدخول كتجربة قبل ${action}`);
    return false;
  };
  const logout = () => {
    setRole("guest");
    save("masahati:favorites", []);
    setFavorites([]);
  };

  return (
    <C.Provider value={{ role, setRole, favorites, toggleFavorite, bookings, addBooking, hostListings, addHostListing, messages, sendMessage, admin, setAdminStatus, requireRole, logout }}>
      {children}
    </C.Provider>
  );
}

export function useAppStore() {
  const c = useContext(C);
  if (!c) throw new Error("AppStoreProvider missing");
  return c;
}
export const allListings = () => [...listings, ...read<Listing[]>("masahati:hostListings", [])];
