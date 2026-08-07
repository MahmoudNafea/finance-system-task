import { Routes } from '@angular/router';
import { purchaseOrdersResolver } from './resolvers/purchase-orders.resolver';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dashboard/dashboard').then(
        (component) => component.Dashboard,
      ),
    resolve: {
      purchaseOrders: purchaseOrdersResolver,
    },
    title: 'Finance System - Dashboard',
  },
];
