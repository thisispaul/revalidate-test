export default async function Home({ params }) {
  const res = await fetch("https://random-word-api.herokuapp.com/word", {
    next: { tags: ["word"] },
  });

  const data = await res.json();

  return (
    <main>
      {params.id} Route
      <hr />
      {data[0]}
    </main>
  );
}

export async function generateStaticParams() {
  return [{ id: "a" }, { id: "b" }, { id: "c" }, { id: "d" }, { id: "e" }];
}
