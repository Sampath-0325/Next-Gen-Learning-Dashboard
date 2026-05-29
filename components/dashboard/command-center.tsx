import GlowCard from "../effects/glow-card";

interface Props {
  coursesCount: number;
}

export default function CommandCenter({
  coursesCount,
}: Props) {
  return (
    <GlowCard className="p-8">
      <div className="space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-violet-400">
            Learning Command Center
          </p>

          <h1 className="mt-3 text-6xl font-black leading-tight text-white">
            Welcome Back,
            <br />
            Sampath
          </h1>
          <p className="max-w-xl text-zinc-400">
            Track your learning journey, monitor course
            progression, and unlock new milestones through
            data-driven insights.
            </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="rounded-2xl bg-white/5 px-4 py-3">
            <p className="text-xs text-zinc-500">
              Active Courses
            </p>
            <p className="text-xl font-semibold">
              {coursesCount}
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 px-4 py-3">
            <p className="text-xs text-zinc-500">
              Learning Streak
            </p>
            <p className="text-xl font-semibold">
              🔥 12 Days
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 px-4 py-3">
            <p className="text-xs text-zinc-500">
              Completion Rate
            </p>
            <p className="text-xl font-semibold">
              78%
            </p>
          </div>
        </div>
      </div>
    </GlowCard>
  );
}