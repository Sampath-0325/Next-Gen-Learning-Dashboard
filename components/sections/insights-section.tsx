"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlowCard from "../effects/glow-card";
import { TrendingUp, Award, Clock, Star } from "lucide-react";

const activityData = [
  { day: "Mon", hours: 1.5, xp: 150 },
  { day: "Tue", hours: 2.3, xp: 230 },
  { day: "Wed", hours: 3.0, xp: 300 },
  { day: "Thu", hours: 1.2, xp: 120 },
  { day: "Fri", hours: 4.1, xp: 410 },
  { day: "Sat", hours: 2.8, xp: 280 },
  { day: "Sun", hours: 3.5, xp: 350 },
];

export default function InsightsSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // SVG dimensions
  const width = 600;
  const height = 240;
  const paddingLeft = 50;
  const paddingRight = 20;
  const paddingTop = 20;
  const paddingBottom = 30;

  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;
  const maxVal = 500;

  const points = activityData.map((d, i) => {
    const x = paddingLeft + (i / (activityData.length - 1)) * chartWidth;
    const y = paddingTop + chartHeight - (d.xp / maxVal) * chartHeight;
    return { x, y, ...d };
  });

  // Build the line path
  const linePath = points.reduce(
    (acc, p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`),
    ""
  );

  // Build the area path
  const areaPath = points.length > 0
    ? `${linePath} L ${points[points.length - 1].x} ${paddingTop + chartHeight} L ${points[0].x} ${paddingTop + chartHeight} Z`
    : "";

  const gridLines = [0, 125, 250, 375, 500];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          Learning Insights
        </h1>
        <p className="mt-2 text-zinc-400">
          In-depth analytics on your learning performance, speed, and achievements.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "XP This Week", value: "1,840 XP", icon: Award, color: "text-violet-400" },
          { label: "Study Time", value: "18.4 hrs", icon: Clock, color: "text-cyan-400" },
          { label: "Success Rate", value: "92%", icon: TrendingUp, color: "text-emerald-400" },
          { label: "Certificates", value: "3 Earned", icon: Star, color: "text-amber-400" },
        ].map((stat, idx) => (
          <GlowCard key={idx} className="p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-zinc-400">{stat.label}</span>
              <stat.icon className={stat.color} size={20} />
            </div>
            <p className="mt-4 text-3xl font-extrabold text-white">{stat.value}</p>
          </GlowCard>
        ))}
      </div>

      {/* Activity Chart */}
      <GlowCard className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-white">Weekly Activity (XP vs. Hours)</h3>
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-full bg-violet-500" />
              <span className="text-zinc-400">XP Earned</span>
            </div>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-auto overflow-visible"
          >
            <defs>
              <linearGradient id="chartAreaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Grid Lines */}
            {gridLines.map((val) => {
              const y = paddingTop + chartHeight - (val / maxVal) * chartHeight;
              return (
                <g key={val}>
                  <line
                    x1={paddingLeft}
                    y1={y}
                    x2={width - paddingRight}
                    y2={y}
                    stroke="#27272a"
                    strokeDasharray="4 4"
                    strokeWidth={1}
                  />
                  <text
                    x={paddingLeft - 12}
                    y={y + 4}
                    fill="#71717a"
                    fontSize={10}
                    textAnchor="end"
                    className="font-medium"
                  >
                    {val}
                  </text>
                </g>
              );
            })}

            {/* Area Path */}
            <path d={areaPath} fill="url(#chartAreaGradient)" />

            {/* Stroke Path */}
            <path
              d={linePath}
              fill="none"
              stroke="#8b5cf6"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* X-Axis Labels & Interaction Columns */}
            {points.map((p, idx) => (
              <g key={idx}>
                {/* Day Labels */}
                <text
                  x={p.x}
                  y={height - 10}
                  fill="#71717a"
                  fontSize={11}
                  textAnchor="middle"
                  className="font-medium"
                >
                  {p.day}
                </text>

                {/* Vertical guides on hover */}
                {hoveredIdx === idx && (
                  <line
                    x1={p.x}
                    y1={paddingTop}
                    x2={p.x}
                    y2={paddingTop + chartHeight}
                    stroke="#8b5cf6"
                    strokeOpacity={0.3}
                    strokeWidth={1.5}
                    strokeDasharray="2 2"
                  />
                )}

                {/* Data point circle */}
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={hoveredIdx === idx ? 5 : 3.5}
                  fill={hoveredIdx === idx ? "#a78bfa" : "#8b5cf6"}
                  stroke="#09090b"
                  strokeWidth={2}
                  className="transition-all duration-200"
                />

                {/* Hotspot/Invisible Interactive Rects */}
                <rect
                  x={p.x - chartWidth / (activityData.length - 1) / 2}
                  y={paddingTop}
                  width={chartWidth / (activityData.length - 1)}
                  height={chartHeight}
                  fill="transparent"
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                />
              </g>
            ))}
          </svg>

          {/* Floating Tooltip HTML Overlay */}
          <AnimatePresence>
            {hoveredIdx !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="absolute z-20 pointer-events-none rounded-xl border border-white/[0.08] bg-zinc-950/90 p-3 shadow-xl backdrop-blur-md"
                style={{
                  left: `${((points[hoveredIdx].x - paddingLeft) / chartWidth) * 85 + 8}%`,
                  top: `${((points[hoveredIdx].y - paddingTop) / chartHeight) * 45 + 15}%`,
                }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-violet-400">
                  {points[hoveredIdx].day} Activity
                </p>
                <div className="mt-1.5 space-y-0.5">
                  <p className="text-sm font-bold text-white">
                    🔥 {points[hoveredIdx].xp} XP
                  </p>
                  <p className="text-xs text-zinc-400">
                    ⏱️ {points[hoveredIdx].hours} Hours
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </GlowCard>
    </div>
  );
}
