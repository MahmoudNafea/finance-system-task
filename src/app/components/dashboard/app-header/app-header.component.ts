import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-header',
  imports: [FormsModule],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss',
})
export class AppHeaderComponent {
  protected readonly searchTerm = signal('');
  readonly darkMode = input(false);
  readonly language = input<'ar' | 'en'>('ar');
  readonly themeToggle = output<void>();
  readonly languageToggle = output<void>();
}
