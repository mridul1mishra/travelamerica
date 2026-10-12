"use client";

import { useEffect, useId, useRef, useState } from "react";
import styles from "./NeighborhoodDropdown.module.css";

export default function NeighborhoodDropdown({ options, selected, onChange }: {
  options: { name: string; count: number }[];
  selected: string[];
  onChange: (areas: string[]) => void;
}) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const id = useId();
  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); trigger.current?.focus(); }
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);
  return <div ref={root} className={styles.root}>
    <span id={`${id}-label`} className={styles.label}>Neighborhood</span>
    <button ref={trigger} type="button" className={styles.trigger} aria-labelledby={`${id}-label ${id}-value`}
      aria-expanded={open} aria-controls={`${id}-panel`} onClick={() => setOpen(value => !value)}>
      <span id={`${id}-value`}>{selected.length ? `Selected areas: ${selected.join(" / ")}` : "All neighborhoods"}</span>
      <span aria-hidden="true">⌄</span>
    </button>
    {open && <div id={`${id}-panel`} className={styles.panel}>
      <button type="button" className={styles.clear} onClick={() => onChange([])}>All neighborhoods</button>
      <fieldset>
        <legend className={styles.hint}>Select one or more areas</legend>
        {options.map(area => <label key={area.name}>
          <input type="checkbox" checked={selected.includes(area.name)} onChange={event => onChange(event.target.checked ? [...selected, area.name] : selected.filter(name => name !== area.name))} />
          <span>{area.name} ({area.count})</span>
        </label>)}
      </fieldset>
      <button type="button" className={styles.done} onClick={() => { setOpen(false); trigger.current?.focus(); }}>Done</button>
    </div>}
  </div>;
}
