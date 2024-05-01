export function TextSkeleton({
  span = 1,
  h = 2,
  className,
}: Readonly<{ span?: number; h?: number; className?: string }>) {
  return (
    <div
      className={`col-span-${span} h-${h} rounded bg-gray-400 ${className} animate-pulse`}
    ></div>
  );
}
