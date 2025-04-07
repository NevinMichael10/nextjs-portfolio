import { Metadata } from "next";
import PageTitle from "@/components/page-title";
import ItemGrid from "@/components/tech/item-grid";
import { stackGroups, TechPage } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${TechPage.title} page`,
  description: `${TechPage.description}`,
};

export default function Page() {
  return (
    <>
      <PageTitle title={TechPage.title} description={TechPage.description} />
      <ItemGrid stackGroups={stackGroups} />
    </>
  );
}