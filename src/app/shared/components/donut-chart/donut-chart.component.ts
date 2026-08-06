import { Component, computed, input } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import type { DonutChartItem } from '../../models';

@Component({
  selector: 'app-donut-chart',
  imports: [ChartComponent],
  templateUrl: './donut-chart.component.html',
  styleUrl: './donut-chart.component.scss',
})
export class DonutChartComponent {
  items = input.required<DonutChartItem[]>();
  centerLabel = input.required<string>();

  total = computed(() =>
    this.items().reduce((sum, item) => sum + Math.max(0, item.value), 0),
  );

  series = computed(() => this.items().map((item) => Math.max(0, item.value)));
  labels = computed(() => this.items().map((item) => item.label));
  colors = computed(() => this.items().map((item) => item.color));

  chart = {
    type: 'donut' as const,
    width: 310,
    height: 310,
    animations: { enabled: false },
    parentHeightOffset: 0,
    toolbar: { show: false },
  };

  plotOptions = {
    pie: {
      expandOnClick: false,
      donut: { size: '56%' },
    },
  };

  stroke = { width: 0 };
  dataLabels = { enabled: false };
  legend = { show: false };
  tooltip = { enabled: true };

  ariaLabel = computed(() => {
    const details = this.items().map((item) => `${item.label}: ${item.value}`).join(', ');
    return `${this.total()} ${this.centerLabel()}. ${details}`;
  });
}
