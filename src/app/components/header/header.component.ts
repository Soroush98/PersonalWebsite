import { Component, HostListener } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header" [class.scrolled]="isScrolled">
      <div class="container">
        <div class="logo">
          <a href="#home">Soroosh Esmaeilian</a>
        </div>
        <nav class="nav" [class.active]="isMenuOpen">
          <a href="#home" (click)="closeMenu()">Home</a>
          <a href="#projects" (click)="closeMenu()">Projects</a>
          <a href="#skills" (click)="closeMenu()">Skills</a>
          <a href="#passion" (click)="closeMenu()">About</a>
          <a href="#education" (click)="closeMenu()">Education</a>
          <a href="#contact" (click)="closeMenu()">Contact</a>
        </nav>
        <div class="header-actions">
          <a href="/Soroosh_Esmaeilian_FullStack.pdf" download="Soroosh_Esmaeilian_Resume.pdf" class="resume-btn">
            Download Resume
          </a>
          <button class="menu-toggle" (click)="toggleMenu()" [class.active]="isMenuOpen">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  `,
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  isScrolled = false
  isMenuOpen = false

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

  closeMenu() {
    this.isMenuOpen = false
  }
}
