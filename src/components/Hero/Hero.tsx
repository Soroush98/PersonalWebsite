import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div>
            <h1 className={styles.heroTitle}>
              Hi, I&apos;m <span className={styles.highlight}>Soroosh Esmaeilian</span>
            </h1>
            <p className={styles.heroDescription}>
              I build AI systems that work on real data, not just demos. My focus:
              taking a messy dataset, an LLM, and a database, and shipping a product
              real people use. Data pipelines, backend, frontend, deployment. One
              person, end to end.
            </p>
            <p className={styles.heroDescription}>
              Stack I reach for: TypeScript, Next.js, Express.js, Django, PostgreSQL.
              MSc Computer Science, University of Calgary &mdash; thesis on coordinated
              sampling in networks.
            </p>
            <div className={styles.heroButtons}>
              <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>
                View My Work
              </a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/Soroosh_Esmaeilian.jpg"
              alt="Soroosh Esmaeilian"
              width={400}
              height={400}
              className={styles.profileImage}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
