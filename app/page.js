import Image from "next/image";
import styles from "./page.module.scss";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import HeroSection from "./components/hero-section";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar></Navbar>
      <Hero></Hero>
      <HeroSection></HeroSection>
    </main>
  );
}
