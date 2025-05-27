import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-passion",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="passion" class="passion">
      <div class="container">
        <h2 class="section-title">My Passion for Full Stack Development</h2>
        <div class="passion-content">
          <div class="passion-text">
            <div class="passion-intro">
              <h3>Why Full Stack Development?</h3>
              <p>
                Full stack development represents the perfect blend of creativity and logic, 
                allowing me to bring complete ideas to life from conception to deployment. 
                I'm passionate about understanding every layer of web applications and how 
                they work together to create seamless user experiences.
              </p>
            </div>
            
            <div class="passion-points">
              <div class="passion-point">
                <div class="icon">🎨</div>
                <div class="content">
                  <h4>Frontend Excellence</h4>
                  <p>Creating fault-tolerant, responsive interfaces that users love to interact with using modern frameworks like Angular, Next.js, and Vue.js.</p>
                </div>
              </div>
              
              <div class="passion-point">
                <div class="icon">⚙️</div>
                <div class="content">
                  <h4>Backend Mastery</h4>
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
          
          <div class="passion-stats">
            <div class="stat-card">
              <h3>1+</h3>
              <p>Years of Experience</p>
            </div>
            <div class="stat-card">
              <h3>20+</h3>
              <p>Projects Completed</p>
            </div>
            <div class="stat-card">
              <h3>15+</h3>
              <p>Technologies Mastered</p>
            </div>
            <div class="stat-card">
              <h3>100%</h3>
              <p>Passion Driven</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  `,
  styleUrls: ["./passion.component.css"],
})
export class PassionComponent {}
