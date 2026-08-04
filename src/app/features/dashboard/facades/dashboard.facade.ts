import { computed, inject, Injectable, signal } from '@angular/core';
import type { BreadcrumbItem } from '../../../shared/models';
import { LanguageService } from '../../../shared/services/language.service';
import { ThemeService } from '../../../shared/services/theme.service';
import { TranslationService } from '../../../shared/services/translation.service';

@Injectable({ providedIn: 'root' })
export class DashboardFacade {
  translations = inject(TranslationService);
  language = inject(LanguageService);
  theme = inject(ThemeService);

  DASHBOARD = computed(() => this.translations.DASHBOARD());
  darkMode = this.theme.darkMode;
  direction = this.language.direction;
  currentLanguage = this.language.language;
  mobileMenuOpen = signal(false);
  activeTab = signal('dashboard');

  breadcrumbs = computed<BreadcrumbItem[]>(() => {
    const header = this.DASHBOARD().header;
    return [
      { label: header.home, url: '/dashboard', icon: 'home' },
      { label: header.purchases, url: '#' },
      { label: header.newPurchaseRequest },
    ];
  });

  toggleTheme(): void { this.theme.toggle(); }
  
  openMobileMenu(): void { this.mobileMenuOpen.set(true); }
  
  closeMobileMenu(): void { this.mobileMenuOpen.set(false); }
  
  selectTab(tab: string): void { this.activeTab.set(tab); }
  
}
