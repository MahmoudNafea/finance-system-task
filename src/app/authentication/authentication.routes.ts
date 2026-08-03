import { Routes } from '@angular/router';

export const AUTHENTICATION_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./login/login').then((component) => component.Login),
    title: 'Finance System - Login',
  },
];
