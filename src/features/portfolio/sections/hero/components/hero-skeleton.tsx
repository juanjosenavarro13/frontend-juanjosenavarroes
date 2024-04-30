import { useTranslation } from "react-i18next";
import { Badge } from "./badge";
import { LoadingImage } from "./loading-image";
import { SocialPillSkeleton } from "./social-pill-skeleton";
import { SpinnerIcon } from "./spinner";

export function HeroSkeleton() {
  const { t } = useTranslation("portfolio");
  return (
    <div className="max-w-xl ">
      <div className="mb-4 flex gap-4">
        <LoadingImage className="size-16 animate-pulse rounded-full text-gray-400 shadow-lg" />
        <p
          rel="noopener"
          className="flex items-center transition md:justify-center md:hover:scale-105"
        >
          <Badge>
            <SpinnerIcon />
          </Badge>
        </p>
      </div>
      <div className="grid h-60 animate-pulse gap-2 sm:h-32">
        <div className="col-span-2 h-2 rounded bg-gray-400"></div>
        <div className="col-span-2 h-2 rounded bg-gray-400"></div>
        <div className="col-span-2 h-2 rounded bg-gray-400"></div>
        <div className="black col-span-2 h-2 sm:hidden"></div>
        <div className="col-span-3 h-2 rounded bg-gray-400"></div>
        <div className="col-span-3 h-2 rounded bg-gray-400"></div>
        <div className="col-span-3 h-2 rounded bg-gray-400"></div>
        <div className="col-span-3 h-2 rounded bg-gray-400"></div>
        <div className="col-span-3 h-2 rounded bg-gray-400"></div>
      </div>
      <nav className="mt-8 flex flex-wrap gap-4">
        <SocialPillSkeleton>
          <>
            <SpinnerIcon />
            {t("contactMe")}
          </>
        </SocialPillSkeleton>
        <SocialPillSkeleton>
          <>
            <SpinnerIcon />
            {t("linkedIn")}
          </>
        </SocialPillSkeleton>
      </nav>
    </div>
  );
}
