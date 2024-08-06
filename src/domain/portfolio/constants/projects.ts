import { tagType, TAGS } from "./tags";

type projectsType = {
  title: string;
  description: string;
  image: string;
  tags: tagType[];
  link?: string;
  github?: string;
};

export const PROJECTS: projectsType[] = [
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
] as const;
