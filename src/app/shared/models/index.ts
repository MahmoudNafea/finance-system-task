export interface BreadcrumbItem {
  label: string;
  url?: string;
  icon?: 'home';
}

export interface DonutChartItem {
  label: string;
  value: number;
  color: string;
}

export interface BarChartItem {
  label: string;
  base: number;
  top: number;
}

export interface SidebarNavigationItem {
  label: string;
  icon: string;
  badge?: string;
  children?: SidebarNavigationItem[];
}
