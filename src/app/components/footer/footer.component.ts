import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Soroosh Esmaeilian</h3>
            <p>Full Stack Developer passionate about creating amazing web experiences.</p>
          </div>
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Connect</h4>
            <div class="social-links">
              <a href="https://github.com/Soroush98/" target="_blank">GitHub</a>
              <a href="https://www.linkedin.com/in/sorooshes98/" target="_blank">LinkedIn</a>
              <a href="https://www.instagram.com/soroosh_es98" target="_blank">Instagram</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} Soroosh Esmaeilian. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent {
  currentYear = new Date().getFullYear()
}
