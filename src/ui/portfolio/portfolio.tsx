import { useStoreTheme } from "@/aplication/store";
import { Footer } from "@/core/components/footer/footer";
import { CodeIcon, UserIcon, WorkIcon } from "@/ui/icons";
import { useTranslation } from "react-i18next";
import { Header, SectionContainer } from "./components";
import styles from "./portfolio.module.css";
import { AboutMe, Experience, Hero, Projects } from "./sections";

export function Portfolio() {
  const { theme } = useStoreTheme();
  const { t } = useTranslation("portfolio");

  return (
    <main data-testid="portfolio" className={`${theme} relative`}>
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
            className={styles.reveal}
            title={t("projects")}
            icon={<CodeIcon className="size-8" />}
            id="proyectos"
          >
            <Projects />
          </SectionContainer>
          <SectionContainer
            className={styles.reveal}
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
