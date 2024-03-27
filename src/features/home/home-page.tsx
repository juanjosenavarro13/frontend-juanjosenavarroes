import { useStoreTheme } from "@/stores";
import {
  Background,
  Footer,
  Header,
  Hero,
  SectionContainer,
} from "./components";

export default function HomePage() {
  const { theme } = useStoreTheme();
  return (
    <main className={theme}>
      <Background />
      <Header />
      <main className="px-4">
        <SectionContainer className="py-16 md:py-36">
          <Hero />
        </SectionContainer>
        <div className="space-y-24">
          {/* <SectionContainer id="experiencia">
            <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
              <Briefcase class="size-8" />
              Experiencia laboral
            </h2>
            <Experience />
          </SectionContainer> */}
          {/* <SectionContainer id="proyectos">
            <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
              <CodeIcon className="size-7" />
              Proyectos
            </h2>
            <Projects />
          </SectionContainer> */}
          {/* <SectionContainer id="sobre-mi">
            <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-8 text-black/80 dark:text-white">
              <ProfileCheck className="size-8" />
              Sobre mí
            </h2>
            <AboutMe />
          </SectionContainer> */}
        </div>
      </main>
      <Footer />
    </main>
  );
}
