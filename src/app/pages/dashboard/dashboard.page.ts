import { Component } from '@angular/core';
import { AppHeaderComponent } from '../../components/dashboard/app-header/app-header.component';
import { DashboardTabsComponent } from '../../components/dashboard/dashboard-tabs/dashboard-tabs.component';
import { OperationsTableComponent } from '../../components/dashboard/operations-table/operations-table.component';
import { PurchaseStatusComponent } from '../../components/dashboard/purchase-status/purchase-status.component';
import { RecentActivitiesComponent } from '../../components/dashboard/recent-activities/recent-activities.component';
import { SidebarNavigationComponent } from '../../components/dashboard/sidebar-navigation/sidebar-navigation.component';
import { SummaryCardComponent } from '../../components/dashboard/summary-card/summary-card.component';
import { DashboardDataTableComponent } from '../../components/dashboard/dashboard-data-table/dashboard-data-table.component';
import { BudgetItemsComponent } from '../../components/dashboard/budget-items/budget-items.component';
import { ContractsTableComponent } from '../../components/dashboard/contracts-table/contracts-table.component';
import { PurchaseRequestsComponent } from '../../components/dashboard/purchase-requests/purchase-requests.component';

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
    BudgetItemsComponent,
    ContractsTableComponent,
    PurchaseRequestsComponent,
  ],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
})
export class DashboardPage {
  protected activeTab = 'لوحة القيادة';
  protected readonly tabs = [
    'لوحة القيادة',
    'طلب مشتريات',
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
