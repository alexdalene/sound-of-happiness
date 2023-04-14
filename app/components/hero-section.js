import styles from "./hero-section.module.scss";
import Button from "./button";

export default function HeroSection() {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Kunne du tenke deg å bli elev hos oss?</h2>
            <hr className={styles.line}/>
            <p className={styles.info}>Sound Of Happiness er et aktivt og grensesprengende ressursmiljø for mennesker med funksjonsnedsettelser.</p>
            <aside className={styles.aside}>
                <ul className={styles.list}>
                    <h3 className={styles.listTitle}>Vi tilbyr</h3>
                    <li>Enkeltundervisninger</li>
                    <li>Ulike band</li>
                    <li>Happy Choir</li>
                    <li>Happy Kids</li>
                    <li>Dans & Drama</li>
                </ul>
            </aside>
            <Button title="Bli elev" color="#EA5321"></Button>
        </section>
    )
}