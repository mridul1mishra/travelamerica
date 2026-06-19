export interface FemaleSoloTile {
  title: string;
  description: string;
  image?: string; // optional
  icon: string;  // optional
  link: string;
}
export interface FemaleSoloData {
  tiles: FemaleSoloTile[];
  ctaLink: string;
}