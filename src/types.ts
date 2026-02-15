export type Language = {
  name: string;
  icon: string;
};

export type Project = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  languages: Language[];
};

export type AboutBlock = {
  titleKey: string;
  textKey: string;
  techs: string[];
};
