import GlowCard from "../effects/glow-card";

export default function XPTile() {
  return (
    <GlowCard className="p-6">
      <h3 className="text-lg font-semibold">
        Today's XP
      </h3>

      <p className="mt-4 text-5xl font-bold">
        +120
      </p>

      <div className="mt-5 h-2 rounded-full bg-zinc-800">
        <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
      </div>

      <p className="mt-3 text-zinc-400">
        Level 7
      </p>
    </GlowCard>
  );
}