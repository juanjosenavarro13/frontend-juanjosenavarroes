import { Chat } from "@/features";
import { useTranslation } from "react-i18next";
import { Background, Footer, Header, SectionContainer } from "./components";
import { CodeIcon, UserIcon, WorkIcon } from "./icons";
import "./portfolio.css";
import { AboutMe, Experience, Hero, Projects } from "./sections";
import { useStoreTheme } from "./store";

export default function Portfolio() {
  const { theme } = useStoreTheme();
  const { t } = useTranslation("portfolio");

  return (
    <main className={`${theme} relative`}>
      <Chat />
      <Background />
      <Header />
      <main className="px-4">
        <SectionContainer className="py-16 md:pt-36">
          <Hero />
        </SectionContainer>
        <div className="space-y-16">
          <SectionContainer
            title={t("laboralExperience")}
            icon={<WorkIcon className="size-8" />}
            id="experiencia"
          >
            <Experience />
          </SectionContainer>
          <SectionContainer
            className="reveal"
            title={t("projects")}
            icon={<CodeIcon className="size-8" />}
            id="proyectos"
          >
            <Projects />
          </SectionContainer>
          <SectionContainer
            className="reveal"
            title={t("aboutMe")}
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
