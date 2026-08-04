import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslationService } from '../../shared/services/translation.service';
import { LanguageService } from '../../shared/services/language.service';
import { ThemeService } from '../../shared/services/theme.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  i18n = inject(TranslationService);
  language = inject(LanguageService);
  theme = inject(ThemeService);
  router = inject(Router);
  get AUTHENTICATION() {
    return this.i18n.AUTHENTICATION();
  }

  passwordVisible = signal(false);

  loginForm;

  constructor(fb: FormBuilder) {
    this.loginForm = fb.nonNullable.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rememberMe: [true],
    });
  }

  togglePasswordVisibility(): void {
    this.passwordVisible.update((visible) => !visible);
  }

  submit(): void {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      void this.router.navigate(['/dashboard']);
    }
  }

}
