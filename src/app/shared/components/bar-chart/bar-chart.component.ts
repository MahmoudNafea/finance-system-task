import { Component, input } from '@angular/core';
import type { BarChartItem } from '../../models';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss',
})
export class BarChartComponent {
  items = input.required<BarChartItem[]>();
  axisValues = input<string[]>(['1,000.00', '800.00', '600.00', '400.00', '200.00', '0']);
}
