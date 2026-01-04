"use client";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styles from "./map-viewer.module.css";

export default function NYCSubwayMapViewer() {
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
                src="/data/majorcities/newyork/assets/map/nyc-subway-map.png"
                alt="NYC Subway Map"
                className={styles.mapImage}
              />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}
