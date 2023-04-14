import styles from "./hero.module.scss";
import Image from "next/image";

export default function Hero() {
  return (
    <header className={styles.grid}>
      <div className={styles.box}></div>
      <div className={styles.box}></div>
      <div className={styles.box}></div>
      <div className={styles.box}></div>
      <div className={styles.box}></div>
        <Image src="/images/hero-image-1.jpg" alt="two parents or caregivers hugging a child that's in the middle that has downs syndrome" width={2000} height={1365} className={styles.image1}></Image>
        <Image src="/images/hero-image-2.jpg" alt="an elderly male smiling at an adult with downs syndrome in a friendly way" width={2000} height={1335} className={styles.image2}></Image>
        <Image src="/images/hero-image-3.jpg" alt="two children sitting on a staircase outside in the sun with their arms around each other" width={2000} height={2999} className={styles.image3}></Image>
    </header>
  );
}
