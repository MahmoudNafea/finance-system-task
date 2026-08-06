import { inject, Injectable, signal } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';
import { ThemeService } from '../../shared/services/theme.service';

@Injectable({ providedIn: 'root' })
export class LoginFacade {
  language = inject(LanguageService);
  theme = inject(ThemeService);
  passwordVisible = signal(false);

  darkMode = this.theme.darkMode;
  direction = this.language.direction;
  currentLanguage = this.language.language;

  togglePasswordVisibility(): void { this.passwordVisible.update((visible) => !visible); }

  toggleTheme(): void { this.theme.toggle(); }

  toggleLanguage(): void { this.language.toggle(); }

}
