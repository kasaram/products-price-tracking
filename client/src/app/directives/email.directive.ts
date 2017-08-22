import { Directive, Input } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';

@Directive({
  selector: '[validEmail]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailValidatorDirective,
    multi: true
  }]
})
export class EmailValidatorDirective implements Validator {
  emailRe: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

  validate(control: AbstractControl): { [key: string]: any } {
    return emailValidator(this.emailRe)(control);
  }
}

export function emailValidator(emailRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const valid = emailRe.test(control.value);
    return valid ? { 'email': { value: control.value } } : null;
  }
}
