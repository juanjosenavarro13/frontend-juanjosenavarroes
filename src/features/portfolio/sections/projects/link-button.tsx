export function LinkButton({
  children,
  href,
}: Readonly<{
  children: JSX.Element;
  href: string;
}>) {
  return (
    <a
      href={href}
      className="text-md group inline-flex max-w-fit items-center justify-center gap-2 space-x-2 rounded-xl border border-gray-600 bg-gray-800 px-3 py-2 text-base text-white transition hover:border-gray-900 hover:bg-gray-800 hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-500/80 focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
    >
      {children}
    </a>
  );
}
