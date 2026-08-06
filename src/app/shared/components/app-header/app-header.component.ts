import { Component, HostListener, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import type { BreadcrumbItem } from '../../models';
import { TranslationService } from '../../services/translation.service';
import { LanguageService } from '../../services/language.service';
import { TranslatePipe } from '../../../helpers/pipes/translate.pipe';

@Component({
  selector: 'app-header',
  imports: [FormsModule, TranslatePipe],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss',
})
export class AppHeaderComponent {
  i18n = inject(TranslationService);
  language = inject(LanguageService);
  router = inject(Router);
  get notificationItems() { return this.i18n.DASHBOARD().notifications.items; }
  
  searchTerm = signal('');
  notificationsOpen = signal(false);
  userMenuOpen = signal(false);
  notificationsCleared = signal(false);
  darkMode = input(false);
  breadcrumbItems = input<BreadcrumbItem[]>([]);
  breadcrumbAriaLabel = input('Breadcrumb');
  themeToggle = output<void>();
  menuToggle = output<void>();

  toggleNotifications(): void {
    this.userMenuOpen.set(false);
    this.notificationsOpen.update((open) => !open);
  }

  toggleUserMenu(): void {
    this.notificationsOpen.set(false);
    this.userMenuOpen.update((open) => !open);
  }

  logout(): void {
    localStorage.removeItem('access_token');
    this.userMenuOpen.set(false);
    this.router.navigate(['/']);
  }

  markAllRead(): void {
    this.notificationsCleared.set(true);
  }

  @HostListener('document:click', ['$event'])
  closeMenusOnOutsideClick(event: MouseEvent): void {
    const target = event.target as Element;

    if (this.notificationsOpen() && !target.closest('.app-header__notifications')) {
      this.notificationsOpen.set(false);
    }

    if (this.userMenuOpen() && !target.closest('.app-header__profile-menu')) {
      this.userMenuOpen.set(false);
    }
  }

  @HostListener('document:keydown.escape')
  closeMenusOnEscape(): void {
    this.notificationsOpen.set(false);
    this.userMenuOpen.set(false);
  }

}
