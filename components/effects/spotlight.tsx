"use client";

import { useMotionValue, useSpring } from "framer-motion";
import { motion } from "framer-motion";

export default function Spotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX);
  const y = useSpring(mouseY);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0"
      onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }}
      style={{
        background: `radial-gradient(
          500px circle at ${x.get()}px ${y.get()}px,
          rgba(139,92,246,0.12),
          transparent 80%
        )`,
      }}
    />
  );
}