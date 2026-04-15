import { Routes } from '@angular/router';

import { WebsiteLayout } from './layouts/website-layout/website-layout';
import { DashboardLayout } from './layouts/dashboard-layout/dashboard-layout';

export const routes: Routes = [
  {
    path: '',
    component: WebsiteLayout,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/website/home/home').then((m) => m.Home),
      },
      {
        path: 'movies',
        loadComponent: () =>
          import('./pages/website/movies-list/movies-list').then((m) => m.MoviesList),
      },
      {
        path: 'movie/:id',
        loadComponent: () =>
          import('./pages/website/movie-details/movie-details').then((m) => m.MovieDetails),
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/website/about/about').then((m) => m.About),
      },
    ],
  },

  {
    path: 'admin',
    component: DashboardLayout,
    children: [
      {
        path: 'manage-movies',
        loadComponent: () =>
          import('./pages/dashboard/manage-movies/manage-movies').then((m) => m.ManageMovies),
      },
    ],
  },
];
