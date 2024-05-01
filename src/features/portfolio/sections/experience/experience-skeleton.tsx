import { TextSkeleton } from "../../components";

export function ExperienceSkeleton() {
  return (
    <ol className="relative mt-16">
      <li>
        <div className="relative mx-12 grid pb-12 before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 before:content-[''] dark:before:border-white/15 md:grid-cols-5 md:gap-10 md:space-x-[4]">
          <div className="relative pb-12 md:col-span-2">
            <div className="sticky top-0">
              <span className="absolute -left-[42px] rounded-full text-5xl text-blue-400">
                &bull;
              </span>
              <div className="flex flex-col gap-1">
                <TextSkeleton />
                <TextSkeleton />
                <TextSkeleton />
              </div>
            </div>
          </div>
          <div className="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">
            <TextSkeleton />
            <TextSkeleton />
            <TextSkeleton />
            <TextSkeleton />
            <TextSkeleton />
            <TextSkeleton />
            <TextSkeleton />
            <TextSkeleton />
            <TextSkeleton />
            <TextSkeleton />
          </div>
        </div>
      </li>
      <li className="reveal">
        <div className="md:space-x-4] relative mx-12 grid pb-12 before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 before:content-[''] dark:before:border-white/15 md:grid-cols-5 md:gap-10">
          <div className="relative pb-12 md:col-span-2">
            <div className="sticky top-0">
              <span className="absolute -left-[42px] rounded-full text-5xl text-blue-400">
                &bull;
              </span>
              <div className="flex flex-col gap-1">
                <TextSkeleton />
                <TextSkeleton />
                <TextSkeleton />
              </div>
            </div>
          </div>
          <div className="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">
            <TextSkeleton />
            <TextSkeleton />
            <TextSkeleton />
            <TextSkeleton />
            <TextSkeleton />
            <TextSkeleton />
            <TextSkeleton />
            <TextSkeleton />
            <TextSkeleton />
            <TextSkeleton />
          </div>
        </div>
      </li>
    </ol>
  );
}
