type navItemsType = {
  title: string;
  url: string;
  tag?: boolean;
};

export const NAVITEMS: navItemsType[] = [
  {
    title: "header.experience",
    url: "/#experiencia",
    tag: true,
  },
  {
    title: "header.aboutMe",
    url: "/#sobre-mi",
    tag: true,
  },
  {
    title: "header.blog",
    url: "/blog",
  },
] as const;
