import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { AppHeaderComponent } from '../../../shared/components/app-header/app-header.component';
import { DashboardTabsComponent } from '../components/dashboard-tabs/dashboard-tabs.component';
import { OperationsTableComponent } from '../components/operations-table/operations-table.component';
import { PurchaseStatusComponent } from '../components/purchase-status/purchase-status.component';
import { RecentActivitiesComponent } from '../components/recent-activities/recent-activities.component';
import { SidebarNavigationComponent } from '../../../shared/components/sidebar-navigation/sidebar-navigation.component';
import { SummaryCardComponent } from '../components/summary-card/summary-card.component';
import { DashboardDataTableComponent } from '../components/dashboard-data-table/dashboard-data-table.component';
import { BudgetItemsComponent } from '../components/budget-items/budget-items.component';
import { ContractsTableComponent } from '../components/contracts-table/contracts-table.component';
import { PurchaseRequestsComponent } from '../components/purchase-requests/purchase-requests.component';
import { DashboardFacade } from '../facades/dashboard.facade';

@Component({
  selector: 'app-dashboard',
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
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  @ViewChild('summaryScroller') summaryScroller?: ElementRef<HTMLElement>;

  facade = inject(DashboardFacade);

 

  toggleTheme(): void { this.facade.toggleTheme(); }
  
  openMobileMenu(): void { this.facade.openMobileMenu(); }
  
  closeMobileMenu(): void { this.facade.closeMobileMenu(); }
  
  selectTab(tab: string): void { this.facade.selectTab(tab); }
  

  scrollSummaries(direction: number): void {
    this.summaryScroller?.nativeElement.scrollBy({ left: direction * 312, behavior: 'smooth' });
  }

  get DASHBOARD() { return this.facade.DASHBOARD(); }

  get darkMode() { return this.facade.darkMode; }

  get direction() { return this.facade.direction; }

  get currentLanguage() { return this.facade.currentLanguage; }

  get mobileMenuOpen() { return this.facade.mobileMenuOpen; }

  get activeTab() { return this.facade.activeTab; }

  get breadcrumbs() { return this.facade.breadcrumbs(); }

}
