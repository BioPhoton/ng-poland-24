import {Component, input, OnInit, output} from '@angular/core';

import {TMDBMovieModel} from '../../shared/model/movie.model';
import {MovieCardComponent} from '../movie-card/movie-card.component';

@Component({
  selector: 'movie-list',
  standalone: true,
  imports: [MovieCardComponent],
  template: ` @for (movie of movies(); track movie.id) {
    <movie-card
      [index]="$index"
      [loading]="favoritesLoading().has(movie.id)"
      [movie]="movie"
    />
  } @empty {
    <div class="no-movies">
      There are no movies to show
    </div>
  }
  `,
  styles: `
    :host {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(10rem, 35rem));
      gap: 4rem 2rem;
      place-content: space-between space-evenly;
      align-items: start;
      position: relative;
    }
  `,
})
export class MovieListComponent {
  movies = input.required<TMDBMovieModel[]>();
  favoritesLoading = input(new Set<string>());
  constructor() {
    this.evilClientSideReferenceOfBrowserApi()
    this.evilClientSideCallOfBrowserApi()
  }

  evilClientSideCallOfBrowserApi() {
    const  d = document.createElement('div');
    d.addEventListener('click', () => {
      console.log('Click event on div');
    });
    document.body.appendChild(d);
    d.click();
  }
  evilClientSideReferenceOfBrowserApi() {
    console.info('💧MovieListComponent hydrated');
    console.log('Bad WINDOW usage', window);
    console.log('Bad DOCUMENT usage', document);
  }
}
