import styles from "./Skills.module.css";

type Level = "Beginner" | "Intermediate" | "Advanced";
type Skill = { name: string; level: Level };
type Category = { name: string; skills: Skill[] };

const skillCategories: Category[] = [
  {
    name: "Frontend",
    skills: [
      { name: "Next.js", level: "Advanced" },
      { name: "Angular", level: "Intermediate" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Vue.js", level: "Intermediate" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Django", level: "Advanced" },
      { name: "Express.js", level: "Intermediate" },
      { name: "Java", level: "Advanced" },
      { name: "DynamoDB", level: "Advanced" },
      { name: "S3", level: "Advanced" },
    ],
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "Git", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
      { name: "AWS", level: "Advanced" },
      { name: "Figma", level: "Advanced" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
        <div className={styles.skillsGrid}>
          {skillCategories.map((category) => (
            <div key={category.name} className={styles.skillCategory}>
              <h3>{category.name}</h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                    </div>
                    <div className={styles.skillLevelBar}>
                      <div
                        className={`${styles.levelSegment} ${
                          skill.level === "Beginner" ? styles.beginnerActive : ""
                        }`}
                      >
                        Beginner
                      </div>
                      <div
                        className={`${styles.levelSegment} ${
                          skill.level === "Intermediate" ? styles.intermediateActive : ""
                        }`}
                      >
                        Intermediate
                      </div>
                      <div
                        className={`${styles.levelSegment} ${
                          skill.level === "Advanced" ? styles.advancedActive : ""
                        }`}
                      >
                        Advanced
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
