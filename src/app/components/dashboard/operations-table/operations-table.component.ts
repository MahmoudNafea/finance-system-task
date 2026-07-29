import { Component, inject } from '@angular/core';
import { DashboardI18nService } from '../../../services/dashboard-i18n.service';
import {
  StatusBadgeComponent,
  StatusTone,
} from '../status-badge/status-badge.component';

interface OperationRow {
  id: string;
  statement: string;
  products: string;
  notes: string;
  status: string;
  tone: StatusTone;
  requester: string;
  email: string;
  date: string;
  selected?: boolean;
}

@Component({
  selector: 'app-operations-table',
  imports: [StatusBadgeComponent],
  templateUrl: './operations-table.component.html',
  styleUrl: './operations-table.component.scss',
})
export class OperationsTableComponent {
  protected readonly i18n = inject(DashboardI18nService);
  protected readonly rows: OperationRow[] = [
    {
      id: 'BDRS/2016/019/0008',
      statement: 'توريد أجهزة مودام',
      products: '5 منتجات',
      notes: '05',
      status: 'مقبول ✓',
      tone: 'success',
      requester: 'فارس أسامة طارق',
      email: 'farestarek@moi.gov.qa',
      date: '22 يناير 2025',
      selected: true,
    },
    {
      id: 'BDRS/2016/019/0009',
      statement: 'تجديد تراخيص',
      products: '5 منتجات',
      notes: '02',
      status: 'تحت الإجراء ←',
      tone: 'warning',
      requester: 'حامد هادي زعيم',
      email: 'hamedzaiim@moi.gov.qa',
      date: '20 يناير 2025',
    },
    {
      id: 'BDRS/2016/019/0010',
      statement: 'ترقية وتحديث تكنولوجيا',
      products: '5 منتجات',
      notes: '08',
      status: 'تم الانشاء ✓',
      tone: 'info',
      requester: 'جاسم محمد حامد',
      email: 'jassem@moi.gov.qa',
      date: '24 يناير 2025',
    },
    {
      id: 'BDRS/2016/019/0011',
      statement: 'توريد ملحقات أجهزة لوحية',
      products: '5 منتجات',
      notes: '11',
      status: 'للمراجعة ↩',
      tone: 'neutral',
      requester: 'أمير علي الزاوي',
      email: 'amirzawi@moi.gov.qa',
      date: '26 يناير 2025',
    },
    {
      id: 'BDRS/2016/019/0012',
      statement: 'دفع تأمين سيارات المدير',
      products: '5 منتجات',
      notes: '14',
      status: 'تم الارسال ✓',
      tone: 'purple',
      requester: 'هيبة حاتم حجاب',
      email: 'hibahijab@moi.gov.qa',
      date: '18 يناير 2025',
    },
  ];
}
