import { Component } from '@angular/core';

@Component({
  selector: 'app-budget-items',
  templateUrl: './budget-items.component.html',
  styleUrl: './budget-items.component.scss',
})
export class BudgetItemsComponent {
  protected readonly months = [
    { label: 'يناير', base: 42, top: 38 },
    { label: 'فبراير', base: 30, top: 28 },
    { label: 'مارس', base: 5, top: 35 },
    { label: 'أبريل', base: 25, top: 15 },
    { label: 'مايو', base: 31, top: 27 },
    { label: 'يونيو', base: 53, top: 28 },
    { label: 'يوليو', base: 53, top: 59 },
    { label: 'أغسطس', base: 25, top: 12 },
    { label: 'سبتمبر', base: 7, top: 11 },
    { label: 'أكتوبر', base: 40, top: 59 },
    { label: 'نوفمبر', base: 15, top: 23 },
    { label: 'ديسمبر', base: 29, top: 43 },
  ];
}
