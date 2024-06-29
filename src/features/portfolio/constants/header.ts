type navItemsType = {
  title: string;
  url: string;
};

const itemMenuBlog = {
  title: "header.blog",
  url: "/blog",
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
  ...(import.meta.env.VITE_FEATURE_TOGGLE_BLOG ? [itemMenuBlog] : []),
] as const;
