"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, GraduationCap, Trophy } from "lucide-react";
import GlowCard from "../effects/glow-card";
import { Course } from "@/types/course";

interface CoursesSectionProps {
  courses: Course[];
}

export default function CoursesSection({ courses }: CoursesSectionProps) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          My Courses
        </h1>
        <p className="mt-2 text-zinc-400">
          Manage your enrolled courses, view detailed syllabus, and resume learning.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <motion.div
            key={course.id}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <GlowCard className="flex h-full flex-col p-6">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                  <BookOpen size={24} />
                </div>
                <span className="rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-400">
                  {course.progress === 100 ? "Completed" : "In Progress"}
                </span>
              </div>

              <div className="mt-6 flex-1">
                <h3 className="text-xl font-bold text-white">{course.title}</h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Created {new Date(course.created_at).toLocaleDateString()}
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-400">Progress</span>
                  <span className="font-semibold text-white">{course.progress}%</span>
                </div>
                <div className="h-2 rounded-full bg-zinc-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
