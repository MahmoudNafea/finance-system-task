import { Component, inject, Input } from '@angular/core';
import { TranslationService } from '../../../../shared/services/translation.service';
import type { DashboardDataTableKind, ProcessRow, StockRow } from '../../models';
import { TranslatePipe } from '../../../../helpers/pipes/translate.pipe';

@Component({
  selector: 'app-dashboard-data-table',
  imports: [TranslatePipe],
  templateUrl: './dashboard-data-table.component.html',
  styleUrl: './dashboard-data-table.component.scss',
})
export class DashboardDataTableComponent {
  i18n = inject(TranslationService);

  @Input({ required: true }) kind: DashboardDataTableKind = 'processes';

  processes: ProcessRow[] = [
    { id: 'BDRS/2016/019/0008', type: 'فاتورة', employee: 'فارس أسامة طارق', email: 'farestarek@moi.gov.qa', duration: '01', unit: 'يوم' },
    { id: 'BDRS/2016/019/0009', type: 'سند استلام', employee: 'حامد هادي زعيم', email: 'hamedzaiim@moi.gov.qa', duration: '02', unit: 'يوم' },
    { id: 'BDRS/2016/019/0010', type: 'طلب شراء', employee: 'جاسم محمد حامد', email: 'jassem@moi.gov.qa', duration: '03', unit: 'أسابيع' },
    { id: 'BDRS/2016/019/0011', type: 'صرف مستودع', employee: 'أمير علي الزاوي', email: 'amirzawi@moi.gov.qa', duration: '04', unit: 'أشهر' },
    { id: 'BDRS/2016/019/0012', type: 'طلب صيانة', employee: 'هيبة حاتم حجاب', email: 'hibahijab@moi.gov.qa', duration: '05', unit: 'سنوات' },
  ];

  stocks: StockRow[] = [
    { id: 'BDRS/2016/019/0008', product: 'سكر', quantity: '01', unit: 'كيس', minimum: '01', maximum: '01' },
    { id: 'BDRS/2016/019/0009', product: 'شاي', quantity: '02', unit: 'قطعة', minimum: '01', maximum: '01' },
    { id: 'BDRS/2016/019/0010', product: 'مكاتب', quantity: '03', unit: 'وحدة', minimum: '01', maximum: '01' },
    { id: 'BDRS/2016/019/0011', product: 'ستائر', quantity: '04', unit: 'متر', minimum: '01', maximum: '01' },
    { id: 'BDRS/2016/019/0012', product: 'طاولات', quantity: '05', unit: 'طقم', minimum: '01', maximum: '01' },
  ];

  get localizedProcesses(): ProcessRow[] {
    return this.processes.map((row) => ({
      ...row,
      type: this.i18n.t(row.type),
      employee: this.i18n.t(row.employee),
      unit: this.i18n.t(row.unit),
    }));
  }

  get localizedStocks(): StockRow[] {
    return this.stocks.map((row) => ({
      ...row,
      product: this.i18n.t(row.product),
      unit: this.i18n.t(row.unit),
    }));
  }

  get titleKey(): string {
    return this.kind === 'processes'
      ? 'DASHBOARD.dataTable.recentTransactions'
      : 'DASHBOARD.dataTable.warehouses';
  }
}
