import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { TMDBMovieModel } from '../shared/model/movie.model';
import { TMDBMovieDetailsModel } from '../shared/model/movie-details.model';
import { TMDBMovieGenreModel } from '../shared/model/movie-genre.model';

export const environment = {
  production: false,
  tmdbBaseUrl: 'https://api.themoviedb.org',
  apiV3: '3',
  apiV4: '4',
  tmdbApiKey: '3cfc6e1dd231bd1f2caa198e7317a6a4',
  tmdbApiReadAccessKey:
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2ZjNmUxZGQyMzFiZDFmMmNhYTE5OGU3MzE3YTZhNCIsInN1YiI6IjYwZWZiOTZlYTQ0ZDA5MDAyZDQ0ZjNlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nvvleDHS5FWTK9UbhKfeuW8L5w4hyjGHAphNtQJuYSY',
};

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  getMoviesByGenre(
    genre: TMDBMovieGenreModel['id'] = 1,
    page = 1,
    sortBy = 'popularity.desc',
  ): Observable<TMDBMovieModel[]> {
    return this.httpClient
      .get<{ results: TMDBMovieModel[] }>(
        `${environment.tmdbBaseUrl}/3/discover/movie`,
        {
          params: {
            with_genres: genre,
            page,
            sort_by: sortBy,
          },
        },
      )
      .pipe(map(({ results }) => results));
  }

  getMovieById(id: string): Observable<TMDBMovieDetailsModel> {
    return this.httpClient.get<TMDBMovieDetailsModel>(
      `${environment.tmdbBaseUrl}/3/movie/${id}`,
    );
  }
}
