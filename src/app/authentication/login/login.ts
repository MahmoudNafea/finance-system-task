import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslationService } from '../../shared/services/translation.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  protected readonly i18n = inject(TranslationService);
  protected readonly darkMode = signal(this.getInitialTheme());
  protected readonly passwordVisible = signal(false);

  protected readonly loginForm;

  public constructor(
    fb: FormBuilder,
    private readonly router: Router,
  ) {
    this.loginForm = fb.nonNullable.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rememberMe: [true],
    });
  }

  protected togglePasswordVisibility(): void {
    this.passwordVisible.update((visible) => !visible);
  }

  protected toggleTheme(): void {
    const nextTheme = !this.darkMode();
    this.darkMode.set(nextTheme);
    try {
      globalThis.localStorage?.setItem('finance-dashboard-theme', nextTheme ? 'dark' : 'light');
    } catch {
      // The theme still changes when storage is unavailable.
    }
  }

  protected submit(): void {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      void this.router.navigate(['/dashboard']);
    }
  }

  private getInitialTheme(): boolean {
    try {
      const savedTheme = globalThis.localStorage?.getItem('finance-dashboard-theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
    } catch {
      // Fall back to the operating-system preference.
    }
    return globalThis.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  }
}
