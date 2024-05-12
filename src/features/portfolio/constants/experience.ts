export type experienceType = {
  title: string;
  description: string;
  company: string;
  startDate: Date;
  endDate?: Date;
  url?: string;
};
export const EXPERIENCE: experienceType[] = [
  {
    title: "Center developer Specialist",
    description: "experienceSection.description.NTT",
    company: "NTT Data",
    url: "https://es.nttdata.com/",
    startDate: new Date("9/29/21"),
  },
  {
    title: "Técnico servicios microinformáticos y redes",
    description: "experienceSection.description.GESIMAR",
    company: "Gesimar Informatica",
    url: "http://www.gesimar.es/",
    startDate: new Date("3/15/19"),
    endDate: new Date("9/27/21"),
  },
] as const;
