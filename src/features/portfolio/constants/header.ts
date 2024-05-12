type navItemsType = {
  title: string;
  url: string;
};
export const NAVITEMS: navItemsType[] = [
  {
    title: "header.experience",
    url: "/#experiencia",
  },
  {
    title: "header.projects",
    url: "/#proyectos",
  },
  {
    title: "header.aboutMe",
    url: "/#sobre-mi",
  },
] as const;
