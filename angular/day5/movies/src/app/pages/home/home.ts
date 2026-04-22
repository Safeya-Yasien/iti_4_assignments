import { Component, inject, OnInit } from '@angular/core';
import { Tmdb } from '../../services/tmdb';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Movie, MovieResponse } from '../../models/movie.model';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  trendingMovies: Movie[] = [];
  popularMovies: Movie[] = [];
  featuredMovie: Movie | null = null;

  private tmdbService = inject(Tmdb);

  ngOnInit() {
    this.loadData();
  }

  isLoading = true;
  loadData() {
    this.tmdbService.getTrendingMovies().subscribe({
      next: (res: MovieResponse) => {
        this.trendingMovies = res.results;
        this.featuredMovie = this.trendingMovies?.[0] ?? null;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      },
    });

    this.tmdbService.getPopularMovies().subscribe({
      next: (res: MovieResponse) => {
        this.popularMovies = res.results;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      },
    });
  }
}
