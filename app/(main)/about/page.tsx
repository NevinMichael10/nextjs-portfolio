import { Metadata } from "next";
import PageTitle from "@/components/page-title";
import WhoAmI from "@/components/about/who-am-i";
import { aboutPage } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${aboutPage.title} page`,
  description: `${aboutPage.description}`,
};

export default function Page() {
  return (
    <>
      <PageTitle title={aboutPage.title} description={aboutPage.description} />
      <WhoAmI />
    </>
  );
}