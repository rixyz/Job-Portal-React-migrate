import supabase from "./dbService";
import { Application } from "../types/type";

export async function getApplicationList(): Promise<Application[]> {
  const { data, error } = await supabase
    .from("Application")
    .select()
    .order("status", { ascending: true });

  if (error) {
    console.error("Error fetching jobs:", error);
    throw new Error("API server error");
  }

  return data;
}

export async function updateApplicationStatus(id: number, value: string) {
  const { error } = await supabase
    .from("Application")
    .update({ status: value })
    .eq("id", id);

  if (error) {
    console.error("Error fetching jobs:", error);
    throw new Error("API server error");
  }

  return 1;
}
