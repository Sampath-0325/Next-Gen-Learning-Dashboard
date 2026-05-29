import { createSupabaseServerClient } from "./server";
import { Course } from "@/types/course";

export async function getCourses(): Promise<Course[]> {
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Failed to fetch courses:", error.message);
    return [];
  }

  return (data as Course[]) || [];
}