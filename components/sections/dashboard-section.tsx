"use client";

import DashboardGrid from "@/components/dashboard/dashboard-grid";
import { Course } from "@/types/course";

interface DashboardSectionProps {
  courses: Course[];
}

export default function DashboardSection({ courses }: DashboardSectionProps) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          Dashboard
        </h1>
        <p className="mt-2 text-zinc-400">
          Welcome back! Here is a summary of your learning progress and metrics.
        </p>
      </div>

      <DashboardGrid courses={courses} />
    </div>
  );
}
