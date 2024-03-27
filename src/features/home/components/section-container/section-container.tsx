interface SectionContainerProps {
  id?: string;
  className: string;
  children: JSX.Element | JSX.Element[];
}
export function SectionContainer({
  className,
  id,
  children,
}: Readonly<SectionContainerProps>) {
  return (
    <section
      className={`${className} scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl`}
      id={id}
    >
      {children}
    </section>
  );
}
