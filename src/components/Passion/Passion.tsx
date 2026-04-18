import styles from "./Passion.module.css";

const points = [
  {
    icon: "🎨",
    title: "Frontend",
    text: "Creating fault-tolerant, responsive interfaces that users love to interact with using modern frameworks like Angular, Next.js, and Vue.js.",
  },
  {
    icon: "⚙️",
    title: "Backend",
    text: "Building robust, scalable server-side applications with Django, Express.js, Java and cloud technologies that power amazing user experiences.",
  },
  {
    icon: "🚀",
    title: "End-to-End Solutions",
    text: "From database design to deployment, I enjoy solving complex problems and optimizing every aspect of the development lifecycle.",
  },
];

export default function Passion() {
  return (
    <section id="passion" className={styles.passion}>
      <div className={styles.container}>
        <div className={styles.passionContent}>
          <div>
            <div className={styles.passionIntro}>
              <h2 className={styles.passionTitle}>My Passion</h2>
            </div>
            <div className={styles.passionPoints}>
              {points.map((p) => (
                <div key={p.title} className={styles.passionPoint}>
                  <div className={styles.icon}>{p.icon}</div>
                  <div className={styles.content}>
                    <h4>{p.title}</h4>
                    <p>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
