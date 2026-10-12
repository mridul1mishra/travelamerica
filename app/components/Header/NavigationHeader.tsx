"use client";
import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MemberNavigation from "../auth/MemberNavigation";
import { cityNavigation } from "@/app/lib/cityNavigation";
import styles from "./NavigationHeader.module.css";
export type HeaderLink={href:string;label:string};
type NavigationHeaderProps={links?:HeaderLink[];prefetch?:boolean;memberReturnTo?:string;memberAction?:"rating"|"prices";fixed?:boolean};
export default function NavigationHeader({prefetch,memberReturnTo,memberAction,fixed=true}:NavigationHeaderProps){
 const [mobile,setMobile]=useState(false);const [city,setCity]=useState<string|null>(null);
 const root=useRef<HTMLElement>(null);const cityTriggers=useRef<Record<string,HTMLButtonElement|null>>({});const mobileTrigger=useRef<HTMLButtonElement>(null);const id=useId();const pathname=usePathname();
 const close=()=>{setMobile(false);setCity(null);};
 useEffect(()=>{
  const outside=(e:PointerEvent)=>{if(!root.current?.contains(e.target as Node)){setCity(null);setMobile(false);}};
  const escape=(e:KeyboardEvent)=>{if(e.key==='Escape'){if(city){cityTriggers.current[city]?.focus();setCity(null);}else if(mobile){setMobile(false);mobileTrigger.current?.focus();}}};
  document.addEventListener('pointerdown',outside);document.addEventListener('keydown',escape);
  return()=>{document.removeEventListener('pointerdown',outside);document.removeEventListener('keydown',escape);};
 },[city,mobile]);
 return <header ref={root} className={`${styles.header} ${fixed?styles.fixed:''}`}>
  <Link className={styles.logo} href="/" aria-label="Travels Americas home" onClick={close} prefetch={prefetch}><Image src="/Travels-Americas-logo-horizontal-v3.png" alt="Travels Americas" width={285} height={76} priority/></Link>
  <nav aria-label="Primary navigation" className={styles.nav}>
   <button ref={mobileTrigger} type="button" className={styles.toggle} aria-label="Toggle menu" aria-expanded={mobile} aria-controls={`${id}-navigation`} onClick={()=>{setMobile(!mobile);setCity(null);}}>☰</button>
   <ul id={`${id}-navigation`} className={`${styles.list} ${mobile?styles.open:''}`}>
    <li className={styles.mobileClose}><button type="button" aria-label="Close menu" onClick={()=>{close();mobileTrigger.current?.focus();}}>×</button></li>
    {cityNavigation.map(item=><li key={item.slug} className={styles.city}>
     <button ref={el=>{cityTriggers.current[item.slug]=el;}} type="button" className={styles.cityTrigger} aria-expanded={city===item.slug} aria-controls={`${id}-${item.slug}`} data-current={pathname.startsWith(`/destination/${item.slug}`)||undefined} onClick={()=>setCity(city===item.slug?null:item.slug)}>{item.label}<span aria-hidden="true">⌄</span></button>
     {city===item.slug&&<ul id={`${id}-${item.slug}`} className={styles.dropdown} aria-label={`${item.label} pages`}>{item.links.map(link=><li key={link.href}><Link href={link.href} prefetch={prefetch} aria-current={pathname===link.href?'page':undefined} onClick={close}>{link.label}</Link></li>)}</ul>}
    </li>)}
    <MemberNavigation onNavigate={close} returnTo={memberReturnTo} action={memberAction}/>
   </ul>
  </nav>
 </header>;
}
