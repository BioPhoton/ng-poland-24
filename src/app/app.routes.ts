import {Routes} from '@angular/router';
import {PrerenderListComponent} from './movies/list-prerender/prerender-list.component';
import {CsrListComponent} from './movies/list-csr/csr-list.component';
import {SsrListComponent} from './movies/list-ssr/ssr-list.component';
import {Perernder1ListComponent} from './movies/list-pr-1/perernder-1-list.component';
import {AppShellListComponent} from './movies/list-app-shell/app-shell-list.component';
import {Prerender2ListComponent} from './movies/list-pr-2/prerender-2-list.component';
import {SkipHydrationListComponent} from './movies/list-skip-hydration/skip-hydration-list.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'csr',
  },
  {
    path: 'csr',
    component: CsrListComponent,
  },

  {
    path: 'ssr',
    component: SsrListComponent,
  },
  {
    path: 'skip-hydration',
    component: SkipHydrationListComponent,
  },
  {
    path: 'prerender',
    component: PrerenderListComponent,
  },
  {
    path: 'app-shell',
    component: AppShellListComponent,
  },
  {
    path: 'pr-1',
    component: Perernder1ListComponent,
  },
  {
    path: 'pr-2',
    component: Prerender2ListComponent,
  }
];
