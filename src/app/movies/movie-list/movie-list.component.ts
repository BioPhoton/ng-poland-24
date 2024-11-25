import {Component, ElementRef, inject, input, OnInit, output, PLATFORM_ID} from '@angular/core';

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
    console.log('MovieListComponent on platform ', inject(PLATFORM_ID));
    this.evilClientSideReferenceOfBrowserApi();
    this.evilClientSideCallOfBrowserApi();
    this.evilWindowMediaMatch();
    // this.evilDocumentCookieMatch();
    this.evilWindowResizeObserver();


  }

  evilClientSideCallOfBrowserApi() {
    const d = document.createElement('div');
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

  evilDocumentCookieMatch() {
    console.log('Cookie match', document.cookie.match(/[^=]+/g));
  }

  evilWindowMediaMatch() {
    console.log('MediaMatch', window.matchMedia('(min-width: 768px)'));
  }

  evilWindowResizeObserver() {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        console.log('ResizeObserver', entry);
      }
    });

    observer.observe(document.body);
    observer.unobserve(document.body);
    observer.disconnect();
  }
}
