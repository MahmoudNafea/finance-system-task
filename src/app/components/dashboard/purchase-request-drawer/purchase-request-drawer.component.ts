import { Component, output } from '@angular/core';

@Component({
  selector: 'app-purchase-request-drawer',
  templateUrl: './purchase-request-drawer.component.html',
  styleUrl: './purchase-request-drawer.component.scss',
})
export class PurchaseRequestDrawerComponent {
  readonly closed = output<void>();
}
