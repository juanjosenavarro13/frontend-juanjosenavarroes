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
    <ol className="relative mt-16">
      {EXPERIENCIE.map((experiencie) => (
        <li key={experiencie.title}>
          <ExperienceItem {...experiencie} />
        </li>
      ))}
    </ol>
  );
}
