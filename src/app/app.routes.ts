import { Routes } from '@angular/router';
import { authenticationGuard } from './authentication/guards/authentication.guard';

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
    canActivate: [authenticationGuard],
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
