import { Component, ElementRef, HostListener, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-dashboard-header',
  imports: [FormsModule],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss',
})
export class AppHeaderComponent {
  protected readonly i18n = inject(TranslationService);
  protected get DASHBOARD() {
    return this.i18n.DASHBOARD();
  }

  private readonly elementRef = inject(ElementRef<HTMLElement>);
  protected readonly searchTerm = signal('');
  protected readonly notificationsOpen = signal(false);
  protected readonly notificationsCleared = signal(false);
  readonly darkMode = input(false);
  readonly themeToggle = output<void>();
  readonly menuToggle = output<void>();

  protected toggleNotifications(): void {
    this.notificationsOpen.update((open) => !open);
  }

  protected markAllRead(): void {
    this.notificationsCleared.set(true);
  }

  @HostListener('document:click', ['$event'])
  protected closeNotificationsOnOutsideClick(event: MouseEvent): void {
    if (this.notificationsOpen() && !this.elementRef.nativeElement.contains(event.target as Node)) {
      this.notificationsOpen.set(false);
    }
  }

  @HostListener('document:keydown.escape')
  protected closeNotificationsOnEscape(): void {
    this.notificationsOpen.set(false);
  }
}
