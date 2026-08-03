import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../../shared/services/translation.service';

@Component({
  selector: 'app-purchase-status',
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

  get localizedMetrics() {
    return this.metrics.map((metric) => ({
      ...metric,
      label: this.i18n.t(metric.label),
    }));
  }
}
