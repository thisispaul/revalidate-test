import { revalidateTag } from "next/cache";

export default async function RevalidateButton() {
  const onClick = async () => {
    "use server";

    revalidateTag("time");
  };

  return (
    <form action={onClick}>
      <button type="submit">Revalidate</button>
    </form>
  );
}
