import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
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
import { TranslationService } from '../../../shared/services/translation.service';

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
  @ViewChild('summaryScroller') private summaryScroller?: ElementRef<HTMLElement>;

  protected readonly i18n = inject(TranslationService);
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
