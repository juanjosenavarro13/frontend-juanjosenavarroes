import { EXPERIENCIE } from "../../constants/experiencie";
import { ExperienceItem } from "./experience-item";

export function Experience() {
  return (
    <ol className="relative mt-16">
      {EXPERIENCIE.map((experiencie) => (
        <li key={experiencie.title}>
          <ExperienceItem experiencieItem={experiencie} />
        </li>
      ))}
    </ol>
  );
}
