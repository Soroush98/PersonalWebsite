import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface Skill {
  name: string
  level: "Beginner" | "Intermediate" | "Advanced"
}

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="skills">
      <div class="container">
        <h2 class="section-title">Skills & Technologies</h2>
        <div class="skills-grid">
          <div class="skill-category" *ngFor="let category of skillCategories">
            <h3>{{ category.name }}</h3>
            <div class="skills-list">
              <div class="skill-item" *ngFor="let skill of category.skills">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                </div>
                <div class="skill-level-bar">
                  <div class="level-segment beginner" [class.active]="skill.level === 'Beginner'">
                    Beginner
                  </div>
                  <div class="level-segment intermediate" [class.active]="skill.level === 'Intermediate'">
                    Intermediate
                  </div>
                  <div class="level-segment advanced" [class.active]="skill.level === 'Advanced'">
                    Advanced
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ["./skills.component.css"],
})
export class SkillsComponent {
  skillCategories = [
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
  ]

  getSkillLevelClass(level: string): string {
    switch (level) {
      case "Beginner":
        return "beginner"
      case "Intermediate":
        return "intermediate"
      case "Advanced":
        return "advanced"
      default:
        return ""
    }
  }
}
