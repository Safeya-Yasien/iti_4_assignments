import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { MoviesList } from './pages/movies-list/movies-list';
import { NotFound } from './pages/not-found/not-found';
import { Register } from './pages/register/register';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'signup',
    component: Register,
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
