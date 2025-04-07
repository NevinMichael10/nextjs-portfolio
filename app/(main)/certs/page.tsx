import { Metadata } from "next";
import FilteredCerts from "@/components/certs/filtered-certs";
import PageTitle from "@/components/page-title";
import { certPage } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${certPage.title} page`,
  description: `${certPage.description}`,
};

export default function Page() {
  return (
    <>
      <PageTitle title={certPage.title} description={certPage.description} />
      <FilteredCerts />
    </>
  );
}