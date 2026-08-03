import { Component, inject } from '@angular/core';
import { DashboardI18nService } from '../../services/dashboard-i18n.service';

@Component({
  selector: 'app-purchase-status',
  templateUrl: './purchase-status.component.html',
  styleUrl: './purchase-status.component.scss',
})
export class PurchaseStatusComponent {
  protected readonly i18n = inject(DashboardI18nService);
  protected readonly metrics = [
    { label: 'New', value: '50', icon: 'new' },
    { label: 'كل', value: '50', icon: 'all' },
    { label: 'مرسل', value: '50', icon: 'sent' },
    { label: 'قيد الانتظار', value: '50', icon: 'pending' },
    { label: 'تم الإلغاء', value: '50', icon: 'cancelled' },
    { label: 'تم التوصيل', value: '123', icon: 'delivered' },
  ];
}
