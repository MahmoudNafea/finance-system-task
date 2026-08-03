export type StatusTone = 'success' | 'warning' | 'info' | 'neutral' | 'purple' | 'danger';

export type DashboardDataTableKind = 'processes' | 'stocks';

export type ActivityTone = 'orange' | 'gray' | 'purple' | 'blue' | 'green';

export interface OperationRow {
  id: string;
  statement: string;
  products: string;
  notes: string;
  status: string;
  tone: StatusTone;
  requester: string;
  email: string;
  date: string;
  selected?: boolean;
}

export interface ContractRow {
  id: string;
  supplier: string;
  logo: string;
  logoClass: string;
  date: string;
  progress: number;
}

export interface ActivityItem {
  text: string;
  link: string;
  tone: ActivityTone;
}

export interface RequestRow {
  id: string;
  budgetTitle: string;
  budgetCode: string;
  statement: string;
  notes: string;
  status: string;
  tone: StatusTone;
  requester: string;
  email: string;
  date: string;
  selected?: boolean;
}

export interface ProcessRow {
  id: string;
  type: string;
  employee: string;
  email: string;
  duration: string;
  unit: string;
}

export interface StockRow {
  id: string;
  product: string;
  quantity: string;
  unit: string;
  minimum: string;
  maximum: string;
}
