
export interface SubwayAccessItem {
  neighborhood: string;
  lines: string[];
  access: string;
  night: string;
  walk: string;
  notes: string;
}

export interface LineBadgeProps {
  line: string;
}

export interface SubwayRowProps extends SubwayAccessItem {}
