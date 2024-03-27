import { useStoreTheme } from "@/stores";
import { Background, Footer, Header } from "./components";

export default function HomePage() {
  const { theme } = useStoreTheme();
  return (
    <main className={theme}>
      <Background />
      <Header />
      <Footer />
    </main>
  );
}
