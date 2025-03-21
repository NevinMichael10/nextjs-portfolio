import { Metadata } from "next";
import PageTitle from "@/components/page-title";
import WhoAmI from "@/components/about/who-am-i";

export const metadata: Metadata = {
  title: "Coming soon",
  description: "The page you are viewing is under construction",
};
const title = "About";
const description = "Hi there! I am Nevin Michael, a Software Engineer who loves to solve problems using modern technologies."; 

export default function Page() {
  return (
    <>
      <PageTitle title={title} description={description} />
      <WhoAmI/>
    </>
  );
};