import { INFO } from "@/domain/portfolio/constants";
import { Trans } from "react-i18next";

export function AboutMe() {
  return (
    <article className="flex h-[40rem] flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:h-[17rem] md:flex-row">
      <div className="order-2 text-pretty md:order-1 [&>p>strong]:font-mono [&>p>strong]:font-normal [&>p>strong]:text-blue-500 dark:[&>p>strong]:text-blue-100 [&>p]:mb-4">
        <p>
          <Trans
            i18nKey="aboutMeSection.description"
            ns="portfolio"
            components={{ strong: <strong /> }}
          />
        </p>
      </div>

      <img
        width="200"
        height="200"
        src="/juanjose.avif"
        alt={INFO.fullName}
        className="order-1 aspect-square rotate-3 rounded-2xl bg-black/20 object-cover p-1 ring-1 ring-black/70 dark:bg-blue-500/5 dark:ring-white/20 md:order-2 lg:w-64 lg:p-2"
        style={{ objectPosition: "50% 50%" }}
        loading="lazy"
      />
    </article>
  );
}
