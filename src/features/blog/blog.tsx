import { useStoreTheme } from "@/core/storages";
import { SectionContainer } from "../portfolio/components";
import { Header } from "./components";
import { BlogIcon } from "@/core/icons";
import { Footer } from "@/core/layouts/portfolio-blog/components";

export default function Blog() {
  const { theme } = useStoreTheme();

  return (
    <main className={`${theme} relative`}>
      <Header />
      <main className="px-4">
        <SectionContainer
          icon={<BlogIcon />}
          title="Blog"
          className="py-16 md:pt-36"
        >
          <p>blog</p>
        </SectionContainer>
      </main>
      <Footer />
    </main>
  );
}
