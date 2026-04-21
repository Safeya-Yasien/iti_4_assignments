import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { MoviesList } from './pages/movies-list/movies-list';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'movies',
    component: MoviesList,
  },
  {
    path: 'movie/:id',
    component: Home,
  },
  { path: '404', component: NotFound },
  { path: '**', redirectTo: '/404' },
];
