import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../../shared/services/translation.service';
import type { ContractRow } from '../../models';
import { TranslatePipe } from '../../../../helpers/pipes/translate.pipe';

@Component({
  selector: 'app-contracts-table',
  imports: [TranslatePipe],
  templateUrl: './contracts-table.component.html',
  styleUrl: './contracts-table.component.scss',
})
export class ContractsTableComponent {
  i18n = inject(TranslationService);

  rows: ContractRow[] = [
    { id: 'BDRS/2016/019/0008', supplier: 'البنك الوطني القطري', logo: '✣', logoClass: 'contracts__logo--bank', date: '22 يناير 2025', progress: 20 },
    { id: 'BDRS/2016/019/0009', supplier: 'أوريدو قطر', logo: 'O', logoClass: 'contracts__logo--ooredoo', date: '20 يناير 2025', progress: 50 },
    { id: 'BDRS/2016/019/0010', supplier: 'مصانع قطر', logo: 'ق', logoClass: 'contracts__logo--factory', date: '24 يناير 2025', progress: 80 },
    { id: 'BDRS/2016/019/0011', supplier: 'وقود قطر', logo: '✦', logoClass: 'contracts__logo--woqod', date: '26 يناير 2025', progress: 10 },
  ];

  get localizedRows(): ContractRow[] {
    return this.rows.map((row) => ({
      ...row,
      supplier: this.i18n.t(row.supplier),
      date: this.i18n.t(row.date),
    }));
  }
}
