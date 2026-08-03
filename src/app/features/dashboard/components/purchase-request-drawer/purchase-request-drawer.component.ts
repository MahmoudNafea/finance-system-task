import { Component, inject, output } from '@angular/core';
import { TranslationService } from '../../../../shared/services/translation.service';

@Component({
  selector: 'app-purchase-request-drawer',
  templateUrl: './purchase-request-drawer.component.html',
  styleUrl: './purchase-request-drawer.component.scss',
})
export class PurchaseRequestDrawerComponent {
  i18n = inject(TranslationService);
  get DASHBOARD() {
    return this.i18n.DASHBOARD();
  }

  closeDrawer = output<void>();
}
