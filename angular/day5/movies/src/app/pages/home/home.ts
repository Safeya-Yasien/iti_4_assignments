import { Component, inject, OnInit } from '@angular/core';
import { Tmdb } from '../../services/tmdb';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  trendingMovies: any[] = [];
  popularMovies: any[] = [];
  featuredMovie: any;

  private tmdbService = inject(Tmdb);

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.tmdbService.getTrendingMovies().subscribe({
      next: (res: any) => {
        this.trendingMovies = res.results;
        this.featuredMovie = this.trendingMovies[0];
      },
      error: (err: any) => console.error(err),
    });

    this.tmdbService.getPopularMovies().subscribe({
      next: (res: any) => {
        this.popularMovies = res.results;
      },
      error: (err: any) => console.error(err),
    });
  }
}
