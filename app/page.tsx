import { Metadata } from "next";
import AboutMe from "@/components/home/about-me";
import GetInTouch from "@/components/home/get-in-touch";
import Hero from "@/components/home/hero";
import MainLayout from "@/components/layout/main-layout";

export const metadata: Metadata = {
  title: "Nevin Michael's Portfolio",
  description: "Nevin Michael's Portfolio Website Home Page",
};

export default function Page() {
  return (
    <MainLayout>
      <Hero />
      <AboutMe />
      <GetInTouch />
    </MainLayout>
  );
};
