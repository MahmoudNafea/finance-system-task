import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-tabs',
  templateUrl: './dashboard-tabs.component.html',
  styleUrl: './dashboard-tabs.component.scss',
})
export class DashboardTabsComponent {
  readonly tabs = input.required<readonly string[]>();
}
