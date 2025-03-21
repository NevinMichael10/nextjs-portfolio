import { Metadata } from "next";
import PageTitle from "@/components/page-title";
import Experience from "@/components/journey/experience";
import Education from "@/components/journey/education";

export const metadata: Metadata = {
  title: "Coming soon",
  description: "The page you are viewing is under construction",
};
const title = "Journey";
const description = "Explore my experiences and learning path that shaped my career in software development."; 

export default function Page() {
  return (
    <>
      <PageTitle title={title} description={description} />
      <Experience />
      <Education />
    </>
  );
};
