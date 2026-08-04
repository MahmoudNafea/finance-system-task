import { computed, Injectable, signal } from '@angular/core';

export type Language = 'ar' | 'en';

const LANGUAGE_STORAGE_KEY = 'finance-dashboard-language';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  language = signal<Language>(this.getInitialLanguage());
  direction = computed(() => this.language() === 'ar' ? 'rtl' : 'ltr');

  toggle(): void {
    this.set(this.language() === 'ar' ? 'en' : 'ar');
  }

  set(language: Language): void {
    this.language.set(language);

    try {
      globalThis.localStorage?.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // Language switching still works when storage is unavailable.
    }
  }

  getInitialLanguage(): Language {
    try {
      return globalThis.localStorage?.getItem(LANGUAGE_STORAGE_KEY) === 'en' ? 'en' : 'ar';
    } catch {
      return 'ar';
    }
  }
}
