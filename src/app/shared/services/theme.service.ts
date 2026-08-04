import { Injectable, signal } from '@angular/core';

const THEME_STORAGE_KEY = 'finance-dashboard-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  darkMode = signal(this.getInitialTheme());

  constructor() {
    this.applyTheme(this.darkMode());
  }

  toggle(): void {
    this.setDarkMode(!this.darkMode());
  }

  setDarkMode(dark: boolean): void {
    this.darkMode.set(dark);
    this.applyTheme(dark);

    try {
      globalThis.localStorage?.setItem(THEME_STORAGE_KEY, dark ? 'dark' : 'light');
    } catch {
      // Theme switching still works when storage is unavailable.
    }
  }

  getInitialTheme(): boolean {
    try {
      const savedTheme = globalThis.localStorage?.getItem(THEME_STORAGE_KEY);
      if (savedTheme) return savedTheme === 'dark';
    } catch {
      // Fall back to the operating-system preference.
    }

    return globalThis.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  }

  applyTheme(dark: boolean): void {
    globalThis.document?.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }
}
