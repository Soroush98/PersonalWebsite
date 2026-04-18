import Image from "next/image";
import styles from "./Projects.module.css";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "FindConnections",
    description:
      "a platform that reveals surprising links between public figures by tracing their appearances together in photos, inspired by the six degrees of separation concept.",
    image: "/findconnections.png",
    technologies: ["Next.js", "DynamoDB", "S3", "Neo4j", "AWS Lambda"],
    liveUrl: "https://findconnections.net",
    githubUrl: "https://github.com/Soroush98/FindConnections",
  },
  {
    id: 2,
    title: "YYC Permits",
    description:
      "Natural-language search across every City of Calgary building permit. Ask a question and get answers, contractors, costs, and a live map across 488,000+ indexed permits.",
    image: "/yycpermits.png",
    technologies: ["Next.js", "TypeScript", "Claude API", "Supabase", "MapLibre", "Stripe"],
    liveUrl: "https://yycpermits.com",
    githubUrl: "https://github.com/Soroush98/calgary-permits-ai",
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.projectOverlay}>
                  <div className={styles.projectLinks}>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTechnologies}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
