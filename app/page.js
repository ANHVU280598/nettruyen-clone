import HomeCpm from "@/components/HomeCpm/HomeCpm";
import HomePage from "@/components/HomePage/HomePage";
import NewReleaseBanner from "@/components/NewReleaseBanner/NewReleaseBanner";
import Image from "next/legacy/image";

export default function Home() {
  return (
    <main className="flex h-screen w-screen overflow-y-scroll">
      <HomeCpm/>
    </main>
  );
}
