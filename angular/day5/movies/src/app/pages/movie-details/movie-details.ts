import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tmdb } from '../../services/tmdb';
import { CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-details',
  imports: [CurrencyPipe, DecimalPipe, DatePipe],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css',
})
export class MovieDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private tmdbService = inject(Tmdb);

  movie = signal<Movie | null>(null);
  isLoading = signal(true);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchMovieDetails(id);
    }
  }

  private fetchMovieDetails(id: string) {
    this.tmdbService.getMovieDetails(id).subscribe({
      next: (res: Movie) => {
        this.movie.set(res);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error fetching movie details:', err);
        this.isLoading.set(false);
      },
    });
  }
}
