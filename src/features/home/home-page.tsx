import { useStoreTheme } from "../../stores";
import { Header } from "./header/header";

export default function HomePage() {
  const { theme } = useStoreTheme();
  return (
    <main className={theme}>
      <Header />
    </main>
  );
}
