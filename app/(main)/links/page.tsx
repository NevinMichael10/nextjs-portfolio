import { Metadata } from "next";
import MainLayout from "@/components/layout/main-layout";
import ComingSoon from "@/components/coming-soon/coming-soon";

export const metadata: Metadata = {
  title: "Coming soon",
  description: "The page you are viewing is under construction",
};

export default function Page() {
  return (
    <MainLayout>
      <ComingSoon />
    </MainLayout>
  );
};