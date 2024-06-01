import supabase from "./dbService";
import { Job } from "../types/type";

export async function getJobsList(range: number): Promise<Job[]> {
  const start = (range - 1) * 5;
  const end = start + 4;
  const { data, error } = await supabase
    .from("Jobs")
    .select()
    .range(start, end);

  if (error) {
    console.error("Error fetching jobs:", error);
    throw new Error("API server error");
  }

  return data;
}

export async function getJobsByName(pattern: string): Promise<Job[]> {
  const { data, error } = await supabase
    .from("Jobs")
    .select()
    .ilike("title", `%${pattern}%`);

  if (error) {
    console.error("Error fetching jobs:", error);
    throw new Error("API server error");
  }

  return data;
}

export async function getJobInfo(id: number): Promise<Job> {
  const { data, error } = await supabase.from("Jobs").select().eq("id", id);

  if (error) {
    console.error("Error fetching: ", error);
    throw new Error("API server error");
  }

  return data[0];
}

export async function getJobsByCompany(id: number): Promise<Job[]> {
  const { data, error } = await supabase
    .from("Jobs")
    .select()
    .eq("companyID", id);

  if (error) {
    console.error("Error fetching: ", error);
    throw new Error("API server error: getJobsByCompany");
  }

  return data;
}

export async function createJob(values: Job) {
  const date = new Date(values.deadline);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  values.deadline = date.toLocaleDateString("en-US", options);
  const { data, error } = await supabase.from("Jobs").insert(values);

  if (error) {
    console.error("Error creating job: ", error);
    throw new Error("API server error");
  }

  return data;
}

export async function deleteJob(id: number) {
  const { data, error } = await supabase.from("Jobs").delete().eq("id", id);

  if (error) {
    console.error("Error fetching: ", error);
    throw new Error("API server error");
  }

  return data;
}

// getJobInfo(2).then(jobs => {
//     if (jobs) {
//         console.log(jobs);
//     }
// });
