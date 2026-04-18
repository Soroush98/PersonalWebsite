import styles from "./Education.module.css";

type Education = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
  gpa?: string;
};

type Certification = {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
};

const education: Education[] = [
  {
    degree: "MSc Computer Science",
    institution: "University of Calgary",
    location: "Calgary, Canada",
    period: "2021 – 2024",
    description: "Researched traffic sampling for Software-Defined Networks (SDNs).",
    gpa: "3.85 / 4.0",
    achievements: [
      "Teaching Assistant: Computer Networks, Computer Machinery I",
      "Thesis: Coordinated Sampling in SDNs with Dynamic Flow Rates",
    ],
  },
  {
    degree: "BSc Computer Engineering",
    institution: "University of Amirkabir (Tehran Polytechnic)",
    location: "Tehran, IR",
    period: "2016 – 2020",
    description: "Focused on computer networks and artificial intelligence.",
    gpa: "3.5 / 4.0",
    achievements: ["Thesis: Exploring neural networks for stock market prediction"],
  },
];

const certifications: Certification[] = [
  {
    name: "Next.js 15 & React - The Complete Guide",
    issuer: "Udemy",
    date: "2025",
    credentialId: "UC-ba0596ae-85c4-406f-aa9e-deb146f60b8a",
    link: "https://www.udemy.com/certificate/UC-ba0596ae-85c4-406f-aa9e-deb146f60b8a/",
  },
  {
    name: "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
    issuer: "Coursera",
    date: "2020",
    credentialId: "JM9M4S76QFFS",
    link: "https://www.coursera.org/account/accomplishments/verify/JM9M4S76QFFS",
  },
];

export default function Education() {
  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Education & Certifications</h2>

        <div className={styles.educationContent}>
          <div>
            <h3 className={styles.subsectionTitle}>Academic Background</h3>
            <div className={styles.educationTimeline}>
              {education.map((edu) => (
                <div key={edu.degree} className={styles.educationItem}>
                  <div className={styles.educationMarker} />
                  <div className={styles.educationCard}>
                    <div className={styles.educationHeader}>
                      <h4 className={styles.degree}>{edu.degree}</h4>
                      <span className={styles.period}>{edu.period}</span>
                    </div>
                    <div className={styles.institution}>
                      <strong>{edu.institution}</strong> - {edu.location}
                    </div>
                    <p className={styles.description}>{edu.description}</p>
                    {edu.gpa && (
                      <div className={styles.gpa}>
                        <strong>GPA:</strong> {edu.gpa}
                      </div>
                    )}
                    {edu.achievements && (
                      <ul className={styles.achievements}>
                        {edu.achievements.map((a) => (
                          <li key={a}>{a}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className={styles.subsectionTitle}>Professional Certifications</h3>
            <div className={styles.certificationsGrid}>
              {certifications.map((cert) => (
                <div key={cert.name} className={styles.certificationCard}>
                  <div className={styles.certHeader}>
                    <h4>{cert.name}</h4>
                    <span className={styles.certDate}>{cert.date}</span>
                  </div>
                  <p className={styles.certIssuer}>{cert.issuer}</p>
                  {(cert.link || cert.credentialId) && (
                    <div className={styles.certActions}>
                      {cert.credentialId && (
                        <span className={styles.credentialId}>ID: {cert.credentialId}</span>
                      )}
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.verifyLink}
                        >
                          Verify Certificate
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
