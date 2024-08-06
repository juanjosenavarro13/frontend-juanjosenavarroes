import { EXPERIENCE } from "@/domain/portfolio/constants";
import { ExperienceItem } from "./components";
import { clsx } from "clsx";
import styles from "./experience.module.css";

export function Experience() {
  return (
    <ol className="relative mt-16">
      {EXPERIENCE.map((experiencie, index) => (
        <li
          className={clsx({ [styles.reveal]: index !== 0 })}
          key={experiencie.title}
        >
          <ExperienceItem experiencieItem={experiencie} />
        </li>
      ))}
    </ol>
  );
}
