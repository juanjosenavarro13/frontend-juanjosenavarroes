import { LinkedInIcon, MailIcon } from "../../icons";
import { SocialPill, Badge } from "./components";

export function Hero() {
  return (
    <div className="max-w-xl">
      <div className="flex gap-4 mb-4">
        <img
          className="rounded-full shadow-lg size-16"
          src="/juanjose.webp"
          alt="Juan José Navarro Perea"
        />
        <a
          href="https://www.linkedin.com/in/juan-jose-navarro-perea/"
          target="_blank"
          rel="noopener"
          className="flex items-center transition md:justify-center md:hover:scale-105"
        >
          <Badge>Proyecto en curso</Badge>
        </a>
      </div>
      <h1
        className="text-4xl font-bold tracking-tight text-gray
      -800 sm:text-5xl dark:text-white"
      >
        Hey, soy Juan José
      </h1>
      <p className="mt-6 text-xl text-gray-800 dark:[&>strong]:text-blue-200 [&>strong]:text-blue-500 [&>strong]:font-semibold dark:text-gray-300">
        2 años de experiencia. <strong>Ingeniero de Software</strong> de
        Sevilla, España Especializado en el desarrollo de aplicaciones SPA
        (typescript)
      </p>
      <nav className="flex flex-wrap gap-4 mt-8">
        <SocialPill href="mailto:juanjosenavarroperea@gmail.com">
          <>
            <MailIcon className="size-4" />
            Contáctame
          </>
        </SocialPill>
        <SocialPill href="https://www.linkedin.com/in/juan-jose-navarro-perea/">
          <>
            <LinkedInIcon className="size-4" />
            LinkedIn
          </>
        </SocialPill>
      </nav>
    </div>
  );
}
