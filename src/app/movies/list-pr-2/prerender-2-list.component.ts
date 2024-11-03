import {Component} from '@angular/core';
import {TMDBMovieModel} from '../../shared/model/movie.model';
import {MovieListComponent} from '../movie-list/movie-list.component';
import response from '../../data/movies-mock.json';

@Component({
  selector: 'pr-2-page',
  template: `
    <h1>&#64;defer(hydrate on interaction)</h1>
    @defer(hydrate on interaction;) {
      <movie-list [movies]="movies"/>
    }
  `,
  standalone: true,
  imports: [MovieListComponent],
})
export class Prerender2ListComponent {
  movies: TMDBMovieModel[] = response.results as unknown as TMDBMovieModel[];
}
