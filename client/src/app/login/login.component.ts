import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  serverError: string = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  /** Soumission du formulaire */
  login() {
    this.loginForm.markAllAsTouched();
    this.serverError = '';

    if (!this.loginForm.valid) return;

    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        this.router.navigate(['/game']); // redirection après login
      },
      error: (err) => {
        console.error(err);
        this.serverError = err.error?.error || 'Erreur lors de la connexion';
      }
    });
  }

  /** Raccourci pour les contrôles du formulaire */
  get form() {
    return this.loginForm.controls;
  }

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
