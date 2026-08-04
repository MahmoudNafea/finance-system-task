import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFacade } from '../facades/login.facade';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  facade = inject(LoginFacade);

  togglePasswordVisibility(): void { this.facade.togglePasswordVisibility(); }
  
  toggleTheme(): void { this.facade.toggleTheme(); }
  
  toggleLanguage(): void { this.facade.toggleLanguage(); }
  
  submit(): void { this.facade.submit(); }
  

  get AUTHENTICATION() { return this.facade.AUTHENTICATION(); }

  get darkMode() { return this.facade.darkMode; }

  get direction() { return this.facade.direction; }

  get currentLanguage() { return this.facade.currentLanguage; }

  get passwordVisible() { return this.facade.passwordVisible; }

  get loginForm() { return this.facade.loginForm; }

}
