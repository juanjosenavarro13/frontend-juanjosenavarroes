import { EXPERIENCIE } from "../../constants/experiencie";
import { ExperienceItem } from "./components";

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
