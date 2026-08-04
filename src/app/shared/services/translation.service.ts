import { computed, inject, Injectable } from '@angular/core';
import AR_TRANSLATIONS from '../../../assets/translations/ar.json';
import EN_TRANSLATIONS from '../../../assets/translations/en.json';
import { LanguageService } from './language.service';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  languageService = inject(LanguageService);
  translations = computed(() =>
    this.languageService.language() === 'ar' ? AR_TRANSLATIONS : EN_TRANSLATIONS,
  );
  AUTHENTICATION = computed(() => this.translations().AUTHENTICATION);
  DASHBOARD = computed(() => this.translations().DASHBOARD);

  t(source: string): string {
    const content: Readonly<Record<string, string>> = this.DASHBOARD().content;
    return content[source] ?? source;
  }

  toggleLanguage(): void {
    this.languageService.toggle();
  }
}
