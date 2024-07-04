type navItemsType = {
  title: string;
  url: string;
  tag?: boolean;
};

const itemMenuBlog = {
  title: "header.blog",
  url: "/blog",
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
  ...(import.meta.env.VITE_FEATURE_TOGGLE_BLOG ? [itemMenuBlog] : []),
] as const;
