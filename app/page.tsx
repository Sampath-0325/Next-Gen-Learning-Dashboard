"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/layout/sidebar";
import GridBackground from "@/components/effects/grid-background";
import DashboardSection from "@/components/sections/dashboard-section";
import CoursesSection from "@/components/sections/courses-section";
import InsightsSection from "@/components/sections/insights-section";
import SettingsSection from "@/components/sections/settings-section";
import { getCourses } from "@/lib/supabase/get-courses";
import { Course } from "@/types/course";

export default function Home() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    async function load() {
      const data = await getCourses();
      setCourses(data);
    }
    load();
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardSection courses={courses} />;
      case "courses":
        return <CoursesSection courses={courses} />;
      case "analytics":
        return <InsightsSection />;
      case "settings":
        return <SettingsSection />;
      default:
        return <DashboardSection courses={courses} />;
    }
  };

  return (
    <main className="relative flex min-h-screen text-white pb-16 md:pb-0">
      <GridBackground />

      <Sidebar activeId={activeTab} setActiveId={setActiveTab} />

      <section className="flex-1 p-8 overflow-y-auto">
        {renderContent()}
      </section>
    </main>
  );
}