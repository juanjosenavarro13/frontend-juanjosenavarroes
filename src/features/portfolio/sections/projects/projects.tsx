import { Github, Link, Php, React, Tailwind, Wordpress } from "./icons";
import { LinkButton } from "./link-button";

export function Projects() {
  const TAGS = {
    WORDPRESS: {
      name: "Wordpress",
      class: "bg-black text-white",
      icon: Wordpress,
    },
    TAILWIND: {
      name: "Tailwind CSS",
      class: "bg-[#003159] text-white",
      icon: Tailwind,
    },
    REACT: {
      name: "React 18",
      class: "bg-[#005da8] text-white",
      icon: React,
    },
    PHP: {
      name: "PHP",
      class: "bg-[#6A5ACD] text-white",
      icon: Php,
    },
  };
  const PROJECTS = [
    {
      title: "Pokeapi",
      description:
        "Desarrollé una aplicación Pokeapi utilizando React, Tanstack Query v5 y Axios para gestionar eficientemente el estado de las llamadas asíncronas. Implementé custom hooks para la paginación y mantenimiento del estado de la página actual mediante parámetros de consulta, garantizando una experiencia de usuario fluida y eficaz.",
      link: "https://pokeapi-blue.vercel.app/",
      image: "/projects/pokeapi.webp",
      tags: [TAGS.REACT],
      github: "https://github.com/juanjosenavarro13/pokeapi--react",
    },
    {
      title: "Pizzeria belsay",
      description:
        "Desarrollé la página web oficial de una pizzería, la cual ofrece un servicio completo de reparto a domicilio. Utilicé tecnologías modernas y técnicas de diseño eficientes para garantizar una experiencia de usuario óptima. Además, implementé un sistema de gestión de pedidos intuitivo y seguro para facilitar la interacción de los clientes con el servicio de entrega.",
      link: "http://pizzeriabelsay.es/",
      image: "/projects/belsay.webp",
      tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.PHP],
    },
    {
      title: "Gesimar - servicios informaticos",
      description:
        "Desarrollé una landing web para una empresa especializada en servicios informáticos y redes. Utilicé las últimas tecnologías y mejores prácticas de diseño para crear una experiencia de usuario atractiva y funcional. La landing ofrece una visión integral de los servicios ofrecidos, destacando la experiencia y el expertise de la empresa en el campo de la tecnología de la información. Además, se implementaron elementos interactivos y llamados a la acción estratégicos para fomentar la participación del usuario y la generación de leads cualificados.",
      link: "http://www.gesimar.es/",
      image: "/projects/gesimar.webp",
      tags: [TAGS.WORDPRESS],
    },
  ];
  return (
    <>
      <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
        <svg
          className="size-7"
          xmlns="http://www.w3.org/2000/svg"
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
          <path d="M7 8l-4 4l4 4"></path>
          <path d="M17 8l4 4l-4 4"></path>
          <path d="M14 4l-4 16"></path>
        </svg>
        Proyectos
      </h2>
      <div className="flex flex-col gap-y-16">
        {PROJECTS.map(({ image, title, description, tags, link, github }) => (
          <article
            key={title}
            className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"
          >
            <div className="w-full md:w-1/2">
              <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                <img
                  alt="Recién llegado vs 5 años en Nueva Zelanda"
                  className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                  loading="lazy"
                  src={image}
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 md:max-w-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                {title}
              </h3>
              <div className="flex flex-wrap mt-2">
                <ul className="flex flex-row mb-2 gap-x-2">
                  {tags.map((tag) => (
                    <li key={tag.name}>
                      <span
                        className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2`}
                      >
                        <tag.icon className="size-4" />
                        {tag.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-2 text-gray-700 dark:text-gray-400">
                  {description}
                </div>
                <footer className="flex items-end justify-start mt-4 gap-x-4">
                  {link && (
                    <LinkButton href={link}>
                      <>
                        <Link className="size-4" />
                        Preview
                      </>
                    </LinkButton>
                  )}
                  {github && (
                    <LinkButton href={github}>
                      <>
                        <Github className="size-6" />
                        Code
                      </>
                    </LinkButton>
                  )}
                </footer>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
