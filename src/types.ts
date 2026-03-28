export type Language = {
  name: string;
  icon: string;
};

export type Project = {
  id: number;
  name: string;
  description_pt: string;
  description_en: string;
  imageUrl: string;
  githubUrl: string;
  languages: Language[];
  stars?: number;
  forks?: number;
};

export type AboutBlock = {
  titleKey: string;
  textKey: string;
  techs: string[];
};
