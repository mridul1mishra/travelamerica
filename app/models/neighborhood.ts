export interface Neighborhood {
  name: string;
  reason: string;
  link: string;
}

export interface NeighborhoodsData {
  neighborhoods: Neighborhood[];
}
export interface NeighborhoodGridProps {
  neighborhoods: Neighborhood[];
  ctaLink: string;
}