import { Component } from '@angular/core';
import { AppHeaderComponent } from '../../components/dashboard/app-header/app-header.component';
import { DashboardTabsComponent } from '../../components/dashboard/dashboard-tabs/dashboard-tabs.component';
import { OperationsTableComponent } from '../../components/dashboard/operations-table/operations-table.component';
import { PurchaseStatusComponent } from '../../components/dashboard/purchase-status/purchase-status.component';
import { RecentActivitiesComponent } from '../../components/dashboard/recent-activities/recent-activities.component';
import { SidebarNavigationComponent } from '../../components/dashboard/sidebar-navigation/sidebar-navigation.component';
import { SummaryCardComponent } from '../../components/dashboard/summary-card/summary-card.component';
import { DashboardDataTableComponent } from '../../components/dashboard/dashboard-data-table/dashboard-data-table.component';

@Component({
  selector: 'app-dashboard-page',
  imports: [
    AppHeaderComponent,
    DashboardTabsComponent,
    OperationsTableComponent,
    PurchaseStatusComponent,
    RecentActivitiesComponent,
    SidebarNavigationComponent,
    SummaryCardComponent,
    DashboardDataTableComponent,
  ],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
})
export class DashboardPage {
  protected readonly tabs = [
    'لوحة القيادة',
    'المشتريات',
    'العهد',
    'الطلبات',
    'الفواتير',
    'العقود والمناقصات',
    'الموازنة',
  ];

  protected readonly summaries = [
    { label: 'رصيد الموازنة المعتمد', value: '50 مليون ريال', trend: '28%', positive: false },
    { label: 'رصيد الحر', value: '10 مليون ريال', trend: '28%', positive: false },
    { label: 'المبالغ المدفوع', value: '15 مليون ريال', trend: '28%', positive: true },
    { label: 'الارتباطات', value: '20 مليون ريال', trend: '15%', positive: false },
    { label: 'الالتزامات', value: '5 مليون ريال', trend: '28%', positive: true },
  ];
}
