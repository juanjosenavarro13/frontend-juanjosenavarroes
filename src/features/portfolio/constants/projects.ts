import { PhpIcon, ReactIcon, TailwindIcon, WordpressIcon } from "../icons";
type Tag = {
  name: string;
  class: string;
  icon: ({ className }: Readonly<{ className?: string }>) => JSX.Element;
};

export const TAGS: { [key: string]: Tag } = {
  WORDPRESS: {
    name: "Wordpress",
    class: "bg-black text-white",
    icon: WordpressIcon,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: TailwindIcon,
  },
  REACT: {
    name: "React 18",
    class: "bg-[#005da8] text-white",
    icon: ReactIcon,
  },
  PHP: {
    name: "PHP",
    class: "bg-[#6A5ACD] text-white",
    icon: PhpIcon,
  },
};

interface Projects {
  title: string;
  description: string;
  image: string;
  tags: Tag[];
  link?: string;
  github?: string;
}

export const PROJECTS: Projects[] = [
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
