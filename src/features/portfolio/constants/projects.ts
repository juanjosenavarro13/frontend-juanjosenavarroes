import { PhpIcon, ReactIcon, TailwindIcon, WordpressIcon } from "../icons";
type Tag = {
  name: string;
  icon: ({ className }: Readonly<{ className?: string }>) => JSX.Element;
};

export const TAGS: { [key: string]: Tag } = {
  WORDPRESS: {
    name: "Wordpress",
    icon: WordpressIcon,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    icon: TailwindIcon,
  },
  REACT: {
    name: "React 18",
    icon: ReactIcon,
  },
  PHP: {
    name: "PHP",
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
    image: "/projects/pokeapi.avif",
    tags: [TAGS.REACT],
    github: "https://github.com/juanjosenavarro13/pokeapi--react",
  },
  {
    title: "Pizzeria belsay",
    description: "projectsSection.belsay.description",
    link: "http://pizzeriabelsay.es/",
    image: "/projects/belsay.avif",
    tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.PHP],
  },
  {
    title: "Gesimar",
    description: "projectsSection.gesimar.description",
    link: "http://www.gesimar.es/",
    image: "/projects/gesimar.avif",
    tags: [TAGS.WORDPRESS],
  },
];
