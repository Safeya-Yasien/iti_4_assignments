export async function fetchInstructors() {
  console.log("Fetching instructors...");
  const res = await fetch("https://dummyjson.com/users");
  if (!res.ok) throw new Error("Failed to fetch");
  return await res.json();
}
