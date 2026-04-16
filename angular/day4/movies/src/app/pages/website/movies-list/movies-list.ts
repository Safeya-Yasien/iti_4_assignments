import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../models/movie.model';
import { MovieService } from '../../../services/movie.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './movies-list.html',
})
export class MoviesList implements OnInit {
  movies: Movie[] = [];
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movies = this.movieService.getMovies();
    console.log(this.movies);
  }
}
