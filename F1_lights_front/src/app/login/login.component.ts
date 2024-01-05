import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../model/login';
import { AuthService } from '../service/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public setFormGroup = (dataItem: Login) => new FormGroup({
    'username': new FormControl(dataItem.username, Validators.required),
    'password': new FormControl(dataItem.pwd, Validators.required),
  });

  public loginForm: FormGroup;

  constructor(private authService: AuthService) {
    this.loginForm = this.setFormGroup(new Login());
  }

  login() {
    this.loginForm.markAllAsTouched();
    if(!this.loginForm.valid) return;

    this.authService.login(this.loginForm.value)
  }

}
