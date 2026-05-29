"use client";

import {
  Code2,
  Layers3,
  Database,
  FileCode2,
  BookOpen,
} from "lucide-react";

import { motion } from "framer-motion";
import GlowCard from "../effects/glow-card";
import { Course } from "@/types/course";

interface Props {
  course: Course;
}

const iconMap = {
  Code2,
  Layers3,
  Database,
  FileCode2,
};

export default function CourseCard({
  course,
}: Props) {
  const Icon =
    iconMap[
      course.icon_name as keyof typeof iconMap
    ] || BookOpen;

  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        y: -5,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      <GlowCard className="h-full p-5">
        <Icon
          size={28}
          className="mb-5 text-violet-400"
        />

        <h3 className="text-lg font-semibold">
          {course.title}
        </h3>

        <div className="mt-6">
          <div className="h-2 rounded-full bg-zinc-800">
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${course.progress}%`,
              }}
              transition={{
                duration: 1,
              }}
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
            />
          </div>

          <p className="mt-3 text-sm text-zinc-400">
            {course.progress}% Complete
          </p>
        </div>
      </GlowCard>
    </motion.div>
  );
}