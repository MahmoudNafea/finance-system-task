import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardI18nService } from '../../../i18n/dashboard/dashboard-i18n.service';

@Component({
  selector: 'app-dashboard-header',
  imports: [FormsModule],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss',
})
export class AppHeaderComponent {
  protected readonly i18n = inject(DashboardI18nService);
  protected readonly searchTerm = signal('');
  readonly darkMode = input(false);
  readonly themeToggle = output<void>();
}
