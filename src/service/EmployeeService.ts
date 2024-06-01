import supabase from "./dbService";
import { User } from "../types/type";

export async function getEmployeeList(): Promise<User[]> {
  const { data, error } = await supabase.from("Employee").select();

  if (error) {
    console.error("Error fetching employee:", error);
    throw new Error("API server error");
  }

  return data;
}

export async function getEmployeeInfo(id: number): Promise<User> {
  const { data, error } = await supabase.from("Employee").select().eq("id", id);

  if (error) {
    console.error("Error fetching: ", error);
    throw new Error("API server error");
  }

  return data[0];
}

export async function updateEmployee(
  id: number,
  values: {
    name: string;
    email: string;
    address: string;
    mobile: string;
    postal: string;
    occupation: string;
    about: string;
  }
) {
  const { data, error } = await supabase
    .from("Employee")
    .update(values)
    .eq("id", id);

  if (error) {
    console.error("Error fetching: ", error);
    throw new Error("API server error");
  }

  return data;
}

// const test = {
//     name: "Bob Williams",
//     email: "bob.williams1@example.com",
//     address: "Lalitpur",
//     mobile: "9877889900",
//     postal: "56600",
//     occupation: "Machine Learning Engineer",
//     about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet. Etiam dictum dapibus ultricies. Sed vel aliquet libero. Nunc a augue fermentum, pharetra ligula sed, aliquam lacus.",
// }

// updateEmployee(5, test)

// getEmployeeInfo(5).then(jobs => {
//     if (jobs) {
//         console.log(jobs);
//         console.log(jobs[0].id);
//     }
// });
