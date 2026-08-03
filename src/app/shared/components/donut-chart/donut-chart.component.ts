import { Component, computed, input } from '@angular/core';
import type { DonutChartItem } from '../../models';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrl: './donut-chart.component.scss',
})
export class DonutChartComponent {
  items = input.required<DonutChartItem[]>();
  centerLabel = input.required<string>();

  total = computed(() =>
    this.items().reduce((sum, item) => sum + Math.max(0, item.value), 0),
  );

  gradient = computed(() => {
    const total = this.total();

    if (!total) {
      return '#e9eaeb';
    }

    let start = 0;
    const segments = this.items().map((item) => {
      const end = start + (Math.max(0, item.value) / total) * 100;
      const segment = `${item.color} ${start}% ${end}%`;
      start = end;
      return segment;
    });

    return `conic-gradient(${segments.join(', ')})`;
  });

  ariaLabel = computed(() => {
    const details = this.items().map((item) => `${item.label}: ${item.value}`).join(', ');
    return `${this.total()} ${this.centerLabel()}. ${details}`;
  });
}
