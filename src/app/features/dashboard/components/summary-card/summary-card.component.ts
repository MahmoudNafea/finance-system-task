import { Component, inject, input } from '@angular/core';
import { DashboardI18nService } from '../../services/dashboard-i18n.service';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrl: './summary-card.component.scss',
})
export class SummaryCardComponent {
  protected readonly i18n = inject(DashboardI18nService);
  readonly label = input.required<string>();
  readonly value = input.required<string>();
  readonly trend = input.required<string>();
  readonly positive = input(false);
  readonly icon = input<'document' | 'wallet' | 'approved'>('document');
}
