import { Directive, forwardRef } from '@angular/core';
import { Observable } from 'rxjs';
import {
  NG_ASYNC_VALIDATORS,
  FormControl,
  AbstractControl,
  ValidatorFn, Validator
} from '@angular/forms';
import { UserService } from '../services/user.service';

@Directive({
  selector: '[uniqueEmail][ngModel]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: forwardRef(() => UniqueEmailDirective),
    multi: true
  }]
})
export class UniqueEmailDirective implements Validator {
  constructor(private User: UserService) {}
  
  validate(control: AbstractControl): Observable<{[key: string]: any}> {
    return new Observable(observer => {
      this.User.checkUniqueEmail(control.value)
        .subscribe(res => {
          if (res.userExists) {
            observer.next({userExists: true});
          } else {
            observer.next(null);
          }
        });
    }).first();
  }
}
