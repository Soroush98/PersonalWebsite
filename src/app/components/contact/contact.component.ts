import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="contact">
      <div class="container">
        <h2 class="section-title">Get In Touch</h2>
        <div class="contact-content">
          <div class="contact-info">
            <h3>Let's work together!</h3>
            <p>
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div class="contact-details">
              <div class="contact-item">
                <strong>Email:</strong>
                <a href="mailto:soroosh.esmaeilian@gmail.com">soroosh.esmaeilian&#64;gmail.com</a>
              </div>
              <div class="contact-item">
                <strong>Location:</strong>
                <span>Calgary, AB</span>
              </div>
            </div>
            <div class="social-links">
              <a href="https://github.com/Soroush98" target="_blank" class="social-link">GitHub</a>
              <a href="https://www.linkedin.com/in/sorooshes98/" target="_blank" class="social-link">LinkedIn</a>
              <a href="https://www.instagram.com/soroosh_es98" target="_blank" class="social-link">Instagram</a>
            </div>
          
          <div class="resume-section">
            <h4>Download My Resume</h4>
            <p>Get a detailed overview of my experience, skills, and achievements.</p>
            <a href="/Soroosh_Esmaeilian_FullStack.pdf" download="Soroosh_Esmaeilian_Resume.pdf" class="resume-download-btn">
              <span class="download-icon">📄</span>
              Download Resume (PDF)
            </a>
          </div>
        </div>
        <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              [(ngModel)]="formData.name"
              required
              #name="ngModel"
            >
            <div *ngIf="name.invalid && name.touched" class="error">Name is required</div>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              [(ngModel)]="formData.email"
              required
              email
              #email="ngModel"
            >
            <div *ngIf="email.invalid && email.touched" class="error">Valid email is required</div>
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              [(ngModel)]="formData.subject"
              required
              #subject="ngModel"
            >
            <div *ngIf="subject.invalid && subject.touched" class="error">Subject is required</div>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              [(ngModel)]="formData.message"
              required
              #message="ngModel"
            ></textarea>
            <div *ngIf="message.invalid && message.touched" class="error">Message is required</div>
          </div>
          <button type="submit" class="btn btn-primary" [disabled]="contactForm.invalid">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
`,
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent {
  formData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  }

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.subject && this.formData.message) {
      console.log("Form submitted:", this.formData)
      // Here you would typically send the form data to a server
      alert("Thank you for your message! I'll get back to you soon.")
      this.resetForm()
    }
  }

  resetForm() {
    this.formData = {
      name: "",
      email: "",
      subject: "",
      message: "",
    }
  }
}
