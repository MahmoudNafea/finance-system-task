import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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
  facade = inject(LoginFacade);
  formBuilder = inject(FormBuilder);
  router = inject(Router);

  loginForm = this.formBuilder.nonNullable.group({
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

  togglePasswordVisibility(): void { this.facade.togglePasswordVisibility(); }
  
  toggleTheme(): void { this.facade.toggleTheme(); }
  
  toggleLanguage(): void { this.facade.toggleLanguage(); }
  
  submit(): void {
    this.loginForm.markAllAsTouched();

    const {valid,value}=this.loginForm

    if (valid) {
      console.log("🚀 ~ Login ~ submit ~ value:", value)
      this.router.navigate(['/dashboard']);
    }
  }
  


  get darkMode() { return this.facade.darkMode; }

  get direction() { return this.facade.direction; }

  get currentLanguage() { return this.facade.currentLanguage; }

  get passwordVisible() { return this.facade.passwordVisible; }

}
