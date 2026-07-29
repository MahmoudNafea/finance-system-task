export type DashboardLanguage = 'ar' | 'en';

export interface DashboardTranslations {
  direction: 'rtl' | 'ltr';
  content: Readonly<Record<string, string>>;
  header: {
    systemName: string;
    department: string;
    search: string;
    searchAriaLabel: string;
    userName: string;
    userDepartment: string;
    quickActions: string;
    calendar: string;
    messages: string;
    notifications: string;
    darkMode: string;
    lightMode: string;
    languageButton: string;
    languageButtonAriaLabel: string;
    breadcrumb: string;
    home: string;
    purchases: string;
    newPurchaseRequest: string;
  };
  page: {
    content: string;
    nextCards: string;
    previousCards: string;
    budgetSummary: string;
    insights: string;
    recentData: string;
    contracts: string;
  };
  tabs: ReadonlyArray<{ id: string; label: string }>;
  summaries: ReadonlyArray<{
    label: string;
    value: string;
    trend: string;
    positive: boolean;
    icon: 'document' | 'wallet' | 'approved';
  }>;
}
