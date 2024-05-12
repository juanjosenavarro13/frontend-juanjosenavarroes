import { PhpIcon, ReactIcon, TailwindIcon, WordpressIcon } from "../icons";

export type tagType = {
  name: string;
  icon: ({ className }: Readonly<{ className?: string }>) => JSX.Element;
};

export const TAGS: { [key: string]: tagType } = {
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
} as const;
