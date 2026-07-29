import { DashboardPage } from './pages/dashboard/dashboard.page';
export const routes = [
    {
        path: '',
        loadComponent: () => import('./pages/login/login.page').then((component) => component.LoginPage),
        title: 'Finance System - Login',
    },
    {
        path: 'dashboard',
        component: DashboardPage,
        title: 'Finance System - Dashboard',
    },
    {
        path: '**',
        redirectTo: '',
    },
];
