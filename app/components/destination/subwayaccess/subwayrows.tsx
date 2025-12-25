import { SubwayRowProps } from "@/app/models/destination/subwayprops";
import { LineBadge } from "./LineBadge";

export function SubwayRow({
  neighborhood,
  lines,
  access,
  night,
  walk,
  notes
}: SubwayRowProps) {
  return (
    <div className="subway-row">
      <div className="subway-row__header">
        <h3>{neighborhood}</h3>

        <div className="subway-row__lines">
          {lines.map((line, i) => (
            <LineBadge key={i} line={line} />
          ))}
        </div>
      </div>

      <div className="subway-row__details">
        <p><strong>Access:</strong> {access}</p>
        <p><strong>Night Service:</strong> {night}</p>
        <p><strong>Walkability:</strong> {walk}</p>
        <p><strong>Notes:</strong> {notes}</p>
      </div>
    </div>
  );
}
