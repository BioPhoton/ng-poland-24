import {Routes} from '@angular/router';
import {MovieListPageComponent} from './movies/movie-list-page/movie-list-page.component';
import {MovieUpcomingPageComponent} from './movies/movie-upcoming-page/movie-upcoming-page.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list/upcoming',
  },
  {
    path: 'list/top-rated',
    component: MovieListPageComponent,
  },
  {
    path: 'list/upcoming',
    component: MovieUpcomingPageComponent,
  }
];
