import { INFO } from "@portfolio/constants";
import { LinkedInIcon, MailIcon } from "@portfolio/icons";
import { useTranslation } from "react-i18next";
import { Badge, SocialPill } from "./components";

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
          <Badge>{t("hero.onGoinProject")}</Badge>
        </a>
      </div>
      <div className="h-52 sm:h-32">
        <h1
          className="text-gray -800 text-balance text-4xl
      font-bold tracking-tight dark:text-white sm:text-5xl"
        >
          {t("hero.title")}
        </h1>
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
