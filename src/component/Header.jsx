import { getTime } from "../api/getTime";

export default async function Header() {
  const { datetime } = await getTime();

  return <div>Time - {datetime}</div>;
}
