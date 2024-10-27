import {Component} from '@angular/core';

import {TMDBMovieModel} from '../../shared/model/movie.model';
import {MovieListComponent} from '../movie-list/movie-list.component';
import response from '../../data/movies-mock.json';
import {MovieListPlaceholderComponent} from '../movie-list/movie-list.placeholder.component';

@Component({
  selector: 'pr-1-page',
  template: `
    <h1>&#64;defer(on interaction)</h1>
    @defer (on interaction) {
      <movie-list [movies]="movies"/>
    } @placeholder {
      <movie-list-placeholder></movie-list-placeholder>
    }
    <!-- <div class="no-movies">There are no movies to show.</div> -->
  `,
  standalone: true,
  imports: [MovieListComponent, MovieListPlaceholderComponent],
})
export class Perernder1ListComponent {
  movies: TMDBMovieModel[] = response.results as unknown as TMDBMovieModel[];
}
