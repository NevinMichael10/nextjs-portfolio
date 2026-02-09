import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import GradientBackground from "./gradient-background";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="relative h-full flex flex-col">
      <Header />
      <main
        id="skip-nav"
        className="mx-auto w-full max-w-5xl flex-1 px-4 py-24 sm:px-8"
      >
        {children}
      </main>
      <Footer />

      {/* Background for the header */}
      <GradientBackground className='absolute top-0 left-1/2 -z-10 -translate-x-1/2' />
      {/* <Image
        id="header-img"
        width={1512}
        height={550}
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 w-full h-auto"
        src="/images/layout-bg/gradient-background-top-compressed.png"
        alt="header background"
        priority={true}
        fetchPriority="high"
      /> */}

      {/* Background for the footer */}
      <GradientBackground className='absolute -bottom-6 left-1/2 -z-10 -translate-x-1/2 rotate-180' />
      {/* <Image
        id="footer-img"
        width={1512}
        height={447}
        className="absolute left-1/2 -z-10 -translate-x-1/2 w-full h-auto"
        src="/images/layout-bg/gradient-background-bottom-compressed.png"
        alt="footer background"
        style={{ bottom: 0 }}
        priority={true}
        fetchPriority="high"
      /> */}
    </div>
  );
};

export default MainLayout;  