import { Metadata } from "next";
import PageTitle from "@/components/page-title";
import { ProjectPage } from "@/lib/constants";
import FilteredProjects from "@/components/projects/filtered-projects";

export const metadata: Metadata = {
  title: `${ProjectPage.title} page`,
  description: `${ProjectPage.description}`,
};

export default function Page() {
  return (
    <>
      <PageTitle title={ProjectPage.title} description={ProjectPage.description} />
      <FilteredProjects />
    </>
  );
};