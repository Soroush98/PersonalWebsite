"use client";

import { useState, type FormEvent } from "react";
import styles from "./Contact.module.css";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initial: FormData = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initial);
  const [touched, setTouched] = useState<Record<keyof FormData, boolean>>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const [confirmation, setConfirmation] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const invalid = {
    name: !formData.name.trim(),
    email: !formData.email.trim() || !emailValid,
    subject: !formData.subject.trim(),
    message: !formData.message.trim(),
  };
  const formInvalid = invalid.name || invalid.email || invalid.subject || invalid.message;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (formInvalid) return;
    setSubmitting(true);
    try {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to send message");
      setConfirmation("Thank you for your message! I'll get back to you soon.");
      setFormData(initial);
      setTouched({ name: false, email: false, subject: false, message: false });
    } catch (err) {
      console.error(err);
      setConfirmation("There was an error sending your message. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  }

  const update = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const blur = (field: keyof FormData) => () => setTouched((prev) => ({ ...prev, [field]: true }));

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h3>Let&apos;s work together!</h3>
            <p>
              I&apos;m always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <strong>Email:</strong>
                <a href="mailto:soroosh.esmaeilian@gmail.com">soroosh.esmaeilian@gmail.com</a>
              </div>
              <div className={styles.contactItem}>
                <strong>Location:</strong>
                <span>Calgary, AB</span>
              </div>
            </div>
            <div className={styles.socialLinks}>
              <a href="https://github.com/Soroush98" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
              <a href="https://www.linkedin.com/in/sorooshes98/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
              <a href="https://www.instagram.com/soroosh_es98" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Instagram</a>
            </div>
          </div>
          <form className={styles.contactForm} onSubmit={onSubmit} noValidate>
            {confirmation && <div className={styles.confirmationMessage}>{confirmation}</div>}
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={update("name")}
                onBlur={blur("name")}
                required
              />
              {invalid.name && touched.name && <div className={styles.error}>Name is required</div>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={update("email")}
                onBlur={blur("email")}
                required
              />
              {invalid.email && touched.email && <div className={styles.error}>Valid email is required</div>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={update("subject")}
                onBlur={blur("subject")}
                required
              />
              {invalid.subject && touched.subject && <div className={styles.error}>Subject is required</div>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={update("message")}
                onBlur={blur("message")}
                required
              />
              {invalid.message && touched.message && <div className={styles.error}>Message is required</div>}
            </div>
            <button type="submit" className={styles.btn} disabled={formInvalid || submitting}>
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
