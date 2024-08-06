import { LinkedInIcon, MailIcon } from "@/ui/icons";
import { Badge, Text } from "library-juanjosenavarroes";
import { useTranslation } from "react-i18next";
import { SocialPill } from "./components";
import { INFO } from "@/domain/portfolio/constants";

export function Hero() {
  const { t } = useTranslation("portfolio");
  return (
    <div className="max-w-xl">
      <div className="mb-4 flex gap-4">
        <img
          className="size-16 rounded-full shadow-lg"
          src="/juanjose.avif"
          alt="juan jose navarro perea"
          loading="eager"
        />
        <a
          href={INFO.linkedin}
          target="_blank"
          rel="noopener"
          className="flex items-center transition md:justify-center md:hover:scale-105"
        >
          {/* ! REFACTOR BORRAR COMPONENTE BADGE DE LIBRARY-JUANJOSENAVARROES */}
          <Badge>{t("hero.onGoinProject")}</Badge>
        </a>
      </div>
      <div className="h-52 sm:h-32">
        <Text
          type="h1"
          variant="bold"
          color="black"
          className="text-balance tracking-tight sm:text-5xl"
        >
          {t("hero.title")}
        </Text>
        <p
          className="mt-6 text-pretty text-xl text-gray-800 dark:text-gray-300 [&>strong]:font-semibold [&>strong]:text-blue-500 dark:[&>strong]:text-blue-200"
          dangerouslySetInnerHTML={{ __html: t("hero.description") }}
        />
      </div>
      <nav className="mt-8 flex flex-wrap gap-4">
        <SocialPill href={`mailto:${INFO.email}`}>
          <>
            <MailIcon className="size-4" />
            {t("contactMe")}
          </>
        </SocialPill>
        <SocialPill href={INFO.linkedin}>
          <>
            <LinkedInIcon className="size-4" />
            {t("linkedIn")}
          </>
        </SocialPill>
      </nav>
    </div>
  );
}
