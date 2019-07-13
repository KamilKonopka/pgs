import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {VALIDATION_MESSAGE} from "../../models/validation-message.model";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  public form: FormGroup;
  public formStatus = true;
  public isFormValidated = false;
  public isFormValid: boolean;
  public message: string;

  ngOnInit() {
    this.form = this.buildForm();
  }

  buildForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null)
    });
  }

  validateForm() {
    this.isFormValidated = true;
    this.message = this.parseErrorMessage();
  }

  parseErrorMessage(): string {
    const nameField = this.form && this.form.get('name');
    const emailField = this.form && this.form.get('email');
    let message;
    if (this.form.valid) {
      this.isFormValid = true;
      message = VALIDATION_MESSAGE.valid;
    } else {
      this.isFormValid = false;
      message = VALIDATION_MESSAGE.invalid;
      !nameField.valid ? message += ` ${VALIDATION_MESSAGE.noName}` : message;
      emailField.value === null ? message += ` ${VALIDATION_MESSAGE.noEmail}` :
        (emailField.valid ? message : message += ` ${VALIDATION_MESSAGE.wrongEmail}`);
    }
    return message;
  }

  resetFormValues() {
    this.form.reset();
  }
}