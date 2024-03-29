import { ExperienceItem } from "./experience-item";

export function Experience() {
  const EXPERIENCIE = [
    {
      date: "Actualmente...",
      title: "Center developer specialist",
      company: "NTT Data",
      description:
        "Desarrollo dual boot utilizando AngularJS (TypeScript) y Angular 13 o superior para la implementación de soluciones web avanzadas. Creación de aplicaciones utilizando React 18 y TypeScript para mejorar la experiencia del usuario en los servicios proporcionados a cliente. Gestión de versiones utilizando herramientas como GitLab y GitHub para garantizar la colaboración y seguimiento efectivo de cambios en librerías y aplicaciones. Experiencia en la gestión de despliegues de aplicaciones a entornos de producción y previos, asegurando una implementación sin problemas.",
      link: "https://es.nttdata.com/",
    },
    {
      date: "Septiembre 2021",
      title: "Técnico servicios microinformaticos y redes",
      company: "Gesimar",
      description:
        "Reparacion y mantenimiento de equipos informaticos. Gestion de servidores y servicios ISP",
      link: "http://www.gesimar.es/",
    },
  ];
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
            <ExperienceItem {...experiencie} />
          </li>
        ))}
      </ol>
    </>
  );
}
