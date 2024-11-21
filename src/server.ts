import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express, {Request, NextFunction, RequestHandler} from 'express';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import "./ssr.polyfill";

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/**', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Middleware to delay a specific file
 */
function delaySpecificFile(matcher: string | string[] = '.js', delay = 2000) {
  return (req: Request, res: Response, next: NextFunction) => {
    const matchers = typeof matcher === "string" ? [matcher] : matcher;
    if (matchers.some(match => req.url.includes(match))) {
      console.log('delaying response for', req.url, `by ${delay}ms`);
      setTimeout(next, delay);
    } else {
      next();
    }
  }
}

app.use(delaySpecificFile(['component']) as unknown as RequestHandler);

/**
 * Serve static files from /browser
 */
app.get(
  '**',
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: 'index.html',
    setHeaders: (res) => {
      const headers = angularApp.getPrerenderHeaders(res.req);
      for (const [key, value] of headers) {
        res.setHeader(key, value);
      }
    }
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.get('**', (req, res, next) => {
  angularApp
    .render(req)
    .then((response) => {
      return response ? writeResponseToNodeResponse(response, res) : next()
    })
    .catch(next);
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * The request handler used by the Angular CLI (dev-server and during build).
 */
export const reqHandler = createNodeRequestHandler(app);
