import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/login/login.page').then((component) => component.LoginPage),
    title: 'Finance System - Login',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
