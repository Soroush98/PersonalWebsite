import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule, NgForm } from "@angular/forms"
import { environment } from '../../../environments/environment';


@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent {
  formData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  }
  
  // Property for displaying confirmation/error messages
  confirmation: string = ""

  async onSubmit(form: NgForm) {
    if (form.valid) {
      try {
        const response = await fetch(`${environment.domain}/message`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        });
        if (!response.ok) {
          throw new Error('Failed to send message');
        }
        this.confirmation = "Thank you for your message! I'll get back to you soon."
        form.resetForm(); // Resets both model and form state
      } catch (error) {
        this.confirmation = "There was an error sending your message. Please try again later."
        console.error(error);
      }
    }
  }
}
