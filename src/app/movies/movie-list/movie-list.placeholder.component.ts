import {Component} from '@angular/core';

@Component({
  selector: 'movie-list-placeholder',
  template: `
    <div class="movie-list-grid">
      @for (movie of arr; track movie.id) {
        <div class="movie-card">
          <img
            class="movie-image"
            alt="placeholder image"
            src="/assets/images/no_poster_available.jpg"
          />
          <div class="movie-card-content">

            <div class="movie-card-title">PLACEHOLDER</div>
            <div class="movie-card-rating">
              <div class="stars">
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star star-half">★</span>
                <span class="star star-empty">★</span>
                <span class="star star-empty">★</span>
              </div>
            </div>
          </div>
          <button
            class="favorite-indicator"
            (click)="
          $event.stopPropagation(); $event.preventDefault();
        "
          >
            Please like me
          </button>
        </div>
      }
    </div>
  `,
  standalone: true,
  imports: [],
})
export class MovieListPlaceholderComponent {
  arr = new Array(20)
    .fill(0)
    .map(((_, index) => ({id: index, title: "placeholder"})));
}
