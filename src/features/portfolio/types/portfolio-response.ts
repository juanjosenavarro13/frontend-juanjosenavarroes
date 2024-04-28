export interface PortfolioResponse {
  hero: HeroType;
  links: LinksType;
  info: InfoType;
}

export type HeroType = {
  id: number;
  language: string;
  title: string;
  description: string;
};

export type LinksType = {
  linkedin: string;
  email: string;
};

export type InfoType = {
  name: string;
  firstSurname: string;
  secondSurname: string;
  fullName: string;
};
