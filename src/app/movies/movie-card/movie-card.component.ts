import { UpperCasePipe } from '@angular/common';
import {
  Component,
  ElementRef,
  inject,
  input, model,
} from '@angular/core';
import { fromEvent } from 'rxjs';

import { TMDBMovieModel } from '../../shared/model/movie.model';
import { StarRatingComponent } from '../../ui/pattern/star-rating/star-rating.component';

@Component({
  selector: 'movie-card',
  standalone: true,
  imports: [StarRatingComponent, UpperCasePipe],
  template: `
    <div class="movie-card">
      <img
        class="movie-image aspectRatio-2-3"
        [alt]="movie().title"
        [src]="'https://image.tmdb.org/t/p/w342/'+movie().poster_path"
      />
      <div class="movie-card-content">
        <div class="movie-card-title">{{ movie().title | uppercase }}</div>
        <div class="movie-card-rating">
          <ui-star-rating [rating]="movie().vote_average" />
        </div>
      </div>
      <button
        class="favorite-indicator"
        [class.loading]="loading()"
        [class.is-favorite]="favorite()"
        (click)="favorite.set(!favorite())"
      >
        @if (favorite()) {
          I like it
        } @else {
          Please like me
        }
      </button>
    </div>
  `,
  styles: `
    :host.movie-card--hover {
      .movie-card {
        .movie-image {
          transform: scale(1);
          font-size: 20px;
        }

        box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.6);
      }
    }
  `,
})
export class MovieCardComponent {
  index = input.required<number>();
  movie = input.required<TMDBMovieModel>();
  loading = input(false);

  favorite = model(false);

  elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    fromEvent(this.elementRef.nativeElement, 'mouseenter').subscribe(() => {
      this.elementRef.nativeElement.classList.add('movie-card--hover');
    });

    fromEvent(this.elementRef.nativeElement, 'mouseleave').subscribe(() => {
      this.elementRef.nativeElement.classList.remove('movie-card--hover');
    });
  }

}
