import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { MoviesList } from './pages/movies-list/movies-list';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { MovieDetails } from './pages/movie-details/movie-details';


export const routes: Routes = [
  { path: '', component: Home },             
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'movies', component: MoviesList },  
  { path: 'movie/:id', component: MovieDetails },  
  { path: '**', redirectTo: '' }
];


