import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="projects">
      <div class="container">
        <h2 class="section-title">Featured Projects</h2>
        <div class="projects-grid">
          <div class="project-card" *ngFor="let project of projects">
            <div class="project-image">
              <img [src]="project.image" [alt]="project.title">
              <div class="project-overlay">
                <div class="project-links">
                  <a [href]="project.liveUrl" *ngIf="project.liveUrl" target="_blank" class="project-link">
                    Live Demo
                  </a>
                  <a [href]="project.githubUrl" *ngIf="project.githubUrl" target="_blank" class="project-link">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-technologies">
                <span class="tech-tag" *ngFor="let tech of project.technologies">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: "FindConnections",
      description:
        "a platform that reveals surprising links between public figures by tracing their appearances together in photos, inspired by the six degrees of separation concept.",
      image: "/findconnections.png?height=400&width=400",
      technologies: ["Next.js", "DynamoDB", "S3", "Neo4j", "AWS Lambda"],
      liveUrl: "https://findconnections.net",
      githubUrl: "https://github.com/Soroush98/FindConnections",
    },
    {
      id: 2,
      title: "BrowseMind",
      description:
        "A browser extension that tracks and visualizes user's time spent across website categories to provide insights into online behavior.",
      image: "/browsemind.png?height=250&width=400",
      technologies: ["Next.js", "Django", "DynamoDB","Retrieval-Augmented Generation"],
      liveUrl: "https://browsemind.net",
      githubUrl: "https://github.com/Soroush98/BrowseMind",
    }
  ]
}
