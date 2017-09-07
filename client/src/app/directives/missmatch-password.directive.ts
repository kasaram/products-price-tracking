import { Directive, Attribute, forwardRef } from '@angular/core';
import {
  NG_VALIDATORS,
  FormControl, FormGroup,
  AbstractControl,
  Validator
} from '@angular/forms';

@Directive({
  selector: '[ngModel][missmatchPassword]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MissmatchPasswordDirective),
    multi: true
  }]
})
export class MissmatchPasswordDirective implements Validator {
  constructor(@Attribute('missmatchPassword') public missmatchPassword: string) {}
  
  validate(c: AbstractControl): {[key: string]: any} {
    let confirm = c.value;
    let pass = c.root.get(this.missmatchPassword);

    if (confirm && pass.value !== confirm) return {
      missmatchPassword: false
    }
    return null;
  }
}
