import { redirect } from "next/navigation";
const loadDiscoverPage = () => {
  redirect("/discover");
};

export default function Home() {
  return <>{loadDiscoverPage()}</>;
}
