export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-50 p-4" dir="rtl">
      <div className="mx-auto max-w-md space-y-4">
        <div className="h-40 animate-pulse rounded-[2rem] bg-slate-200" />
        <div className="h-24 animate-pulse rounded-[1.5rem] bg-slate-200" />
        <div className="h-24 animate-pulse rounded-[1.5rem] bg-slate-200" />
      </div>
    </main>
  );
}
