import { Metadata } from "next";
import PageTitle from "@/components/page-title";
import Experience from "@/components/journey/experience";
import Education from "@/components/journey/education";
import { journeyPage } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${journeyPage.title} page`,
  description: `${journeyPage.description}`,
};

export default function Page() {
  return (
    <>
      <PageTitle title={journeyPage.title} description={journeyPage.description} />
      <Experience />
      <Education />
    </>
  );
};
