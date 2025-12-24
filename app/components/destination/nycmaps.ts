"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function NYCMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const neighborhoods = [
    { id: 1, name: "Upper West Side", coords: [-73.977, 40.787], anchor: "#uws" },
    { id: 2, name: "Midtown East", coords: [-73.971, 40.754], anchor: "#midtown-east" },
    { id: 3, name: "Williamsburg", coords: [-73.958, 40.714], anchor: "#williamsburg" },
    { id: 4, name: "Long Island City", coords: [-73.944, 40.744], anchor: "#lic" },
    { id: 5, name: "Chelsea", coords: [-74.000, 40.746], anchor: "#chelsea" },
    { id: 6, name: "Brooklyn Heights", coords: [-73.995, 40.696], anchor: "#brooklyn-heights" }
  ];

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [-73.98, 40.72],
      zoom: 10.8
    });

    neighborhoods.forEach(n => {
      const el = document.createElement("div");
      el.className = "map-pin";
      el.innerHTML = n.id;

      el.addEventListener("click", () => {
        const target = document.querySelector(n.anchor);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      });

      new mapboxgl.Marker(el).setLngLat(n.coords).addTo(map.current);
    });
  }, []);

  return (
    <section className="map-section">
      <div ref={mapContainer} className="mapbox-map" />

      <div className="map-legend">
        <h3>Neighborhood Legend</h3>
        <ul>
          {neighborhoods.map(n => (
            <li key={n.id}>
              <a href={n.anchor}>{n.id}. {n.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
