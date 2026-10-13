"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import type { HotelPhoto } from "@/app/lib/google-hotel-ratings-core";
import styles from "./HotelPhotoViewer.module.css";

function Attribution({ photo }: { photo: HotelPhoto }) {
  return <span>Google Maps{photo.authors.map((author, index) => <span key={index}> · {author.url
    ? <a href={author.url} target="_blank" rel="noopener noreferrer">{author.name}</a>
    : author.name}</span>)}</span>;
}

export default function HotelPhotoViewer({ photos, hotelName, mapsUrl, mainImage = false }: { photos: HotelPhoto[]; hotelName: string; mapsUrl: string; mainImage?: boolean }) {
  const [selected, setSelected] = useState(0);
  const [failed, setFailed] = useState<string[]>([]);
  const dialog = useRef<HTMLDialogElement>(null);
  const photo = photos[selected];
  if (!photo) return <p>No additional photos are available. <a href={mapsUrl} target="_blank" rel="noopener noreferrer">View hotel on Google Maps ↗</a></p>;
  const image = (large = false) => failed.includes(photo.url)
    ? <p className={styles.unavailable}>This photo is unavailable. Select another photo or <a href={mapsUrl} target="_blank" rel="noopener noreferrer">view Google Maps</a>.</p>
    : <Image src={photo.url} alt={`${hotelName} — photo ${selected + 1}`} width={1200} height={800}
        className={large ? styles.largePhoto : `${styles.photo}${mainImage ? ` ${styles.mainPhoto}` : ""}`} unoptimized referrerPolicy="no-referrer"
        onError={() => setFailed(current => current.includes(photo.url) ? current : [...current, photo.url])} />;
  const navigate = (offset: number) => setSelected(current => (current + offset + photos.length) % photos.length);
  return <section className={styles.gallery} aria-label={`Photos of ${hotelName}`}>
    <div className={styles.frame}>
      {image()}
      {!failed.includes(photo.url) && <button className={styles.enlarge} type="button" onClick={() => dialog.current?.showModal()} aria-label="Enlarge hotel photo"><Maximize2 size={18} /></button>}
    </div>
    <p className={styles.caption}><Attribution photo={photo} /></p>
    <div className={styles.thumbnails} aria-label="Choose a hotel photo">
      {photos.map((item, index) => <figure key={item.url} className={styles.thumbnail}>
        <button type="button" aria-label={`Show hotel photo ${index + 1}`} aria-pressed={selected === index} onClick={() => setSelected(index)}>
          <Image src={item.url} alt="" width={180} height={120} unoptimized referrerPolicy="no-referrer" />
        </button>
        <figcaption><Attribution photo={item} /></figcaption>
      </figure>)}
    </div>
    <dialog ref={dialog} className={styles.dialog} aria-label={`${hotelName} photo viewer`}
      onKeyDown={event => { if (event.key === "ArrowLeft") { event.preventDefault(); navigate(-1); } if (event.key === "ArrowRight") { event.preventDefault(); navigate(1); } }}>
      <div className={styles.toolbar}>
        <span>Photo {selected + 1} of {photos.length}</span>
        <button type="button" autoFocus onClick={() => dialog.current?.close()} aria-label="Close photo viewer"><X size={22} /></button>
      </div>
      {image(true)}
      <p className={styles.caption}><Attribution photo={photo} /></p>
      {photos.length > 1 && <div className={styles.controls}>
        <button type="button" onClick={() => navigate(-1)} aria-label="Previous photo"><ChevronLeft size={20} /> Previous</button>
        <button type="button" onClick={() => navigate(1)} aria-label="Next photo">Next <ChevronRight size={20} /></button>
      </div>}
    </dialog>
  </section>;
}
