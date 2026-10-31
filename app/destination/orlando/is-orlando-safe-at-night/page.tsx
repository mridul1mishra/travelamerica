import type { Metadata } from "next";
import IsOrlandoSafeAtNightClient from "./isorlandosafeatnightclient";
import data from "./is-orlando-safe-at-night.json";
const url="https://www.travelsamericas.com/destination/orlando/is-orlando-safe-at-night";
const title="Is Orlando Safe at Night? Walking & Area Guide";
const description="Plan evenings in Orlando with area-by-area advice for International Drive, Disney Springs, CityWalk and Downtown, plus walking and return-trip tips.";
export const metadata:Metadata={title,description,alternates:{canonical:url},openGraph:{title,description,url,type:"article",modifiedTime:data.modified,images:[{url:data.heroImage,alt:"Orlando travel destination"}]},twitter:{card:"summary_large_image",title,description,images:[data.heroImage]}};
export default function IsOrlandoSafeAtNightPage(){
 const schema=[
 {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://www.travelsamericas.com/"},{"@type":"ListItem",position:2,name:"Orlando",item:"https://www.travelsamericas.com/destination/orlando"},{"@type":"ListItem",position:3,name:"Orlando at Night",item:url}]},
 {"@context":"https://schema.org","@type":"Article",headline:"Is Orlando Safe at Night? An Area-by-Area Guide",description,url,dateModified:data.modified,image:`https://www.travelsamericas.com${data.heroImage}`,inLanguage:"en-US",mainEntityOfPage:{"@type":"WebPage","@id":url},publisher:{"@type":"Organization",name:"Travels Americas",url:"https://www.travelsamericas.com"}},
 {"@context":"https://schema.org","@type":"FAQPage",mainEntity:data.faq.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))}
 ];
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/><IsOrlandoSafeAtNightClient/></>;
}
