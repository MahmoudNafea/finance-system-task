import { computed, Injectable, signal } from '@angular/core';
import AR_TRANSLATIONS from '../../../assets/translations/ar.json';
import EN_TRANSLATIONS from '../../../assets/translations/en.json';

type Language = 'ar' | 'en';

const LANGUAGE_STORAGE_KEY = 'finance-dashboard-language';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  readonly language = signal<Language>(this.getInitialLanguage());
  readonly translations = computed(() =>
    this.language() === 'ar' ? AR_TRANSLATIONS : EN_TRANSLATIONS,
  );
  readonly authentication = computed(() => this.translations().authentication);
  readonly dashboard = computed(() => this.translations().dashboard);
  readonly direction = computed(() => this.dashboard().direction);

  t(source: string): string {
    const content: Readonly<Record<string, string>> = this.dashboard().content;
    return content[source] ?? source;
  }

  toggleLanguage(): void {
    const nextLanguage: Language = this.language() === 'ar' ? 'en' : 'ar';
    this.language.set(nextLanguage);

    try {
      globalThis.localStorage?.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    } catch {
      // Language switching still works when storage is unavailable.
    }
  }

  private getInitialLanguage(): Language {
    try {
      return globalThis.localStorage?.getItem(LANGUAGE_STORAGE_KEY) === 'en' ? 'en' : 'ar';
    } catch {
      return 'ar';
    }
  }
}
