import { useTranslation } from "react-i18next";
import { GeneralLoading } from "../loading";
import { Background, Footer, Header, SectionContainer } from "./components";
import { usePortfolio } from "./hooks";
import { CodeIcon, UserIcon, WorkIcon } from "./icons";
import "./portfolio.css";
import { AboutMe, Experience, Hero, Projects } from "./sections";
import { useStoreTheme } from "./store";
import { showGeneralLoading } from "./utils";

export default function Portfolio() {
  const { theme } = useStoreTheme();
  const { t } = useTranslation("portfolio");

  const { portfolio, isPending, isError } = usePortfolio();

  if (showGeneralLoading(isPending, isError) || !portfolio)
    return <GeneralLoading />;

  const { hero, info, links } = portfolio;

  return (
    <main className={`${theme} relative`}>
      <Background />
      <Header />
      <main className="px-4">
        <SectionContainer className="py-16 md:py-36">
          <Hero hero={hero} links={links} info={info} />
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
            <AboutMe info={info} />
          </SectionContainer>
        </div>
      </main>
      <Footer info={info} links={links} />
    </main>
  );
}
