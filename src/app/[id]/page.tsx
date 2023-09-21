export default function Home({ params }) {
  return <main>{params.id} Route</main>;
}

export async function generateStaticParams() {
  return [{ id: "a" }, { id: "b" }, { id: "c" }, { id: "d" }, { id: "e" }];
}
