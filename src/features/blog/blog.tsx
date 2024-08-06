import { useStoreTheme } from "@/aplication/store";
import { Header } from "./components";
import { GroupArticle } from "./components/article/group-article";
import { Footer } from "@/core/components/footer/footer";
import { SectionContainer } from "@/ui/portfolio/components";

export function Blog() {
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
