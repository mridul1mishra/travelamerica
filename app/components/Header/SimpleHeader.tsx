import NavigationHeader from "./NavigationHeader";
import styles from "./SimpleHeader.module.css";
export default function SimpleHeader({pageTitle}:{pageTitle?:string}) {return <><NavigationHeader fixed={false}/>{pageTitle?<h1 className={styles.pageTitle}>{pageTitle}</h1>:null}</>;}
