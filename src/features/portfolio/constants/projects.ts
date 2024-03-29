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
    description: "projectsSection.pokeapi.description",
    link: "https://pokeapi-blue.vercel.app/",
    image: "/projects/pokeapi.webp",
    tags: [TAGS.REACT],
    github: "https://github.com/juanjosenavarro13/pokeapi--react",
  },
  {
    title: "Pizzeria belsay",
    description: "projectsSection.belsay.description",
    link: "http://pizzeriabelsay.es/",
    image: "/projects/belsay.webp",
    tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.PHP],
  },
  {
    title: "Gesimar - servicios informaticos",
    description: "projectsSection.gesimar.description",
    link: "http://www.gesimar.es/",
    image: "/projects/gesimar.webp",
    tags: [TAGS.WORDPRESS],
  },
];
