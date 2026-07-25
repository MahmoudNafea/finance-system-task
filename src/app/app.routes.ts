import { Routes } from '@angular/router';
import { DashboardPage } from './pages/dashboard/dashboard.page';

export const routes: Routes = [
  // {
  //   path: '',
  //   loadComponent: () =>
  //     import('./pages/login/login.page').then((component) => component.LoginPage),
  //   title: 'Finance System - Login',
  // },
  {
    path: '',
    component: DashboardPage,
    title: 'Finance System - Dashboard',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
