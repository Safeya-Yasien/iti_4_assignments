import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Tmdb {
  private readonly apiKey = (environment as any).tmdbApiKey;
  private readonly baseUrl = (environment as any).apiUrl;

  constructor(private http: HttpClient) {}

  getTrendingMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/movie/week?api_key=${this.apiKey}`);
  }

  getPopularMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/popular?api_key=${this.apiKey}`);
  }

  getMovieDetails(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }
}
