import { Background, Footer, Header, SectionContainer } from "./components";
import { CodeIcon, UserIcon, WorkIcon } from "./icons";
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
          <SectionContainer
            title="Experiencia laboral"
            icon={<WorkIcon className="size-8" />}
            id="experiencia"
          >
            <Experience />
          </SectionContainer>
          <SectionContainer
            title="Proyectos"
            icon={<CodeIcon className="size-8" />}
            id="proyectos"
          >
            <Projects />
          </SectionContainer>
          <SectionContainer
            title="Sobre mí"
            icon={<UserIcon className="size-8" />}
            id="sobre-mi"
          >
            <AboutMe />
          </SectionContainer>
        </div>
      </main>
      <Footer />
    </main>
  );
}
