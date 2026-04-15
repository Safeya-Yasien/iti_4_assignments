import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../../services/movie.service';
import { Movie } from '../../../models/movie.model';

@Component({
  selector: 'app-manage-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-movies.html',
})
export class ManageMovies implements OnInit {
  movies = signal<Movie[]>([]);

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    const data = this.movieService.getMovies();
    this.movies.set(data);
  }

  deleteMovie(id: number) {
    if (confirm('Are you sure you want to delete this movie?')) {
      const updatedMovies = this.movies().filter((m) => m.id !== id);
      this.movies.set(updatedMovies);
      console.log(`Movie with ID ${id} deleted locally.`);
    }
  }

  editMovie(movie: Movie) {
    console.log('Edit movie:', movie.title);
  }
}
