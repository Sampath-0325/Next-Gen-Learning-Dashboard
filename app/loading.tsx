export default function Loading() {
  return (
    <main className="min-h-screen bg-[#09090B] p-8">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 8 }).map(
          (_, index) => (
            <div
              key={index}
              className="h-52 animate-pulse rounded-3xl bg-zinc-900"
            />
          )
        )}
      </div>
    </main>
  );
}