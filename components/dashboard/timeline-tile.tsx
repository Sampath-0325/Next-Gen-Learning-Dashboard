import GlowCard from "../effects/glow-card";

const data = [80, 45, 100, 60, 90, 75, 50];

export default function TimelineTile() {
  return (
    <GlowCard className="p-6">
      <h3 className="mb-6 text-lg font-semibold">
        Learning Activity Timeline
      </h3>

      <div className="space-y-4">
        {data.map((value, index) => (
          <div
            key={index}
            className="flex items-center gap-4"
          >
            <span className="w-10 text-sm text-zinc-500">
              D{index + 1}
            </span>

            <div className="h-3 flex-1 rounded-full bg-zinc-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
                style={{
                  width: `${value}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </GlowCard>
  );
}