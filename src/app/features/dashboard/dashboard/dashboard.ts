import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { AppHeaderComponent } from '../../../shared/components/app-header/app-header.component';
import type { BreadcrumbItem } from '../../../shared/models';
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
  @ViewChild('summaryScroller') summaryScroller?: ElementRef<HTMLElement>;

  i18n = inject(TranslationService);
  get DASHBOARD() {
    return this.i18n.DASHBOARD();
  }
  get breadcrumbs(): BreadcrumbItem[] {
    return [
      { label: this.DASHBOARD.header.home, url: '/dashboard', icon: 'home' },
      { label: this.DASHBOARD.header.purchases, url: '#' },
      { label: this.DASHBOARD.header.newPurchaseRequest },
    ];
  }

  darkMode = signal(this.getInitialTheme());
  mobileMenuOpen = signal(false);
  activeTab = 'dashboard';

  scrollSummaries(direction: number): void {
    this.summaryScroller?.nativeElement.scrollBy({ left: direction * 312, behavior: 'smooth' });
  }

  toggleTheme(): void {
    const nextTheme = !this.darkMode();
    this.darkMode.set(nextTheme);

    try {
      globalThis.localStorage?.setItem('finance-dashboard-theme', nextTheme ? 'dark' : 'light');
    } catch {
      // The visual theme should still work when storage is blocked by browser privacy settings.
    }
  }

  getInitialTheme(): boolean {
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
