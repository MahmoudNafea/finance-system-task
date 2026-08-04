import { inject, Injectable, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LanguageService } from '../../shared/services/language.service';
import { ThemeService } from '../../shared/services/theme.service';
import { TranslationService } from '../../shared/services/translation.service';

@Injectable({ providedIn: 'root' })
export class LoginFacade {
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  translations = inject(TranslationService);
  language = inject(LanguageService);
  theme = inject(ThemeService);
  passwordVisible = signal(false);

  loginForm = this.formBuilder.nonNullable.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    rememberMe: [true],
  });

  AUTHENTICATION = this.translations.AUTHENTICATION;
  darkMode = this.theme.darkMode;
  direction = this.language.direction;
  currentLanguage = this.language.language;

  togglePasswordVisibility(): void { this.passwordVisible.update((visible) => !visible); }

  toggleTheme(): void { this.theme.toggle(); }

  toggleLanguage(): void { this.language.toggle(); }

  submit(): void {
    this.loginForm.markAllAsTouched();

    const { valid,value } = this.loginForm;
    
    if (valid) {
      this.router.navigate(['/dashboard']);
    } 
  }

}
