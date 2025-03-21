import ComingSoon from "@/app/coming-soon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming soon",
  description: "The page you are viewing is under construction",
};

export default function Page() {
  return (
    <ComingSoon />
  );
};
