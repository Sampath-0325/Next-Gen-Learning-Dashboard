"use client";

interface ErrorProps {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}

export default function Error({ error, unstable_retry }: ErrorProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold">
          Dashboard Error
        </h2>

        <button
          onClick={() => unstable_retry()}
          className="rounded-xl bg-violet-600 px-5 py-3 transition-colors hover:bg-violet-700"
        >
          Retry
        </button>
      </div>
    </main>
  );
}