const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";

export async function fetchStats() {
  const res = await fetch(`${API}/stats`);
  if (!res.ok) throw new Error("Failed to fetch stats");
  return res.json();
}
