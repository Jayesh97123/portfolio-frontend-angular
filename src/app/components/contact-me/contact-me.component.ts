import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-me',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {
  contactForm: FormGroup = null;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
  ) {}

  ngOnInit() {
    this.initContactForm();
  }

  initContactForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      message: [''],
    });
  }

  async onSubmit() {
    let res = await this.contactService.addContact(this.contactForm.value);
    if (res) {
      alert('Record saved successfully...');
    }
  }
}
