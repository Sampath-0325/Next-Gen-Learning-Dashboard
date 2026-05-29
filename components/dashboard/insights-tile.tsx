import GlowCard from "../effects/glow-card";

export default function InsightsTile() {
  return (
    <GlowCard className="p-6">
      <h3 className="text-lg font-semibold">
        AI Insights
      </h3>

      <div className="mt-6 space-y-4">
        <div>
          <p className="text-zinc-500 text-sm">
            Strongest Skill
          </p>
          <p>React Development</p>
        </div>

        <div>
          <p className="text-zinc-500 text-sm">
            Focus Area
          </p>
          <p>System Design</p>
        </div>

        <div>
          <p className="text-zinc-500 text-sm">
            Weekly Growth
          </p>
          <p className="text-green-400">
            +14%
          </p>
        </div>
      </div>
    </GlowCard>
  );
}