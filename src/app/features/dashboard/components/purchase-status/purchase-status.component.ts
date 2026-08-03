import { Component, inject } from '@angular/core';
import { DonutChartComponent } from '../../../../shared/components/donut-chart/donut-chart.component';
import type { DonutChartItem } from '../../../../shared/models';
import { TranslationService } from '../../../../shared/services/translation.service';

@Component({
  selector: 'app-purchase-status',
  imports: [DonutChartComponent],
  templateUrl: './purchase-status.component.html',
  styleUrl: './purchase-status.component.scss',
})
export class PurchaseStatusComponent {
  i18n = inject(TranslationService);
  get DASHBOARD() {
    return this.i18n.DASHBOARD();
  }

  metrics = [
    { label: 'New', value: '50', icon: 'new' },
    { label: 'كل', value: '50', icon: 'all' },
    { label: 'مرسل', value: '50', icon: 'sent' },
    { label: 'قيد الانتظار', value: '50', icon: 'pending' },
    { label: 'تم الإلغاء', value: '50', icon: 'cancelled' },
    { label: 'تم التوصيل', value: '123', icon: 'delivered' },
  ];

  chartItems: DonutChartItem[] = [
    { label: 'Delivered', value: 175, color: '#63c1e4' },
    { label: 'Pending', value: 45, color: '#e2eaf0' },
    { label: 'Sent', value: 80, color: '#b9cad6' },
    { label: 'Cancelled', value: 50, color: '#0d4261' },
  ];

  get localizedMetrics() {
    return this.metrics.map((metric) => ({
      ...metric,
      label: this.i18n.t(metric.label),
    }));
  }
}
