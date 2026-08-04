import { Component, ElementRef, HostListener, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  get notificationItems() { return this.i18n.DASHBOARD().notifications.items; }
  
  elementRef = inject(ElementRef<HTMLElement>);
  searchTerm = signal('');
  notificationsOpen = signal(false);
  notificationsCleared = signal(false);
  darkMode = input(false);
  breadcrumbItems = input<BreadcrumbItem[]>([]);
  breadcrumbAriaLabel = input('Breadcrumb');
  themeToggle = output<void>();
  menuToggle = output<void>();

  toggleNotifications(): void {
    this.notificationsOpen.update((open) => !open);
  }

  markAllRead(): void {
    this.notificationsCleared.set(true);
  }

  @HostListener('document:click', ['$event'])
  closeNotificationsOnOutsideClick(event: MouseEvent): void {
    if (this.notificationsOpen() && !this.elementRef.nativeElement.contains(event.target as Node)) {
      this.notificationsOpen.set(false);
    }
  }

  @HostListener('document:keydown.escape')
  closeNotificationsOnEscape(): void {
    this.notificationsOpen.set(false);
  }

}
