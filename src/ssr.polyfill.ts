import * as domino from 'domino';

/**
 * This is a shim to run Angular SSR with 3rd parties that include direct access of Browser APIs at run time as well as in side effects.
 */

// This enables window access e.g.: window.document;
// As Angular's server-side polyfills do not include window usage, on a global level, but rather only isolated over Angular DI.
if (typeof global.window === 'undefined') {
  (global as any).window = (domino as any).createWindow('<!DOCTYPE html><p>Hello world</p>');
}

// This enables document access e.g.: document.createElement('div');
// As Angular's server-side polyfills do not include document usage, on a global level, but rather only isolated over Angular DI.
if (typeof global.document === 'undefined') {
  (global as any).document = ((global as any)?.window ?? (domino as any).createWindow('<!DOCTYPE html><p>Hello world</p>')).document;
}

