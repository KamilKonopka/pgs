export interface ValidationMessageModel {
  valid: string,
  invalid: string,
  noEmail: string,
  noName: string,
  wrongEmail: string,
}

export const VALIDATION_MESSAGE: ValidationMessageModel = {
  valid: 'Your form is valid!',
  invalid: 'Your form is invalid!',
  noEmail: 'Your email address is required!',
  noName: 'Your name is required!',
  wrongEmail: 'You provided wrong email address!',
};
