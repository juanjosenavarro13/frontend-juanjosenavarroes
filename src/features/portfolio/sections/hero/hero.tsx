import { useTranslation } from "react-i18next";
import { LinkedInIcon, MailIcon } from "../../icons";
import { HeroType, InfoType, LinksType } from "../../types";
import { Badge, SocialPill } from "./components";

export function Hero({
  hero,
  links,
  info,
}: Readonly<{ hero: HeroType; links: LinksType; info: InfoType }>) {
  const { t } = useTranslation("portfolio");
  return (
    <div className="max-w-xl">
      <div className="mb-4 flex gap-4">
        <img
          className="size-16 rounded-full shadow-lg"
          src="/juanjose.avif"
          alt={info.fullName}
          loading="eager"
        />
        <a
          href={links.linkedin}
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
        {hero.title}
      </h1>
      <p
        className="mt-6 text-xl text-gray-800 dark:text-gray-300 [&>strong]:font-semibold [&>strong]:text-blue-500 dark:[&>strong]:text-blue-200"
        dangerouslySetInnerHTML={{ __html: hero.description }}
      />
      <nav className="mt-8 flex flex-wrap gap-4">
        <SocialPill href={`mailto:${links.email}`}>
          <>
            <MailIcon className="size-4" />
            {t("contactMe")}
          </>
        </SocialPill>
        <SocialPill href={links.linkedin}>
          <>
            <LinkedInIcon className="size-4" />
            {t("linkedIn")}
          </>
        </SocialPill>
      </nav>
    </div>
  );
}
