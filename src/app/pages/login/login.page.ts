import { Component, computed, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss',
})
export class LoginPage {
  protected readonly language = signal<'ar' | 'en'>('ar');
  protected readonly theme = signal<'light' | 'dark'>('light');
  protected readonly direction = computed(() => (this.language() === 'ar' ? 'rtl' : 'ltr'));
  protected readonly passwordVisible = signal(false);

  protected readonly loginForm;

  public constructor(formBuilder: FormBuilder) {
    this.loginForm = formBuilder.nonNullable.group({
      username: ['mail@moio.gov.qa', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rememberMe: [true],
    });
  }

  protected togglePasswordVisibility(): void {
    this.passwordVisible.update((visible) => !visible);
  }

  protected submit(): void {
    this.loginForm.markAllAsTouched();
  }
}
