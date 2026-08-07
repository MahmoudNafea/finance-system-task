import { inject } from '@angular/core';
import type { ResolveFn } from '@angular/router';
import { DashboardService, type PurchaseOrdersLoadResult } from '../services/dashboard.service';

export const purchaseOrdersResolver: ResolveFn<PurchaseOrdersLoadResult> = () => {
  return inject(DashboardService).load();
};
