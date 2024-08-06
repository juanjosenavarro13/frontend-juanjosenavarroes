import { PROJECTS } from "@/domain/portfolio/constants";
import { GithubIcon, LinkIcon } from "@/ui/icons";
import { useTranslation } from "react-i18next";
import { LinkButton } from "./components/link-button/link-button";

export function Projects() {
  const { t } = useTranslation("portfolio");
  return (
    <div className="flex flex-col gap-y-16">
      {PROJECTS.map(({ image, title, description, tags, link, github }) => (
        <article
          key={title}
          className="reveal group flex flex-col space-x-0 space-y-8 md:flex-row md:space-x-8 md:space-y-0"
        >
          <div className="w-full md:w-1/2">
            <div className="relative col-span-6 row-span-5 flex transform flex-col items-center gap-8 overflow-clip rounded-xl shadow-xl transition duration-500 ease-in-out sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
              <img
                alt={title}
                className="h-56 w-full object-cover object-top transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                loading="lazy"
                src={image}
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 md:max-w-lg">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {title}
            </h3>
            <div className="mt-2 flex flex-wrap">
              <ul className="mb-2 flex flex-row gap-x-2">
                {tags.map((tag) => (
                  <li key={tag.name}>
                    <span className="flex gap-x-2 rounded-full bg-gray-800 px-2 py-1 text-xs text-white">
                      <tag.icon className="size-4" />
                      {tag.name}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-2 text-gray-700 dark:text-gray-400">
                {t(description)}
              </div>
              <footer className="mt-4 flex items-end justify-start gap-x-4">
                {link && (
                  <LinkButton href={link}>
                    <>
                      <LinkIcon className="size-4" />
                      {t("preview")}
                    </>
                  </LinkButton>
                )}
                {github && (
                  <LinkButton href={github}>
                    <>
                      <GithubIcon className="size-6" />
                      {t("code")}
                    </>
                  </LinkButton>
                )}
              </footer>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
