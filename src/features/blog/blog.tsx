import { Footer } from "@/core/layouts/portfolio-blog/components";
import { useStoreTheme } from "@/core/storages";
import { SectionContainer } from "../portfolio/components";
import { Header } from "./components";
import { GroupArticle } from "./components/article/group-article";

export default function Blog() {
  const { theme } = useStoreTheme();

  return (
    <main className={`${theme} relative`}>
      <Header />
      <main className="px-4">
        <SectionContainer className="py-16 md:pt-36">
          <GroupArticle />
        </SectionContainer>
      </main>
      <Footer />
    </main>
  );
}
