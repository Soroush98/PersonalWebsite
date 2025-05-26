import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface Education {
  degree: string
  institution: string
  location: string
  period: string
  description: string
  achievements?: string[]
  gpa?: string
}

interface Certification {
  name: string
  issuer: string
  date: string
  credentialId?: string
  link?: string
}

@Component({
  selector: "app-education",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="education" class="education">
      <div class="container">
        <h2 class="section-title">Education & Certifications</h2>
        
        <div class="education-content">
          <div class="education-section">
            <h3 class="subsection-title">Academic Background</h3>
            <div class="education-timeline">
              <div class="education-item" *ngFor="let edu of education">
                <div class="education-marker"></div>
                <div class="education-card">
                  <div class="education-header">
                    <h4 class="degree">{{ edu.degree }}</h4>
                    <span class="period">{{ edu.period }}</span>
                  </div>
                  <div class="institution">
                    <strong>{{ edu.institution }}</strong> - {{ edu.location }}
                  </div>
                  <p class="description">{{ edu.description }}</p>
                  <div class="gpa" *ngIf="edu.gpa">
                    <strong>GPA:</strong> {{ edu.gpa }}
                  </div>
                  <ul class="achievements" *ngIf="edu.achievements">
                    <li *ngFor="let achievement of edu.achievements">{{ achievement }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div class="certifications-section">
            <h3 class="subsection-title">Professional Certifications</h3>
            <div class="certifications-grid">
              <div class="certification-card" *ngFor="let cert of certifications">
                <div class="cert-header">
                  <h4>{{ cert.name }}</h4>
                  <span class="cert-date">{{ cert.date }}</span>
                </div>
                <p class="cert-issuer">{{ cert.issuer }}</p>
                <div class="cert-actions" *ngIf="cert.link || cert.credentialId">
                  <span class="credential-id" *ngIf="cert.credentialId">
                    ID: {{ cert.credentialId }}
                  </span>
                  <a [href]="cert.link" *ngIf="cert.link" target="_blank" class="verify-link">
                    Verify Certificate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ["./education.component.css"],
})
export class EducationComponent {
  education: Education[] = [
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
      achievements: [
        "Thesis: Exploring neural networks for stock market prediction",
      ],
    },
  ]

  certifications: Certification[] = [
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
    }
  ]
}
