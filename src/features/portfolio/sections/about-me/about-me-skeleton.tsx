import { LoadingImage } from "../../components";

export function AboutMeSkeleton() {
  return (
    <article className="flex h-[40rem] flex-col items-center justify-center md:h-[17rem] md:flex-row">
      <div className="order-2 mt-10 flex w-full animate-pulse flex-col gap-3 sm:pr-10 md:order-1">
        <div className="h-2 rounded bg-gray-400"></div>
        <div className="h-2 rounded bg-gray-400"></div>
        <div className="h-2 rounded bg-gray-400"></div>
        <div className="h-2 rounded bg-gray-400"></div>
        <div className="h-2 rounded bg-gray-400"></div>
        <div className="h-2 rounded bg-gray-400"></div>
        <div className="h-2 rounded bg-gray-400"></div>
        <div className="h-2 rounded bg-gray-400"></div>
        <div className="h-2 rounded bg-gray-400"></div>
        <div className="h-2 rounded bg-gray-400"></div>
        <div className="h-2 rounded bg-gray-400"></div>
        <div className="h-2 rounded bg-gray-400"></div>
        <div className="block h-2 rounded bg-gray-400 sm:hidden"></div>
        <div className="block h-2 rounded bg-gray-400 sm:hidden"></div>
        <div className="block h-2 rounded bg-gray-400 sm:hidden"></div>
        <div className="block h-2 rounded bg-gray-400 sm:hidden"></div>
        <div className="block h-2 rounded bg-gray-400 sm:hidden"></div>
        <div className="block h-2 rounded bg-gray-400 sm:hidden"></div>
        <div className="block h-2 rounded bg-gray-400 sm:hidden"></div>
      </div>
      <div className="order-1 text-gray-800 md:order-2">
        <LoadingImage className="h-[200px] rotate-3 rounded-2xl bg-black/20 object-cover p-1 ring-1 ring-black/70 dark:bg-blue-500/5 dark:ring-white/20" />
      </div>
    </article>
  );
}
