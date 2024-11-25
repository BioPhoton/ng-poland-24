import {Component, ElementRef, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {TMDBMovieModel} from '../../shared/model/movie.model';
import {MovieListComponent} from '../movie-list/movie-list.component';
import response from '../../data/movies-mock.json';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'skip-hydration-page',
  template: `
    <h1>ngSkipHydration</h1>
    <movie-list id="skip-hydration-container" ngSkipHydration [movies]="movies"/>
  `,
  standalone: true,
  imports: [MovieListComponent],
})
export class SkipHydrationListComponent implements OnInit {
  movies: TMDBMovieModel[] = response.results as unknown as TMDBMovieModel[];
  platformId = inject(PLATFORM_ID);
  elem = inject(ElementRef).nativeElement;
  doc = inject(DOCUMENT);

  ngOnInit(): void {
    // server only
    if(this.platformId === 'server') {
      const child = this.doc.createElement('div');
      child.textContent = 'This text is added at SSR time and doe to ngSkipHydration it will get deleted on the client and is not repainted by the client code';
      // insert child at top
      const hCont = this.elem.querySelector('#skip-hydration-container');
      hCont.insertBefore(child, hCont.firstChild);
      console.info('💧SkipHydrationListComponent hydrated');
    }
  }
}
