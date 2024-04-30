import { LoadingImage } from "../../components";

export function AboutMeSkeleton() {
  return (
    <article className="flex h-[45rem] flex-col sm:h-56 sm:flex-row">
      <div className="order-2 mt-10 flex w-full animate-pulse flex-col gap-3 sm:pr-10">
        <div className="col-span-2 h-2 rounded bg-gray-400"></div>
        <div className="col-span-2 h-2 rounded bg-gray-400"></div>
        <div className="col-span-2 h-2 rounded bg-gray-400"></div>
        <div className="col-span-2 h-2 rounded bg-gray-400"></div>
        <div className="col-span-2 h-2 rounded bg-gray-400"></div>
        <div className="col-span-2 h-2 rounded bg-gray-400"></div>
        <div className="col-span-2 h-2 rounded bg-gray-400"></div>
        <div className="col-span-2 h-2 rounded bg-gray-400"></div>
        <div className="col-span-2 h-2 rounded bg-gray-400"></div>
        <div className="col-span-2 h-2 rounded bg-gray-400"></div>
        <div className="col-span-2 h-2 rounded bg-gray-400"></div>
        <div className="col-span-2 h-2 rounded bg-gray-400"></div>
        <div className="col-span-2 block h-2 rounded bg-gray-400 sm:hidden"></div>
        <div className="col-span-2 block h-2 rounded bg-gray-400 sm:hidden"></div>
        <div className="col-span-2 block h-2 rounded bg-gray-400 sm:hidden"></div>
        <div className="col-span-2 block h-2 rounded bg-gray-400 sm:hidden"></div>
        <div className="col-span-2 block h-2 rounded bg-gray-400 sm:hidden"></div>
        <div className="col-span-2 block h-2 rounded bg-gray-400 sm:hidden"></div>
        <div className="col-span-2 block h-2 rounded bg-gray-400 sm:hidden"></div>
      </div>
      <div className="order-1 text-gray-800 md:order-2 lg:w-64 lg:p-2">
        <LoadingImage className="rotate-3 rounded-2xl bg-black/20 object-cover p-1 ring-1 ring-black/70 dark:bg-blue-500/5 dark:ring-white/20" />
      </div>
    </article>
  );
}
