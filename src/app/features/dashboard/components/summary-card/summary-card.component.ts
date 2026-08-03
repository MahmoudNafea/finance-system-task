import { Component, inject, input } from '@angular/core';
import { TranslationService } from '../../../../shared/services/translation.service';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrl: './summary-card.component.scss',
})
export class SummaryCardComponent {
  i18n = inject(TranslationService);
  get DASHBOARD() {
    return this.i18n.DASHBOARD();
  }

  label = input.required<string>();
  value = input.required<string>();
  trend = input.required<string>();
  positive = input(false);
  icon = input('document');
}
