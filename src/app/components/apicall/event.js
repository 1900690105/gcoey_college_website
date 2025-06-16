export const fetchEvents = async () => {
  const res = await fetch("/api/event");

  if (!res.ok) {
    throw new Error(`Failed to fetch event data: ${res.status}`);
  }

  const data = await res.json();

  if (!data || data.length === 0) {
    throw new Error("event not found");
  }

  return data;
};
