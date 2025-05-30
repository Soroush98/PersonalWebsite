import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { HeaderComponent } from "./components/header/header.component"
import { HeroComponent } from "./components/hero/hero.component"
import { PassionComponent } from "./components/passion/passion.component"
import { SkillsComponent } from "./components/skills/skills.component"
import { ProjectsComponent } from "./components/projects/projects.component"
import { EducationComponent } from "./components/education/education.component"
import { ContactComponent } from "./components/contact/contact.component"
import { FooterComponent } from "./components/footer/footer.component"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    PassionComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <div class="app">
      <app-header></app-header>
      <main>
        <app-hero></app-hero>
        <app-projects></app-projects>
        <app-skills></app-skills>
        <app-passion></app-passion>
        <app-education></app-education>
        <app-contact></app-contact>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "personal-website"
}
