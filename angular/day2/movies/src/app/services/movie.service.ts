import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private movies: Movie[] = [
{ 
      id: 1, 
      title: 'Inception', 
      year: 2010, 
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology.', 
      image: 'https://image.tmdb.org/t/p/w500/oYuLEt3ZVCq1mCq97S97X3qIuMG.jpg' 
    },
    { 
      id: 2, 
      title: 'Interstellar', 
      year: 2014, 
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity survival.', 
      image: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlSv7rP.jpg' 
    },
    { 
      id: 3, 
      title: 'The Dark Knight', 
      year: 2008, 
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham.', 
      image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDp9QmSJuaxms7oYxS5.jpg' 
    },
    { 
      id: 4, 
      title: 'Oppenheimer', 
      year: 2023, 
      description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.', 
      image: 'https://image.tmdb.org/t/p/w500/8Gxv2mYmUpe3BrU3SBuR8Z3RKyH.jpg' 
    }];

  getMovies() { return this.movies; }

  getMovieById(id: number) {
    return this.movies.find(m => m.id === id);
  }
}