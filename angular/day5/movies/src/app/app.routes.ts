import { Routes } from '@angular/router';

import { NotFound } from './pages/not-found/not-found';
import { Register } from './pages/register/register';
import { MainLayout } from './layouts/main-layout/main-layout';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { Login } from './pages/login/login';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./pages/home/home').then((m) => m.Home) },
      {
        path: 'movies',
        loadComponent: () => import('./pages/movies-list/movies-list').then((m) => m.MoviesList),
      },
      {
        path: 'movie/:id',
        loadComponent: () =>
          import('./pages/movie-details/movie-details').then((m) => m.MovieDetails),
      },
    ],
  },
  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: 'signup',
        loadComponent: () => import('./pages/register/register').then((m) => m.Register),
      },
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login').then((m) => m.Login),
      },
    ],
  },

  { path: '404', component: NotFound },
  { path: '**', redirectTo: '/404' },
];
