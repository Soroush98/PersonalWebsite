import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-passion",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="passion" class="passion">
      <div class="container">
        <div class="passion-content">
          <div class="passion-text">
            <div class="passion-intro">
              <h2 class="passion-title">My Passion</h2>
            </div>
            
            <div class="passion-points">
              <div class="passion-point">
                <div class="icon">🎨</div>
                <div class="content">
                  <h4>Frontend</h4>
                  <p>Creating fault-tolerant, responsive interfaces that users love to interact with using modern frameworks like Angular, Next.js, and Vue.js.</p>
                </div>
              </div>
              
              <div class="passion-point">
                <div class="icon">⚙️</div>
                <div class="content">
                  <h4>Backend</h4>
                  <p>Building robust, scalable server-side applications with Django, Express.js, Java and cloud technologies that power amazing user experiences.</p>
                </div>
              </div>
              
              <div class="passion-point">
                <div class="icon">🚀</div>
                <div class="content">
                  <h4>End-to-End Solutions</h4>
                  <p>From database design to deployment, I enjoy solving complex problems and optimizing every aspect of the development lifecycle.</p>
                </div>
              </div>
            </div>
          </div>
          
      </div>
        
      </div>
    </section>
  `,
  styleUrls: ["./passion.component.css"],
})
export class PassionComponent {}
