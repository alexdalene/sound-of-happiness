import Link from "next/link";
import styles from "./button.module.scss";

export default function Button({title, color}) {
    return <Link href="" className={styles.button} style={{ backgroundColor: `${color}` }}>{title ? title: "Title"}</Link>
}