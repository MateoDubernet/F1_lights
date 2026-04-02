// username.validator.ts
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

export function usernameAvailableValidator(userService: UserService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value) {
      return new Observable(subscriber => subscriber.next(null));
    }
    return userService.getAllUsernames().pipe(
      map(usernames => {
        return usernames.includes(control.value) ? { usernameTaken: true } : null;
      })
    );
  };
}
