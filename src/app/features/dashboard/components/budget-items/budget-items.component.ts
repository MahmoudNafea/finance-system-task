import { Component, inject } from '@angular/core';
import { BarChartComponent } from '../../../../shared/components/bar-chart/bar-chart.component';
import { TranslatePipe } from '../../../../helpers/pipes/translate.pipe';
import { TranslationService } from '../../../../shared/services/translation.service';

@Component({
  selector: 'app-budget-items',
  imports: [BarChartComponent, TranslatePipe],
  templateUrl: './budget-items.component.html',
  styleUrl: './budget-items.component.scss',
})
export class BudgetItemsComponent {
  i18n = inject(TranslationService);

  months = [
    { label: 'يناير', base: 42, top: 38 },
    { label: 'فبراير', base: 30, top: 28 },
    { label: 'مارس', base: 5, top: 35 },
    { label: 'أبريل', base: 25, top: 15 },
    { label: 'مايو', base: 31, top: 27 },
    { label: 'يونيو', base: 53, top: 28 },
    { label: 'يوليو', base: 53, top: 59 },
    { label: 'أغسطس', base: 25, top: 12 },
    { label: 'سبتمبر', base: 7, top: 11 },
    { label: 'أكتوبر', base: 40, top: 59 },
    { label: 'نوفمبر', base: 15, top: 23 },
    { label: 'ديسمبر', base: 29, top: 43 },
  ];

  get localizedMonths() {
    return this.months.map((month) => ({
      ...month,
      label: this.i18n.t(month.label),
    }));
  }
}
