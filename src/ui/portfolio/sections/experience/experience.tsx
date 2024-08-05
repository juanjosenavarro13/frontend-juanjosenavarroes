import { EXPERIENCE } from "../../constants";
import { ExperienceItem } from "./components";

export function Experience() {
  return (
    <ol className="relative mt-16">
      {EXPERIENCE.map((experiencie, index) => (
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
