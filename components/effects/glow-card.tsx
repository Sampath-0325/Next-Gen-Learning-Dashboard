import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlowCard({
  children,
  className = "",
}: GlowCardProps) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.06]
        bg-white/[0.02]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-violet-500/30
        hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.15)]
        ${className}
      `}
    >
      {/* Subtle gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.03] via-transparent to-cyan-500/[0.03]" />

      {/* Hover glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}