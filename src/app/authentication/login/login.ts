import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginFacade } from '../facades/login.facade';
import { TranslatePipe } from '../../helpers/pipes/translate.pipe';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, TranslatePipe],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm: FormGroup;

  constructor(
    private loginFacade: LoginFacade,
    private router: Router,
    formBuilder: FormBuilder,
  ) {
    this.loginForm = formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).{8,}$/),
        ],
      ],
      rememberMe: [true],
    });
  }

  togglePasswordVisibility(): void {
    this.loginFacade.togglePasswordVisibility();
  }

  toggleTheme(): void {
    this.loginFacade.toggleTheme();
  }

  toggleLanguage(): void {
    this.loginFacade.toggleLanguage();
  }

  submit(): void {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      this.router.navigate(['/dashboard']);
    }
  }

  get username() {
    return this.loginForm.controls['username'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  get darkMode() {
    return this.loginFacade.darkMode;
  }

  get direction() {
    return this.loginFacade.direction;
  }

  get currentLanguage() {
    return this.loginFacade.currentLanguage;
  }

  get passwordVisible() {
    return this.loginFacade.passwordVisible;
  }
}
