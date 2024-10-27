import {Component} from '@angular/core';
import {TMDBMovieModel} from '../../shared/model/movie.model';
import {MovieListComponent} from '../movie-list/movie-list.component';
import response from '../../data/movies-mock.json';

@Component({
  selector: 'ssr-page',
  template: `
    <h1>SSR</h1>
    <movie-list [movies]="movies"/>
  `,
  standalone: true,
  imports: [MovieListComponent],
})
export class SsrListComponent {
  movies: TMDBMovieModel[] = response.results as unknown as TMDBMovieModel[];
}
