import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { MovieCard } from '../../../components/movie-card/movie-card';
import { Testimonials } from '../../../components/testimonials/testimonials';
import { RouterLink } from '@angular/router';
import { Movie } from '../../../models/movie.model';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, MovieCard, Testimonials],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  popularMovies = signal<Movie[]>([]);

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    const allMovies = this.movieService.getMovies();

    this.popularMovies.set(allMovies.slice(0, 4));
  }
}
