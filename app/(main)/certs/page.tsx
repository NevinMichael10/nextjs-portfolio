import { Metadata } from "next";
import FilteredPosts from "@/components/filtered-posts";
import PageTitle from "@/components/page-title";

const title = "Certificates";
const description = "Check out some of the certifications I have earned.";

export const metadata: Metadata = {
  title: `${title} page`,
  description: `${description}`,
};

export default function Page() {
  return (
    <>
      <PageTitle title={title} description={description} />
      <FilteredPosts />
    </>
  );
}
