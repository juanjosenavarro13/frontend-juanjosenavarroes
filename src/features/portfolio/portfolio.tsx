import { VercelAnalitics } from "../vercel";
import {
  AboutMe,
  Background,
  Experience,
  Footer,
  Header,
  Hero,
  Projects,
  SectionContainer,
} from "./components";
import { useStoreTheme } from "./store";

export default function Portfolio() {
  const { theme } = useStoreTheme();
  return (
    <main className={`${theme} relative`}>
      <Background />
      <VercelAnalitics />
      <Header />
      <main className="px-4">
        <SectionContainer className="py-16 md:py-36">
          <Hero />
        </SectionContainer>
        <div className="space-y-24">
          <SectionContainer id="experiencia">
            <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
              <svg
                className="size-8"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
                <path d="M12 12l0 .01"></path>
                <path d="M3 13a20 20 0 0 0 18 0"></path>
              </svg>
              Experiencia laboral
            </h2>
            <Experience />
          </SectionContainer>
          <SectionContainer id="proyectos">
            <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
              <svg
                className="size-7"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 8l-4 4l4 4"></path>
                <path d="M17 8l4 4l-4 4"></path>
                <path d="M14 4l-4 16"></path>
              </svg>
              Proyectos
            </h2>
            <Projects />
          </SectionContainer>
          <SectionContainer id="sobre-mi">
            <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-8 text-black/80 dark:text-white">
              <svg
                className="size-8"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
                <path d="M15 19l2 2l4 -4"></path>
              </svg>
              Sobre mí
            </h2>
            <AboutMe />
          </SectionContainer>
        </div>
      </main>
      <Footer />
    </main>
  );
}
