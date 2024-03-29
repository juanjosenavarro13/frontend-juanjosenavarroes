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
      className={`${className} scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl`}
      id={id}
    >
      <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
        {icon}
        {title}
      </h2>
      {children}
    </section>
  );
}
