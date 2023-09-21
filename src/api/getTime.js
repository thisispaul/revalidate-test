export async function getTime() {
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/Europe/London",
    {
      next: {
        tags: ["time"],
      },
    }
  );

  return await res.json();
}
