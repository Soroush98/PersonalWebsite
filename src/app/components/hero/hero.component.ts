import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              Hi, I'm <span class="highlight">Soroosh Esmaeilian</span>
            </h1>
            <p class="hero-description">
              Passionate about creating innovative web solutions using cutting-edge technologies.
              I transform ideas into powerful, scalable applications that make a difference.
            </p>
            <div class="hero-buttons">
              <a href="#projects" class="btn btn-primary">View My Work</a>
             
            </div>
          </div>
          <div class="hero-image">
            <img src="/Soroosh_Esmaeilian.jpg?height=400&width=400" alt="Soroosh Esmaeilian" class="profile-image">
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ["./hero.component.css"],
})
export class HeroComponent {}
