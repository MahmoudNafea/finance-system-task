import { Component, input, output } from '@angular/core';
import { TranslatePipe } from '../../../../helpers/pipes/translate.pipe';

@Component({
  selector: 'app-dashboard-tabs',
  imports: [TranslatePipe],
  templateUrl: './dashboard-tabs.component.html',
  styleUrl: './dashboard-tabs.component.scss',
})
export class DashboardTabsComponent {

  tabs = input.required<{ id: string; label: string }[]>();
  activeTab = input.required<string>();
  tabChange = output<string>();
}
