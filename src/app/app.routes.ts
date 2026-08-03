import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./authentication/authentication.routes').then(
        (routes) => routes.AUTHENTICATION_ROUTES,
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.routes').then(
        (routes) => routes.DASHBOARD_ROUTES,
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
