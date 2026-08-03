import { Component, inject } from '@angular/core';
import { DashboardI18nService } from '../../services/dashboard-i18n.service';

interface ContractRow {
  id: string;
  supplier: string;
  logo: string;
  logoClass: string;
  date: string;
  progress: number;
}

@Component({
  selector: 'app-contracts-table',
  templateUrl: './contracts-table.component.html',
  styleUrl: './contracts-table.component.scss',
})
export class ContractsTableComponent {
  protected readonly i18n = inject(DashboardI18nService);
  protected readonly rows: ContractRow[] = [
    { id: 'BDRS/2016/019/0008', supplier: 'البنك الوطني القطري', logo: '✣', logoClass: 'contracts__logo--bank', date: '22 يناير 2025', progress: 20 },
    { id: 'BDRS/2016/019/0009', supplier: 'أوريدو قطر', logo: 'O', logoClass: 'contracts__logo--ooredoo', date: '20 يناير 2025', progress: 50 },
    { id: 'BDRS/2016/019/0010', supplier: 'مصانع قطر', logo: 'ق', logoClass: 'contracts__logo--factory', date: '24 يناير 2025', progress: 80 },
    { id: 'BDRS/2016/019/0011', supplier: 'وقود قطر', logo: '✦', logoClass: 'contracts__logo--woqod', date: '26 يناير 2025', progress: 10 },
  ];
}
