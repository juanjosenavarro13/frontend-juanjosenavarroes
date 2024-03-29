import { EXPERIENCIE } from "../../constants/experiencie";
import { ExperienceItem } from "./experience-item";

export function Experience() {
  return (
    <>
      <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
        <svg
          className="size-8"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
          <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
          <path d="M12 12l0 .01"></path>
          <path d="M3 13a20 20 0 0 0 18 0"></path>
        </svg>
        Experiencia laboral
      </h2>
      <ol className="relative mt-16">
        {EXPERIENCIE.map((experiencie) => (
          <li key={experiencie.title}>
            <ExperienceItem experiencieItem={experiencie} />
          </li>
        ))}
      </ol>
    </>
  );
}
