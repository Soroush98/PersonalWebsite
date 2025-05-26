import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface Skill {
  name: string
  level: number
  category: string
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
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" [style.width.%]="skill.level"></div>
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
        { name: "Next.js", level: 90 },
        { name: "Angular", level: 75 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Vue.js", level: 65 },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Django", level: 80 },
        { name: "Express.js", level: 70 },
        { name: "Java", level: 95 },
        { name: "DynamoDB", level: 85 },
        { name: "S3", level: 80 },
      ],
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 65 },
        { name: "AWS", level: 85 },
        { name: "Figma", level: 80 },
      ],
    },
  ]
}
