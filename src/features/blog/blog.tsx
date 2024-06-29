import { Header } from "@/components";
import { useStoreTheme } from "@/core/storages";
import { SectionContainer } from "../portfolio/components";

export default function Blog() {
  const { theme } = useStoreTheme();

  return (
    <main className={`${theme} relative`}>
      <Header />
      <main className="px-4">
        <SectionContainer>
          <p>blog</p>
        </SectionContainer>
      </main>
    </main>
  );
}
