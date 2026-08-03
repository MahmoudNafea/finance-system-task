import { computed, Injectable, signal } from '@angular/core';
import { AR_LOGIN_TRANSLATIONS } from '../i18n/ar';
import { EN_LOGIN_TRANSLATIONS } from '../i18n/en';
import { LoginLanguage } from '../models/login-translations.model';

const LANGUAGE_STORAGE_KEY = 'finance-dashboard-language';

@Injectable()
export class LoginI18nService {
  readonly language = signal<LoginLanguage>(this.getInitialLanguage());
  readonly translations = computed(() =>
    this.language() === 'ar' ? AR_LOGIN_TRANSLATIONS : EN_LOGIN_TRANSLATIONS,
  );
  readonly direction = computed(() => this.translations().direction);

  toggleLanguage(): void {
    const nextLanguage: LoginLanguage = this.language() === 'ar' ? 'en' : 'ar';
    this.language.set(nextLanguage);
    try {
      globalThis.localStorage?.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    } catch {
      // The language still changes when storage is unavailable.
    }
  }

  private getInitialLanguage(): LoginLanguage {
    try {
      return globalThis.localStorage?.getItem(LANGUAGE_STORAGE_KEY) === 'en' ? 'en' : 'ar';
    } catch {
      return 'ar';
    }
  }
}
