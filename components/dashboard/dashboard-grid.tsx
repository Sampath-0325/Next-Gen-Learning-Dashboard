"use client";

import { motion } from "framer-motion";
import CommandCenter from "./command-center";
import CourseCard from "./course-card";
import TimelineTile from "./timeline-tile";
import XPTile from "./xp-tile";
import InsightsTile from "./insights-tile";

import { Course } from "@/types/course";
import {
  containerVariants,
  itemVariants,
} from "@/lib/animations";

interface Props {
  courses: Course[];
}

export default function DashboardGrid({
  courses,
}: Props) {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid gap-6 xl:grid-cols-12"
    >
      {/* Left Column: Command Center, XP, and Timeline */}
      <div className="xl:col-span-8 flex flex-col gap-6">
        <motion.div variants={itemVariants}>
          <CommandCenter coursesCount={courses.length} />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-12">
          <motion.div variants={itemVariants} className="md:col-span-4">
            <XPTile />
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-8">
            <TimelineTile />
          </motion.div>
        </div>
      </div>

      {/* Right Column: Courses Stack */}
      <motion.div
        variants={itemVariants}
        className="xl:col-span-4 flex flex-col gap-4"
      >
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </motion.div>

      {/* Bottom Row: Insights */}
      <motion.div variants={itemVariants} className="xl:col-span-12">
        <InsightsTile />
      </motion.div>
    </motion.section>
  );
}