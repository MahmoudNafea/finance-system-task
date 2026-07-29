import { Component, computed, ElementRef, signal, ViewChild } from '@angular/core';
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
  @ViewChild('summaryScroller') private summaryScroller?: ElementRef<HTMLElement>;

  protected readonly darkMode = signal(this.getInitialTheme());
  protected readonly language = signal<'ar' | 'en'>(this.getInitialLanguage());
  protected activeTab = 'dashboard';
  protected readonly tabs = computed(() => this.language() === 'ar' ? [
    { id: 'dashboard', label: 'لوحة القيادة' },
    { id: 'purchase-requests', label: 'طلب مشتريات' },
    { id: 'custody', label: 'العهد' },
    { id: 'requests', label: 'الطلبات' },
    { id: 'invoices', label: 'الفواتير' },
    { id: 'contracts', label: 'العقود والمناقصات' },
    { id: 'budget', label: 'الموازنة' },
  ] : [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'purchase-requests', label: 'Purchase Requests' },
    { id: 'custody', label: 'Custody' },
    { id: 'requests', label: 'Requests' },
    { id: 'invoices', label: 'Invoices' },
    { id: 'contracts', label: 'Contracts & Tenders' },
    { id: 'budget', label: 'Budget' },
  ]);

  protected readonly summaries = computed(() => this.language() === 'ar' ? [
    { label: 'رصيد الموازنة المعتمد', value: '50 مليون ريال', trend: '28%', positive: false, icon: 'document' as const },
    { label: 'الرصيد الحر', value: '10 مليون ريال', trend: '28%', positive: false, icon: 'document' as const },
    { label: 'المبالغ المدفوعة', value: '15 مليون ريال', trend: '28%', positive: true, icon: 'document' as const },
    { label: 'الارتباطات', value: '20 مليون ريال', trend: '15%', positive: false, icon: 'wallet' as const },
    { label: 'الالتزامات', value: '5 مليون ريال', trend: '28%', positive: true, icon: 'approved' as const },
  ] : [
    { label: 'Approved budget balance', value: 'QAR 50 million', trend: '28%', positive: false, icon: 'document' as const },
    { label: 'Available balance', value: 'QAR 10 million', trend: '28%', positive: false, icon: 'document' as const },
    { label: 'Paid amounts', value: 'QAR 15 million', trend: '28%', positive: true, icon: 'document' as const },
    { label: 'Commitments', value: 'QAR 20 million', trend: '15%', positive: false, icon: 'wallet' as const },
    { label: 'Obligations', value: 'QAR 5 million', trend: '28%', positive: true, icon: 'approved' as const },
  ]);

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

  protected toggleLanguage(): void {
    const nextLanguage = this.language() === 'ar' ? 'en' : 'ar';
    this.language.set(nextLanguage);
    try {
      globalThis.localStorage?.setItem('finance-dashboard-language', nextLanguage);
    } catch {
      // Language switching still works when storage is unavailable.
    }
  }

  private getInitialLanguage(): 'ar' | 'en' {
    try {
      return globalThis.localStorage?.getItem('finance-dashboard-language') === 'en' ? 'en' : 'ar';
    } catch {
      return 'ar';
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
