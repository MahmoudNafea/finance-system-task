import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-dashboard-tabs',
  templateUrl: './dashboard-tabs.component.html',
  styleUrl: './dashboard-tabs.component.scss',
})
export class DashboardTabsComponent {
  readonly tabs = input.required<readonly { id: string; label: string }[]>();
  readonly activeTab = input.required<string>();
  readonly tabChange = output<string>();
}
