import GoToHomepage from "@/components/home/go-to-homepage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon",
};

const ComingSoon = () => {
  return (
    <div className="mb-40 mt-52 flex flex-col items-center justify-center gap-12">
      <h1 className="text-center text-6xl font-bold">{"Coming Soon!"}</h1>
      <GoToHomepage />
    </div>
  );
};

export default ComingSoon;
