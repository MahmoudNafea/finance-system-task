import { computed, Injectable, signal } from '@angular/core';
import { AR_DASHBOARD_TRANSLATIONS } from './ar';
import { DashboardLanguage } from './dashboard-translations.types';
import { EN_DASHBOARD_TRANSLATIONS } from './en';

const LANGUAGE_STORAGE_KEY = 'finance-dashboard-language';

@Injectable()
export class DashboardI18nService {
  readonly language = signal<DashboardLanguage>(this.getInitialLanguage());
  readonly translations = computed(() =>
    this.language() === 'ar' ? AR_DASHBOARD_TRANSLATIONS : EN_DASHBOARD_TRANSLATIONS,
  );
  readonly direction = computed(() => this.translations().direction);

  t(source: string): string {
    return this.translations().content[source] ?? source;
  }

  toggleLanguage(): void {
    const nextLanguage: DashboardLanguage = this.language() === 'ar' ? 'en' : 'ar';
    this.language.set(nextLanguage);

    try {
      globalThis.localStorage?.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    } catch {
      // Language switching still works when storage is unavailable.
    }
  }

  private getInitialLanguage(): DashboardLanguage {
    try {
      return globalThis.localStorage?.getItem(LANGUAGE_STORAGE_KEY) === 'en' ? 'en' : 'ar';
    } catch {
      return 'ar';
    }
  }
}
