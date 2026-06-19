export interface InfoSectionItem {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
  link: string;
}

export interface InfoSectionProps {
  sections: InfoSectionItem[];
}