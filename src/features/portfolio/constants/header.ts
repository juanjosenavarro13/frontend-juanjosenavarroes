type navItemsType = {
  title: string;
  url: string;
};
export const NAVITEMS: navItemsType[] = [
  {
    title: "experience",
    url: "/#experiencia",
  },
  {
    title: "projects",
    url: "/#proyectos",
  },
  {
    title: "aboutMe",
    url: "/#sobre-mi",
  },
] as const;
