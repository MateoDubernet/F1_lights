import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/authenticate.service';
import { Register } from '../model/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public setFormGroup = (dataItem: Register) => new FormGroup({
    'username': new FormControl(dataItem.username, Validators.required),
    'password': new FormControl(dataItem.pwd, Validators.required),
    'verifPwd': new FormControl(dataItem.verifPwd, Validators.required),
  });

  public registerForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.registerForm = this.setFormGroup(new Register());
  }

  register() {
    this.registerForm.markAllAsTouched();
    if(!this.registerForm.valid) return;

    this.authService.register(this.registerForm.value)
  }

  public goTo(path: string){
    this.router.navigate([path])
  }
}
