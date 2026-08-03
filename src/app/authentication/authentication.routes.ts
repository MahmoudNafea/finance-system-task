import { Routes } from '@angular/router';

export const AUTHENTICATION_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./login/login.page').then((component) => component.LoginPage),
    title: 'Finance System - Login',
  },
];
