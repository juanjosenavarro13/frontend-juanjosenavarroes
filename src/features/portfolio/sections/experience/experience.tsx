import { usePortfolio } from "../../hooks";
import { ExperienceItem } from "./components";
import { ExperienceSkeleton } from "./experience-skeleton";

export function Experience() {
  const { portfolio } = usePortfolio();
  if (!portfolio) return <ExperienceSkeleton />;
  const { experience } = portfolio;
  return (
    <ol className="relative mt-16">
      {experience.map((experiencie, index) => (
        <li
          className={index !== 0 ? "reveal" : undefined}
          key={experiencie.title}
        >
          <ExperienceItem experiencieItem={experiencie} />
        </li>
      ))}
    </ol>
  );
}
