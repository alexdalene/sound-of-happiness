import styles from "./navbar.module.scss";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logoContainer}>
                <Image src="/svg/logo.svg" alt="" fill={true} className={styles.logo}></Image>
            </div>
            <div className={styles.burgerContainer}>
                <Image src="/svg/burger.svg" alt="" fill={true} className={styles.menu}></Image>
            </div>
        </nav>
    )
}