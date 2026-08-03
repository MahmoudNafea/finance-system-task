import { Component, inject, input, output } from '@angular/core';
import { TranslationService } from '../../../../shared/services/translation.service';

@Component({
  selector: 'app-dashboard-tabs',
  templateUrl: './dashboard-tabs.component.html',
  styleUrl: './dashboard-tabs.component.scss',
})
export class DashboardTabsComponent {
  i18n = inject(TranslationService);
  get DASHBOARD() {
    return this.i18n.DASHBOARD();
  }

  tabs = input.required<{ id: string; label: string }[]>();
  activeTab = input.required<string>();
  tabChange = output<string>();
}
