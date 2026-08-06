import { Component, computed, input } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import type { BarChartItem } from '../../models';

@Component({
  selector: 'app-bar-chart',
  imports: [ChartComponent],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss',
})
export class BarChartComponent {
  items = input.required<BarChartItem[]>();
  axisValues = input<string[]>(['1,000.00', '800.00', '600.00', '400.00', '200.00', '0']);

  maximum = computed(() => Math.max(100, ...this.items().map((item) => item.base + item.top)));
  series = computed(() => [
    { name: 'Base', data: this.items().map((item) => item.base) },
    { name: 'Top', data: this.items().map((item) => item.top) },
  ]);

  chart = {
    type: 'bar' as const,
    height: 284,
    stacked: true,
    animations: { enabled: false },
    parentHeightOffset: 0,
    toolbar: { show: false },
  };

  colors = ['#bdd5f5', '#83aceb'];
  dataLabels = { enabled: false };
  legend = { show: false };
  stroke = { show: false, width: 0 };
  tooltip = { enabled: true, shared: true, intersect: false };
  plotOptions = { bar: { columnWidth: '44%', borderRadius: 0 } };

  xaxis = computed(() => ({
    categories: this.items().map((item) => item.label),
    axisBorder: { show: true, color: '#e5e9ee' },
    axisTicks: { show: false },
    labels: {
      style: { colors: '#526173', fontSize: '10px', fontFamily: 'Lusail, Tahoma, sans-serif' },
    },
  }));

  yaxis = computed(() => ({
    min: 0,
    max: this.maximum(),
    tickAmount: 5,
    labels: {
      formatter: (value: number) => {
        const index = Math.min(5, Math.max(0, Math.round(value / (this.maximum() / 5))));
        return this.axisValues()[5 - index] ?? String(Math.round(value));
      },
      style: { colors: '#52677b', fontSize: '11px', fontFamily: 'Arial, sans-serif' },
    },
  }));

  grid = {
    show: true,
    borderColor: '#dce3e9',
    strokeDashArray: 3,
    xaxis: { lines: { show: false } },
    yaxis: { lines: { show: true } },
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  };
}
