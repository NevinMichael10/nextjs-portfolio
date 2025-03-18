import { Metadata } from "next";
import MainLayout from "@/components/layout/main-layout";
import PageTitle from "@/components/page-title";
import ProjectCards from "@/components/project-card";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Coming soon",
  description: "The page you are viewing is under construction",
};
const title = "Projects";
const description = "Check out some of the projects I've worked on."; 

export default function Page() {
  return (
    <MainLayout>
      <PageTitle title={title} description={description} />
      <ProjectCards projects={projects} />
    </MainLayout>
  );
};
