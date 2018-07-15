import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  filledFormData = new FilledContactForm();

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null)
    });
  }

  validateForm() {
  console.log(this.contactForm);
  this.assignValues();
  console.log(this.filledFormData);
  this.resetFormValues();
  }

  assignValues() {
    this.filledFormData.name = this.contactForm.value.name;
    this.filledFormData.email = this.contactForm.value.email;
    this.filledFormData.message = this.contactForm.value.message;
  }

  resetFormValues() {
    this.contactForm.reset();
  }
}

class FilledContactForm {
  constructor (
    public message?: string,
    public name?: string,
    public email?: string
  ) {}
}
