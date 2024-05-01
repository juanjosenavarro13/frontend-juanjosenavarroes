export function TextSkeleton({
  span,
  h,
  className,
}: Readonly<{ span?: number; h?: number; className?: string }>) {
  return (
    <div
      className={`col-span-${span ?? 1} h-${h ?? 2} rounded bg-gray-400 ${className} animate-pulse`}
    ></div>
  );
}
