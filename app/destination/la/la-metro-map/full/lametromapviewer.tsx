"use client";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styles from "./map-viewer.module.css";

export default function LAMetroMapViewer() {
  return (
    <div className={styles.viewerWrapper}>
      <TransformWrapper
        initialScale={1}
        minScale={0.8}
        maxScale={4}
        wheel={{ step: 0.2 }}
        doubleClick={{ disabled: true }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            {/* Controls */}
            <div className={styles.controls}>
                <button onClick={() => zoomIn()}>+</button>
                <button onClick={() => zoomOut()}>−</button>
                <button onClick={() => resetTransform()}>Reset</button>
            </div>

            {/* Map */}
            <TransformComponent>
              <img
                src="/data/majorcities/losangeles/assets/map/la-metro-map.webp"
                alt="LA Metro Rail Map"
                className={styles.mapImage}
                width={3508}
                height={2480}
              />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}
