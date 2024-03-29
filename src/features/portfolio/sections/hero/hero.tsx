import { Trans, useTranslation } from "react-i18next";
import { INFO } from "../../constants/info";
import { LinkedInIcon, MailIcon } from "../../icons";
import { SocialPill, Badge } from "./components";

export function Hero() {
  const { t } = useTranslation("portfolio");
  return (
    <div className="max-w-xl">
      <div className="flex gap-4 mb-4">
        <img
          className="rounded-full shadow-lg size-16"
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
        className="text-4xl font-bold tracking-tight text-gray
      -800 sm:text-5xl dark:text-white"
      >
        {t("hero.title", { name: INFO.name })}
      </h1>
      <p className="mt-6 text-xl text-gray-800 dark:[&>strong]:text-blue-200 [&>strong]:text-blue-500 [&>strong]:font-semibold dark:text-gray-300">
        <Trans
          i18nKey="hero.description"
          components={{ strong: <strong></strong> }}
        />
      </p>
      <nav className="flex flex-wrap gap-4 mt-8">
        <SocialPill href="mailto:juanjosenavarroperea@gmail.com">
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
