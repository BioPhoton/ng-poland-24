import {Component} from '@angular/core';

import {TMDBMovieModel} from '../../shared/model/movie.model';
import {MovieListComponent} from '../movie-list/movie-list.component';
import response from '../../data/movies-mock.json';

@Component({
  selector: 'prerender-page',
  template: `
    <h1>Prerenderd</h1>
    <movie-list [movies]="movies" />
  `,
  standalone: true,
  imports: [MovieListComponent],
})
export class PrerenderListComponent {
  movies: TMDBMovieModel[] = response.results as unknown as TMDBMovieModel[];
}
