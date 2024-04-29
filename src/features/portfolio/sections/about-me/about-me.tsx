import { Trans } from "react-i18next";
import { usePortfolio } from "../../hooks";

export function AboutMe() {
  const { portfolio } = usePortfolio();
  if (!portfolio) return <h1>jee</h1>;
  const { info } = portfolio;
  return (
    <article className="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row">
      <div className="order-2 text-pretty md:order-1 [&>p>strong]:font-mono [&>p>strong]:font-normal [&>p>strong]:text-blue-500 dark:[&>p>strong]:text-blue-100 [&>p]:mb-4">
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
        src="/juanjose.avif"
        alt={info.fullName}
        className="order-1 aspect-square h-full w-64 rotate-3 rounded-2xl bg-black/20 object-cover p-1 ring-1 ring-black/70 dark:bg-blue-500/5 dark:ring-white/20 md:order-2 lg:w-64 lg:p-2"
        style={{ objectPosition: "50% 50%" }}
        loading="lazy"
      />
    </article>
  );
}
