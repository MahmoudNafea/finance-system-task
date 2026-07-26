import { Component } from '@angular/core';

@Component({
  selector: 'app-purchase-status',
  templateUrl: './purchase-status.component.html',
  styleUrl: './purchase-status.component.scss',
})
export class PurchaseStatusComponent {
  protected readonly metrics = [
    { label: 'New', value: '50', icon: '◢' },
    { label: 'كل', value: '50', icon: '▦' },
    { label: 'مرسل', value: '50', icon: '▰' },
    { label: 'قيد الانتظار', value: '50', icon: '●' },
    { label: 'تم الإلغاء', value: '50', icon: '◉' },
    { label: 'تم التوصيل', value: '123', icon: '✿' },
  ];
}
