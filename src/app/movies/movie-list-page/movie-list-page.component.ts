import {Component} from '@angular/core';

import {TMDBMovieModel} from '../../shared/model/movie.model';
import {MovieListComponent} from '../movie-list/movie-list.component';
import response from '../../data/movies-mock.json';

@Component({
  selector: 'movie-list-page',
  template: `
    <h1>Top Rated</h1>
    <movie-list [movies]="movies" />
  `,
  standalone: true,
  imports: [MovieListComponent],
})
export class MovieListPageComponent {
  movies: TMDBMovieModel[] = response.results as unknown as TMDBMovieModel[];
}
