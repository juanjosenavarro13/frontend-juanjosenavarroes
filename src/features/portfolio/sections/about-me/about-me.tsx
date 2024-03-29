import { Trans } from "react-i18next";
import { INFO } from "../../constants/info";

export function AboutMe() {
  return (
    <article className="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row">
      <div className="[&>p]:mb-4 [&>p>strong]:text-blue-500 dark:[&>p>strong]:text-blue-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1">
        <p>
          <Trans
            i18nKey="aboutMeSection.description"
            ns="portfolio"
            components={{ string: <strong></strong> }}
          />
        </p>
      </div>

      <img
        width="200"
        height="200"
        src="/juanjose.webp"
        alt={INFO.fullName}
        className="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-blue-500/5 ring-1 ring-black/70 dark:ring-white/20"
        style={{ objectPosition: "50% 50%" }}
      />
    </article>
  );
}
