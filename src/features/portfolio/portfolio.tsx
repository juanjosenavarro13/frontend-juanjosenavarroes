import { Background, Footer, Header, SectionContainer } from "./components";
import { AboutMe, Experience, Hero, Projects } from "./sections";
import { useStoreTheme } from "./store";

export default function Portfolio() {
  const { theme } = useStoreTheme();
  return (
    <main className={`${theme} relative`}>
      <Background />
      <Header />
      <main className="px-4">
        <SectionContainer className="py-16 md:py-36">
          <Hero />
        </SectionContainer>
        <div className="space-y-16">
          <SectionContainer id="experiencia">
            <Experience />
          </SectionContainer>
          <SectionContainer id="proyectos">
            <Projects />
          </SectionContainer>
          <SectionContainer id="sobre-mi">
            <AboutMe />
          </SectionContainer>
        </div>
      </main>
      <Footer />
    </main>
  );
}
