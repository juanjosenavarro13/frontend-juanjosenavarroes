import { useStoreTheme } from "@/core/storages";
import { SectionContainer } from "../portfolio/components";
import { Header, Article } from "./components";
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
          <Article tittle="titulo" created_at="123" body="body" />
          <Article tittle="titulo" created_at="123" body="body" />
          <Article tittle="titulo" created_at="123" body="body" />
        </SectionContainer>
      </main>
      <Footer />
    </main>
  );
}
