import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'app-shell',
    renderMode: RenderMode.AppShell
  },
  {
    path: 'ssr',
    renderMode: RenderMode.Server
  },
  {
    path: 'prerender',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'csr',
    renderMode: RenderMode.Client
  },
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
