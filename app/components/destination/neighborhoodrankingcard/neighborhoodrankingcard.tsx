import styles from "./neighborhoodrankingcard.module.css";

export default function NeighborhoodRankingCards() {
  const neighborhoods = [ { 
    id: "upper-west-side", 
    rank: "#1 Safest", 
    name: "Upper West Side", 
    why: "NYC’s safest, calmest, most walkable base for solo travelers.", 
    image: "/destination/uws.png", 
    color: "var(--tint-green)", 
    safety: "🟢 Very Safe", 
    vibe: "Calm, residential, museum‑rich", 
    transit: "1/2/3, B/C lines", 
    bestFor: ["Safety-focused travelers", "Quiet nights", "Walkers"], 
    pros: [ "Extremely safe and walkable", "Near Central Park and Riverside Park", "Great for first-time solo travelers", ], 
    cons: ["Hotels can be pricey", "Not nightlife-heavy"], 
}, 
{ 
    id: "midtown-east", 
    rank: "#2 Best for First‑Timers", 
    name: "Midtown East", 
    why: "Central, convenient, and perfect for sightseeing without stress.", 
    image: "/destination/midtown-east.png", 
    color: "var(--tint-blue)", 
    safety: "🟢 Safe", 
    vibe: "Central, convenient, business-heavy", 
    transit: "4/5/6, E/M, 7", 
    bestFor: ["First-timers", "Short stays", "Sightseeing"], 
    pros: [ "Walkable to major attractions", "Excellent subway access", "Good mid-range hotel options", ], 
    cons: ["Can feel busy", "Less neighborhood charm"], 
}, 
{ 
    id: "williamsburg", 
    rank: "#3 Best Nightlife", 
    name: "Williamsburg", 
    why: "Trendy, social, and packed with food, bars, and waterfront views.", 
    image: "/destination/williamsburg.png", 
    color: "var(--tint-purple)", 
    safety: "🟡 Safe but lively", 
    vibe: "Trendy, artsy, nightlife-heavy", 
    transit: "L, G lines", 
    bestFor: ["Nightlife", "Foodies", "Younger travelers"], 
    pros: [ "Great bars and restaurants", "Creative, youthful vibe", "Beautiful waterfront views", ], 
    cons: ["Hotels can be expensive", "Nightlife noise"],
 },
  { 
    id: "long-island-city", 
    rank: "#4 Best Budget", 
    name: "Long Island City", 
    why: "Modern, quiet, and the best value hotels near Manhattan.", 
    image: "/destination/lic.png", 
    color: "var(--tint-yellow)", 
    safety: "🟢 Safe", 
    vibe: "Modern, quiet, budget-friendly", 
    transit: "7, E, M, G", 
    bestFor: ["Budget travelers", "Calm stays", "Quick subway access"], 
    pros: [ "Best value hotels near Manhattan", "Fast subway access", "Quiet and modern", ], 
    cons: ["Less walkable nightlife", "Fewer classic NYC vibes"],
 }
 ];

  return (
    <section id="neighborhood" className={styles.wrapper}> 
        <h2>Best Neighborhoods to Stay in NYC (Ranked for Solo Travelers)</h2> 
        <p className={styles.intro}> These neighborhoods offer the best mix of safety, walkability, transit access, and comfort for solo travelers. Each one serves a different travel style — choose the vibe that fits you. </p> 
        <div className={styles.grid}> 
            {neighborhoods.map((n) => ( 
                <div key={n.id} id={n.id} className={styles.card}>
                    <div className={styles.imageWrapper} style={{ backgroundColor: n.color }}> 
                        <img src={n.image} alt={n.name} className={styles.image} /> 
                        <span className={styles.badge}>{n.rank}</span> 
                    </div> 
                    <div className={styles.content}> 
                        <h3>{n.name}</h3> 
                        <p className={styles.why}>{n.why}</p> 
                        <div className={styles.meta}> 
                            <span>🛡 {n.safety}</span> 
                            <span>🌆 {n.vibe}</span> 
                            <span>🚇 {n.transit}</span> 
                        </div> 
                        <div className={styles.tags}>
                            {n.bestFor.map((tag) => (
                                 <span key={tag} className={styles.tag}>{tag}</span> 
                                ))} 
                        </div> 
                        <div className={styles.columns}> 
                            <div> 
                                <h4>Pros</h4> 
                                <ul> 
                                    {n.pros.map((p) => (
                                         <li key={p}>{p}</li> 
                                        ))} 
                                </ul> 
                            </div> 
                            <div> 
                                <h4>Cons</h4> 
                                <ul> 
                                    {n.cons.map((c) => (
                                         <li key={c}>{c}</li> 
                                        ))} 
                                </ul> 
                            </div>
                        </div> 
                        <a href="#map" className={styles.cta}>Jump to Map →</a> 
                    </div> 
                </div> 
                ))} 
        </div> 
    </section> 
  );
}
