export function TextSkeleton({
  span = 1,
  className,
}: Readonly<{ span?: number; className?: string }>) {
  return (
    <div
      className={`col-span-${span} h-2 rounded bg-gray-400 ${className ?? ""} animate-pulse`}
    ></div>
  );
}
