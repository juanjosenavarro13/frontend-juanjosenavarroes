import { useTranslation } from "react-i18next";
import { LinkInLine } from "./link-in-line";
import { ArrowRightIcon } from "@/features/portfolio/icons";
import { formatDate } from "@/core/utils/format-date";
import { experienceType } from "@/features/portfolio/constants/experience";

interface ExperienceItemProps {
  experiencieItem: experienceType;
}
export function ExperienceItem({
  experiencieItem,
}: Readonly<ExperienceItemProps>) {
  const { t } = useTranslation("portfolio");
  const { company, startDate, endDate, description, url, title } =
    experiencieItem;
  return (
    <div className="relative mx-12 grid pb-12 before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 before:content-[''] dark:before:border-white/15 md:grid-cols-5 md:gap-10 md:space-x-[4]">
      <div className="relative pb-12 md:col-span-2">
        <div className="sticky top-0">
          <span className="absolute -left-[42px] rounded-full text-5xl text-blue-400">
            &bull;
          </span>

          <h3 className="text-xl font-bold text-blue-400">{t(title)}</h3>
          <h4 className="text-xl font-semibold text-gray-600 dark:text-white">
            {company}
          </h4>
          <time className="m-0 p-0 text-sm text-gray-600/80 dark:text-white/80">
            {formatDate(startDate)} ~{" "}
            {endDate ? formatDate(endDate) : t("experienceSection.now")}
          </time>
        </div>
      </div>
      <div className="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">
        {t(description)}
        {url && (
          <LinkInLine href={url}>
            <>
              {t("experienceSection.knowMore")}{" "}
              <ArrowRightIcon className="w-5" />
            </>
          </LinkInLine>
        )}
      </div>
    </div>
  );
}
