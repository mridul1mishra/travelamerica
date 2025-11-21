export default interface Cities {
  title: string;
  description: string;
  url: string;
  label: string;
  tabs: {
    id: number;
    label: string;
    img: string;
    section: string;
    alt: string;
  }[];
}
