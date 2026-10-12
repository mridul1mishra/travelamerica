"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import styles from "./HotelFilterPanel.module.css";

export default function HotelFilterPanel({ enabled, count, active, onClear, children, initialOpen = false }: {
  enabled: boolean; count: number; active: boolean; onClear: () => void; children: ReactNode; initialOpen?: boolean;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(enabled && initialOpen);
  const id = useId();
  useEffect(() => {
    if (enabled && initialOpen && !dialog.current?.open) {
      dialog.current?.showModal();
    }
  }, [enabled, initialOpen]);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [open]);
  if (!enabled) return children;
  const close = () => dialog.current?.close();
  return <>
    <div className={styles.toolbar}>
      <button ref={trigger} type="button" className={styles.trigger} aria-haspopup="dialog" onClick={() => { dialog.current?.showModal(); setOpen(true); }}>{active ? "Refine your search" : "Filter hotels"}</button>
    </div>
    <dialog ref={dialog} className={styles.panel} aria-labelledby={id}
      onClose={() => { setOpen(false); trigger.current?.focus(); }}
      onClick={event => { if (event.target === dialog.current) { const rect = dialog.current.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close(); } }}>
      <div className={styles.header}><h2 id={id}>Filter hotels</h2><button type="button" onClick={close} aria-label="Close filters">×</button></div>
      <div className={styles.body}>{children}</div>
      <div className={styles.footer}><button type="button" onClick={onClear}>Clear filters</button><button type="button" className={styles.apply} onClick={close}>Show {count} hotels</button></div>
    </dialog>
  </>;
}
