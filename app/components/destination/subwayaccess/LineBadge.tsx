import { LineBadgeProps } from "@/app/models/destination/subwayprops";

export function LineBadge({ line }: LineBadgeProps) {
  return (
    <span className={`line-badge line-${line}`}>
      {line}
    </span>
  );
}

