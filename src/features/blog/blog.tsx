import { useStoreTheme } from "@/core/storages";
import { SectionContainer } from "../portfolio/components";
import { Header } from "./components";

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
