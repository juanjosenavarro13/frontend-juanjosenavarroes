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
      className="inline-flex items-center text-lg font-medium text-blue-500 dark:text-blue-200 dark:hover:text-blue-300 hover:text-blue-700"
    >
      {children}
    </a>
  );
}
