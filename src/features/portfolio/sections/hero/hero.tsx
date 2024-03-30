import { Trans, useTranslation } from "react-i18next";
import { INFO } from "../../constants/info";
import { LinkedInIcon, MailIcon } from "../../icons";
import { SocialPill, Badge } from "./components";

export function Hero() {
  const { t } = useTranslation("portfolio");
  return (
    <div className="max-w-xl">
      <div className="mb-4 flex gap-4">
        <img
          className="size-16 rounded-full shadow-lg"
          src="/juanjose.webp"
          alt={INFO.fullName}
        />
        <a
          href={INFO.linkedin}
          target="_blank"
          rel="noopener"
          className="flex items-center transition md:justify-center md:hover:scale-105"
        >
          <Badge>{t("onGoinProject")}</Badge>
        </a>
      </div>
      <h1
        className="text-gray -800 text-4xl font-bold
      tracking-tight dark:text-white sm:text-5xl"
      >
        {t("hero.title", { name: INFO.name })}
      </h1>
      <p className="mt-6 text-xl text-gray-800 dark:text-gray-300 [&>strong]:font-semibold [&>strong]:text-blue-500 dark:[&>strong]:text-blue-200">
        <Trans
          i18nKey="hero.description"
          ns="portfolio"
          components={{ strong: <strong></strong> }}
        />
      </p>
      <nav className="mt-8 flex flex-wrap gap-4">
        <SocialPill href={`mailto:${INFO.email}`}>
          <>
            <MailIcon className="size-4" />
            {t("contactMe")}
          </>
        </SocialPill>
        <SocialPill href="https://www.linkedin.com/in/juan-jose-navarro-perea/">
          <>
            <LinkedInIcon className="size-4" />
            {t("linkedIn")}
          </>
        </SocialPill>
      </nav>
    </div>
  );
}
