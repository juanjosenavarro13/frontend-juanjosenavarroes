import { useTranslation } from "react-i18next";
import { Badge } from "./components/badge";
import { SocialPillSkeleton } from "./components/social-pill-skeleton";
import { SpinnerIcon } from "./components/spinner";
import { LoadingImage, TextSkeleton } from "@/features/portfolio/components";

export function HeroSkeleton() {
  const { t } = useTranslation("portfolio");
  return (
    <div className="max-w-xl ">
      <div className="mb-4 flex gap-4">
        <LoadingImage className="size-16 animate-pulse rounded-full text-gray-400 shadow-lg" />
        <button className="flex items-center transition md:justify-center md:hover:scale-105">
          <Badge>
            <SpinnerIcon />
          </Badge>
        </button>
      </div>
      <div className="grid h-52 gap-2 sm:h-32">
        <TextSkeleton span={3} />
        <TextSkeleton span={3} />
        <TextSkeleton span={3} />
        <TextSkeleton span={3} />
        <TextSkeleton span={3} />
        <TextSkeleton span={3} />
        <TextSkeleton span={3} />
        <TextSkeleton span={3} />
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
