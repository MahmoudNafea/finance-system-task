import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
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
import { DashboardI18nService } from '../../services/dashboard-i18n.service';

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
  providers: [DashboardI18nService],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
})
export class DashboardPage {
  @ViewChild('summaryScroller') private summaryScroller?: ElementRef<HTMLElement>;

  protected readonly i18n = inject(DashboardI18nService);
  protected readonly darkMode = signal(this.getInitialTheme());
  protected readonly mobileMenuOpen = signal(false);
  protected activeTab = 'dashboard';

  protected scrollSummaries(direction: number): void {
    this.summaryScroller?.nativeElement.scrollBy({ left: direction * 312, behavior: 'smooth' });
  }

  protected toggleTheme(): void {
    const nextTheme = !this.darkMode();
    this.darkMode.set(nextTheme);

    try {
      globalThis.localStorage?.setItem('finance-dashboard-theme', nextTheme ? 'dark' : 'light');
    } catch {
      // The visual theme should still work when storage is blocked by browser privacy settings.
    }
  }

  private getInitialTheme(): boolean {
    try {
      const savedTheme = globalThis.localStorage?.getItem('finance-dashboard-theme');

      if (savedTheme) {
        return savedTheme === 'dark';
      }
    } catch {
      // Fall back to the operating-system preference when storage is unavailable.
    }

    return globalThis.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  }
}
