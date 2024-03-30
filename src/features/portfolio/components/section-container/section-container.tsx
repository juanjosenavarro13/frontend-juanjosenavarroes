interface SectionContainerProps {
  children: JSX.Element | JSX.Element[];
  title?: string;
  id?: string;
  className?: string;
  icon?: JSX.Element;
}
export function SectionContainer({
  children,
  title,
  className,
  id,
  icon,
}: Readonly<SectionContainerProps>) {
  return (
    <section
      className={`${className} container mx-auto w-full scroll-m-20 md:max-w-2xl lg:max-w-4xl`}
      id={id}
    >
      <h2 className="mb-6 flex items-center gap-x-3 text-3xl font-semibold text-black/80 dark:text-white">
        {icon}
        {title}
      </h2>
      {children}
    </section>
  );
}
