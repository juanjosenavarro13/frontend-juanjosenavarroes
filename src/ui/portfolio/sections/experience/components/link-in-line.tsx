export function LinkInLine({
  children,
  href,
}: Readonly<{
  children: JSX.Element;
  href: string;
}>) {
  return (
    <a
      href={href}
      className="inline-flex h-12 items-center text-lg font-medium text-blue-500 hover:text-blue-700 dark:text-blue-200 dark:hover:text-blue-300"
    >
      {children}
    </a>
  );
}
