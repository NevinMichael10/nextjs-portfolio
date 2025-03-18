import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import MainLayout from "@/components/layout/main-layout";
import Header from "./header";
import { BlurImage } from "@/components/ui/blur-image";

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

const Page = async (props: PageProps) => {
  const { slug } = await props.params
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();
  const { name, description } = project;
  return (
    <MainLayout>
      <Header {...project} />
      <BlurImage
        src={`/images/projects/${slug}/cover.png`}
        width={1280}
        height={832}
        alt={name}
        className="my-12 rounded-lg"
        lazy={false}
      />
      <div className="prose w-full">
        <p>{description}</p>
      </div>
    </MainLayout>
  );
}

export default Page;