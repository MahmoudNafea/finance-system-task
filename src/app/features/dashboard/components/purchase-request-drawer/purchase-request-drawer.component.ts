import { Component, inject, output } from '@angular/core';
import { TranslationService } from '../../../../shared/services/translation.service';
import { TranslatePipe } from '../../../../helpers/pipes/translate.pipe';

@Component({
  selector: 'app-purchase-request-drawer',
  imports: [TranslatePipe],
  templateUrl: './purchase-request-drawer.component.html',
  styleUrl: './purchase-request-drawer.component.scss',
})
export class PurchaseRequestDrawerComponent {
  i18n = inject(TranslationService);
  get images() { return this.i18n.DASHBOARD().purchaseRequestDrawer.images; }

  closeDrawer = output<void>();
}
