import schemaJson from "./schema.json";
import SafeNightClient from "./isnycsafeatnightclient";
export default function SubwaySafetyGuide() {
    const schema = schemaJson;
  return (
  <>
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>      
  <SafeNightClient />
  </>
);
  
}