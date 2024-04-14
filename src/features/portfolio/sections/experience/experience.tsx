import { EXPERIENCIE } from "../../constants/experiencie";
import { ExperienceItem } from "./components";

export function Experience() {
  return (
    <ol className="relative mt-16">
      {EXPERIENCIE.map((experiencie, index) => (
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
