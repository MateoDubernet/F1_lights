import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from '../service/authenticate.service';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { usernameAvailableValidator } from '../directives/unique-username.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private userService: UserService) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required, usernameAvailableValidator(this.userService)],
      password: ['', Validators.required],
      verifPassword: ['', Validators.required]
    }, { validators: [this.passwordsMatchValidator] });
  }

  /** Validateur personnalisé pour vérifier que password et verifPassword sont identiques */
  private passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const verifPassword = group.get('verifPassword')?.value;
    return password === verifPassword ? null : { passwordsMismatch: true };
  }

  /** Soumission du formulaire */
  register() {
    this.registerForm.markAllAsTouched();
    if (!this.registerForm.valid) return;

    this.authService.register(this.registerForm.value).subscribe({
      next: (res: any) => {
        console.log(res.message); // "Inscription réussie"
        this.router.navigate(['/login']); // Redirection après inscription
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  /** Raccourci pour les contrôles du formulaire */
  get form() {
    return this.registerForm.controls;
  }

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
