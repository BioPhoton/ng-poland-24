import {Component} from '@angular/core';

import {TMDBMovieModel} from '../../shared/model/movie.model';
import {MovieListComponent} from '../movie-list/movie-list.component';
import response from '../../data/movies-mock.json';

@Component({
  selector: 'crs-page',
  template: `
    <h1>CSR</h1>
    @defer (hydrate on interaction;) {
      <movie-list [movies]="movies" />
    } @placeholder {
      <div class="no-movies">
        There are no movies to show.
      </div>
    }
  `,
  standalone: true,
  imports: [MovieListComponent],
})
export class CsrListComponent {
  movies: TMDBMovieModel[] = response.results as unknown as TMDBMovieModel[];
}
