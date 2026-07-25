import { Component, input } from '@angular/core';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrl: './summary-card.component.scss',
})
export class SummaryCardComponent {
  readonly label = input.required<string>();
  readonly value = input.required<string>();
  readonly trend = input.required<string>();
  readonly positive = input(false);
}
