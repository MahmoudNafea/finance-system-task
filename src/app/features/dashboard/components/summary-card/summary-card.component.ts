import { Component, input } from '@angular/core';
import { TranslatePipe } from '../../../../helpers/pipes/translate.pipe';

@Component({
  selector: 'app-summary-card',
  imports: [TranslatePipe],
  templateUrl: './summary-card.component.html',
  styleUrl: './summary-card.component.scss',
})
export class SummaryCardComponent {

  label = input.required<string>();
  value = input.required<string>();
  trend = input.required<string>();
  positive = input(false);
  icon = input('document');
}
