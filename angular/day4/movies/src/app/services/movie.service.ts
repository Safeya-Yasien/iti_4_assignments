import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private movies: Movie[] = [
    {
      id: 1,
      title: 'Inception',
      year: 2010,
      description:
        'Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life.',
      image:
        'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
    },
    {
      id: 2,
      title: 'Interstellar',
      year: 2014,
      description:
        'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel.',
      image:
        'https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    },
    {
      id: 3,
      title: 'The Dark Knight',
      year: 2008,
      description:
        'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological tests.',
      image:
        'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
    },
    {
      id: 4,
      title: 'Oppenheimer',
      year: 2023,
      description:
        'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
      image: 'https://image.tmdb.org/t/p/w500/8Gxv2mYmUpe3BrU3SBuR8Z3RKyH.jpg',
    },
    {
      id: 5,
      title: 'Dune: Part Two',
      year: 2024,
      description:
        'Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.',
      image: 'https://image.tmdb.org/t/p/w500/1pdfvRfKi61oDRzqbxVvMoVFs6P.jpg',
    },
    {
      id: 6,
      title: 'Spider-Man: Across the Spider-Verse',
      year: 2023,
      description:
        'Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.',
      image: 'https://image.tmdb.org/t/p/w500/8Gxv2mYmUpe3BrU3SBuR8Z3RKyH.jpg',
    },
    {
      id: 7,
      title: 'The Godfather',
      year: 1972,
      description:
        'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      image: 'https://image.tmdb.org/t/p/w500/3bhkrjSTWv4nySjWQVvKC5bkpST.jpg',
    },
    {
      id: 8,
      title: 'Poor Things',
      year: 2023,
      description:
        'The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by a brilliant scientist.',
      image:
        'https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    },
  ];

  getMovies() {
    return this.movies;
  }

  getMovieById(id: number) {
    return this.movies.find((m) => m.id === id);
  }
}
