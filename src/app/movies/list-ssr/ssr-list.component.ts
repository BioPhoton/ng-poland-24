import {Component} from '@angular/core';
import {TMDBMovieModel} from '../../shared/model/movie.model';
import {MovieListComponent} from '../movie-list/movie-list.component';
import response from '../../data/movies-mock.json';

@Component({
  selector: 'ssr-page',
  template: `
    <h1>SSR</h1>
    <movie-list id="ssr-list" [movies]="movies"/>
  `,
  standalone: true,
  imports: [MovieListComponent],
})
export class SsrListComponent {
  movies: TMDBMovieModel[] = response.results as unknown as TMDBMovieModel[];
  /*
    platformId = inject(PLATFORM_ID);
    elem = inject(ElementRef).nativeElement;
    doc = inject(DOCUMENT);

    ngOnInit(): void {
      // server only
      if(this.platformId === 'server') {
        const child = this.doc.createElement('div');
        child.textContent = 'This text is added at SSR time and will remind after hydration';
        // insert child at top
        const hCont = this.elem.querySelector('#ssr-list');
       // hCont.insertBefore(child, hCont.firstChild);
      }
   */
}
